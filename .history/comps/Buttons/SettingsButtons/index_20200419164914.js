import React from 'react';
import '../SettingsButtons/settings.css'


const SettingsBtn = ({ text }) => <div>
    <div class="settingsbtn">
        {text}
    </div>
</div>

IconButton.defaultProps = {
    text: "default",
}

export default SettingsBtn;