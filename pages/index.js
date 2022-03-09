import Head from 'next/head'
import Contact from "../components/ContactForm";
import styles from '../styles/Home.module.css'


const main = () => {
  
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
      
      <h2 className={styles.h2}>About Us</h2>
      <div className={styles.content}>
        <p>
        Welcome to beauty secret shop, your number one source for all things like beauty tips, tricks, products reviews, and details. We’re dedicated to providing you the very best of product knowledge, with an emphasis on best beauty products, best beauty parlors, and beauty hacks for you.

Founded in 2021 by Mrs. Imran , beauty secret shop has come a long way from its beginnings. When Mrs. Imran first started out, her passion for to provide best information to the people about beauty products.

We hope you enjoy our products as much as we enjoy offering them to you. If you have any questions or comments, please don’t hesitate to contact us.
        </p>
        </div>
        <h2 className={styles.h2}>Our Main Topics</h2>
        <div className={styles.content}>
          <p>
            Our Main Focus is to provide the brand histories and their best products and and they acutually providing. How this brands can help you to increase thier beauty and is it good to use their products.
            </p>
            <p>
              We mainly focusing on Cosmetics, Salons, And brand reviews and also provide the tips and tricks to increase your beauty and just little things can help you to inhance your beauty.
              So saty connect with us you Beauty Partner Beauty secret Shop💖
            </p>
            </div>

    
    
    <Contact/>
    </div>
    
    </>
  )
}


export default main;
