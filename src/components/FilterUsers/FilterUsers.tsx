import { Autocomplete, IconButton, TextField } from '@mui/material'
import { defaultQueries, IQueriesFilterUser } from '../../views/AllUsers'
import styles from './FilterUsers.module.css'
import SearchIcon from '@mui/icons-material/Search'
import ClearIcon from '@mui/icons-material/Clear'
import { useState } from 'react'

export type Options = {
  name: string[]
  username: string[]
  email: string[]
  companyName: string[]
}

interface IFilterUser {
  setQueries: (queries: IQueriesFilterUser) => void
  options: Options
  clearQueries: () => void
}

const FilterUsers = (props: IFilterUser) => {
  const { setQueries, options, clearQueries } = props

  const [temporalQueries, setTemporalQueries] = useState<IQueriesFilterUser>(defaultQueries)

  const handleOnChange = (key: string, value: string) => {
    setTemporalQueries((prev) => ({ ...prev, [key]: value }))
  }

  const search = () => {
    setQueries(temporalQueries)
  }

  const handleClearQueries = () => {
    setTemporalQueries(defaultQueries)
    clearQueries()
  }

  return (
    <div className={styles.containerFIlters}>
      <Autocomplete
        disablePortal
        size='small'
        options={options.name}
        sx={{ width: 200 }}
        value={temporalQueries.name ?? ''}
        onInputChange={(_, value) => handleOnChange('name', value)}
        renderInput={(params) => <TextField {...params} label='Nombre' />}
      />
      <Autocomplete
        disablePortal
        size='small'
        options={options.username}
        sx={{ width: 200 }}
        onInputChange={(_, value) => handleOnChange('username', value)}
        renderInput={(params) => <TextField {...params} label='Nombre de usuario' />}
      />
      <Autocomplete
        disablePortal
        size='small'
        options={options.email}
        sx={{ width: 220 }}
        onInputChange={(_, value) => handleOnChange('email', value)}
        renderInput={(params) => <TextField {...params} label='Email' />}
      />
      <Autocomplete
        disablePortal
        size='small'
        options={options.companyName}
        sx={{ width: 200 }}
        onInputChange={(_, value) => handleOnChange('companyname', value)}
        renderInput={(params) => <TextField {...params} label='Nombre de empresa' />}
      />
      <div className={styles.containerButtons}>
        <IconButton onClick={search}>
          <SearchIcon />
        </IconButton>
        <IconButton onClick={handleClearQueries}>
          <ClearIcon />
        </IconButton>
      </div>
    </div>
  )
}

export default FilterUsers
