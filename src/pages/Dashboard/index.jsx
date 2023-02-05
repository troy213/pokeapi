import { useState, useEffect } from 'react'
import { toast } from 'react-toastify'
import axios from '../../api/axios'
import { Card, Spinner } from '../../components'

const Dashboard = () => {
  const [data, setData] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    setIsLoading(true)
    const getPokemons = async () => {
      try {
        const response = await axios.get('/pokemon')
        const urls = response.data.results.map((pokemon) => pokemon.url)
        const promises = urls.map(async (url) => {
          const response = await axios.get(url)
          return response.data
        })
        const results = await Promise.all(promises)
        setData(results)
        setIsLoading(false)
      } catch (error) {
        setIsLoading(false)
        console.error(error)
        toast.error('something went wrong')
      }
    }

    getPokemons()
  }, [])

  if (isLoading)
    return (
      <section className='dashboard flex-1 flex-align-center flex-justify-center'>
        <Spinner />
      </section>
    )

  return (
    <section className='dashboard flex-1'>
      <main className='dashboard__content'>
        {data.map((pokemon) => {
          const {
            id,
            name,
            types,
            sprites: { front_default, front_shiny },
          } = pokemon

          const detail = {
            id,
            name,
            type: types[0].type.name,
            sprite: front_default ? front_default : front_shiny,
          }

          return <Card detail={detail} key={id} />
        })}
      </main>
    </section>
  )
}

export default Dashboard
