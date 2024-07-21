import { useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { removeProductFromCart } from '~/axios/services'
import createSafeContext from '~/lib/createSafeContext'
import { SubtractMoney } from '~/redux/features/cart/CartMoney'
import { removeSelectedCheckBox } from '~/redux/features/cart/CountProductSelected'

const [useCart, Provider] = createSafeContext()

function CartItemProvider({ children }) {
  const listProducts = useSelector((state) => state.ListProducts.productsCart)
  const dispatch = useDispatch()
  const handleSubtractMoney = (money) => dispatch(SubtractMoney(money))
  const handleSetQuantityRemove = (quantity) =>
    dispatch(removeSelectedCheckBox(quantity))
  const handleRemoveItem = useCallback(
    async (id, previousQuantity, price) => {
      try {
        const res = await removeProductFromCart(id)
        if (res) {
          handleSubtractMoney(previousQuantity * price)
          handleSetQuantityRemove(1)
        }
      } catch (error) {
        console.error(error)
      }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [dispatch]
  )
  return (
    <Provider
      value={{
        handleRemoveItem,
        handleSubtractMoney,
        listProducts
      }}
    >
      {children}
    </Provider>
  )
}

export default CartItemProvider
export { useCart }
