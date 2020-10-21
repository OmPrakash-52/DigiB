import React from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
 import Form from './Form';
 import CashDeposit from "./CashDeposit";
 import CashWithdraw from "./CashWithdraw";
 import CheckBalance from "./CheckBalance";


const useStyles = makeStyles((theme) => ({
  root: {
    height: "100vh",
  },
  paper: {
    margin: theme.spacing(2, 4),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  // avatar: {
  //   margin: theme.spacing(1),
  //   backgroundColor: theme.palette.secondary.main,
  // },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(2.5, 0, 2),
  },
}));




export default function Home() {
  ; {
  const classes = useStyles();

  return (
    <Router>
      <Grid container component="main" className={classes.root}>
        <Grid item xs={2} sm={8} md={5} component={Paper} elevation={6} square>
          <div className={classes.paper}>
            <Avatar className={classes.avatar}></Avatar>
             <Typography component="h1" variant="h6">
              HOME
            </Typography> 
            <nav>
              <form className={classes.form} noValidate>
                <Button
                  type="submit"
                  fullWidth
                  variant="outlined"
                  color="primary"
                  className={classes.submit}
                >
                  <Link to="/Form">Register</Link>
                </Button>

                <Button
                  type="submit"
                  fullWidth
                  variant="outlined"
                  color="primary"
                  className={classes.submit}
                >
                   <Link to="/CashWithdraw">CashWithdraw</Link>
                </Button>
                <Button
                  type="submit"
                  fullWidth
                  variant="outlined"
                  color="primary"
                  className={classes.submit}
                > 
                   <Link to="/CashDeposit">CashDeposit</Link>
                </Button>
                <Button
                  type="submit"
                  fullWidth
                  variant="outlined"
                  color="primary"
                  className={classes.submit}
                > 
                  <Link to="/CheckBalance">CheckBalance</Link>
                </Button>
              </form>
            </nav>
             <Switch>
              <Route path="/CashWithdraw">
                <CashWithdraw></CashWithdraw>
              </Route>
              <Route path="/CashDeposit">
                <CashDeposit></CashDeposit>
              </Route>
              <Route path="/CheckBalance">
                <CheckBalance> </CheckBalance>
              </Route>
              <Route path="/Form">
                <Form></Form>
              </Route>
            </Switch> 
          </div>
        </Grid>
      </Grid>
    </Router>
  );
}
}