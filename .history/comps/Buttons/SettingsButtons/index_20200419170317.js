import React from 'react';
import '../SettingsButtons/settings.css'


const SettingsBtn = ({ text, icon }) => <div>
    <button class="settingsbtn">
        <img src={icon} style={{ width: "30px", paddingRight: "30px" }} />{text}
    </button>
</div>

SettingsBtn.defaultProps = {
    text: "default",
    icon: "https://upload.wikimedia.org/wikipedia/commons/6/6d/Windows_Settings_app_icon.png"
}

export default SettingsBtn;