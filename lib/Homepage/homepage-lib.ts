import {ALL_HOMEPAGE_QUERY, HOMEPAGE_QUERY} from "../../graphQl/Homepage/homepage-query";
import Homepage, {HomepageResults} from "../../types/Homepage/homepage-type";

import {fetchAPI} from "../Common/api"

export async function getHomepageById(id: string): Promise<Homepage> {
  
  const queryHomepage = `{ 
    data: homepage(id: "${id}")
    {
        ${HOMEPAGE_QUERY}
    }
  }`;

  const data = await fetchAPI(queryHomepage);
  return data.data.data;
  
}
