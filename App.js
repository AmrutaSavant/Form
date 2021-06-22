import React, { useState } from "react";
import "./styles/App.css";
import { Container, Paper, Box, Grid, TextField,IconButton,Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100vw",
    height: "100vh",
    backgroundColor: theme.palette.grey[300],
    paddingTop: theme.spacing(5),
  },
  inputGroup: {
    marginBottom: theme.spacing(1),
  },
}));

function App() {
  const classes = useStyles();
  const userTemplate = {fname:"", lname:"",contact:"",email:"",eid:""}
  const [users,setUsers]=useState([userTemplate]);
  const addUser = () => {
    setUsers([...users,userTemplate]);
  };
  const onChange = (e, index) => {
    const updatedUsers = users.map((user,i) => index === i ? 
    Object.assign(user, {[e.target.name]: e.target.value}): user
    );
setUsers(updatedUsers);
  };
  const removeUser = (index) => {
    const filteredUsers = [...users];
    filteredUsers.splice(index, 1);
    setUsers(filteredUsers);
  }
  return (
    <Container className={classes.root}>
      <Paper component={Box}  p={4}>
        {
       users.map((user,index)=> (
       <Grid container spacing={3} key={index} className={classes.inputGroup}>
        <Grid item md={2}>
          <TextField
          label="First Name"
          placeholder="Enter your First Name"
          variant="outlined"
          name="fname"
          onChange={e => onChange(e,index)}
          value={user.fname}
          pattern="[A-ZA-z]{3}"  title ="name invalid "required
          fullWidth
          />
          </Grid>
          <Grid item md={2}>
          <TextField
          label="Last Name"
          placeholder="Enter your Last Name"
          variant="outlined"
          name="lname"
          onChange={e => onChange(e,index)}
          value={user.lname}
          pattern="[A-ZA-z]{3}" required
          fullWidth
          />
          </Grid>
          <Grid item md={2}>
          <TextField
          label="Contact"
          placeholder="Enter your Contact Number"
          variant="outlined"
          name="contact"
          onChange={e => onChange(e,index)}
          value={user.contact}
          pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}" required
          fullWidth
          />
          </Grid>
          <Grid item md={3}>
          <TextField
          label="E-mail"
          placeholder="Enter your E-mail Address"
          variant="outlined"
          name="email"
          onChange={e => onChange(e,index)}
          value={user.email}
          pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$" required
          fullWidth
          />
          </Grid>
          <Grid item md={2}>
          <TextField
          label="Employeeid"
          placeholder="Id from e1-e100"
          variant="outlined"
          name="eid"
          onChange={e => onChange(e,index)}
          value={user.eid} required
          fullWidth
          />
          </Grid>
          <Grid item md={1}>
          <IconButton color="secondary" onClick={() => removeUser(index)}>
            <DeleteOutlineIcon />
            </IconButton> 
          </Grid>
          </Grid> 
          ))
        }
        <Button variant="contained" color="primary" onClick={addUser}> Add More</Button>
      </Paper>
    </Container>
  );
}

export default App;
