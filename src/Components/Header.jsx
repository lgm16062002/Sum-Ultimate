
 import '../Styles/Header.css'

 export default function Header() {
   return (
     <header className="header">
       <div className="header__brand">
         <span>SUM</span>
       </div>
 
       <nav className="header__nav">
         <a className="header__link" href="#services">
           Services
         </a>
         <a className="header__link" href="#centers">
           Centers
         </a>
         <a className="header__link" href="#leadership">
           Leadership
         </a>
         <button className="header__cta" type="button">
           Contact
         </button>
       </nav>
     </header>
   )
 }

