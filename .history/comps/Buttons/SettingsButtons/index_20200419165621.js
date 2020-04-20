import React from 'react';
import '../SettingsButtons/settings.css'


const SettingsBtn = ({ text }) => <div>
    <div class="settingsbtn">
        <div><h3>{text}</h3></div>
    </div>
</div>

SettingsBtn.defaultProps = {
    text: "default",
}

export default SettingsBtn;