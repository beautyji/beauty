import Link from "next/link"
export default function Footer(){
    return(
        <div className="footer">
            <h2> All Rights Reserved To Beauty Secret Shop💖</h2>
            <div className="link">
            <Link href='/about'>
                         <a className="navlink">About</a>
                        </Link>
                        <Link href='/policy'>
                         <a className="navlink">Privacy Policy</a>
                        </Link>
            </div>
        </div>
    )
}