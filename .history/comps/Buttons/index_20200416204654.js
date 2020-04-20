import React from 'react';
import './softButtons.css';

const SoftButton = ({ text, backgroundColor }) => <div>
    {/* <div class="btn-container">
        <div class="btnPlus">
            <i class="fas fa-plus"></i>
        </div> */}

    <div class="btn" style={{ backgroundColor: backgroundColor, boxshadow: defaultBoxshadow }}>
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
    defaultBoxshadow: "20px 20px 60px #114b3a, -20px -20px 60px #17654e"
}

export default SoftButton;