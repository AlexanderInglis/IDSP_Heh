import React from 'react';
import '../IconButtons/iconbutton.css'


var defaultIcon = require('../../Buttons/IconButtons/plus.svg');

const IconButton = ({ icon, backgroundColor, width, height }) => <div>
    <div class="iconbtn" style={{ backgroundColor: backgroundColor, width: width, height: height }} >
        <img class="icon" src={icon} />
    </div>
</div>

IconButton.defaultProps = {
    icon: defaultIcon,
    backgroundColor: "#358E76",
    width: '40px',
    height: '40px'
}

export default IconButton;