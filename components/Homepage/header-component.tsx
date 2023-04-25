import {HeaderResults} from '../../types/Homepage/header-type'
import Image from 'next/image';
import Link from 'next/link';
import NavigationComponent from './navigation-component';
import stylesHp from '../../styles/Homepage/Homepage.module.css';

type Props = {
    allHeaders: HeaderResults;
}

const HeaderComponent = ({allHeaders}: Props) => {
    const header = allHeaders.results[0];
    return(
        <div className={stylesHp.header}>
            <div className={stylesHp.boxedContainer} >
                <Link href="https://www.avanade.com" target="_blank">
                    <Image 
                        alt=''
                        src={header?.logo?.results[0]?.fileUrl}
                        width={300}
                        height={70}
                        className={stylesHp.Logo}
                    />
                </Link>
                <div className={stylesHp.links}>
                <NavigationComponent menuResults  = {header?.menuItems}/>
                </div>
            </div>            
        </div>
    )
}

export default HeaderComponent