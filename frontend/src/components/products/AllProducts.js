import React from "react";
import { useEffect,useState } from "react";
import Card from "./Card";
import classes from "./product.module.css";

  
  function Product(props) {
  
    const [isLoading, setIsLoading] = useState(true);
    const [isHovering, setIsHovering]= useState(false);
    const [delayHandler, setDelayHandler] = useState(null);

    const handleMouseOver = (event) => {
      setDelayHandler(setTimeout(() => {
       

      setIsHovering(true);
    }, 500))
      
    };
  
    const handleMouseOut = () => {
      setIsHovering(false);
      clearTimeout(delayHandler)
    };
    // const handleClick = () => { 
    //   setonMouse(current)
    // }
    // const [loadedMeetups=[], setLoadedMeetups] = useState([]);
  
    // useEffect(() => {
    //   setIsLoading(true);
    //   fetch(
    //     'http://localhost:5000/api/product/'
    //   )
    //     .then((response) => {
    //       return response.json();
    //     })
    //     .then((data) => {
    //       const products = [];
  
    //       for (const key in data) {
    //         const prd = {
    //           productid: key,
    //           ...data[key]
    //         };
  
    //         products.push(prd);
    //       }
  
    //       setIsLoading(false);
    //       setLoadedMeetups(products);
    //     });
    // }, []);
          const [hasError, setErrors] = useState(false);
         const [Name,setName] = useState([]);
       
         async function fetchData() {
              // let arrr =[];
              const res= await fetch("http://localhost:5000/api/product/");
           let data= await res.json();
            // let Name= data;
            //  data = data.filter(e => e.seriesid === {value});
            setName(data);
            console.log(Name);
            res
             .json()
            .catch(err => setErrors(err))
            .then(hasError);
          }
           
        useEffect(() =>{
          setIsLoading(true);
            fetchData().then(() =>setIsLoading(false));
           
             // eslint-disable-next-line
           },[]);
    if (isLoading) {
      return (
        <section>
          <p>Loading...</p>
        </section>
      );
    }
     return(
     
     <div className={classes.body}>
      
     {/* {Name.map((product,index) =>(
      <li key={index.id}>{JSON.stringify(product.images).split(",")}</li>
     ))} */}
     
      {Name.filter(e => e.seriesid === props.value).map((product,index) =>(
        <Card>
          <button  className={classes.but}onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
          {isHovering===false && (
            <img className ={classes.img}key={index.id} src={(product.images[[0]]) } alt="beer images"></img>
        )}
        {isHovering===true && (
            <img className ={classes.img}key={index.id} src={(product.images[[1]]) } alt="beer images"></img>
        )}
        </button>
        <h1 className={classes.title} key={index.id}>{product.name}</h1>
      </Card>
       ))}
</div>
);
};


export default Product;