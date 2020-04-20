import React from 'react';
import './softButtons.css';

const SoftButton = ({ text, backgroundColor, boxShadow }) => <div>
    {/* <div class="btn-container">
        <div class="btnPlus">
            <i class="fas fa-plus"></i>
        </div> */}

    <div class="btn" style={{ boxshadow: boxShadow, backgroundColor: backgroundColor, boxshadow: boxShadow }}>
        <p class="fab fa-facebook">{text}</p>
    </div>

    <div class="btn02">
        <b class="fab fa-twitter">"Sign Up"</b>
    </div>
</div>

SoftButton.defaultProps = {
    text: "Default",
    backgroundColor: "#145844",
    boxShadow: '#ffff',
}

export default SoftButton;