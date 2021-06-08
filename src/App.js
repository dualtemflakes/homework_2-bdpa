import React from 'react';
import ReactDOM from 'react-dom';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import CssBaseline from '@material-ui/core/CssBaseline';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import Button from '@material-ui/core/Button'
import IconButton from '@material-ui/core/IconButton'
import ProTip from './ProTip';
import { BrowserRouter as Router, Link as Link1, Route, withRouter, Switch } from 'react-router-dom'

// There's a lot of imports because I tried to do a navbar which didnt work very well
// and im afraid if i delete one of them the whole thing will break

export default function App() {
  return (
    <Router>
      <Container>
        <Box my={4}>
          <Typography style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', fontSize: '40px', color: '#90A9B7' }}>All About Christian</Typography >
          <br></br>
          <Switch>
            <Route exact path="/" component={About} ></Route>
            <Route path="/Hobbies" component={Hobbies} ></Route>
          </Switch>
        </Box>
      </Container>
    </Router>
  );
}

const About = () => (
    <Container>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <Typography style={{ fontSize: '20px', color: '#08D97E' }}>My name is Christian and I am a freshman at Collegiate School of Medicine and Bioscience. I am 14 years old and an only child.</Typography>
      </div>
      <br></br>
      <br></br>
      <br></br>
      <Button variant="outlined" color="secondary" href=" /Hobbies" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>Continue to Hobbies</Button>
    </Container>
  )

const Hobbies = () => (
  <Container>
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <Typography style={{ fontSize: '20px', color: '#08D97E' }}>I enjoy coding, video games, and 3D printing. In my free time, I like to mess with my pc and try out different components. I also enjoy robotics.</Typography>
    </div>
    <br></br>
    <br></br>
    <br></br>
    <Button variant="outlined" color="secondary" href="/" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>Back to About Me</Button>
  </Container>
)
