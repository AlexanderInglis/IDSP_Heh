import React from 'react';
import './menubar.css'
import {FaList} from 'react-icons/fa';
import {FaRegImage} from 'react-icons/fa';
import {FaTh} from 'react-icons/fa';
import {FaStickyNote} from 'react-icons/fa';

const Menubar = () => <div>
<div className="MenuContainer">
    <div className="MenuItem"><div className="MenuDashboard"><FaTh size="28" color="#FFFFFF" /></div></div>
    <div className="MenuItem"><div className="MenuImages"><FaRegImage size="28" color="#FFFFFF" /></div></div>
    <div className="MenuItem"><div className="MenuLists"><FaList size="28" color="#FFFFFF" /></div></div>
    <div className="MenuItem"><div className="MenuNotes"> <FaStickyNote size="28" color="#FFFFFF" /></div></div>
</div>
</div>

export default Menubar;