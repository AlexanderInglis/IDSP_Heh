import React from 'react';
import {FaPaperclip} from 'react-icons/fa';
import {FaRegImage} from 'react-icons/fa';
import {FaFont} from 'react-icons/fa';
import './MiniRoundButton.css';

const MiniRounds = () => <div>

<div className="MiniContainer">
    <FaFont size="14" color="#0E5944" />
</div>
<div className="MiniContainer">
    <FaPaperclip size="14" color="#0E5944" />
</div>
<div className="MiniContainer">
    <FaRegImage size="14" color="#0E5944" />
</div>
</div>

export default MiniRounds;