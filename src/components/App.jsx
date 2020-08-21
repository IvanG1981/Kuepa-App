import React,{useState} from 'react';
//Componentes importados de archivos jsx
import Input from './Input.jsx';
import Header from './Header.jsx';

// Componentes necesarios para la construccion de la tabla - Material UI
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
//data es un arreglo importado con la información de la base de datos de estudiantes
import data from '../data.js'


//Bloques para declarar el estilo de la tabla (importado de Material UI)
const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
      width: "75%",
      margin: "auto"
    },
  },
}))(TableRow);
const useStyles = makeStyles({
  table: {
    minWidth: 700,
  },
});


function App() {
    const classes = useStyles();
    const [filteredData, setData] = useState(data);
    //Al hacer click en el boton Search se llama la funcion filteredData
    //que toma como parametros a searchItem que viene de Input.jsx por Copyright (c)
    //funcion handleSubmit
    function filterData(searchItem){
      //la funcion toma los items ingresados en los campos de sede y fecha para comparar
      //con el arreglo de la base de datos
      const filteredData = data.filter(student => {
        //devuelve el arreglo donde se encontro la sede y la fecha ingresadas
        return (student.branch === searchItem.branch && student.failAssist.includes(searchItem.failAssistDate));
      })
      //se guarda en el arreglo filtredData los campos filtrados para mostrarlos en la
      //tabla
      setData(filteredData);
    }
    return (
            <div className="main-container">
                <Header />
                <div className="search">
                  {/*filterData se pasa como props al componente Input*/}
                  <Input onSearch={filterData}/>
                </div><br/><br/>
                {/*Declaracion de la tabla segun Material UI Docs */}
                <TableContainer className="tableContainer"  component={Paper}>
                  <Table className={classes.table} style={{width:"75%",margin: "auto"}} aria-label="customized table">
                    <TableHead>
                      <TableRow>
                        <StyledTableCell align="center">Nombre</StyledTableCell>
                        <StyledTableCell align="center">Apellido</StyledTableCell>
                        <StyledTableCell align="center">Sede</StyledTableCell>
                        <StyledTableCell align="center">Programa</StyledTableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                    {/*Se recorre filteredData con un map para insertar cada fila en la tabla */}
                    {/*Como cada item del arreglo filteredData es un objeto, se accede facilmente*/}
                    {/*por notacion dataItem.lastName para insertarlo en la celda requerida*/}
                      {filteredData.map((dataItem,index) => (
                        <StyledTableRow key={index}>
                          <StyledTableCell align="center" component="th" scope="row">
                            {dataItem.firstName}
                          </StyledTableCell>
                          <StyledTableCell align="center">{dataItem.lastName}</StyledTableCell>
                          <StyledTableCell align="center">{dataItem.branch}</StyledTableCell>
                          <StyledTableCell align="center">{dataItem.program}</StyledTableCell>
                        </StyledTableRow>
                      ))}
                    </TableBody>
                  </Table>
                </TableContainer>
            </div>
       );
}

export default App;
