import { Box, Fade, Modal } from '@mui/material'
import { type FC, type ReactNode } from 'react'
import Zoom from 'react-medium-image-zoom'

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
      slotProps={{
        backdrop: {
          timeout: 300,
        },
      }}
    >
      <Fade in={open}>
        <Box className="box">
          <Zoom>
            <figure className="box-figure">
              <img
                className="box-figure-img"
                src={imagePath ? imagePath : undefined}
                alt="Gallery image"
              />
            </figure>
          </Zoom>
          {children}
        </Box>
      </Fade>
    </Modal>
  )
}

export default ModalGalleryMain
