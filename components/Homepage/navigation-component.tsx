import Menu, { MenuResults } from '../../types/Homepage/menu-type';

import Link from 'next/link';
import stylesHp from '../../styles/Homepage/Navigation.module.css';

type Props = {
    menuResults: MenuResults;
}

const NavigationComponent = ({menuResults}: Props) => {


    return(
        <div className={stylesHp.Navigation}>
          {menuResults?.results?.map((menu: Menu) => (
            <Link key={menu.id} href={menu.link}>
              <span className='NavigationItem' >
                {menu.label}
              </span>
            </Link>
          ))}
        </div>        
    )
}

export default NavigationComponent