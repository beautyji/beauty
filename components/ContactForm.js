import emailjs from 'emailjs-com';
import { useState } from 'react';
import styles from '../styles/Contact.module.css'



const Result = () => {
  return(
    <p>You message has been send successfully. We will contact you soon thank you.</p>
  )
}


export default function Contact() {
  const [result, showResult] = useState(false);
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_vvoy5kl', 'template_u87pfef', e.target, 'user_i0ApSK8BWvu-usjk4')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset();
      showResult(true);
  };
  setTimeout(()=>{
    showResult(false)
  }, 3000);
 

  return (
      <>  
      <div>
      <div className={styles.h2}>
                <h2>Contact Us</h2>
                </div>
      <form className={styles.main} onSubmit={sendEmail}>
              <div className={styles.formWord}>
                <label> Name
                <br/>
                <input className={styles.input100} type="text" name="Name" required />
                </label>
                <label>Phone Number
                <br/>
                <input className={styles.input100} type="text" name="phone" />
                </label>
                <label>Enter Email
                <br/>
                <input className={styles.input100} type="text" name="email" required />
                </label>
              </div>
              <div className={styles.formWord}>
                <label>Message
                <br/>
                <textarea className={styles.text} name="message" required></textarea>
                </label>
                <div className={styles.btn}>
                <button type="submit">Send Mail</button>
                </div>

                <div className={styles.row}>{result ? <Result/> : null}</div>
              </div>
              <div className={styles.note}>
                <p><strong>Note:</strong>  leave us a message for any query. We like to solve your problems. We will contact you in 24 hours.</p>
              </div>
               <div className={styles.thanks}> <p><strong>Thank You💖</strong></p></div>
            </form>
            </div>
            </>
  );
}