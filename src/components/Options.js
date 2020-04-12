import React from 'react';
import Option from './Option';

export default class Options extends React.Component {
    // drop = (e) => {
    //     e.preventDefault();
    //     const card_id = e.dataTransfer.getData('card_id');
    //     const card = document.getElementById(card_id);
    //     card.style.display = 'block'

    //     e.target.appendChild(card);

    // };

    // dragOver = (e) => {
    //     e.preventDefault();
    // };

    render() {
        return (
            <div>
                {this.props.options && this.props.options.length === 0 ?
                    <p className="widget__message">
                        Please add an option to get started
                    </p>
                    :
                    <div
                        // id={this.props.id}
                        // onDrop={this.drop}
                        // onDragOver={this.dragOver}
                        // className="board"
                    >
                        <ol>
                            {
                            this.props.options && 
                            this.props.options.map((option, index) => {
                                return (
                                    <li key={option} onDragOver={() => this.props.onDragOver(index)}>
                                        <div
                                        draggable
                                        onDragStart={e => this.props.onDragStart(e, index)}
                                        onDragEnd = {this.props.onDragEnd}
                                        >
                                            <Option
                                                
                                                // id={index}
                                                key={option}
                                                optionText={option}
                                                handleDeleteOption={this.props.handleDeleteOption}
                                                updateOptionValue={this.props.updateOptionValue}
                                            />
                                        </div>
                                    </li>
                                )
                            })}
                        </ol>
                    </div>
                }
            </div>
        )
    }
};
