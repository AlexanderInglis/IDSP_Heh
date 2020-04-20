import React from 'react';
import '../NewListDiv/div.css';
import IconButton from '../Buttons/IconButtons'

const ListDiv = () => <div>
    <div class="divBox">
        <div className="listTitle">
            <h2>List</h2>
            <div className="collapsible>
                <div className="tester">
            <IconButton width={"28px"} height={"28px"} />
        </div>
    </div>


    <div className="collapsible">
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
    </div >
</div >

var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
    coll[i].addEventListener("click", function () {
        this.classList.toggle("active");
        var content = this.nextElementSibling;
        if (content.style.display === "block") {
            content.style.display = "none";
        } else {
            content.style.display = "block";
        }
    });
}


export default ListDiv