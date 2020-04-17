import React from 'react';
import './softButtons.css';

const SoftButton = () => <div>
    {/* <div class="btn-container">
        <div class="btnPlus">
            <i class="fas fa-plus"></i>
        </div> */}

    <div class="btn" style={{ backgroundColor: backgroundColor }}>
        <i class="fab fa-facebook"></i>
    </div>

    {/* <div class="btn">
            <i class="fab fa-twitter"></i>
        </div>
    </div> */}
</div>

SoftButton.defaultProps = {
    text: "Please Type Something!",
    backgroundColor: "#e8eff5",
}

export default SoftButton;