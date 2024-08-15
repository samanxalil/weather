import React, { useContext, useEffect } from 'react'
import Header from './components/Header'
import ContextProvider, { Context } from './context/Context'
import Main from './components/Main'
import Week from './components/Week'

function App() {
  
  return (
    <ContextProvider>
      <Header/>
      <Main/>
      <Week/>
    </ContextProvider>
  )
}

export default App