import React from 'react';
import './imagetext.css'


var StarIcon = require('./plus.svg');

const ImageText = ({ icon, text }) => <div>
    <div class="iconbtn" style={{ }}>
        <img class="icon" src={icon} /> Hey
    </div>
</div>

ImageText.defaultProps = {
    icon: StarIcon,
}

export default ImageText;