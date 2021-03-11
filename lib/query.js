export const query = `
  query AppQuery {
    blogPosts: allPosts {
      id
      title
      content
      heroimage {
        responsiveImage(sizes: "(min-width: 1024px) calc(30vw - 128px), (min-width: 768px) calc(50vw - 100px), calc(100vw - 70px)", imgixParams: {ar: "2:1", fit: crop, crop: focalpoint, auto: format}) {
          aspectRatio
          base64
          height
          src
          srcSet
          width
          alt
          sizes
          title
        }
      }
    }
  }
`;