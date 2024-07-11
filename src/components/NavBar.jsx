import headerLogo from '../assets/images/header-logo.svg'
import { hamburger } from '../assets/icons'
import { navLinks } from '../constants/index'

const NavBar = () => {
  return (
    <header className='padding-x py-8 absolute z-10 w-full'>
      <nav className='flex justify-between items-center max-container'>
        <a href="/">
          <img 
            src={headerLogo} 
            alt="Nike Logo"
            width={130}
            height={29} 
          />
        </a>
        <ul className='flex-1 flex justify-center items-center gap-16 max-lg:hidden'>
          {navLinks.map((link, index) => (
            <li key={index}>
              <a 
                href={link.href}
                className='font-montserrat text-normal text-lg text-slate-gray'
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
        <div className='hidden max-lg:block'>
          <img 
            src={hamburger} 
            alt="hamburger menu" 
            width={24} 
            height={24} 
          />
        </div>
        <div className='font-montserrat max-lg:hidden'>
          <a href="/">Sign in</a>
          {" "} / {" "}
          <a href="/">Explore now</a>
        </div>
      </nav>
    </header>
  )
}

export default NavBar