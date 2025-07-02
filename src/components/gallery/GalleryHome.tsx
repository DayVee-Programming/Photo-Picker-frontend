import galleryImage1 from '@/assets/images/gallery-home1.png'
import ImagePolygon from '@/components/images/ImagePolygon'
import { Box, Modal } from '@mui/material'
import { useState } from 'react'

const GalleryHome = () => {
  // Other variables
  const [isModalGalleryMainOpen, setIsModalGalleryMainOpen] = useState(false)

  // Synchronous functions
  const openModalGalleryMain = () => {
    setIsModalGalleryMainOpen(true)
  }
  const closeModalGalleryMain = () => {
    setIsModalGalleryMainOpen(false)
  }

  return (
    <div className="gallery-home">
      <div className="pic">
        {/* Gallery image */}
        <img
          className="pic-img"
          src={galleryImage1}
          alt="Gallery image"
          onClick={openModalGalleryMain}
        />
      </div>
      <div className="pic">
        {/* Gallery image */}
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
        <Box className="box">Hello World</Box>
      </Modal>
    </div>
  )
}

export default GalleryHome
