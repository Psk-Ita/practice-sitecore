import { ALL_ARTICLE_QUERY, BYID_ARTICLE_QUERY } from "../../graphQl/Article/article-query";
import Article, { ArticleResults } from "../../types/Article/article-type";

import { fetchAPI } from "../Common/api";

export async function getAllArticleByParent (parentId='') : Promise<ArticleResults> {
    const data = await fetchAPI(ALL_ARTICLE_QUERY);
    const {results : all} = data.data.data
    const results : Article[] = all.filter( (x : any) => {
        if(`${parentId ?? ''}`.length > 0) { return x?.parent?.id === parentId}
        return !x?.parent?.id
    })
    return {total : `${results.length}`, results};    
}

export async function getArticleById(articleId: string) : Promise<Article>{
    const query = BYID_ARTICLE_QUERY(articleId);

    const data = await fetchAPI(query);
    return data.data.article;    
}
