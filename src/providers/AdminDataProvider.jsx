import createSafeContext from '~/lib/createSafeContext'
import { useState } from 'react'
import { useSelector } from 'react-redux'

const [useData, Provider] = createSafeContext()
function AdminPageProvider({ children }) {
  const [data, setData] = useState({})
  const listBook = useSelector((state) => state.ListProducts.listAllProduct)
  const [openFormEdit, setOpenFormEdit] = useState(false)
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
