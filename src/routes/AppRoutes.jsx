import { Route, Routes } from 'react-router-dom'
import Appbars from '~/components/Appbars'
import ProductDetailPages from '~/pages/ProductDetailPages'
import CartPage from '~/pages/CartPage'
import Box from '@mui/material/Box'
import CartFooterCheckout from '~/components/Footer/CartFooterCheckout'
import Home from '~/pages/Home'
import Purchase from '~/pages/Purchase'
import SwipeableEdgeDrawer from '~/components/SwipeableEdge'

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Appbars />}>
        <Route index path="home" element={<Home />} />
        <Route
          path="checkout/cart"
          element={
            <Box>
              <CartPage />
              <CartFooterCheckout />

              <SwipeableEdgeDrawer />
            </Box>
          }
        />
        <Route path="product" element={<ProductDetailPages />} />
        <Route path="user/purchase" element={<Purchase />} />
      </Route>
    </Routes>
  )
}

export default AppRoutes
