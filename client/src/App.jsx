import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import UserList from './components/UserList'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <body>
        
        <Header />

        <main className="main">          
          <UserList />
        </main>

        <Footer />

      </body>
    </>
  )
}

export default App
