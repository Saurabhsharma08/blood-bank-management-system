import * as React from "react";

// importing material UI components
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";

 const  Header=()=> {
return (
	<AppBar position="static" style={{backgroundColor:'red'}}>
		<Toolbar>
		{/*Inside the IconButton, we
		can render various icons*/}
		<IconButton
			size="large"
			edge="start"
			color="inherit"
			aria-label="menu"
			sx={{ mr: 2 }}
		>
			{/*This is a simple Menu
			Icon wrapped in Icon */}
			<MenuIcon />
		</IconButton>
		{/* The Typography component applies
		default font weights and sizes */}

		<Typography variant="h6"
			component="div" sx={{ flexGrow: 1 }}>
			Blood Donation Management
		</Typography>
		<Button color="inherit">Home</Button>
		<Button color="inherit" style={{textDecoration:'underline  cyan 1px' , color:'white'  }}>Want to Donate Blood</Button>
		<Button color="inherit" style={{textDecoration:'underline  cyan 1px'  }}>Looking for blood</Button>
		<Button color="inherit"  >About</Button>
		<Button color="inherit" style={{backgroundColor:'blue',margin:'0 5px'}}>Login</Button>
		<Button color="inherit"style={{backgroundColor:'blue'}}>SignUp</Button>
		</Toolbar>
	</AppBar>
);
}

export default Header