import React from 'react';
import './menubar.css'
import {FaList} from 'react-icons/fa';
import {FaRegImage} from 'react-icons/fa';
import {FaTh} from 'react-icons/fa';
import {FaStickyNote} from 'react-icons/fa';

const Menubar = () => <div>
<div className="MenuContainer">
    <div className="MenuDashboard"><FaTh /></div>
    <div className="MenuImages"><FaRegImage /></div>
    <div className="MenuLists"><FaList /></div>
    <div className="MenuNotes"> <FaStickyNote /></div>
</div>
</div>

export default Menubar;