import Document, { Html, Head, Main, NextScript } from 'next/document'


class MyDocument extends Document {
  
    render() {
      return (

        <Html lang="en">
          <Head>
          <link rel = "icon" href = 
            "/img/logo2.png" 
        type = "image/x-icon"/>
          </Head>
          <body>
            <Main />
            <NextScript />
          </body>
        </Html>

      )
    }
  }
  
  export default MyDocument