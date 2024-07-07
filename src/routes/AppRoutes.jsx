import { Route, Routes } from 'react-router-dom'
import Appbars from '~/components/Appbars'
import BoardBar from '~/components/BoardBar/BoardBar'
import ProductDetailPages from '~/pages/ProductDetaitPages'
import CartPage from '~/pages/CartPage'

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Appbars />}>
        <Route path="home" element={<BoardBar />} />
        <Route path="checkout/cart" element={<CartPage />} />
        <Route path="product" element={<ProductDetailPages />} />
      </Route>
    </Routes>
  )
}

export default AppRoutes
