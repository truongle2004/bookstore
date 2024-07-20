import { Route, Routes } from 'react-router-dom'
import Appbars from '~/components/Appbars'
import CartPage from '~/pages/CartPage'
import ProductDetail from '~/pages/ProductDetail/ProductDetail'
import Box from '@mui/material/Box'
import CartFooterCheckout from '~/components/Footer/CartFooterCheckout'
import Home from '~/pages/Home'
import Purchase from '~/pages/Purchase'
import DialogRequire from '~/components/DialogRequire'
import AdminPage from '~/pages/Admin/Admin'

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Appbars />}>
        <Route index path="home" element={<Home />} />
        <Route
          path="checkout/cart"
          element={
            <Box>
              <DialogRequire />
              <CartPage />
              <CartFooterCheckout />
            </Box>
          }
        />
        <Route path="product/:id" element={<ProductDetail />} />
        <Route path="user/purchase" element={<Purchase />} />
        <Route path="authentication/admin" element={<AdminPage />} />
      </Route>
    </Routes>
  )
}

export default AppRoutes
