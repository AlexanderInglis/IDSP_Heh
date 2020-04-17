import React from 'react';
import '../IconButtons/iconbutton.css'

const IconButton = ({ text, backgroundColor, }) => <div>
    <div class="iconbtn" style={{ backgroundColor: backgroundColor }}>
        <p class="fab fa-facebook">{text}</p>
    </div>
</div>

IconButton.defaultProps = {
    text: "Default",
    backgroundColor: "#358E76",
}

export default IconButton;