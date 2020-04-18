import React from 'react';
import './suform.css'

const SuForm = ({formWidth, formHeight, top, left, text}) => 
<div>
    
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
