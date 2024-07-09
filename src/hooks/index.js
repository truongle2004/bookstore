import { useState } from 'react'

export const useControlQuantity = () => {
  const [quantity, setQuantity] = useState(1)
  const handleIncrease = () => setQuantity((prev) => prev + 1)
  const handleReduce = () => setQuantity((prev) => (prev > 1 ? prev - 1 : prev))

  return {
    quantity,
    handleIncrease,
    handleReduce
  }
}
