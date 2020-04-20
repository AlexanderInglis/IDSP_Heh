import React from 'react';
import '../Image Text/imagetext.css'


var StarIcon = require('../../comps/Image Text/plus.svg');

const ImageText = ({ icon, backgroundColor, }) => <div>
    <div class="iconbtn" style={{ }}>
        <img class="icon" src={icon} /> Hey
    </div>
</div>

ImageText.defaultProps = {
    icon: StarIcon,
}

export default ImageText;