import galleryImage1 from '@/assets/images/gallery-home1.png'
import ImagePolygon from '@/components/images/ImagePolygon'
import { useContext } from 'react'
import ButtonMain from '@/components/buttons/ButtonMain'
import ImageSearch from '@/components/images/ImageSearch'
import { AppContext } from '@/context/appContext'
import ModalGalleryMain from '../modals/ModalGalleryMain'

const GalleryMain = () => {
  // Variables
  const { isModalGalleryMainOpen, openModalGalleryMain, closeModalGalleryMain } =
    useContext(AppContext)

  return (
    <div className="gallery-main">
      <div className="pic">
        <img
          className="pic-img"
          src={galleryImage1}
          alt="Gallery image"
          onClick={openModalGalleryMain}
        />
      </div>
      <div className="pic">
        <img className="pic-img" src={galleryImage1} alt="Gallery image" />
      </div>
      <div className="bg">
        <ImagePolygon />
      </div>

      {/* Modal for single gallery image */}
      <ModalGalleryMain
        open={isModalGalleryMainOpen}
        closeFunc={closeModalGalleryMain}
        imagePath={galleryImage1}
      >
        <ButtonMain title="Try another one" imageNode={<ImageSearch />} />
      </ModalGalleryMain>
    </div>
  )
}

export default GalleryMain
