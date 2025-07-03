import galleryImage1 from '@/assets/images/gallery-home1.png'
import ImagePolygon from '@/components/images/ImagePolygon'
import { Box, Modal } from '@mui/material'
import { useState } from 'react'
import ButtonHome from '@/components/buttons/ButtonHome'
import ImageEmojiSmile from '@/components/images/ImageEmojiSmile'
import ImageSearch from '@/components/images/ImageSearch'

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
          <ButtonHome title="Mood for the day" imageNode={<ImageEmojiSmile />} />
          <figure className='box-figure'>
            <img className='box-figure-img' src={galleryImage1} alt='Gallery image' />
          </figure>
          <ButtonHome title="Try another one" imageNode={<ImageSearch />} />
        </Box>
      </Modal>
    </div>
  )
}

export default GalleryHome
