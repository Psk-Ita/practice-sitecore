import { FOOTER_QUERY } from "./footer-query";
import MEDIA_QUERY from "../Common/media-query";
import MENU_QUERY from "./menu-query";

export const HOMEPAGE_QUERY = ` 
  id
  name
  background {
    results{
      fileUrl
    }
  }
  articles {
    total
    results {
      __typename
      ... on Article {
        id
        name
        title
        abstract
        cover {
          results{
            ${MEDIA_QUERY}
          }
        }
      }
    }
  }
  header {
    total
    results {
      __typename
      ... on Header {
        id
        name
        logo {
          total
          results {
            ${MEDIA_QUERY}
          }
        }
        menuItems {
          total
          results {
            __typename
            ... on Menu {
             ${MENU_QUERY}
            }
          }
        }
      }
    }
  }
  footer {
    total
    results {
      __typename
      ... on Footer {
        ${FOOTER_QUERY}
      } 
    }
  }
`;

  /*
  heroBanner {
    results{
      ${MEDIA_QUERY}
    }
  }
  recipeTitle
  recipeSectionText
  recipes {
    total
    results {
      __typename
      ... on Recipe {
        ${RECIPE_QUERY}
      }
    }    
  } */


export const ALL_HOMEPAGE_QUERY = `{ 
  data: allHomepage {
    results{
      ${HOMEPAGE_QUERY}
    }
  }
}
`;

export default ALL_HOMEPAGE_QUERY


