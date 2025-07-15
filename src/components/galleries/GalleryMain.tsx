import { type FC } from 'react'
import ImagePolygon from '@/components/images/ImagePolygon'
import Zoom from 'react-medium-image-zoom'

interface GalleryMainProps {
  images: string[]
}

const GalleryMain: FC<GalleryMainProps> = ({ images }) => {
  return (
    <div className="gallery-main" id="gallery-main">
      {images.length ? (
        images.map((src, idx) => (
          <Zoom key={idx}>
            <div className="pic">
              <img className="pic-img" src={src} alt="Gallery image" />
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
