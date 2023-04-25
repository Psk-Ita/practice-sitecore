import Article, { ArticleResults } from "../Article/article-type"

import { FooterResults } from "./footer-type"
import { HeaderResults } from "./header-type"
import { MediaResults } from "../Common/media-type"

// import { RecipeResults } from "../Recipe/recipe-type"

type Homepage = {
    id: string
    name: string
    header: HeaderResults
    // heroBanner : MediaResults
    // recipeTitle: string
    // recipeSectionText: string
    // recipes: RecipeResults
    articles : ArticleResults
    footer: FooterResults
    background: MediaResults
}
export default Homepage

export type HomepageResults = {
  total: string;
  results: Homepage[] | undefined;
}