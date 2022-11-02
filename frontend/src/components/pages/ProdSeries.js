import React from "react";
import { Link } from 'react-router-dom'

const ProdSeries = () => {
  return (
    <div className="series-sec">
      <h2>Product Series</h2>
      <div className="series">
        <div className="series-c-1">
          <Link to="/Rectangle" className="button">Rectangle Series</Link>
          <Link to="/Round" className="button">Round Series</Link>
          <Link to="/Vertical" className="button">Vertical Series</Link>
        </div>
        <div className="series-c-1 series-c-2">
          <Link to="/Bowl" className="button">Bowl Series</Link>
          <Link to="/allProduct" className="button">All Products</Link>
        </div>
      </div>
    </div>
  );
};

export default ProdSeries;
