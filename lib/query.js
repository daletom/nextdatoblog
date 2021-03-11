export const query = `
  query AppQuery {
    blogPosts: allPosts {
      id
      title
      content
      heroimage {
        responsiveImage(imgixParams: {fit: crop, w: 350, h: 175, auto: format}) {
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