import { useState, useEffect } from 'react'

const useScreenWidth = () => {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth)

  const getScreenWidth = () => {
    setScreenWidth(window.innerWidth)
  }

  useEffect(() => {
    window.addEventListener('resize', () => {
      getScreenWidth()
    })

    return () => {
      window.removeEventListener('resize', () => {
        getScreenWidth()
      })
    }
  }, [])

  return { screenWidth }
}

export default useScreenWidth
