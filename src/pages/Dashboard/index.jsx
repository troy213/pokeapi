import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import ReactPaginate from 'react-paginate'
import PokemonList from './PokemonList'
import { fetchPokemon } from '../../store/pokemon-slice'

const ITEM_PER_PAGE = 20

const Dashboard = () => {
  const [itemOffset, setItemOffset] = useState(0)

  const navigate = useNavigate()
  const { page } = useParams()
  const pageOffset = page && (page - 1) * ITEM_PER_PAGE

  const dispatch = useDispatch()
  const { count, pageCount, data, isLoading } = useSelector(
    (state) => state.pokemon
  )

  useEffect(() => {
    dispatch(
      fetchPokemon({ offset: pageOffset ?? itemOffset, limit: ITEM_PER_PAGE })
    )
  }, [itemOffset])

  const handlePageClick = (e) => {
    navigate(`/page/${e.selected + 1}`)
    const newOffset = (e.selected * ITEM_PER_PAGE) % count
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
          pageRangeDisplayed={1}
          marginPagesDisplayed={1}
          pageCount={pageCount}
          forcePage={page ? page - 1 : 0}
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
