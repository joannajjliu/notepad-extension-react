import React from 'react';

const Option = (props) => (
    <div className="option">
        <p className="option__text">{props.count}. {props.optionText}</p>
        <button 
            className="button--link"
            onClick={(e) => {
                props.handleDeleteOption(props.optionText);
            }}
        >
            Delete Option
        </button>
    </div>
);

export {Option as default};