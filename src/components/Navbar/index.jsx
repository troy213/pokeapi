import { SearchIcon } from '../../assets/icons'

const Navbar = () => {
  return (
    <nav className='navbar'>
      <a href='/' className='navbar__title text-color-light'>
        Pokemon
      </a>
      <form className='navbar__search-form'>
        <input
          type='text'
          className='navbar__search-input'
          placeholder='search'
        />
        <button type='submit' className='navbar__search-button'>
          <SearchIcon className='text-color-light' />
        </button>
      </form>
    </nav>
  )
}

export default Navbar
