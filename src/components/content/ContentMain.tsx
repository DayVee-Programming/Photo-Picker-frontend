import ButtonMain from '@/components/buttons/ButtonMain'
import GalleryMain from '@/components/galleries/GalleryMain'
import ImageEmojiFlirt from '@/components/images/ImageEmojiFlirt'
import { AppContext } from '@/context/appContext'
import { useContext } from 'react'
import ImageReload from '@/components/images/ImageReload'
import GalleryUpload from '@/components/galleries/GalleryUpload'
import ImageUpload from '@/components/images/ImageUpload'

const ContentMain = () => {
  // Other variables
  const { openModalGalleryMain } = useContext(AppContext)

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
        <GalleryUpload />
        <ButtonMain title="Upload a new image" imageNode={<ImageUpload />} />
      </div>
    </section>
  )
}

export default ContentMain
