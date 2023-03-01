
import './App.css';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import TableBody from '@mui/material/TableBody';
import  Login  from './Login';

function App() {
  const data = [
    {
      "name": "satheesh1",
      "id": "1"
    },
    {
      "name": "satheesh2",
      "id": "2"
    },
    {
      "name": "satheesh3",
      "id": "3"
    },
    {
      "name": "satheesh4",
      "id": "4"
    }
  ]

  return (
<>
    
      <TableContainer>
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell>NAME</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {
            data.map((list, index) => {
              return (
                <TableRow key={index}>
                  <TableCell>{index + 1}</TableCell>
                  <TableCell>{list.name}</TableCell>

                </TableRow>
              )
            })
          }
        </TableBody>
      </TableContainer>
    <Login/>
    </>
  )
}


export default App;
