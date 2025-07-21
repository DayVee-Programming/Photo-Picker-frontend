import { useContext, type FC } from 'react'
import ImagePolygon from '@/components/images/ImagePolygon'
import Zoom from 'react-medium-image-zoom'
import ImageClose from '@/components/images/ImageClose'
import { removeIDBImage } from '@/lib/idb'
import { AppContext } from '@/context/appContext'
import { toast } from 'react-toastify'

interface GalleryMainProps {
  images: { id: number; src: string }[]
}

const GalleryMain: FC<GalleryMainProps> = ({ images }) => {
  // Variables
  const { updateImages } = useContext(AppContext)

  // Synchronous functions
  const clickClose = async (i: number) => {
    await removeIDBImage(i)
    toast.success('Image is removed!', {
      position: 'top-right',
      autoClose: 3000,
      draggable: true,
    })
    updateImages()
  }

  return (
    <div className="gallery-main" id="gallery-main">
      {images.length ? (
        images.map(({ id, src }) => (
          <Zoom key={id}>
            <div className="pic">
              <img className="pic-img" src={src} alt="Gallery image" />
              <div className="close-pic" onClick={() => clickClose(id)}>
                <ImageClose />
              </div>
            </div>
          </Zoom>
        ))
      ) : (
        <div className="no-data">
          <p className="no-data-text">Try uploading some images!</p>
        </div>
      )}
      <div className="bg">
        <ImagePolygon />
      </div>
    </div>
  )
}

export default GalleryMain
