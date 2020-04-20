import React from 'react';
import '../../Buttons/buttons.css'

const HardButton = ({ text, backgroundColor, }) => <div>
    <div class="hardbtn" style={{ backgroundColor: backgroundColor }}>
        <p>{text}</p>
    </div>
</div>

HardButton.defaultProps = {
    text: "Default",
    backgroundColor: "#358E76",
}

export default HardButton;