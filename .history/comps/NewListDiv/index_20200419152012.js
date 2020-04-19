import React from 'react';
import '../NewListDiv/div.css';
import IconButton from '../Buttons/IconButtons'

const ListDiv = () => <div>
    <div class="divBox">
        <h2>List</h2>
        <div className="tester"><IconButton /></div>
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