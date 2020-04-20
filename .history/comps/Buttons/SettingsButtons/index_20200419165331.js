import React from 'react';
import '../SettingsButtons/settings.css'


const SettingsBtn = ({ text }) => <div>
    <div class="settingsbtn">
        {text}
    </div>
</div>

SettingsBtn.defaultProps = {
    text: "default",
}

export default SettingsBtn;