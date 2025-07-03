import ButtonHome from '@/components/buttons/ButtonHome'
import GalleryHome from '@/components/gallery/GalleryHome'
import ImageEmojiFlirt from '@/components/images/ImageEmojiFlirt'

const LuckHome = () => {
  return (
    <section className="luck-home consider-header">
      <div className="container wrapper">
        <ButtonHome title="Test your luck!" imageNode={<ImageEmojiFlirt />} />
        <GalleryHome />
      </div>
    </section>
  )
}

export default LuckHome
