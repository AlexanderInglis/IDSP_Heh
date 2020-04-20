import React from 'react';
import '../SettingsButtons/settings.css'


const SettingsBtn = ({ text }) => <div>
    <button class="settingsbtn">
        {text}
    </button>
</div>

SettingsBtn.defaultProps = {
    text: "default",
}

export default SettingsBtn;