import ImagePolygon from '@/components/images/ImagePolygon'
import ImageGallery from '@/components/images/ImageGallery'

const GalleryUpload = () => {
  return (
    <div className="gallery-upload">
      <div className="pic">
        <ImageGallery />
      </div>
      <div className="bg">
        <ImagePolygon />
      </div>
    </div>
  )
}

export default GalleryUpload
