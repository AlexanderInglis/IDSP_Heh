import React from 'react';
import './searchbar.css'

const HehSearchBar = ({text}) => <div>

<div className="SB_container">
    <input type="form" placeholder={text}>

    </input>
</div>

</div>

HehSearchBar.defaultProps = {

}

export default HehSearchBar;