import { Head, Html, Main, NextScript } from 'next/document'

export default function Document(props) {
    return (
        <Html lang="en">
            <Head>
                <link
                    rel="preconnect"
                    href="https://fonts.googleapis.com"
                />
                <link
                    rel="preconnect"
                    href="https://fonts.gstatic.com"
                />
                <link
                    rel="stylesheet"
                    href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap"
                />
                <link
                    rel="stylesheet"
                    href="https://fonts.googleapis.com/css?family=Roboto+Mono|Roboto+Slab|Roboto:300,400,500,700&display=optional"
                />
                <link
                    rel="apple-touch-icon"
                    sizes="180x180"
                    href="https://www.recursoiglesia.com/apple-touch-icon.png"
                />
                <link
                    rel="icon"
                    href="https://www.recursoiglesia.com/favicon.ico"
                />
                <link
                    rel="icon"
                    type="image/png"
                    sizes="32x32"
                    href="https://www.recursoiglesia.com/favicon-32x32.png"
                />
                <link
                    rel="icon"
                    type="image/png"
                    sizes="16x16"
                    href="https://www.recursoiglesia.com/favicon-16x16.png"
                />
                <meta
                    name="theme-color"
                    content="#111827"
                />
            </Head>
            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    )
}