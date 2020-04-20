import React from 'react';
import '../NewListDiv/div.css';
import IconButton from '../Buttons/IconButtons'

const ListDiv = () => <div>
    <div class="divBox">
        <h2>List</h2>
        <div className="tester">
            <IconButton width={"28px"} height={"28px"} />
        </div>
        <div className="expander">
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
</div>




$('div[class*="tester"]').click(function () {
    var className = $(this).attr('class');
    var width = $(this).attr('style');
    width = width.substring(width.indexOf('width') + 7);
    if (width != '100%;') {
        $('div[class!="' + className + '"][class*=""]').each(function () {
            $(this).animate({ width: '0%' });
        });
        $(this).animate({ width: '100%' });
    }
    else {
        $('div[class*="tester"]').each(function () {
            $(this).animate({ width: '33%' });
        });
    }
});



export default ListDiv;


