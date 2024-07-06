import { Route, Routes } from 'react-router-dom'
import Appbars from '~/components/layouts/Appbars'
import BoardBar from '~/components/layouts/Footer/BoardBar/BoardBar'
import BookDetails from '~/components/layouts/Footer/BookDetails/BookDetails'
import CartPage from '~/pages/Cart.page'

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Appbars />}>
        <Route path="home" element={<BoardBar />} />
        <Route path="checkout/cart" element={<CartPage />} />
        <Route path="product" element={<BookDetails />} />
      </Route>
    </Routes>
  )
}

export default AppRoutes
