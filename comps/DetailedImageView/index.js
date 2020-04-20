import React from 'react';
import './detailedimage.css'

const Detailedimageview = ({location_txt, date_txt, img}) => <div>

<link href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet" />

<div className="view">
    <div className="Header_content">
        <h1 className="header_txt" > {location_txt} </h1>
        <h1 className="header_txt" > {date_txt} </h1>
    </div>
    <div className="image_placeholder">
        {img}
        <p>Insert Image Here</p>
    </div>
</div>


</div>

Detailedimageview.defaultProps = {
    location_txt:"Lillehammer, Norway",
    date_txt:"February 3rd, 2020",
    img:"",

}

export default Detailedimageview;