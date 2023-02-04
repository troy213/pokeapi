import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Layout } from './components'
import { Dashboard, NotFound, PokemonDetail } from './pages'

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route path='/' element={<Dashboard />} />
          <Route path='pokemon-detail/:id' element={<PokemonDetail />} />
        </Route>
        <Route path='*' element={<NotFound />} />
      </Routes>
    </Router>
  )
}

export default App
