import { STATS_ENUM } from '../../data/consts'

const MAX_STAT = 200

const PokemonStats = ({ stats }) => {
  return (
    <div className='pokemon-detail__stats-container'>
      <p className='text-bold text-center'>Base Stats</p>
      {stats.map((item, index) => {
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
                style={{ maxWidth: `${barWidthPercent}%` }}
              ></div>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default PokemonStats
