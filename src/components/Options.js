import React from 'react';
import Option from './Option';

const Options = (props) => (
    <div>
        {/* <div className="widget-header">
            <h3 className="widget-header__options">Your Options</h3>
            <button className="button--link" onClick={props.handleDeleteOptions}>
                Remove All
            </button>
        </div> */}
        {/* <p className="widget__message__number">The number of options is {props.options && props.options.length}</p> */}
        {props.options && props.options.length === 0 ?
            <p className="widget__message">Please add an option to get started</p> :
            (
                <div>
                    {props.options && props.options.map((option, index) => {
                        return <Option 
                                key={option}
                                optionText={option}
                                count={index + 1}
                                handleDeleteOption={props.handleDeleteOption}
                                />
                    })}
                </div>
            )
        }
    </div>
);

export default Options