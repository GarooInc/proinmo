const MetaTags = ({ title, description, image }) => (
    <>
      <meta property="og:title" content={title || 'Proinmo'} />
      <meta property="og:description" content={description || 'Ideas que generan proyectos'} />
      <meta property="og:image" content={image || '/assets/images/biglogo03.png'} />
    </>
  );
  
  export default MetaTags;
  