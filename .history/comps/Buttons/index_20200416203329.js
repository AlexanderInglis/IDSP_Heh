import React from 'react';
import './softButtons.css';

const SoftButton = ({ text, backgroundColor }) => <div>
    {/* <div class="btn-container">
        <div class="btnPlus">
            <i class="fas fa-plus"></i>
        </div> */}

    <div class="btn" style={{ backgroundColor: backgroundColor }}>
        <p class="fab fa-facebook">{text}</p>
    </div>

    {/* <div class="btn">
            <i class="fab fa-twitter"></i>
        </div>
    </div> */}
</div>

SoftButton.defaultProps = {
    text: "Default",
    backgroundColor: "#145844",
}

export default SoftButton;