import { useState, useEffect } from 'react'
import { toast } from 'react-toastify'
import { useParams } from 'react-router-dom'
import axios from '../../api/axios'

import PokemonStats from './PokemonStats'
import { Spinner } from '../../components'
import { missingNoPng } from '../../assets/images'
import { hectogramToKilogram, decimeterToMeter } from '../../utils'
import { TYPE_COLOR } from '../../data/consts'

const PokemonDetail = () => {
  const [data, setData] = useState(null)
  const [isLoading, setIsLoading] = useState(true)

  const sprite = data
    ? data.sprites.front_default || data.sprites.front_shiny
    : missingNoPng

  const mainType = data ? data.types[0].type.name : null

  const params = useParams()

  useEffect(() => {
    setIsLoading(true)
    const getPokemonDetail = async () => {
      try {
        const response = await axios.get(`/pokemon/${params.id}`)
        setData(response.data)
        setIsLoading(false)
      } catch (error) {
        setData(null)
        setIsLoading(false)
      }
    }

    getPokemonDetail()
  }, [params])

  if (isLoading)
    return (
      <section className='pokemon-detail flex-1 flex-justify-center'>
        <Spinner />
      </section>
    )

  if (!data)
    return (
      <section className='pokemon-detail flex-1 flex-justify-center'>
        <p className='text-8 text-bold'>Aww, snap!</p>
        <p className=''>Pokemon is missing :(</p>
      </section>
    )

  return (
    <section className='pokemon-detail flex-1'>
      <div className='pokemon-detail__detail'>
        <div
          className={`pokemon-detail__image-container ${
            TYPE_COLOR[mainType] ?? 'bg--default'
          }`}
        >
          <img src={sprite} alt='pokemon' />
        </div>
        <div className='pokemon-detail__detail-container'>
          <div className='pokemon-detail__basic'>
            <p className='text-3 text-light'>No.{data.id}</p>
            <p className='text-6 text-bold text-capitalize'>{data.name}</p>
            <div className='flex gap-2'>
              {data.types.map((type, index) => {
                const {
                  type: { name },
                } = type
                return (
                  <p
                    className={`tag ${TYPE_COLOR[name] ?? 'bg--default'}`}
                    key={index}
                  >
                    {name}
                  </p>
                )
              })}
            </div>
          </div>
          <div className='pokemon-detail__misc'>
            <div className='pokemon-detail__misc-detail-container'>
              <div className='pokemon-detail__misc-detail'>
                <p className='text-3 text-light'>Height</p>
                <p>{decimeterToMeter(data.height)} m</p>
              </div>
              <div className='pokemon-detail__misc-detail'>
                <p className='text-3 text-light'>Weight</p>
                <p>{hectogramToKilogram(data.weight)} kg</p>
              </div>
              <div className='pokemon-detail__misc-detail'>
                <p className='text-3 text-light'>Species</p>
                <p className='text-capitalize'>{data.species.name}</p>
              </div>
            </div>
            <div className='pokemon-detail__misc-ability'>
              <p className='text-3 text-light'>Ability</p>
              <div className='flex gap-2'>
                {data.abilities.map((ability, index) => {
                  const {
                    ability: { name },
                    is_hidden,
                  } = ability

                  return (
                    <p
                      className={`tag ${
                        is_hidden ? 'bg--disabled' : 'bg--default'
                      }`}
                      key={index}
                    >
                      {name}
                    </p>
                  )
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
      <PokemonStats stats={data.stats} />
    </section>
  )
}

export default PokemonDetail
