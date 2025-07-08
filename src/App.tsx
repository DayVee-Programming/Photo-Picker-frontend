import HeaderMain from '@/components/headers/HeaderMain'
import ContentMain from '@/components/content/ContentMain'
import { AppContextProvider } from '@/context/appContext'

const App = () => {
  return (
    <div className="app">
      <AppContextProvider>
        <HeaderMain />
        <ContentMain />
      </AppContextProvider>
    </div>
  )
}

export default App
