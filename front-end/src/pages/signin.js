import React from 'react';
import { TextField, Container, Paper, Grid, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '25ch'
    },
    textAlign: 'center',
    padding: '80px'
  }
}));

const SignInPage = () => {
  const classes = useStyles();
  return (
    <div id='login'>
      <Grid
        container
        spacing={0}
        direction='row'
        alignItems='center'
        justify='center'
        style={{ minHeight: '100vh' }}
      >
        <Grid item xs={3}>
          <Paper elevation={3}>
            <form className={classes.root} noValidate autoComplete='off'>
              <h1>Login</h1>
              <div>
                <TextField
                  required
                  id='standard-basic'
                  label='Name'
                  type='text'
                />

                <TextField
                  required
                  id='standard-password-input'
                  label='Password'
                  type='password'
                  autoComplete='current-password'
                />
              </div>

              <Button variant='contained' color='primary'>
                Login
              </Button>
            </form>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
};

export default SignInPage;
