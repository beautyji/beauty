import { GetServerSideProps } from "next";
import { SitemapStream, streamToPromise } from "sitemap";
import { createGzip } from "zlib";
import {sanityClient} from "../lib/sanity";

const Sitemap = () => {
  return <div>Should not be navigated trough via next Link. Use standard a href.</div>;
};
export default Sitemap;

let sitemap: Buffer | null = null;



const queryAllPosts = `*[_type == "post" && slug.current != ''] {
  'slug': slug.current
} | order(_createdAt desc)`;

const mergedQuery = `
{
  "posts": ${queryAllPosts},
}
`;

interface IData {
  posts: [{ slug: string }];
}

const addUrls = async (smStream: SitemapStream) => {
  const data: IData = await sanityClient.fetch<IData>(mergedQuery);
  const postSlugs = data.posts.map((post) => post.slug);
  for (const slug of postSlugs) {
    smStream.write({ 
      url: `/${slug}`,
      changefreq: "daily",
      priority: 0.9,
  });
  }
};

export const getServerSideProps: GetServerSideProps = async ({ res, req }) => {
  if (!req || !res) {
    return {
      props: {},
    };
  }
  res.setHeader("Content-Type", "application/xml");
  res.setHeader("Content-Encoding", "gzip");

  // If our sitemap is cached, we write the cached sitemap, no query to the CMS.
  if (sitemap) {
    res.write(sitemap);
    res.end();
    return {
      props: {},
    };
  }
  const smStream = new SitemapStream({ hostname: `https://${req.headers.host}/` });
  const pipeline = smStream.pipe(createGzip());

  try {
    await addUrls(smStream);
    smStream.end();
    const resp = await streamToPromise(pipeline);

    // cache the sitemap response (cache will be gone on next build.
    // This cache is only useful if your content is static, and you must build the next app on every content change in the cms
    sitemap = resp;

    res.write(resp);
    res.end();
  } catch (error) {
    console.log(error);
    res.statusCode = 500;
    res.write("Could not generate sitemap.");
    res.end();
  }

  return {
    props: {},
  };
};