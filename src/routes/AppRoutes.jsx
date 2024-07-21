import Box from '@mui/material/Box'
import { Route, Routes } from 'react-router-dom'
import Appbars from '~/components/Appbars'
import DialogRequire from '~/components/Dialogs/UserProfile/DialogRequire'
import CartFooterCheckout from '~/components/Footer/CartFooterCheckout'
import AdminPage from '~/pages/Admin/Admin'
import Cart from '~/pages/Cart/Cart'
import Home from '~/pages/Home/Home'
import ProductDetail from '~/pages/ProductDetail/ProductDetail'
import Purchase from '~/pages/Purchase/Purchase'

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
              <Cart />
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
