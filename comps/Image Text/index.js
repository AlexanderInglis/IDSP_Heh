import React from 'react';
import '../Image Text/imagetext.css'


var StarIcon = require('../../comps/Image Text/plus.svg');

const ImageText = ({ icon, backgroundColor, }) => <div>
    <div class="iconbtn" style={{ backgroundColor: backgroundColor }}>
        <img class="icon" src={icon} />
    </div>
</div>

ImageText.defaultProps = {
    icon: StarIcon,
    backgroundColor: "#358E76",
}

export default ImageText;