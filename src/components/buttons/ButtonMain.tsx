import type { FC, ReactNode } from 'react'

interface ButtonMainProps {
  title: string
  imageNode: ReactNode
  clickBtn?: () => void
}

const ButtonMain: FC<ButtonMainProps> = ({ title, imageNode, clickBtn = () => {} }) => {
  return (
    <button className="button-main" onClick={clickBtn}>
      <span className="button-main-span">{title}</span>
      {imageNode}
    </button>
  )
}

export default ButtonMain
