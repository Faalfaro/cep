import React, { useState } from 'react';

import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';


import makeStyles from '@material-ui/core/styles/makeStyles';

const useStyles = makeStyles((theme) => ({
  gridContainer: {
    marginTop: "3rem",
    height:"100vh",
  },
  button:{
    color:" #6c757d",
    marginTop:"1rem",
    width:"100%",
    fontWeight:"bold"
  },
  paper: {
    color:" #6c757d",
    padding:"1rem",
    margin:"1rem",
    height:"70%",
    backgroundColor:"#ced4da"
  },
  query:{
    margin:"2rem 1rem",
  },
  listItem:{
    margin: "1.5rem 0rem",
    paddingLeft:"1rem",
    fontWeight:"bold"
  },
  nestedItem:{
    paddingLeft:"2rem",
  }
}));


const Home = () => {

  const classes = useStyles();
  const [queries, setQueries] = useState("");

  const getQueries = () => {
    fetch('http://localhost:8080/queries')
        .then(response => response.json())
        .then(data => setQueries(data.data));
  };

    return (
      <Container className={classes.gridContainer}>
        <Button 
        className={classes.button} 
        variant="contained" 
        size="medium" 
        color="primary"
        onClick={()=>getQueries()}
        >
          Listar Queries
          </Button>
        <Paper className={classes.paper} elevation={3}>
        {queries !== ""
        ?
        queries.map((value, index) => {
          const queryData = JSON.parse(value);
          return (
            <div className={classes.query} key={index}>
              <h3>{queryData.name}</h3>
              <li className={classes.listItem} >
                  Query:  
                  <ul className={classes.nestedItem} >
                    {queryData.query} 
                  </ul>
                </li>
              <li className={classes.listItem} >
                  Stats: 
                  <ul className={classes.nestedItem} >
                    Max trigger time: {queryData.stats.max_trigger_time} 
                  </ul>
                  <ul className={classes.nestedItem} >
                    Time sice last trigger: {queryData.stats.time_since_last_trigger} 
                  </ul>
                  <ul className={classes.nestedItem} >
                    Average trigger time: {queryData.stats.avg_trigger_time} 
                  </ul>
                </li>
                <Divider />
            </div>
          )
        })
        :
        ""
        }
          </Paper> 
        </Container>
    )
  };
  
export default Home;