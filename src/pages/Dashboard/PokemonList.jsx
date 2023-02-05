import { Card, Spinner } from '../../components'

const PokemonList = (props) => {
  const { data, isLoading } = props

  if (isLoading) {
    return (
      <div className='flex-1 flex-justify-center flex-align-center'>
        <Spinner />
      </div>
    )
  }

  if (!data.length) {
    return (
      <div className='flex-1 flex-column flex-justify-center flex-align-center'>
        <p className='text-8 text-bold'>Aww, snap!</p>
        <p className=''>Pokemon is missing :(</p>
      </div>
    )
  }

  return (
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
  )
}

export default PokemonList
