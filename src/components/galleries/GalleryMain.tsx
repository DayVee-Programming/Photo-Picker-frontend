import { type FC } from 'react'
import ImagePolygon from '@/components/images/ImagePolygon'
import Zoom from 'react-medium-image-zoom'
import ImageClose from '@/components/images/ImageClose'
import { removeIDBImage } from '@/lib/idb'

interface GalleryMainProps {
  images: string[]
}

const GalleryMain: FC<GalleryMainProps> = ({ images }) => {
  // Synchronous functions
  const clickClose = async(i: number) => {
    await removeIDBImage(i)
  }
  
  return (
    <div className="gallery-main" id="gallery-main">
      {images.length ? (
        images.map((image, i) => (
          <Zoom key={i}>
            <div className="pic">
              <img className="pic-img" src={image} alt="Gallery image" />
              <div className="close-pic" onClick={() => clickClose(i)}>
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
