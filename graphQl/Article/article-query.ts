import MEDIA_QUERY from "../Common/media-query";

export const ARTICLE_QUERY = `
  id
  title
  article {
    __typename
    ... on Article {
      id
      title
      abstract
      cover {
        results {
          ${MEDIA_QUERY}
        }
      }
    }
  }
  cover {
      results {
          ${MEDIA_QUERY}
      }
  }
`
export const ALL_ARTICLE_QUERY = `{ 
  data: allArticle
  {
    total
    results {
      id
      title
      abstract
      parent {
        results {
          __typename
          ... on Article {
            id
            title
          }
        }
      }
      cover {
        results {
          ${MEDIA_QUERY}
        }
      }
    }
  }
}`;

export const BYID_ARTICLE_QUERY = (id:string) => `# Write your query or mutation here
{
	article(id:"${id}"){
    body
    title
    abstract
    parent {
      results {
        __typename
        ... on Article {
          id
          title
        }
      }
    }
    cover {
      results {
        ${MEDIA_QUERY}
      }
    }
    articles {
      total
      results{
        __typename
        ... on Article {
          id
          title
          abstract
        	cover {
            results {
              ${MEDIA_QUERY}
            }
          }
        }
      }
    }
  }
}`