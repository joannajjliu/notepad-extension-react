import React from 'react';

import AddOption from './AddOption';
import Options from './Options';
import Header from './Header';

export default class IndecisionApp extends React.Component {
    state = {
        options: this.props.options
    };

    handleDeleteOptions = () => {
        this.setState(() => ({
            options: []
        }))
    };
    handleDeleteOption = (option) => {
        this.setState((prevState) => ({
            options: prevState.options.filter(item => item !== option)
        }));
    };
    updateOptionValue = (inputIndex, newOption) => {
        const newOptions = this.state.options.map((option, index) => {
            console.log("index: ", index)
            console.log("option: ", option)
            console.log("inputIndex: ", inputIndex)
            console.log("newOption: ", newOption)
            if (inputIndex === index) {
                option = newOption;
            }
            return option;
        })
        console.log("newOptions: ", newOptions)
        this.setState((prevState) => ({
            options: newOptions
        }));
    };
    handleAddOption = (option) => {
        if (!option) {
            return 'You have not entered a valid option';
        } else if (this.state.options && this.state.options.indexOf(option) > -1) {
            return 'This option has already been entered, please try again';
        }
        this.setState((prevState) => ({
                options: prevState.options && prevState.options.concat(option)
            })
        );
    };
    onDragStart = (e, index) => {
        console.log("onDragStart e.dataTransfer: ", e.dataTransfer);
        this.draggedItem = this.state.options[index];
        e.dataTransfer.effectAllowed = "move";
        e.dataTransfer.setData("text/html", e.target.parentNode);
        e.dataTransfer.setDragImage(e.target.parentNode, 20, 20);
        // setTimeout(() => {
        //     this.draggedItem.display = "none";
        // }, 0);
    };
    onDragOver = (index) => {
        const draggedOverItem = this.state.options[index];

        //if item is dragged over itself, ignore
        if (this.draggedItem === draggedOverItem) {
            return;
        }

        //filter out currently dragged item
        let options = this.state.options.filter(option => option !== this.draggedItem);
        
        // add the dragged item after the dragged over item
        options.splice(index, 0, this.draggedItem);

        this.setState({ options });
    };
    onDragEnd = () => {
        this.draggedItem = null;
    };
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
        console.log("componentDidUpdate reached")
        if (prevState.options !== this.state.options) {
            const json = JSON.stringify(this.state.options);
            localStorage.setItem('options', json);

            console.log("saving data: componentDidUpdate");
        };
    }
    componentWillUnmount() {
        console.log('componentWillUnmount');
    }
    render() {
        const subtitle = "keep track of your to-do items here";
        console.log("this.state.isInEditMode: ", this.state.isInEditMode);
        return (
            <div className="App">
                <Header subtitle={subtitle}/>
                    <div>
                        <Options
                            options={this.state.options}
                            handleDeleteOptions={this.handleDeleteOptions}
                            handleDeleteOption={this.handleDeleteOption}
                            updateOptionValue={this.updateOptionValue}
                            onDragStart={this.onDragStart}
                            onDragOver={this.onDragOver}
                            onDragEnd={this.onDragEnd}
                        />
                        <AddOption 
                            handleAddOption={this.handleAddOption}
                        />
                    </div>
            </div>
        );
    }
};
