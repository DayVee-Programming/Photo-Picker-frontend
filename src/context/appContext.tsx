import { createContext, useState, type ReactNode } from 'react'

type AppContextProviderProps = {
  children: ReactNode
}
type AppContext = {
  isModalGalleryMainOpen: boolean
  isModalGalleryPreviewOpen: boolean
  pendingFile: File | null
  areImagesUpdated: boolean
  openModalGalleryMain: () => void
  closeModalGalleryMain: () => void
  openModalGalleryPreview: () => void
  closeModalGalleryPreview: () => void
  setPendingFile: (file: File | null) => void
  updateImages: () => void
  stopUpdatingImages: () => void
}

export const AppContext = createContext({} as AppContext)
export function AppContextProvider({ children }: AppContextProviderProps) {
  // Variables
  const [isModalGalleryMainOpen, setIsModalGalleryMainOpen] = useState(false)
  const [isModalGalleryPreviewOpen, setIsModalGalleryPreviewOpen] = useState(false)
  const [pendingFile, setPendingFile] = useState<File | null>(null)
  const [areImagesUpdated, setAreImagesUpdated] = useState(false)

  // Synchronous functions
  const openModalGalleryMain = () => {
    setIsModalGalleryMainOpen(true)
  }
  const closeModalGalleryMain = () => {
    setIsModalGalleryMainOpen(false)
  }
  const openModalGalleryPreview = () => {
    setIsModalGalleryPreviewOpen(true)
  }
  const closeModalGalleryPreview = () => {
    setIsModalGalleryPreviewOpen(false)
  }
  const updateImages = () => {
    setAreImagesUpdated(true)
  }
  const stopUpdatingImages = () => {
    setAreImagesUpdated(false)
  }

  return (
    <AppContext.Provider
      value={{
        isModalGalleryMainOpen,
        openModalGalleryMain,
        closeModalGalleryMain,
        isModalGalleryPreviewOpen,
        openModalGalleryPreview,
        closeModalGalleryPreview,
        pendingFile,
        setPendingFile,
        areImagesUpdated,
        updateImages,
        stopUpdatingImages,
      }}
    >
      {children}
    </AppContext.Provider>
  )
}
