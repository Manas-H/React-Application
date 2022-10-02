import React from 'react';
//import images from '../images/bg.png';
import classes from './chooseus.module.css';
//import images from '../images/ad.jpeg';
//import comb from '../images/comb.png';

const Choose = () => { 

    return (
       <>
        <div className={classes.chdiv}>
            <div className={classes.container}>
            <div className={classes.bannerdiv}>
            </div>
            </div>
            </div>
            
                <div className={classes.div2}>
            <div className={classes.headdiv}>
                {/* <img className={classes.imgc}src={images} alt="Why choose us"></img> */}
            <h1 className={classes.head1}>WHY <br/>CHOOSE <br/>US?</h1>
            </div>
            {/* <h1 className={classes.head1}>WHY CHOOSE US!!</h1> */}
            </div>
            
            </>
           );
 }

 export default Choose;