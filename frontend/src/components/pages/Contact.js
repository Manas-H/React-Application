import React from 'react';

const ImageList = ({ images }) => {
    console.log(images);
    if(images.length > 0) {
        return (
            <div className="row">
                {images.map(element => {
                    return(
                        <img src={element.urls.small} alt="..."  style={{maxHeight: "180px"}} className="col-sm-4 img-thumbnail"></img>
                    );
                })}
            </div>
        );
    }
    return <div className="bg-warning text-center">Not Image to show</div>;
};

export default ImageList;