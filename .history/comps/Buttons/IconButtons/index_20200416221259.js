import React from 'react';
import '../IconButtons/iconbutton.css'

const IconButton = ({ icon, backgroundColor, }) => <div>
    <div class="iconbtn" style={{ backgroundColor: backgroundColor }}>
        <i class="fab fa-facebook">{icon}</i>
    </div>
</div>

IconButton.defaultProps = {
    icon: "Default",
    backgroundColor: "#358E76",
}

export default IconButton;