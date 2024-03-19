import {
  Box,
  Checkbox,
  Container,
  IconButton,
  Typography,
} from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import {
  MaterialReactTable,
  useMaterialReactTable,
} from 'material-react-table';

const Table = ({ columns, data, handleDelete }) => {
  const table = useMaterialReactTable({
    columns,
    data,
    enableStickyHeader: true,
    enableColumnPinning: true,
    enableRowSelection: true,
    enableFullScreenToggle: true,
    enableRowActions: true,
    renderRowActionMenuItems: ({ row }) => [
      <Box>
        {/* <div>
          <IconButton onClick={() => console.info('Edit')}>
            <EditIcon sx={{ color: 'green' }} />
            <Typography sx={{ ml: 1 }}>Edit</Typography>
          </IconButton>
        </div> */}
        <div>
          <IconButton onClick={() => handleDelete(row.original.id)}>
            <DeleteIcon sx={{ color: 'red' }} />
            <Typography sx={{ ml: 1 }}>Delete</Typography>
          </IconButton>
        </div>
      </Box>,
    ],
    initialState: {
      // showColumnFilters: true,
      // showGlobalFilter: true,
      columnPinning: {
        left: ['mrt-row-expand', 'mrt-row-select'],
        right: ['mrt-row-actions'],
      },
    },
  });

  return (
    <Container>
      <MaterialReactTable table={table} />
    </Container>
  );
};

export default Table;
