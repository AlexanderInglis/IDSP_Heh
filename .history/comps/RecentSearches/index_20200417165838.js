import React from 'react';
import './recentsearches.css';
import {TiArrowForward} from 'react-icons/ti';

const RecentSearches = () => <div>
<div className="RecentsearchesContainer">
    <div className="SearchTitle"><span>Recent Searches</span><TiArrowForward color="D0D3D5" /></div>
    <div className="SearchList"><span>Web Marketing Lecture 2 notes</span></div>
    <div className="SearchList"><span>Grocery shopping list</span></div>
    <div className="SearchList"><span>Vancouver autoshow</span></div>
    <div className="SearchList"><span></span></div>
</div>
</div>

export default RecentSearches;