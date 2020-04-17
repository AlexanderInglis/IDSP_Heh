import React from 'react';
import '../IconButtons/iconbutton.css'

const IconButton = ({ icon, backgroundColor, }) => <div>
    <div class="iconbtn" style={{ backgroundColor: backgroundColor }}>
        <svg class="fab fa-facebook" src={icon} />
    </div>
</div>

IconButton.defaultProps = {
    icon: "plus.svg",
    backgroundColor: "#358E76",
}

export default IconButton;