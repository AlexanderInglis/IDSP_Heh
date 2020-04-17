import React from 'react';
import '../IconButtons/iconbutton.css'

const IconButton = ({ icon, backgroundColor, }) => <div>
    <div class="iconbtn" style={{ backgroundColor: backgroundColor }}>
        <img class="fab fa-facebook" url={icon} />
    </div>
</div>

IconButton.defaultProps = {
    icon: "plus.svg",
    backgroundColor: "#358E76",
}

export default IconButton;