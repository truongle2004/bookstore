import { useDispatch } from 'react-redux'
import createSafeContext from '~/lib/createSafeContext'
import { useCallback, useState } from 'react'
import { removeProductFromCart } from '~/axios/services'
import { SubtractMoney } from '~/redux/features/cart/CartMoney'
import { removeSelectedCheckBox } from '~/redux/features/cart/CountProductSelected'
import { useSelector } from 'react-redux'

const [useCart, Provider] = createSafeContext()

function CartItemProvider({ children }) {
  const listProducts = useSelector((state) => state.ListProducts.productsCart)
  const dispatch = useDispatch()
  const handleSubtractMoney = (money) => dispatch(SubtractMoney(money))
  const [isRemoved, setIdRemoved] = useState(false)
  const handleSetQuantityRemove = (quantity) =>
    dispatch(removeSelectedCheckBox(quantity))
  const handleRemoveItem = useCallback(
    async (id, previousQuantity, price) => {
      try {
        const res = await removeProductFromCart(id)
        if (res) {
          handleSubtractMoney(previousQuantity * price)
          handleSetQuantityRemove(1)
          setIdRemoved(true)
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
