interface ImageSendProps {
  title?: string
}

const ImageSend: React.FC<ImageSendProps> = ({ title }) => {
  return (
    <svg className="image-send" width="35" height="36" viewBox="0 0 35 36" fill="none" xmlns="http://www.w3.org/2000/svg">
      {title ? <title>{title}</title> : null}
      <path
        d="M7.29171 18L6.41088 10.071C6.15859 7.80187 8.49484 6.13499 10.5584 7.11354L27.9767 15.3648C30.2007 16.4177 30.2007 19.5823 27.9767 20.6352L10.5584 28.8879C8.49484 29.865 6.15859 28.1996 6.41088 25.9304L7.29171 18ZM7.29171 18H17.5"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export default ImageSend
