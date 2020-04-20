import React from 'react';
import '../NewListDiv/div.css';
import IconButton from '../Buttons/IconButtons'

const ListDiv = () => <div>
    <div class="divBox">
        <div className="listTitle">
            <h2>List</h2>
            <div className="collapsible">
                <div className="tester">
                    <IconButton width={"28px"} height={"28px"} />
                </div>
            </div>
        </div>


        <div className="content">
            <label class="container">
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
</div >



ListDiv.defaultProps = {
    title: "DefaultTitle",
    item01: 'item01',
    item02: 'item02',
    item03: 'item03',
    item04: 'item04',
}


export default ListDiv