import React from "react";
//Componentes importados de Material UI para la construccion del nav-bar
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import MenuIcon from '@material-ui/icons/Menu';
import Avatar from '@material-ui/core/Avatar';


function Header(){

   return(
     <div >
      <AppBar position="static" >
        <Toolbar style={{backgroundColor: "#FFFFFF"}}>
            <MenuIcon style={{color: "#555"}}/>
            <img src="http://www.kuepa.com/img/kuepastrap/brandlogo@2x.png" alt="kuepa-logo" width="100px"/>
            <Avatar className="avatar" ></Avatar>
        </Toolbar>
      </AppBar>
    </div>
   )
}


export default Header;
