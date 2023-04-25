import { Breadcrumb, Navigation } from "../../components/Breadcrumb";

import  {Article as ArticleType} from "../../types/Article/article-type";
import FooterComponent from "../../components/Homepage/footer-component";
import { HOMEPAGE_ID } from "../../lib/Common/constants";
import Head from "next/head";
import HeaderComponent from "../../components/Homepage/header-component";
import Homepage from "../../types/Homepage/homepage-type";
import Image from 'next/image';
import Link from "next/link";
import clsx from "clsx";
import { generateHTML } from "@tiptap/html";
import { getArticleById } from "../../lib/Article/article-lib";
import { getHomepageById } from "../../lib/Homepage/homepage-lib";
import { richTextProfile } from "../../lib/Common/richTextConfiguration";
import styles from '../../styles/Article.module.css';
import { useMemo } from "react";

export async function getStaticPaths() {
    return {
        paths: [],
        fallback: 'blocking'
    };
}

type Props = {
    article: ArticleType;
    homepage : Homepage;
    parentId : string;
    articleId : string;
};

type Params = {
    params: {
        ids: string[]
    }
};

export async function getStaticProps({params} : Params) {
    const {0:parentId, 1:childId} = params.ids ?? [];
    const articleId = childId ?? parentId;
    
    const homepage = await getHomepageById(HOMEPAGE_ID);
    const article = await getArticleById(articleId);

    return {
        props: {articleId, parentId, article, homepage},
        // Next.js will attempt to re-generate the page:
        // - When a request comes in
        // - At most once every 10 seconds
        revalidate: 10, //in seconds
    };
}

const Article = ({articleId, parentId, article, homepage}: Props) => {

    const { body, articles, parent, title, abstract} = article ?? {};    
    const {results : list} = articles ?? {results:[]};
    const {title : pTitle, id: pId} = parent?.results?.[0] ?? {}

    const {itemWidth, navigation, htmlBody} = useMemo(() => {
        const count = (list ?? []).length; 
        const navigation : Navigation[] = [{title:'Articles'}];
        let itemWidth =  ( count > 0) ?  100 / count : 100;

        if(pId){
            navigation.push({title: pTitle, url:`/articles/${pId}`})
            navigation.push({title: title, url:`/articles/${pId}/${articleId}`})
        } else {
            navigation.push({title: title, url:`/articles/${articleId}`})
        }

        const htmlBody = body ?  generateHTML(body,[richTextProfile]) : ''

        return { itemWidth , navigation, htmlBody};
    }, [list, pId, body, pTitle, title, articleId])


    return (
        <div>
            <Head>
                <title>{`${title}`}</title>
                <meta name="description" content={`${abstract}`} />
            </Head>
            <main className={styles.main}>
                <HeaderComponent  allHeaders={homepage.header} />

                <Breadcrumb options={navigation} />
                
                <div className={styles.content} style={{backgroundImage: `url("${article?.cover?.results?.[0]?.fileUrl}")`}}>
                    <div className={styles.reading}>

                        <h1>{title}</h1>
                        
                        <div dangerouslySetInnerHTML={{ __html: htmlBody }} />
                    </div>
                </div>
            </main>

            <div className={styles.list}>
                {list.map(x => <div key={x.id} style={{flexBasis : itemWidth}} className={clsx(styles.preview, x.id === articleId ? styles.selected : '')} >
                    <Link href={`/articles/${parentId ?? articleId}/${x.id}`}>
                        <Image src={x?.cover?.results?.[0]?.fileUrl } alt={x.title} width={400} height={200} />
                        <div className={styles.caption}>
                            <div>{x.title}</div>
                            <div className={styles.abstract}>{x.abstract}</div>
                        </div>
                    </Link>
                </div>)}
            </div>

            <FooterComponent allFooters={homepage.footer} />
        </div>
    )
}

export default Article;