import { useState, useEffect } from 'react'
import { toast } from 'react-toastify'
import ReactPaginate from 'react-paginate'
import axios from '../../api/axios'
import PokemonList from './PokemonList'

const ITEM_PER_PAGE = 20

const Dashboard = () => {
  const [data, setData] = useState([])
  const [totalData, setTotalData] = useState(0)
  const [pageCount, setPageCount] = useState(0)
  const [itemOffset, setItemOffset] = useState(0)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    setIsLoading(true)
    const getPokemons = async () => {
      try {
        const response = await axios.get(
          `/pokemon/?offset=${itemOffset}&limit=${ITEM_PER_PAGE}`
        )
        const count = response.data.count
        const urls = response.data.results.map((pokemon) => pokemon.url)
        const promises = urls.map(async (url) => {
          const response = await axios.get(url)
          return response.data
        })
        const results = await Promise.all(promises)
        setData(results)
        setTotalData(count)
        setPageCount(Math.ceil(count / ITEM_PER_PAGE))
        setIsLoading(false)
      } catch (error) {
        setIsLoading(false)
        console.error(error)
        toast.error('something went wrong')
      }
    }

    getPokemons()
  }, [itemOffset])

  const handlePageClick = (e) => {
    const newOffset = (e.selected * ITEM_PER_PAGE) % totalData
    setItemOffset(newOffset)
  }

  return (
    <section className='dashboard flex-column flex-1 flex-justify-center flex-align-center'>
      <PokemonList data={data} isLoading={isLoading} />
      {data.length ? (
        <ReactPaginate
          breakLabel='...'
          nextLabel='next'
          onPageChange={handlePageClick}
          pageRangeDisplayed={2}
          marginPagesDisplayed={1}
          pageCount={pageCount}
          previousLabel='prev'
          renderOnZeroPageCount={null}
          className='pagination mt-8'
          pageClassName='pagination__item'
          pageLinkClassName='pagination__link'
          previousClassName='pagination__item'
          previousLinkClassName='pagination__link'
          nextClassName='pagination__item'
          nextLinkClassName='pagination__link'
          breakClassName='pagination__item'
          breakLinkClassName='pagination__link'
          activeClassName='pagination__item--active'
        />
      ) : null}
    </section>
  )
}

export default Dashboard
