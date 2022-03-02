import styles from "../styles/BlogPosts.module.css"
import Head from "next/head";
import Link from "next/link";
import { sanityClient, urlFor } from "../lib/sanity";

const postsQuery = `*[_type == "post" && references('lipsticks')]{
  _id,
  title,
  slug,
  mainImage,
  summary,
}`;

export default function Products_News_Others ( {posts} )  {
    return(
        <>
        <Head>
        <title>Lipsticks brand reviews, And which best lipsticks for you</title>
      <meta name="description" content="Lipsticks brand reviews, lipsticks tips and trick, lipstick brank history and teir best products"/>
        </Head>
        {/*heading area*/}
        <div className={styles.heading1}> <h1>Drive Safely</h1></div>
         
         {/*Blog Card and category*/}
         <div className={styles.container}>
             {/* blog */}
             <div className={styles.blog}>
            <div className={styles.h2heading}><h2>Blogs</h2></div>
             <div className={styles.blog_container}>
             {posts?.length > 0 &&
          posts.map((post) => (
      <div className={styles.card}>
        <div className={styles.card_header}>
          <img src={urlFor(post.mainImage).url()} alt={post.title} />
        </div>
        <div className={styles.card_body}>
          <h4>{post.title}</h4>
          <p>
            {post.summary}
          </p>
          <Link href={`${post.slug.current}`} passHref>
            <div className={styles.read}><h2> Read More </h2></div>
            </Link>
        </div>
      </div>
      ))}
    </div>
    </div>
    {/*categories Area*/}
    <div className={styles.category_heading}> 
    <h2>Categories</h2></div>
    </div>
         </>
    )
}
export async function getStaticProps() {
  const posts = await sanityClient.fetch(postsQuery);
  return { props: { posts } };
}
