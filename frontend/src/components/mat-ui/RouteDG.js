import * as React from 'react';
import { DataGrid } from '@material-ui/data-grid';

export default function RouteDG({rows}) {

    console.log(rows)

    const columns = [
        // { field: 'id', headerName: 'ID', width: 50 },
        {
            field: 'route_desc',
            headerName: 'Description',
            description: 'This column has a value getter and is not sortable.',
            sortable: false,
            width: 160,
            editable: true,
        },
        {
          field: 'grade',
          headerName: 'Grade',
          width: 120,
          editable: true,
        },
        {
          field: 'attempts',
          headerName: 'Attempt',
          width: 130,
          editable: true,
        },
        {
          field: 'timing',
          headerName: 'Timing',
          type: 'number',
          width: 120,
          editable: true,
        },
        {
          field: 'data_attempted',
          headerName: 'Date of Attempt',
          type: 'number',
          width: 250,
          editable: true,
        },
        
      ];
      
  return (
    <div style={{ height: 400, width: '100%' }}>
        <DataGrid
        rows={rows}
        columns={columns}
        pageSize={5}
        checkboxSelection
        disableSelectionOnClick
        />
    </div>
  );
}

