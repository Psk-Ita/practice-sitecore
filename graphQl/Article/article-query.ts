import MEDIA_QUERY from "../Common/media-query";

export const ARTICLE_QUERY = `
  id
  Title: title
  Articles: article {
    __typename
    ... on Article{
      id
      title
      abstract
      Cover: image {
        results {
          ${MEDIA_QUERY}
        }
      }
    }
  }
  Cover: image {
      results {
          ${MEDIA_QUERY}
      }
  }
`

export const ALL_ARTICLE_QUERY = `{ 
    data: allArticle
    {
      total
      __typename
      ... on Article
      results {
        ${ARTICLE_QUERY}
      }
    }
  }
`;
