import React from 'react';
import '../IconButtons/iconbutton.css'

var defaultImg = require('../../../comps/Buttons/IconButtons/plus.svg);

const IconButton = ({ icon, backgroundColor, }) => <div>
    <div class="iconbtn" style={{ backgroundColor: backgroundColor }}>
        <img class="fab fa-facebook" src={icon} />
    </div>
</div>

IconButton.defaultProps = {
    icon: "defaultIcon",
    backgroundColor: "#358E76",
}

export default IconButton;