import React from 'react';
import '../SettingsButtons/settings.css'


const SettingsBtn = ({ text }) => <div>
    <div class="settingsbtn">
        <h3>{text}</h3>
    </div>
</div>

SettingsBtn.defaultProps = {
    text: "default",
}

export default SettingsBtn;