import { JSONContent } from "@tiptap/react";
import { MediaResults } from "../Common/media-type"

export type Article = {
    id: string;
    body: JSONContent;
    title: string;
    cover: MediaResults;
    parent: ArticleResults;
    abstract: string;
    articles?: ArticleResults | null;
}
export default Article

export type ArticleResults = {
  total: string;
  results: Article[];
}