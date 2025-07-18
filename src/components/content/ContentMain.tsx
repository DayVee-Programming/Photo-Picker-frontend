import ButtonMain from '@/components/buttons/ButtonMain'
import GalleryMain from '@/components/galleries/GalleryMain'
import ImageEmojiFlirt from '@/components/images/ImageEmojiFlirt'
import { AppContext } from '@/context/appContext'
import { useContext, useEffect, useState, type ChangeEvent } from 'react'
import ImageReload from '@/components/images/ImageReload'
import GalleryUpload from '@/components/galleries/GalleryUpload'
import ImageUpload from '@/components/images/ImageUpload'
import InputFileUpload from '@/components/inputs/InputFileUpload'
import ImageSend from '@/components/images/ImageSend'
import ImagePolygon from '@/components/images/ImagePolygon'
import ModalGalleryMain from '@/components/modals/ModalGalleryMain'
import ImageSearch from '@/components/images/ImageSearch'
import galleryImage1 from '@/assets/images/gallery-home1.png'
import { addImageToIDB, getIDBImages } from '@/lib/idb'

type ImagePreviewType = string | null

const ContentMain = () => {
  // Variables
  const { isModalGalleryMainOpen, openModalGalleryMain, closeModalGalleryMain } =
    useContext(AppContext)
  const [imagePreview, setImagePreview] = useState<ImagePreviewType>(null)
  const { pendingFile, setPendingFile } = useContext(AppContext)
  const [images, setImages] = useState<string[]>([])

  // Asynchronous functions
  const uploadImage = async () => {
    if (!imagePreview) return
    try {
      if (pendingFile) {
        await addImageToIDB(pendingFile)
        alert('Image saved to IndexedDB!')
        setPendingFile(null)
        setImagePreview(null)
      } else {
        console.error('Image is not found')
      }
    } catch (err) {
      console.error('Failed to save image:', err)
    }
  }

  // Synchronous functions
  const changeInput = (e: ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files
    if (!files || files.length === 0) {
      console.log('No file selected')
      return
    }
    const file = files[0]
    const previewUrl = URL.createObjectURL(file)
    setPendingFile(file)
    setImagePreview(previewUrl)
  }

  // Effects
  useEffect(() => {
    // let mounted = true
    let createdUrls: string[] = []
    getIDBImages()
      .then((blobs) => {
        // if (!mounted) return
        createdUrls = blobs.map((blob) => URL.createObjectURL(blob))
        setImages(createdUrls)
      })
      .catch((err) => {
        console.error(err)
      })
    return () => {
      // mounted = false
      createdUrls.forEach((url) => URL.revokeObjectURL(url))
    }
  }, [pendingFile])

  return (
    <section className="content-main consider-header">
      <div className="container wrapper">
        <ButtonMain
          clickBtn={openModalGalleryMain}
          title="Test your luck!"
          imageNode={<ImageEmojiFlirt />}
        />
        <GalleryMain images={images} />
        <ButtonMain title="Load more" imageNode={<ImageReload />} />
        <GalleryUpload imagePreview={imagePreview} />
        {imagePreview ? (
          <div className="reupload">
            <InputFileUpload
              title="Reupload a new image"
              imageNode={<ImageUpload />}
              changeInput={changeInput}
            />
            <ButtonMain clickBtn={uploadImage} title="Submit" imageNode={<ImageSend />} />
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
