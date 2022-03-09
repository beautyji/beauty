import { useRouter } from "next/router"
import Head from "next/head"
import styles from "../styles/Postpage.module.css"
import React, { useState, useEffect } from 'react';
import * as fs from 'fs';
  

  
const Slug = (props) => {
  function createMarkup(c) {
    return { __html: c };
  }
  const [blog, setBlog] = useState(props.myBlog);

      const router = useRouter()

    return (
      <>
      <Head>
      <meta name="title" content={blog && blog.title}/>
      <meta name="description" content={blog && blog.metadesc}/>
      

      </Head>
      <div className={styles.container}>
      <article className={styles.post}>
        <main className={styles.content}>
        <div><h1>{blog && blog.title}</h1></div>
          {/* <figure className={styles.image}> */}
          {/* <img src={urlFor(post?.mainImage).url()} alt={blog && blog.title} /> */}
          {/* </figure> */}
          <div className={styles.breakdown}>
          {blog && <div className={styles.body} dangerouslySetInnerHTML={createMarkup(blog.content)}></div>}
          </div>
        </main>
        <div className={styles.back}><button onClick={() => router.back()}>Go Back</button></div>
      </article>
    </div>
  </>
    );
  }
  
  export async function getStaticPaths() {
    let allb = await fs.promises.readdir(`blogdata`)
    allb = allb.map((item)=>{
      return { params: { slug: item.split(".")[0]} }
    })
    console.log(allb)
    return {
      paths: allb,
      fallback: true // false or 'blocking'
    };
  }
  
  export async function getStaticProps(context) {
    const { slug } = context.params;
  
  
    let myBlog = await fs.promises.readFile(`blogdata/${slug}.json`, 'utf-8')
  
    return {
      props: { myBlog: JSON.parse(myBlog) }, // will be passed to the page component as props
    }
  }
  export default Slug;