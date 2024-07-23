import createSafeContext from '~/lib/createSafeContext'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { handleRemoveProduct } from '~/axios/handleUserServices'
import { fetchAllProducts } from '~/redux/features/components/ListProducts'

const [useData, Provider] = createSafeContext()
function AdminPageProvider({ children }) {
  const [data, setData] = useState({})
  const listBook = useSelector((state) => state.ListProducts.listAllProduct)
  console.log(listBook);
  const [openFormEdit, setOpenFormEdit] = useState(false)
  const dispatch = useDispatch()
  const handleOpenFormEdit = () => {
    setOpenFormEdit(true)
  }

  const handleCloseFormEdit = () => {
    setOpenFormEdit(false)
  }
  const handleSetProductData = (id) => {
    setData(listBook.find((data) => data.id === id))
  }


  return (
    <Provider
      value={{
        handleSetProductData,
        data,
        handleOpenFormEdit,
        openFormEdit,
        handleCloseFormEdit
      }}
    >
      {children}
    </Provider>
  )
}

export default AdminPageProvider
export { useData }
