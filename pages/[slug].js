import { useRouter } from "next/router"
import Head from "next/head"
import styles from "../styles/Postpage.module.css"
import {
    sanityClient,
    urlFor,
    usePreviewSubscription,
    PortableText,
  } from "../lib/sanity";
  
  const postQuery = `*[_type == "post" && slug.current == $slug][0]{
        title,
        slug,
        mainImage,
        body,
        summary,
      }`;
  
  export default function OnePost({ data, preview }) {
    if (!data) return <div>Loading...</div>;
    const { data: post } = usePreviewSubscription(postQuery, {
      params: { slug: data.post?.slug.current },
      initialData: data,
      enabled: preview,
    });

      const router = useRouter()

    return (
      <>
      <Head>
      <meta name="title" content={post.title}/>
      <meta name="description" content={post.summary}/>

      </Head>
      <div className={styles.container}>
      <article className={styles.post}>
        <main className={styles.content}>
        <div><h1>{post.title}</h1></div>
          <figure className={styles.image}>
          <img src={urlFor(post?.mainImage).url()} alt={post.title} />
          </figure>
          <div className={styles.breakdown}>
            <PortableText
              blocks={post?.body}
              className={styles.body}
            />
          </div>
        </main>
        <div className={styles.back}><button onClick={() => router.back()}>Go Back</button></div>
      </article>
      {/*categories Area*/}
    <div className={styles.category_heading}> 
    <h2>Categories</h2></div>
    </div>
  </>
    );
  }
  
  export async function getStaticPaths() {
    const paths = await sanityClient.fetch(
      `*[_type == "post" && defined(slug.current)]{
        "params": {
          "slug": slug.current
        }
      }`
    );
  
    return {
      paths,
      fallback: true,
    };
  }
  
  export async function getStaticProps({ params }) {
    const { slug } = params;
    const post = await sanityClient.fetch(postQuery, { slug });
    return { props: { data: { post }, preview: true } };
  }