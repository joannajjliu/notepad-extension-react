import React from 'react';

export default class AddOption extends React.Component {
    state = {
        error: undefined
    };
    handleAddOption = (e) => {
        e.preventDefault();
        
        const input = e.target.elements.option.value.trim();
        const error = this.props.handleAddOption(input);
        this.setState(() => ({error}))
        if (!error) {
            e.target.elements.option.value = '';
        }
    };
    // constructor(props) {
    //     super(props);
    //     this.handleAddOption = this.handleAddOption.bind(this);
    //     this.state = {
    //         error: undefined
    //     };
    // };
    // handleAddOption(e) {
    //     e.preventDefault();
        
    //     const input = e.target.elements.option.value.trim();
    //     const error = this.props.handleAddOption(input);
    //     this.setState(() => ({error}))
    //     if (!error) {
    //         e.target.elements.option.value = '';
    //     }
    // };

    render() {
        return (
            <div>
                <p className="add-option-error">{this.state.error}</p>
                <form className="add-option" onSubmit={this.handleAddOption}>
                    <input className="add-option__input" type="text" name="option"/>
                    <button className="button">Submit Option</button>
                </form>
            {this.props.selectedOption && 
                <p style={{color:'blue', fontWeight:'bold'}}>You should do {this.props.selectedOption}</p>
            }
            </div>
        );
    }
};