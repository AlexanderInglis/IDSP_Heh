import React from 'react';
import './suform.css'

const SuForm = ({formWidth, formHeight, top, left, text}) => 
<div>
<link href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet" />

    <div style={{top:top, left:left}} className="SuForm_position">
        <input style={{width:formWidth, height:formHeight}} className="SuForm" type="form" placeholder={text} />
    </div>

</div>

SuForm.defaultProps = {
    text:"This is default text!",
    
    formWidth:"150px",
    formHeight:"30px",
    
    top:"20px",
    left:"",
}

export default SuForm;
