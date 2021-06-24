import React, { useState } from 'react';
import './Checkbox.css';

function Checkbox() {
    const [checked, setChecked] = useState(false);
    function toggleChecked() {
        setChecked((prev) => !prev);
    }
    const props = checked ? { checked :true} : {};
    return (
        <div className="testing">
            <label className="container">
                {checked ? 'checked' : 'not checked'}
                <input
                    type="checkbox"
                    {...props} 
                    onChange={toggleChecked}
                />
                <span className="checkmark"></span>
            </label>
            <a href="https://github.com">Testing</a>
        </div>
    );
}

export { Checkbox };
