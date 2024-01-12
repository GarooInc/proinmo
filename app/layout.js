import "@/styles/globals.css";
import NavBar from "@/components/NavBar/NavBar";

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
                <NavBar />
                {children}
            </main>
        </body>
    </html>
  )
}

export default RootLayout