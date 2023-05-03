import React,{FC} from 'react'
import Logo from './Logo'
import styles from './Nav.module.scss'

interface Props {
    variant?: 'primary' | 'info' | 'danger';
}

const menuList = [
    {id: 1, title: 'Home', link: 'home'},
    {id: 2, title: 'Contact Us', link: 'contact'},
    {id: 3, title: 'Careers', link: 'careers'},
    {id: 4, title: 'About Us', link: 'about-us'},
]

const Nav:FC<Props> = ({variant = 'default'}) => {
    const variantColor = variant ? `nav-${variant}` : '';
  return (
    <nav className={[styles.nav,styles[variantColor]].join(' ')}>
        <div className="container-section">
            <div className={styles.navSection}>
                <Logo/>
                <div>
                    <ul className={styles.list}>
                        {menuList.map(menu => (
                            <li>{menu.title}</li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    </nav>
  )
}

export default Nav