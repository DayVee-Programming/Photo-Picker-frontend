import ButtonMain from '@/components/buttons/ButtonMain'
import GalleryMain from '@/components/galleries/GalleryMain'
import ImageEmojiFlirt from '@/components/images/ImageEmojiFlirt'
import { AppContext } from '@/context/appContext'
import { useContext, useState, type ChangeEvent } from 'react'
import ImageReload from '@/components/images/ImageReload'
import GalleryUpload from '@/components/galleries/GalleryUpload'
import ImageUpload from '@/components/images/ImageUpload'
import InputFileUpload from '@/components/inputs/InputFileUpload'
import ImageSend from '@/components/images/ImageSend'
import ImagePolygon from '@/components/images/ImagePolygon'
import ModalGalleryMain from '@/components/modals/ModalGalleryMain'
import ImageSearch from '@/components/images/ImageSearch'
import galleryImage1 from "@/assets/images/gallery-home1.png"

type ImagePreviewType = string | null

const ContentMain = () => {
  // Variables
  const { isModalGalleryMainOpen, openModalGalleryMain, closeModalGalleryMain } = useContext(AppContext)
  const [imagePreview, setImagePreview] = useState<ImagePreviewType>(null)

  // Synchronous functions
  const changeInput = (e: ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files
    if (!files || files.length === 0) {
      console.log('No file selected')
      return
    }
    const file = files[0]
    const previewUrl = URL.createObjectURL(file)
    setImagePreview(previewUrl)
  }

  return (
    <section className="content-main consider-header">
      <div className="container wrapper">
        <ButtonMain
          clickBtn={openModalGalleryMain}
          title="Test your luck!"
          imageNode={<ImageEmojiFlirt />}
        />
        <GalleryMain />
        <ButtonMain title="Load more" imageNode={<ImageReload />} />
        <GalleryUpload imagePreview={imagePreview} />
        {imagePreview ? (
          <div className="reupload">
            <InputFileUpload
              title="Reupload a new image"
              imageNode={<ImageUpload />}
              changeInput={changeInput}
            />
            <ButtonMain title="Submit" imageNode={<ImageSend />} />
          </div>
        ) : (
          <InputFileUpload
            title="Upload a new image"
            imageNode={<ImageUpload />}
            changeInput={changeInput}
          />
        )}
        <div className="bg">
          <ImagePolygon />
        </div>
      </div>


      {/* Modal for single gallery image */}
      <ModalGalleryMain
        open={isModalGalleryMainOpen}
        closeFunc={closeModalGalleryMain}
        imagePath={galleryImage1}
      >
        <ButtonMain title="Try another one" imageNode={<ImageSearch />} />
      </ModalGalleryMain>
    </section>
  )
}

export default ContentMain
