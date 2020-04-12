import React from 'react';

export default class Option extends React.Component {
    // constructor(props) {
    //     super(props);
    //     this.myRef = React.createRef();
    // }
    myRef=React.createRef();

    state = {
        isInEditMode: false,
        value: ""
    };
    changeEditMode = () => {
        this.setState((prevState) => ({
            isInEditMode: !prevState.isInEditMode
        }));
    };
    closeEditMode = () => {
        this.setState({
            isInEditMode: false
        })
    };
    updateComponentValue = () => {
        this.setState({
            isInEditMode: false,
            value: this.myRef.current.value
        });
        this.props.updateOptionValue((this.props.count - 1), this.myRef.current.value);
    };
    renderEditView = () => {
        return (
            <div>
                <input 
                    type="text" 
                    defaultValue={this.props.optionText}
                    ref={this.myRef}
                />
                <button onClick={this.closeEditMode}>X</button>
                <button onClick={this.updateComponentValue}>OK</button>
            </div>
        )
    };
    renderDefaultView = () => {
        return (
            <p className="option__text">
                {this.props.count}. {this.props.optionText}
            </p>
        )
    };
    render() {
        return (
            <div className="option">
                {this.state.isInEditMode ? 
                    this.renderEditView()
                    :
                    this.renderDefaultView()
                }
                
                <button 
                    className="button--link"
                    onClick={(e) => {
                        this.props.handleDeleteOption(this.props.optionText);
                    }}
                >
                    Delete Option
                </button>
                <button 
                    className="button--link"
                    onClick={(e) => {
                        this.changeEditMode();
                    }}
                >
                    Edit Option
                </button> 
            </div>
        )
    }
}
    

// export {Option as default};