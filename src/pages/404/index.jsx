import { PokeballSolid } from '../../assets/images'

const NotFound = () => {
  return (
    <section className='not-found flex-column flex-justify-center flex-align-center text-color-light gap-4'>
      <div className='not-found__font flex flex-align-center gap-4 text-8 text-bold'>
        <span>4</span>
        <PokeballSolid className='not-found__pokeball' />
        <span>4</span>
      </div>
      <p className='text-light'>Sorry, the page is not exist :(</p>
    </section>
  )
}

export default NotFound
