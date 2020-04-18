import React from 'react';
import './suform.css'

const SuForm = ({formWidth, formHeight, top, left, text}) => <div
style={{width:formWidth, height:formHeight, top:top, left:left}} className="SuForm">
    
    
        <input  className="SuForm" type="form" placeholder={text} />
        

</div>

SuForm.defaultProps = {
    text:"This is default text!",
    formWidth:"20%",
    formHeight:"90px",
    top:"50px",
    left:"",
}

export default SuForm;
