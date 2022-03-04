import styles from "../styles/About.module.css"
import Image from 'next/image'
import Head from 'next/head'
const About = () => {
    return(
        <>
        <Head>

        <title>About Page Read To Know About Beauty Secret Shop</title>
      <meta name="description" content="Beauty Secret Shop about us page here you will why it is created what is the goal behind the Beauty Secret Shop and it can help you."/>

        </Head>
<div className={styles.z}>
<div className={styles.h1}>
<h1>About Us Page Of Beauty Secret Shop</h1>
</div>

        <div className={styles.main}>
            <div className={styles.content}>
    <h2 >Welcome To <span>Beauty Secret Shop 👧 </span></h2>
<p>I will keep posting more important posts on my Website for all of you. Please give your support and love.</p>
<p>Welcome to beauty secret shop, your number one source for all things like beauty tips, tricks, products reviews, and details. We’re dedicated to providing you the very best of product knowledge, with an emphasis on best beauty products, best beauty parlors, and beauty hacks for you.

Founded in 2021 by Mrs. Imran , beauty secret shop has come a long way from its beginnings. When Mrs. Imran first started out, her passion for to provide best information to the people about beauty products.

We hope you enjoy our products as much as we enjoy offering them to you. If you have any questions or comments, please don’t hesitate to contact us.

Sincerely,

Mrs. Imran</p>
<p>Thanks For Visiting Our Site
<span className={styles.red}> Have a nice day 💖</span></p>
</div>
</div>
</div>
</>
    )
}
export default About
