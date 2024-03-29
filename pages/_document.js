import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
    render() {
        return (
            <Html>
                <Head>
                    {/* <link rel="preconnect" href="https://fonts.googleapis.com"/>
                        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
                            <link href="https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@100;300;400;500&family=Poppins:wght@100;300&family=Raleway:wght@300;400;600&display=swap" rel="stylesheet"/> */}
                 
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