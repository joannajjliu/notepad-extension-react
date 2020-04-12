import React from 'react';
import Option from './Option';

const Options = (props) => (
    <div>
        {props.options && props.options.length === 0 ?
            <p className="widget__message">Please add an option to get started</p> :
            (
                <div>
                    {props.options && props.options.map((option, index) => {
                        console.log("options' option: ", option)
                        console.log("options' index: ", index)
                        return <Option 
                                key={option}
                                optionText={option}
                                count={index + 1}
                                handleDeleteOption={props.handleDeleteOption}
                                updateOptionValue={props.updateOptionValue}
                                />
                    })}
                </div>
            )
        }
    </div>
);

export default Options