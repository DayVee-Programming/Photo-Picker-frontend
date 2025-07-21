import HeaderMain from '@/components/headers/HeaderMain'
import ContentMain from '@/components/content/ContentMain'
import { AppContextProvider } from '@/context/appContext'
import type { FC } from 'react'
import { ToastContainer } from 'react-toastify'

// Import 'react-medium-image-zoom' library styles
import 'react-medium-image-zoom/dist/styles.css'

const App: FC = () => {
  return (
    <div className="app">
      <AppContextProvider>
        <HeaderMain />
        <ContentMain />

        {/* Notification container */}
        <ToastContainer />
      </AppContextProvider>
    </div>
  )
}

export default App
