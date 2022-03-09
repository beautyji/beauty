import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import styles from "../styles/Home.module.css"

import * as fs from 'fs';
// import div from 'react-infinite-scroll-component';

// Step 1: Collect all the files from blogdata directory
// Step 2: Iterate through the and Display them

const Blog = (props) => {
  const [blogs, setBlogs] = useState(props.allBlogs);
  const [count, setCount] = useState(2)

  const fetchData = async () => {
    let d = await fetch(`http://localhost:3000/api/blogs/?count=${count + 26}`)
    setCount(count + 26)
    let data = await d.json()
    setBlogs(data)
  };

  return <div className={styles.container}>
    <main>
        <h2 className={styles.h2}>Our Blogs</h2>
      <div
        dataLength={blogs.length} //This is important field to render the next data
        next={fetchData}
        className={styles.topics}
        hasMore={props.allCount !== blogs.length}
        loader={<h4>Loading...</h4>}
        endMessage={
          <p style={{ textAlign: 'center' }}>
            <b>Yay! You have seen it all</b>
          </p>
        }
      >
        {blogs.map((blogitem) => {
          return <div className={styles.card} key={blogitem.slug}>
              <h3 className={styles.blogItemh3}>{blogitem.title}</h3>
            <p className={styles.blogItemp}>{blogitem.metadesc.substr(0, 140)}...</p>
            <Link href={`/${blogitem.slug}`} passHref><div className={styles.read}><h2>Read More</h2></div></Link>
          </div>
        })}
      </div>
    </main>
  </div>
};


export async function getStaticProps(context) {
  let data = await fs.promises.readdir("blogdata");
  let allCount = data.length;
  let myfile;
  let allBlogs = [];
  for (let index = 0; index < 26; index++) {
    const item = data[index];
    myfile = await fs.promises.readFile(('blogdata/' + item), 'utf-8')
    allBlogs.push(JSON.parse(myfile))
  }

  return {
    props: { allBlogs, allCount }, // will be passed to the page component as props
  }
}

export default Blog;
