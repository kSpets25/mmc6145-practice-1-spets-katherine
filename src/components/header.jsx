import React from "react"
import { Link } from "react-router-dom"
import style from '../styles/header.module.css';
import airplane from '../assets/airplane-blue.png';



export default function Header() {
  return (
    <header className={style.header}>
              <div className={style.logo}>
              <Link className={style.navItem} to="/"><img className={style.airplane}
                src={airplane} from alt="airplane logo" /></Link>
              </div>
          <nav className={style.nav}>
              <ul className={style.navLink}>
                <li>
                  <Link className={style.navItem} to="/about">About</Link>
                </li>
                <li>
                  <Link className={style.navItem} to="/contact">Contact</Link>
                </li>
              </ul>
          </nav>
    </header>
  )
}