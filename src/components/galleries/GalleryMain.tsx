import galleryImage1 from '@/assets/images/gallery-home1.png'
import ImagePolygon from '@/components/images/ImagePolygon'
import Zoom from 'react-medium-image-zoom'

const GalleryMain = () => {
  return (
    <div className="gallery-main" id="gallery-main">
      <Zoom>
        <div className="pic">
          <img className="pic-img" src={galleryImage1} alt="Gallery image" />
        </div>
      </Zoom>
      <Zoom>
        <div className="pic">
          <img className="pic-img" src={galleryImage1} alt="Gallery image" />
        </div>
      </Zoom>
      <div className="bg">
        <ImagePolygon />
      </div>
    </div>
  )
}

export default GalleryMain
