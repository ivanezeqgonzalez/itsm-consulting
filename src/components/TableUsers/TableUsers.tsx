import * as React from 'react'
import { DataGrid, GridColDef, GridEventListener } from '@mui/x-data-grid'
import Paper from '@mui/material/Paper'

import { IUser } from '../../domain/User'
import { useNavigate, userNavigate } from 'react-router'

export interface ITableUsers {
  users: IUser[]
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
    sortable: false,
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
  const { users } = props
  const paginationModel = { page: 0, pageSize: 5 }
  const navigate = useNavigate();
  const handleCellClick = (e: any) =>  {
    console.log(e.id);
    navigate(`/userDetails/${e.id}`)
  }

  return (
    <Paper sx={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={users}
        columns={columns}
        initialState={{ pagination: { paginationModel } }}
        pageSizeOptions={[5, 10]}
        checkboxSelection
        sx={{ border: 0 }}
        onCellClick={handleCellClick}
      />
    </Paper>
  )
}
export default TableUsers
