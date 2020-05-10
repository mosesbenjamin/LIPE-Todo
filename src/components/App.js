import React from 'react';
import TodoApp from './TodoApp';
import useStyles from '../styles/AppStyles';
import Particles from 'react-particles-js';


const particlesOptions = {
                particles: {
                  number: {
                    value:80,
                    density: {
                      enable: true,
                      value_area: 800
                    }
                  }
                }
              }

const App = ()=> {
  const classes = useStyles();
  return (
    <div className={classes.App}>
      <Particles className={classes.particles}
        params = {particlesOptions}
        />
      <header className={classes.header}>
        <h1>
          LIPE  <span>To-do</span>
        </h1>
      </header>
      <TodoApp />
      <p className={classes.pg}>Made with love by Moses Benjamin for the LIPE</p>
    </div>
  );
}

export default App;
