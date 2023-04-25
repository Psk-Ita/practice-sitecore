import { useCallback, useMemo, useRef, useState } from "react"

import  { ArticleResults } from "../types/Article/article-type"
import Image from 'next/image';
import Link from "next/link"
import React from "react"
import styles from '../styles/Carousel.module.css'

export type CarouselProps = {
    articles: ArticleResults
}
export const Carousel : React.FC<CarouselProps> = ({articles}) => {

    const [index, setIndex] = useState(0);
    let tmr= useRef<NodeJS.Timeout|null>(null);

    const change = useCallback((gap : number) : void => {
        setIndex((i) => {
            i += gap;
            const tot =parseFloat(articles.total) 
            if(i >= tot){
                i=0;
            } else if (i < 0){
                i= tot -1;
            }
            return i;
        })
    },[articles.total]);

    const {others, article, itemWidth} = useMemo(() => {
        if(tmr.current){
            clearTimeout(tmr.current)
        }

        const {results} = articles;

        const others = [...results];
        const article = others.splice(index, 1)[0];

        let itemWidth = 100;
        if(others.length > 0) {
            itemWidth = 100 / others.length;
        }
        
        tmr.current = setTimeout(() => {
            change(+1);
        }, 9999);
        
        return { others, article, itemWidth };
    }, [articles, index, change])

    return (<React.Fragment>
        <div className={styles.carousel}>
            <button type="button" className={styles.prev} onClick={() => change(-1)}>{'<'}</button>
            <h1>{article.title}</h1>
            <h3>{article.abstract}</h3>        
            <button type="button" className={styles.next} onClick={() => change(+1)}>{'>'}</button>
        </div>
        <div className={styles.others}>
            {others .map(x => <div key={x.id} style={{flexBasis : itemWidth}} className={styles.preview}>
                <Link href={`/articles/${x.id}`}>
                    <Image src={x.cover.results?.[0].fileUrl}  alt={x.title} width={400} height={200} />
                    <div className={styles.caption}>
                        <div>{x.title}</div>
                        <div className={styles.abstract}>{x.abstract}</div>
                    </div>
                </Link>
            </div>)}
        </div>
    </React.Fragment>)
}