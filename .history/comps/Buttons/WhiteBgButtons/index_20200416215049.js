import React from 'react';
import '../../Buttons/buttons.css'

const HardButton = ({ text, backgroundColor, boxShadow }) => <div>
    <div class="btn" style={{ boxshadow: boxShadow, backgroundColor: backgroundColor, boxshadow: boxShadow }}>
        <p class="fab fa-facebook">{text}</p>
    </div>
</div>

HardButton.defaultProps = {
    text: "Login",
    backgroundColor: "#145844",
    boxShadow: '#ffff',
}

export default HardButton;