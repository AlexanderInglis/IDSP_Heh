import React from 'react';
import '../NewListDiv/list.css';
import IconButton from '../Buttons/IconButtons'

const ListDiv = ({ listTitle, item01, item02, item03, item04 }) => <div>
    <div class="divBox">
        <div className="listTitle">
            <h2>{listTitle}</h2>
            <div className="tester" onClick={listToggle}>
                <IconButton width={"28px"} height={"28px"} />
            </div>
        </div>


        <div className="content">
            <label class="container">{item01}
                <input type="checkbox" />
                <span class="checkmark"></span>
            </label>

            <label class="container">{item02}
                <input type="checkbox" />
                <span class="checkmark"></span>
            </label>

            <label class="container">{item03}
                <input type="checkbox" />
                <span class="checkmark"></span>
            </label>

            <label class="container" >{item04}
                <input type="checkbox" />
                <span class="checkmark"></span>
            </label>
        </div>
    </div>
</div >



ListDiv.defaultProps = {
    listTitle: "Default Title",
    item01: 'item01',
    item02: 'item02',
    item03: 'item03',
    item04: 'item04',
}


export default ListDiv

var listState = false;

function listToggle() {
    if (listState === false) {
        document.querySelector(".content").style.height = "0";
        document.querySelector(".divBox").style.height = "2.5%";
        document.querySelector(".divBox").style.overflow = "hidden";
        listState = true;
        console.log("hello");
    } else {
        document.querySelector(".content").style.height = "100%";
        document.querySelector(".divBox").style.height = "20%";
        listState = false;
    }
}