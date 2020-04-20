import React from 'react';
import './detailedimage.css';
import {FaStar} from 'react-icons/fa';
import {FaArrowLeft} from 'react-icons/fa';
import {FaArrowRight} from 'react-icons/fa';

const Detailedimageview = ({location_txt, date_txt, img, OnClick}) => <div>

<link href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet" />

<div className="view">
    <div className="Header_content">
        <h2 className="header_txt" > {location_txt} </h2>
        <h2 className="header_txt" > {date_txt} </h2>
        <div className="fav_icon">
        <FaStar size="30" color="Yellow" onClick={OnClick} />
        </div>
    </div>
    <div className="image_placeholder">
        {img}
        <p>Insert Image Here</p>
    </div>
    <div className="footer">
        <FaArrowLeft color="#FFFFFF" size="32" className="left_arw"></FaArrowLeft>
        <FaArrowRight color="#FFFFFF" size="32" className="right_arw"></FaArrowRight>
        
    </div>
</div>


</div>

function FavoritePic() {
    
    
}


Detailedimageview.defaultProps = {
    location_txt:"Lillehammer, Norway",
    date_txt:"February 3rd, 2020",
    img:"",
    OnClick: FavoritePic,
}

export default Detailedimageview;