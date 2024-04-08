import "@/styles/globals.css";
import Footer from "@/components/Footer/Footer";
import Script from "next/script";
const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_MEASUREMENT_ID;

export const metadata = {
    title: 'Proinmo',
    description: 'Ideas que generan proyectos',
    url: 'proinmo.com',
    image: '/assets/images/biglogo03.png',
}

const RootLayout = ({children}) => {
  return (
    <html lang="es">
        <head>
            <Script
            src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
            strategy="afterInteractive"
            />
            <Script id="google-analytics" strategy="afterInteractive">
            {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){window.dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${GA_MEASUREMENT_ID}');
            `}
            </Script>
            <title>{metadata.title}</title>
            <link rel="icon" type="image/png+xml" href="/assets/images/biglogo03.png" />
            <meta name="description" content={metadata.description} />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <meta property="og:title" content={metadata.title} />
            <meta property="og:description" content={metadata.description} />
            <meta property="og:image" content={metadata.image} />
            <meta property="og:url" content={metadata.url} />
            <meta name="keywords" content="proyectos, propiedad inmobiliaria, Guatemala, "></meta>            
        </head>
        <body>
            <main className='app'>
                {children}
                <Footer />
            </main>
        </body>
    </html>
  )
}

export default RootLayout