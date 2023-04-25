import Link from "next/link";
import React from "react";
import styles from '../styles/Breadcrumb.module.css';
import { useRouter } from "next/router";

export type Navigation  = {
    url?: string | null;
    title:string;
} 

export type BreadcrumbProps = {
    options:Navigation[]
}

export const Breadcrumb : React.FC<BreadcrumbProps> = ({options}: BreadcrumbProps) => {
    const router = useRouter();
    const path = router.asPath;

    return (
        <ul className={styles.breadcrumb}>
            <li><Link href={'/'}>Home</Link></li>
            {options.map(({title, url}) =>{
                let wKey = '';
                let wObj = <React.Fragment />
                if(url){
                    wKey = url                    
                    wObj = <Link href={url} className={url === path ? styles.active : ''}>{`${title}`.toLowerCase()}</Link>
                } else {
                    wKey = title
                    wObj = <span key={title}>{title}</span>
                }
                return <li key={wKey}>{wObj}</li> 
            })}
        </ul>
    )
}

export default Breadcrumb;