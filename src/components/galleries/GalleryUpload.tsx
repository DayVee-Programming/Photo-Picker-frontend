import ImagePolygon from '@/components/images/ImagePolygon'
import ImageGallery from '@/components/images/ImageGallery'
import type { FC } from 'react'

interface GalleryUploadProps {
  imagePreview: string | null
}

const GalleryUpload: FC<GalleryUploadProps> = ({ imagePreview }) => {
  return (
    <div className="gallery-upload">
      <div className="pic">
        {imagePreview ? (
          <img className="pic-img" src={imagePreview} alt="X image" />
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
