import { DataGrid, GridColDef } from '@mui/x-data-grid'
import Paper from '@mui/material/Paper'

import { IUser } from '../../domain/User'
import { useNavigate } from 'react-router'

export interface ITableUsers {
  users: IUser[]
  loading: boolean
}

const columns: GridColDef[] = [
  { field: 'name', headerName: 'Nombre', width: 170 },
  { field: 'username', headerName: 'Nombre de usuario', width: 170 },
  { field: 'phone', headerName: 'Teléfono', width: 130 },
  {
    field: 'email',
    headerName: 'Email',
    type: 'string',
    width: 170
  },
  {
    field: 'city',
    headerName: 'Ciudad',
    width: 160,
    valueGetter: (value, row) => `${row.address.city || ''}`
  },
  {
    field: 'company',
    headerName: 'Empresa',
    type: 'string',
    width: 180,
    valueGetter: (value, row) => `${row.company.name || ''}`
  }
]

const TableUsers = (props: ITableUsers) => {
  const { users, loading } = props
  const paginationModel = { page: 0, pageSize: 5 }
  const navigate = useNavigate()
  const handleRowClick = (e: any) => {
    navigate(`/userDetails/${e.id}`)
  }

  return (
    <Paper sx={{ height: 700, width: 1000 }}>
      <DataGrid
        loading={loading}
        rows={users}
        columns={columns}
        autoPageSize
        disableColumnFilter
        disableColumnSelector
        initialState={{ pagination: { paginationModel } }}
        pageSizeOptions={[5, 10]}
        localeText={{ noRowsLabel: "No se han encontrado resultados para esta búsqueda." }}
        sx={{
          border: 0,
          '.MuiDataGrid-columnHeaderTitleContainer': { fontSize: 16, color: '#232325' }
        }}
        onRowClick={handleRowClick}
      />
    </Paper>
  )
}
export default TableUsers
