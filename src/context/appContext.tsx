import { createContext, useState, type ReactNode } from 'react'

type AppContextProviderProps = {
  children: ReactNode
}
type AppContext = {
  openModalGalleryMain: () => void
  closeModalGalleryMain: () => void
  isModalGalleryMainOpen: boolean
}

export const AppContext = createContext({} as AppContext)
export function AppContextProvider({ children }: AppContextProviderProps) {
  // Variables
  const [isModalGalleryMainOpen, setIsModalGalleryMainOpen] = useState(false)

  // Synchronous functions
  const openModalGalleryMain = () => {
    setIsModalGalleryMainOpen(true)
  }
  const closeModalGalleryMain = () => {
    setIsModalGalleryMainOpen(false)
  }

  return (
    <AppContext.Provider
      value={{
        isModalGalleryMainOpen,
        openModalGalleryMain,
        closeModalGalleryMain,
      }}
    >
      {children}
    </AppContext.Provider>
  )
}
