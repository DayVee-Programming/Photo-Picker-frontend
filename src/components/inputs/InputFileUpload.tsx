import { Button, styled } from '@mui/material'
import type { ChangeEvent, FC, ReactNode } from 'react'

interface InputFileUploadProps {
  title: string
  imageNode: ReactNode
  changeInput?: (event: ChangeEvent<HTMLInputElement>) => void
}

const InputFileUpload: FC<InputFileUploadProps> = ({
  title,
  imageNode,
  changeInput = () => {},
}) => {
  const VisuallyHiddenInput = styled('input')({
    clip: 'rect(0 0 0 0)',
    clipPath: 'inset(50%)',
    height: 1,
    overflow: 'hidden',
    position: 'absolute',
    bottom: 0,
    left: 0,
    whiteSpace: 'nowrap',
    width: 1,
  })

  return (
    <Button
      className="input-file-upload"
      component="label"
      role={undefined}
      variant="contained"
      tabIndex={-1}
      endIcon={imageNode}
    >
      <VisuallyHiddenInput
        className="hidden-input"
        type="file"
        onChange={(event) => changeInput(event)}
        multiple
      />
      {title ? <span className="input-file-upload-span">{title}</span> : null}
    </Button>
  )
}

export default InputFileUpload
