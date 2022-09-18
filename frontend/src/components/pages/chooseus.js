import React from 'react';
//import images from '../images/bg.png';
import classes from './chooseus.module.css';
import Fade from 'react-reveal/Fade';

const Choose = () => { 

    return (
        //style={{backgroundImage:`url(${images})` }}
        <div className={classes.chdiv}>
            <Fade duration={2000} delay={200}>
                <div className={classes.div2}>
            <div className={classes.headdiv}>
            </div>
            <h1 className={classes.head1}>WHY CHOOSE US!!</h1>
            </div>
            </Fade>
          </div>
           );
 }

 export default Choose;