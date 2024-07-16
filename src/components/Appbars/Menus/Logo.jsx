import React from 'react'
import { useNavigate } from 'react-router-dom'

function Logo() {
  const navigate = useNavigate()
  return (
    <img
      alt="logo"
      src="https://cdn0.fahasa.com/skin/frontend/ma_vanese/fahasa/images/fahasa-logo.png"
      style={{
        width: '10rem',
        cursor: 'pointer'
      }}
      onClick={() => navigate('/home')}
    />
  )
}

export default React.memo(Logo)
