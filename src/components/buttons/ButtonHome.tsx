interface ButtonHomeProps {
  title: string
  imageNode: React.ReactNode
}

const ButtonHome: React.FC<ButtonHomeProps> = ({ title, imageNode }) => {
  return (
    <button className="button-home">
      <span className="button-home-span">{title}</span>
      {imageNode}
    </button>
  )
}

export default ButtonHome
