import Menu, { MenuResults } from '../../types/Homepage/menu-type';

import Image from 'next/image'
import Link from 'next/link';
import { Media } from '../../types/Common/media-type';
import React from 'react';
import stylesHp from '../../styles/Homepage/Footer.module.css'
import { useMemo } from 'react';

type Props = {
    menuResults: MenuResults;
}


const FooterLinksComponent = ({menuResults}: Props) => {

    const renderMenu = (menu: Menu) : JSX.Element => {

        let logo : Media | undefined;
        let waves : Media | undefined;
        (menu?.menuImage?.results ?? []).forEach((x) => {
            if (x.name.match(/logo/gim)) logo = x;
            else if (x.name.match(/waves/gim)) waves = x;
        });

        let key = `${Math.random()}`.substring(2);
        let obj = <React.Fragment />;
        const logoimage = logo ? <Image key={logo.id} src={logo.fileUrl} alt="" width={470} height={197} className={stylesHp.Logo} /> : <React.Fragment />
        const wavesimage = waves ? <Image key={waves.id} src={waves.fileUrl} alt="" width={1902} height={94} className={stylesHp.Waves} /> : <React.Fragment />

        if(menu.link){
            key = menu.id;
            obj = <Link href={menu.link} className={stylesHp.FooterLinksItem}>{logoimage}</Link>
        } else {
            obj = logoimage;
        }
        return <React.Fragment key={key}>
            {obj}{wavesimage}
        </React.Fragment>
    }

    return(
        <div className={stylesHp.FooterLinks}>
            {menuResults.results.map(renderMenu)}
            <div className={stylesHp.CopyRight}>© 2023 Avanade Inc. All Rights Reserved.</div>
        </div>        
    )
}

export default FooterLinksComponent