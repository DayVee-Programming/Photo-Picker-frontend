import type { FC, ReactNode } from "react"

interface ButtonHomeProps {
  title: string
  imageNode: ReactNode
}

const ButtonHome: FC<ButtonHomeProps> = ({ title, imageNode }) => {
  return (
    <button className="button-home">
      <span className="button-home-span">{title}</span>
      {imageNode}
    </button>
  )
}

export default ButtonHome
