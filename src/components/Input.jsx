import React, {useState} from "react";
//Componentes necesarios para la construccion del area de texto y la fecha
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';



function Input(props){
  //Hook para guardar el valor y el estado del item de busqueda
  const [searchItem, setSearchItem] = useState({
    branch: "",
    failAssistDate: ""
  });

//con esta funcion asigno los valores ingresados en el textfield y la fecha
//a la variable searchItem
  function handleChange(event){
    // console.log(event.target.value);
    const {name, value} =   event.target;
    setSearchItem(prevItem => {
      return {...prevItem,
              [name]: value
            }
    })
  }
//Al hacer click en el boton search, accede a la funcion OnSearch, que fue traida
// de App.jsx con props y se pasa como parametro el valor ingresado por el usuario (searchItem)
  function handleSubmit(){
    props.onSearch(searchItem);


  }

   return(
     <div >
     {/*Declaracion de un form utilizando textfield de Material UI */}
      <form  >
        <TextField name="branch"
                   id="outlined-basic"
                   label="Sede"
                   variant="outlined"
                   style={{width: "500px"}}

                   onChange={handleChange} /><br/><br/>
        <TextField name="failAssistDate"
                   id="date"
                   label="Fecha"
                   type="date"
                   defaultValue="2017-05-24"
                   
                   onChange={handleChange}

                 /><br/><br/>
        <Button onClick={handleSubmit} variant="contained">Search</Button>
      </form >
     </div>
   )
}


export default Input;
