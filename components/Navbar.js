import Link from 'next/link'
import { useState } from "react";
import Image from 'next/image'


export default function Navbar(){

    const [isOpen,setIsOpen] = useState(false);
    const openMenu= ()=> setIsOpen(!isOpen);
    return (
         
            <header className="header">
                <nav className="navbar">
                    <Link href='/'>
                     <a className="navlogo"><Image
                src="/img/beauty.png"
                alt="IAPIOC"
                width={160}
                height={80}
              /></a>
                    </Link>
                <ul className={isOpen === false ? 
                        'navmenu' : 'navmenu active'}>
                    <li className="navitem">
                       <Link href='/'>
                         <a className={isOpen === false ? 
                                    'navlink' : 'navlink active'}
                                    onClick={openMenu}>Home</a>
                        </Link>
                    </li>
                    <li className="navitem">
                        <Link href='/blog'>
                         <a className={isOpen === false ? 
                                    'navlink' : 'navlink active'}
                                    onClick={openMenu}>Blog</a>
                        </Link>
                    </li>
                    <li className="navitem">
                        <Link href='/contact'>
                         <a className={isOpen === false ? 
                                    'navlink' : 'navlink active'}
                                    onClick={openMenu}>Contact</a>
                        </Link>
                    </li>


                </ul>
                <div className={isOpen === false ? 
                                    'hamburger' : 'hamburger active'}
                                    onClick={openMenu}
                                    >
                    <span className="bar"></span>
                    <span className="bar"></span>
                    <span className="bar"></span>
                </div>
                </nav>
            </header>
            
            
    )
}
