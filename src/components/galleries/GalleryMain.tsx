import galleryImage1 from '@/assets/images/gallery-home1.png'
import ImagePolygon from '@/components/images/ImagePolygon'
import { Box, Modal } from '@mui/material'
import { useContext } from 'react'
import ButtonMain from '@/components/buttons/ButtonMain'
import ImageSearch from '@/components/images/ImageSearch'
import { AppContext } from '@/context/appContext'

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
      <Modal
        className="modal-gallery-main"
        open={isModalGalleryMainOpen}
        onClose={closeModalGalleryMain}
        aria-labelledby="modal-gallery-main-title"
        aria-describedby="modal-gallery-main-description"
      >
        <Box className="box">
          <figure className="box-figure">
            <img className="box-figure-img" src={galleryImage1} alt="Gallery image" />
          </figure>
          <ButtonMain title="Try another one" imageNode={<ImageSearch />} />
        </Box>
      </Modal>
    </div>
  )
}

export default GalleryMain
