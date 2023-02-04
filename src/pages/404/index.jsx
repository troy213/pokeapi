import { PokeballSolid } from '../../assets/images'

const NotFound = () => {
  return (
    <section className='not-found flex-column flex-justify-center flex-align-center text-color-light gap-4'>
      <p className='flex flex-align-center gap-4 text-8 text-bold'>
        4<PokeballSolid />4
      </p>
      <p className=''>Sorry, the page is not exist :(</p>
    </section>
  )
}

export default NotFound
