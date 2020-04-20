import React from 'react';
import '../../Buttons/buttons.css'

const HardButton = ({ text, backgroundColor, boxShadow }) => <div>
    <div class="hardbtn" style={{ boxshadow: boxShadow, backgroundColor: backgroundColor, boxshadow: boxShadow }}>
        <p class="fab fa-facebook">{text}</p>
    </div>
</div>

HardButton.defaultProps = {
    text: "Login",
    backgroundColor: "#358E76",
    boxShadow: '#ffff',
}

export default HardButton;