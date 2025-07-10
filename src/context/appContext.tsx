import { createContext, useState, type ReactNode } from 'react'

type AppContextProviderProps = {
  children: ReactNode
}
type AppContext = {
  isModalGalleryMainOpen: boolean
  isModalGalleryPreviewOpen: boolean
  openModalGalleryMain: () => void
  closeModalGalleryMain: () => void
  openModalGalleryPreview: () => void
  closeModalGalleryPreview: () => void
}

export const AppContext = createContext({} as AppContext)
export function AppContextProvider({ children }: AppContextProviderProps) {
  // Variables
  const [isModalGalleryMainOpen, setIsModalGalleryMainOpen] = useState(false)
  const [isModalGalleryPreviewOpen, setIsModalGalleryPreviewOpen] = useState(false)

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

  return (
    <AppContext.Provider
      value={{
        isModalGalleryMainOpen,
        openModalGalleryMain,
        closeModalGalleryMain,
        isModalGalleryPreviewOpen,
        openModalGalleryPreview,
        closeModalGalleryPreview,
      }}
    >
      {children}
    </AppContext.Provider>
  )
}
