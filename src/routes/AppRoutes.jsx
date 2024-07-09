import { Route, Routes } from 'react-router-dom'
import Appbars from '~/components/Appbars'
import BoardBar from '~/components/BoardBar/BoardBar'
import ProductDetailPages from '~/pages/ProductDetaitPages'
import CartPage from '~/pages/CartPage'
import Box from '@mui/material/Box'
import CartFooterCheckout from '~/components/Footer/CartFooterCheckout'
import Home from '~/pages/Home'

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Appbars />}>
        <Route path="home" element={<Home />} />
        <Route
          path="checkout/cart"
          element={
            <Box>
              <CartPage />
              <CartFooterCheckout />
            </Box>
          }
        />
        <Route path="product" element={<ProductDetailPages />} />
      </Route>
    </Routes>
  )
}

export default AppRoutes
