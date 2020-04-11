import React from 'react';

import AddOption from './AddOption';
import Options from './Options';
import Header from './Header';
// import Action from './Action';
import OptionModal from './OptionModal';

export default class IndecisionApp extends React.Component {
    state = {
        options: this.props.options,
        selectedOption: undefined
    };

    handleDeleteOptions = () => {
        this.setState(() => ({
            options: [],
            selectedOption: undefined
        }))
    };
    handleDeleteOption = (option) => {
        this.setState((prevState) => ({
            options: prevState.options.filter(item => item !== option)
        }));
    };
    // handlePick = () => {
    //     const optionNum = Math.floor(Math.random() * this.state.options.length);
    //     const selectedOption = this.state.options[optionNum]
    //     this.setState(() => ({selectedOption}))
    // };
    handleAddOption = (option) => {
        if (!option) {
            return 'You have not entered a valid option';
        } else if (this.state.options && this.state.options.indexOf(option) > -1) {
            return 'This option has already been entered, please try again';
        }
        this.setState((prevState) => ({
                options: prevState.options && prevState.options.concat(option),
                selectedOption: undefined
            })
        );
    };
    closeModal = () => {
        this.setState(() => ({selectedOption: undefined}))
    }
    // constructor(props) {
    //     super(props)
    //     this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
    //     this.handlePick = this.handlePick.bind(this);
    //     this.handleAddOption = this.handleAddOption.bind(this);
    //     this.handleDeleteOption = this.handleDeleteOption.bind(this);
    //     this.state = {
    //         options: props.options,
    //         selectedOption: ''
    //     };
    // };
    componentDidMount() { //localStorage: fetch data
        try {
            const json = localStorage.getItem("options");
            const options = JSON.parse(json); //if error occurs here
            if (options) {
                this.setState(() => ({ options }));
            }
        } catch (e) {
            //do nothing -> keep this.state.options as null
        }
        console.log("fetching data: componentDidMount");
    }
    componentDidUpdate(prevProps, prevState) { //localStorage: save data
        console.log("this.state.options: ", this.state.options);    
        if (prevState.options.length !== this.state.options.length) {
            console.log("prevState.options: ", prevState.options);
            const json = JSON.stringify(this.state.options);
            localStorage.setItem('options', json);

            console.log("saving data: componentDidUpdate");
        };
    }
    componentWillUnmount() {
        console.log('componentWillUnmount');
    }
    // handleDeleteOptions() {
    //     this.setState(() => ({
    //         options: [],
    //         selectedOption: ''
    //     }))
    // };
    // handleDeleteOption(option) {
    //     this.setState((prevState) => ({
    //         options: prevState.options.filter(item => item !== option)
    //     }));
    // }
    // handlePick() {
    //     const optionNum = Math.floor(Math.random() * this.state.options.length);
    //     const selectedOption = this.state.options[optionNum]
    //     this.setState(() => ({selectedOption}))
    // };
    // handleAddOption(option) {
    //     if (!option) {
    //         return 'You have not entered a valid option';
    //     } else if (this.state.options.indexOf(option) > -1) {
    //         return 'This option has already been entered, please try again';
    //     }
    //     this.setState((prevState) => ({
    //             options: prevState.options.concat(option),
    //             selectedOption: ''
    //         })
    //     );
    // };
    render() {
        const subtitle = "keep track of your to-do items here";

        return (
            <div className="App">
                <Header subtitle={subtitle}/>
                <div className="container">
                    {/* <Action 
                        hasOptions={this.state.options && this.state.options.length > 0} 
                        handlePick={this.handlePick}
                    /> */}
                    <div className="widget">
                        <Options
                            options={this.state.options}
                            handleDeleteOptions={this.handleDeleteOptions}
                            handleDeleteOption={this.handleDeleteOption}
                        />
                        <AddOption 
                            handleAddOption={this.handleAddOption}
                            selectedOption={this.state.selectedOption}
                        />
                    </div>
                </div>
                <OptionModal 
                    selectedOption={this.state.selectedOption}
                    closeModal={this.closeModal}
                />
            </div>
        );
    }
};

// IndecisionApp.defaultProps = { //no longer needed because using localStorage
//     options: []
// };