import TextField from '@mui/material/TextField'
import InputAdornment from '@mui/material/InputAdornment'
import SearchIcon from '@mui/icons-material/Search'
import { useState } from 'react'
import CloseIcon from '@mui/icons-material/Close'

function Search() {
  const [searchValue, setSearchValue] = useState('')
  return (
    <TextField
      id="outlined-basic"
      label="find books"
      variant="outlined"
      size="small"
      value={searchValue}
      onChange={(e) => setSearchValue(e.target.value)}
      sx={{
        width: '555px'
      }}
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <SearchIcon />
          </InputAdornment>
        ),

        endAdornment: (
          <CloseIcon
            fontSize="small"
            sx={{
              color: searchValue ? 'white' : 'transparent',
              cursor: 'pointer'
            }}
            onClick={() => setSearchValue('')}
          />
        )
      }}
    />
  )
}

export default Search
