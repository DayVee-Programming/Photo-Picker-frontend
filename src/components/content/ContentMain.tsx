import ButtonMain from '@/components/buttons/ButtonMain'
import GalleryMain from '@/components/galleries/GalleryMain'
import ImageEmojiFlirt from '@/components/images/ImageEmojiFlirt'
import { AppContext } from '@/context/appContext'
import { useCallback, useContext, useEffect, useState, type ChangeEvent } from 'react'
import ImageReload from '@/components/images/ImageReload'
import GalleryUpload from '@/components/galleries/GalleryUpload'
import ImageUpload from '@/components/images/ImageUpload'
import InputFileUpload from '@/components/inputs/InputFileUpload'
import ImageSend from '@/components/images/ImageSend'
import ImagePolygon from '@/components/images/ImagePolygon'
import ModalGalleryMain from '@/components/modals/ModalGalleryMain'
import ImageSearch from '@/components/images/ImageSearch'
import { addImageToIDB, getIDBImages, type IDBImageRecord } from '@/lib/idb'
import { toast } from 'react-toastify'

const ContentMain = () => {
  // Variables
  const { isModalGalleryMainOpen, openModalGalleryMain, closeModalGalleryMain } =
    useContext(AppContext)
  const [imagePreview, setImagePreview] = useState<string | null>(null)
  const { pendingFile, setPendingFile, areImagesUpdated, stopUpdatingImages } =
    useContext(AppContext)
  const [images, setImages] = useState<{ id: number; src: string }[]>([])
  const [visibleCount, setVisibleCount] = useState(6)
  const [randomImageUrl, setRandomImageUrl] = useState<string | null>(null)

  // Asynchronous functions
  const uploadImage = async () => {
    if (!imagePreview) return
    try {
      if (pendingFile) {
        await addImageToIDB(pendingFile)
        toast.success('Image is uploaded!', {
          position: 'top-right',
          autoClose: 3000,
          draggable: true,
        })
        const galleryEl = document.querySelector('#gallery-main')
        if (galleryEl) {
          galleryEl.scrollIntoView()
        }
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
  const loadMore = () => {
    setVisibleCount((count) => Math.min(images.length, count + 6))
  }
  const clickRandomImage = () => {
    const randomIndex = Math.floor(Math.random() * visibleImages.length)
    setRandomImageUrl(visibleImages[randomIndex].src)
    openModalGalleryMain()
  }

  // Effects
  const visibleImages = useCallback(() => images.slice(0, visibleCount), [images, visibleCount])()
  useEffect(() => {
    let createdUrls: { id: number; src: string }[] = []
    getIDBImages()
      .then((records: IDBImageRecord[]) => {
        createdUrls = records
          .map((record) => ({
            id: record.id,
            src: URL.createObjectURL(record.blob),
          }))
          .reverse()
        setImages(createdUrls)
        stopUpdatingImages()
      })
      .catch((err) => {
        console.error(err)
      })
  }, [pendingFile, areImagesUpdated, stopUpdatingImages])

  return (
    <section className="content-main consider-header">
      <div className="container wrapper">
        <ButtonMain
          clickBtn={clickRandomImage}
          title="Test your luck!"
          imageNode={<ImageEmojiFlirt />}
        />
        <GalleryMain images={visibleImages} />
        {visibleCount < images.length && (
          <ButtonMain title="Load more" imageNode={<ImageReload />} clickBtn={loadMore} />
        )}
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
        imagePath={randomImageUrl}
      >
        <ButtonMain
          title="Try another one"
          imageNode={<ImageSearch />}
          clickBtn={clickRandomImage}
        />
      </ModalGalleryMain>
    </section>
  )
}

export default ContentMain
