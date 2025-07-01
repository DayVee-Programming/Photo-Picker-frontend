import galleryImage1 from '@/assets/images/gallery-home1.png'
import ImagePolygon from '@/components/images/ImagePolygon'

const GalleryHome = () => {
  return (
    <div className="gallery-home">
      <div className="pic">
        {/* Gallery image */}
        <img className="pic-img" src={galleryImage1} alt="Gallery image" />
      </div>
      <div className="pic">
        {/* Gallery image */}
        <img className="pic-img" src={galleryImage1} alt="Gallery image" />
      </div>
      <div className="bg">
        <ImagePolygon />
      </div>
    </div>
  )
}

export default GalleryHome
