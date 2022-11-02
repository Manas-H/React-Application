import React from "react";
import { useEffect,useState } from "react";
import { Link } from "react-router-dom";
import Card from "./Card";
import classes from "./product.module.css";

  
  function Product(props) {
    const [isLoading, setIsLoading] = useState(true);
    // const [isHovering, setIsHovering]= useState(false);
    // const [delayHandler, setDelayHandler] = useState(null);

    // const handleMouseOver = (event) => {
    //   setDelayHandler(setTimeout(() => {
       
    
    //   setIsHovering(true);
    // }, 500))
      
    // };
  
    // const handleMouseOut = () => {
    //   setIsHovering(false);
    //   clearTimeout(delayHandler)
    // };
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
              const res= await fetch("http://localhost:5000/api/Product/");
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
        <Card key={index.id} className={classes.Cardd}>  
        <Link to={`${product.productid}`} style={{textDecoration : 0}}>
            <button key={product.id} className={classes.but}>
            <img className ={classes.img} src={(product.images[[0]]) } alt="beer images"></img>
            <div className={classes.diver}>
        <h1 className={classes.title} >{product.name}</h1>
        </div>
        </button>
        </Link>
      </Card>
       ))}
</div>
);
};

export default Product;