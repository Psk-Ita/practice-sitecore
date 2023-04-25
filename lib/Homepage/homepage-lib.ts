import {ALL_HOMEPAGE_QUERY, HOMEPAGE_QUERY} from "../../graphQl/Homepage/homepage-query";
import Homepage, {HomepageResults} from "../../types/Homepage/homepage-type";

import {fetchAPI} from "../Common/api"

/*
// function extractPosts({ data }: { data: HomepageResults  }) {
//   console.log(data)
//    // return (data?.results || []).map((post: Homepage) => {
//    //   return post;
//    // })
// }

// export async function getAllHomepage(preview: boolean): Promise<Homepage[]> {
// 
//     console.log('ALL_HOMEPAGE_QUERY', ALL_HOMEPAGE_QUERY);
//     const data = await fetchAPI(`${ALL_HOMEPAGE_QUERY}`);
//     console.log(data);
//     return extractPosts(data?.data ?? {data:{}});
// }

*/

export async function getHomepageById(id: string): Promise<Homepage> {
  
  const queryHomepage = `{ 
    data: homepage(id: "${id}")
    {
        ${HOMEPAGE_QUERY}
    }
  }`;

  // console.log('queryHomepage', queryHomepage);

  const data = await fetchAPI(queryHomepage);
  return data.data.data;
  
}
