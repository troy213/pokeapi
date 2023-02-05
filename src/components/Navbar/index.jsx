import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { SearchIcon } from '../../assets/icons'

const Navbar = () => {
  const [search, setSearch] = useState('')

  const navigate = useNavigate()

  const handleChange = (e) => {
    const ALPHANUMERIC = /^[A-Za-z0-9 ]*$/
    if (ALPHANUMERIC.test(e.target.value)) {
      setSearch(e.target.value)
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!search) return navigate('/')
    navigate(`/pokemon-detail/${search}`)
  }

  return (
    <nav className='navbar'>
      <a href='/' className='navbar__title text-color-light'>
        Pokemon
      </a>
      <form onSubmit={handleSubmit} className='navbar__search-form'>
        <input
          type='text'
          className='navbar__search-input'
          placeholder='search'
          value={search}
          onChange={handleChange}
        />
        <button type='submit' className='navbar__search-button'>
          <SearchIcon className='text-color-light' />
        </button>
      </form>
    </nav>
  )
}

export default Navbar
