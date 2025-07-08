import ImageHome from '@/components/images/ImageHome'
import type { FC } from 'react'

const HeaderMain: FC = () => {
  return (
    <header className="header-main">
      <div className="container wrapper">
        <a className="logo" href="/" aria-label="Home page">
          <ImageHome />
        </a>
        <ul className='nav-list'>
          <li className='nav-list-item'>
            <a className='nav-list-link' aria-label='Home page'>
              Images
            </a>
          </li>
          <li className='nav-list-item'>
            <a className='nav-list-link' aria-label='Home page'>
              Upload
            </a>
          </li>
        </ul>
      </div>
    </header>
  )
}

export default HeaderMain
