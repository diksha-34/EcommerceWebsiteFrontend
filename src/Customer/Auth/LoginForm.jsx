import { Button, Grid, TextField } from "@mui/material";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getUser, login } from "../../State/Auth/Action";
import { useDispatch, useSelector } from "react-redux";

const LoginForm = () => {
  const dispatch=useDispatch();
  const jwt=localStorage.getItem("jwt")
  const navigate=useNavigate();
  const {auth}=useSelector(store=>store);

  useEffect(()=>{
    if(jwt){
      dispatch(getUser(jwt));
    }
  }, [jwt, auth.jwt])

  const handleSubmit = (event) => {
    event.preventDefault()

    const data=new FormData(event.currentTarget);
    const userData={
      firstName:data.get("firstName"),
      lastName:data.get("lastName"),
      email:data.get("email"),
      password:data.get("password")
    }
    
    dispatch(login(userData))
    console.log(userData);
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <TextField
              required
              id="email"
              name="email"
              label="Email"
              fullWidth
              autoComplete="email"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              required
              id="password"
              name="password"
              label="Password"
              fullWidth
              autoComplete="password"
            />
          </Grid>
          <Grid item xs={12}>
            <Button className="w-full"
                    type="submit"
                    variant="contained"
                    size="large"
                    sx={{padding:"0.8rem 0", bgcolor:"#9155FD"}}
            >
              Login
            </Button>
          </Grid>
        </Grid>
      </form>
      <div  className="flex justify-center flex-col items-center">
        <div className="py-3 flex items-center">
          <p>If you don't have an account</p>
          <Button onClick={()=>navigate("/register")} className='ml-5' size='small'>Register</Button>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
