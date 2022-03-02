import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import Contact from "../components/ContactForm";
import styles from '../styles/Home.module.css'
import { sanityClient, urlFor } from "../lib/sanity";


const postsQuery = `*[_type == "post"][0..8]{
  _id,
  title,
  slug,
  mainImage,
  summary,
}`;

export default function Home({posts}) {
  return (
    <>
    <Head>
      <title>Beauty Secret Shop we care about your beauty</title>
      <meta name="description" content="Beauty Secret Shop Your Beauty Partner For Beauty Tips, Beauty Tricks, Products reviews, Product Details And More So Stay Connect."/>
    </Head>
    <div>
    <div className={styles.div}>
      <div className={styles.content}>
        <h1><strong>Beauty Secret Shop</strong></h1>
        <p>Your Beauty Is Important For Us</p>
          <p>Beauty Secret Shop will provide best tips tricks for you to grom in your life. And provide you best product reviews, details and more.</p>
          <p>So, stay connected with Beauty Secret Shop💖</p>
      </div>
    </div>
      
      <h2 className={styles.h2}>Our Latest Posts</h2>
    
    
    <div className={styles.topics}>
                   {/* blog */}
                   
             
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

    
    <Contact/>
    </div>
    
    </>
  )
}
export async function getStaticProps() {
  const posts = await sanityClient.fetch(postsQuery);
  return { props: { posts } };
}
