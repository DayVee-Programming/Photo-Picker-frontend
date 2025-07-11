import ImageHome from '@/components/images/ImageHome'
import type { FC } from 'react'
import { Link } from 'react-router'

const HeaderMain: FC = () => {
  // Synchronous functions
  const clickLogo = () => {
    window.scrollTo({ top: 0 })
  }

  return (
    <header className="header-main">
      <div className="container wrapper">
        <Link className="logo" to="/" aria-label="Home page" onClick={clickLogo}>
          <ImageHome />
        </Link>
        <ul className="nav-list">
          <li className="nav-list-item">
            <a href="#gallery-main" className="nav-list-link" aria-label="Home page">
              Images
            </a>
          </li>
          <li className="nav-list-item">
            <a href="#gallery-upload" className="nav-list-link" aria-label="Home page">
              Upload
            </a>
          </li>
        </ul>
      </div>
    </header>
  )
}

export default HeaderMain
