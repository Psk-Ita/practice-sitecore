import { Media, MediaResults } from "../Common/media-type"

type Article = {
    id: string
    body: string
    title: string
    abstract: string
    cover: MediaResults
}
export default Article

export type ArticleResults = {
  total: string;
  results: Article[];
}