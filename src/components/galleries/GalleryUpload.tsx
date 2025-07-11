import ImagePolygon from '@/components/images/ImagePolygon'
import ImageGallery from '@/components/images/ImageGallery'
import { type FC } from 'react'
import Zoom from 'react-medium-image-zoom'

interface GalleryUploadProps {
  imagePreview: string | null
}

const GalleryUpload: FC<GalleryUploadProps> = ({ imagePreview }) => {
  return (
    <div className="gallery-upload" id="gallery-upload">
      <div className="pic">
        {imagePreview ? (
          <Zoom>
            <div className="pic">
              <img className="pic-img" src={imagePreview} alt="Preview image" />
            </div>
          </Zoom>
        ) : (
          <ImageGallery />
        )}
      </div>
      <div className="bg">
        <ImagePolygon />
      </div>
    </div>
  )
}

export default GalleryUpload
