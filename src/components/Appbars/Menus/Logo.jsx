import React from 'react'

function Logo() {
  return (
    <img
      alt="logo"
      src="https://cdn0.fahasa.com/skin/frontend/ma_vanese/fahasa/images/fahasa-logo.png"
      style={{
        width: '10rem',
        cursor: 'pointer'
      }}
    />
  )
}

export default React.memo(Logo)
