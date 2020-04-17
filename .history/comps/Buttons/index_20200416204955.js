import React from 'react';
import './softButtons.css';

const SoftButton = ({ text, backgroundColor }) => <div>
    {/* <div class="btn-container">
        <div class="btnPlus">
            <i class="fas fa-plus"></i>
        </div> */}

    <div class="btn" style={{ backgroundColor: backgroundColor }, { boxshadow: boxShadow }}>
        <p class="fab fa-facebook">{text}</p>
    </div>

    {/* <div class="btn">
            <i class="fab fa-twitter"></i>
        </div>
    </div> */}
</div>

SoftButton.defaultProps = {
    text: "Default",
    backgroundColor: "#e8eff5",
    boxShadow: "7px 7px 15px #bbcfda, -4px -4px 13px #fff, inset 4px 4px 8px rgba(209, 217, 230, 0.2), inset -8px -8px 8px rgba(255, 255, 255, 0.2)",
}

export default SoftButton;