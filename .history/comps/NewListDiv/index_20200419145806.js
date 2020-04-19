import React from 'react';
import '../NewListDiv/div.css';


const ListDiv = () => <div>
    <div class="divBox">
        <div className="listTitle"><h1>List</h1></div>
        <label class="container">One
            <input type="checkbox" />
            <span class="checkmark"></span>
        </label>

        <label class="container">Two
            <input type="checkbox" />
            <span class="checkmark"></span>
        </label>

        <label class="container">Three
            <input type="checkbox" />
            <span class="checkmark"></span>
        </label>

        <label class="container" >Four
            <input type="checkbox" />
            <span class="checkmark"></span>
        </label>
    </div>
</div>

export default ListDiv;