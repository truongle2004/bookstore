import React from 'react'

export default function createSafeContext() {
  const context = React.createContext(undefined)

  function useContext() {
    const value = React.useContext(context)
    if (value === undefined) {
      // Throw error to ensure custome hook is only used within a context provider
      throw new Error('useContext must be inside a Provider with a value')
    }
    return value
  }

  return [useContext, context.Provider]
}
