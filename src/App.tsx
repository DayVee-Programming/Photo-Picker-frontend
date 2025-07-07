import HeaderHome from '@/components/headers/HeaderHome'
import LuckHome from '@/components/blocks/LuckHome'
import { AppContextProvider } from '@/context/appContext'

const App = () => {
  return (
    <div className="app">
      <AppContextProvider>
        <HeaderHome />
        <LuckHome />
      </AppContextProvider>
    </div>
  )
}

export default App
