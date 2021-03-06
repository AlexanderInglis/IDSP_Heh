import React from 'react';
import './searchbar.css'

const HehSearchBar = ({text, img_avatar}) => <div>

<link href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet" />

<div className="SB_container">

    <div className="SearchBar" type="form" placeholder={text}>
        
        <input type="form" placeholder={text} id="sb_form" ></input>
        <div className="SearchBar_Img" > {img_avatar} </div>
    </div>

</div>


</div>

HehSearchBar.defaultProps = {
    text:"Looking for something?",
    img_avatar:""
}

export default HehSearchBar;