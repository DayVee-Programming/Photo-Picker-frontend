import { Box, Modal } from '@mui/material'
import { type FC, type ReactNode } from 'react'

interface ModalGalleryMainProps {
  open: boolean
  imagePath: string | null
  children?: ReactNode
  closeFunc: () => void
}

const ModalGalleryMain: FC<ModalGalleryMainProps> = ({
  open,
  imagePath,
  children,
  closeFunc = () => {},
}) => {
  return (
    <Modal
      className="modal-gallery-main"
      open={open}
      onClose={closeFunc}
      aria-labelledby="modal-gallery-main-title"
      aria-describedby="modal-gallery-main-description"
    >
      <Box className="box">
        <figure className="box-figure">
          <img
            className="box-figure-img"
            src={imagePath ? imagePath : undefined}
            alt="Gallery image"
          />
        </figure>
        {children}
      </Box>
    </Modal>
  )
}

export default ModalGalleryMain
