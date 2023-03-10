import { Link } from 'react-router-dom'
import { missingNoPng } from '../../assets/images'
import { TYPE_COLOR, TYPE_TAG } from '../../data/consts'

const Card = ({ detail }) => {
  return (
    <div className='card flex-column'>
      <div className='card__type-container'>
        {detail.types.map((item, index) => {
          return <img src={TYPE_TAG[item.type.name]} alt='tag' key={index} />
        })}
      </div>
      <div
        className={`card__image-container ${
          TYPE_COLOR[detail.type] ?? 'bg--default'
        }`}
      >
        <img
          src={detail.sprite ? detail.sprite : missingNoPng}
          alt={detail.name}
        />
      </div>
      <div className='card__detail flex-column flex-justify-center flex-align-center flex-1 gap-2'>
        <p className='text-3 text-light'>No.{detail.id}</p>
        <p className='text-bold text-capitalize'>{detail.name}</p>
        <Link
          to={`/pokemon-detail/${detail.name}`}
          className='btn btn-primary text-3 text-color-light'
        >
          Detail
        </Link>
      </div>
    </div>
  )
}

export default Card
