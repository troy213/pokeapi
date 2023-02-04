import { missingNoPng } from '../../assets/images'

const STATS = [
  {
    base_stat: 45,
    effort: 0,
    stat: {
      name: 'hp',
      url: 'https://pokeapi.co/api/v2/stat/1/',
    },
  },
  {
    base_stat: 49,
    effort: 0,
    stat: {
      name: 'attack',
      url: 'https://pokeapi.co/api/v2/stat/2/',
    },
  },
  {
    base_stat: 49,
    effort: 0,
    stat: {
      name: 'defense',
      url: 'https://pokeapi.co/api/v2/stat/3/',
    },
  },
  {
    base_stat: 65,
    effort: 1,
    stat: {
      name: 'special-attack',
      url: 'https://pokeapi.co/api/v2/stat/4/',
    },
  },
  {
    base_stat: 65,
    effort: 0,
    stat: {
      name: 'special-defense',
      url: 'https://pokeapi.co/api/v2/stat/5/',
    },
  },
  {
    base_stat: 45,
    effort: 0,
    stat: {
      name: 'speed',
      url: 'https://pokeapi.co/api/v2/stat/6/',
    },
  },
]

const PokemonDetail = () => {
  return (
    <section className='pokemon-detail flex-1'>
      <div className='pokemon-detail__detail'>
        <div className='pokemon-detail__image-container bg--default'>
          <img src={missingNoPng} alt='pokemon' />
        </div>
        <div className='pokemon-detail__detail-container'>
          <div className='pokemon-detail__basic'>
            <p className='text-3 text-light'>No.1</p>
            <p className='text-6 text-bold text-capitalize'>bulbasaur</p>
            <div className='flex gap-2'>
              <p className='tag bg--grass'>grass</p>
              <p className='tag bg--poison'>poison</p>
            </div>
          </div>
          <div className='pokemon-detail__misc'>
            <div className='pokemon-detail__misc-detail-container'>
              <div className='pokemon-detail__misc-detail'>
                <p className='text-3 text-light'>Height</p>
                <p>0.7 m</p>
              </div>
              <div className='pokemon-detail__misc-detail'>
                <p className='text-3 text-light'>Weight</p>
                <p>6.9 kg</p>
              </div>
              <div className='pokemon-detail__misc-detail'>
                <p className='text-3 text-light'>Species</p>
                <p className='text-capitalize'>bulbasaur</p>
              </div>
            </div>
            <div className='pokemon-detail__misc-ability'>
              <p className='text-3 text-light'>Ability</p>
              <div className='flex gap-2'>
                <p className='tag bg--default'>overgrow</p>
                <p className='tag bg--disabled'>chlorophyll</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Stats stats={STATS} />
    </section>
  )
}

const Stats = ({ stats }) => {
  const STATS_ENUM = {
    hp: 'HP',
    attack: 'ATK',
    defense: 'DEF',
    'special-attack': 'SATK',
    'special-defense': 'SDEF',
    speed: 'SPD',
  }

  return (
    <div className='pokemon-detail__stats-container'>
      <p className='text-bold text-center'>Base Stats</p>
      {stats.map((item, index) => {
        const MAX_STAT = 250
        const {
          base_stat,
          stat: { name },
        } = item
        const barWidthPercent = Math.floor((base_stat / MAX_STAT) * 100)

        return (
          <div className='pokemon-detail__stats' key={index}>
            <p className='text-uppercase text-bold'>{STATS_ENUM[name]}</p>
            <p className='text-light text-center'>{base_stat}</p>
            <div className='pokemon-detail__bar-chart'>
              <div
                className='pokemon-detail__bar-chart-bar'
                style={{ width: `${barWidthPercent}%` }}
              ></div>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default PokemonDetail
