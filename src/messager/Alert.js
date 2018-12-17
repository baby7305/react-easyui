import React from 'react';
import { Messager, LinkButton, ButtonGroup } from 'rc-easyui';

class App extends React.Component {
    alert1() {
        this.messager.alert({
            title: "Alert",
            msg: "Here is a message!"
        });
    }
    alert2() {
        this.messager.alert({
            title: "Error",
            icon: "error",
            msg: "Here is an error message!"
        });
    }
    alert3() {
        this.messager.alert({
            title: "Info",
            icon: "info",
            msg: "Here is a info message!"
        });
    }
    alert4() {
        this.messager.alert({
            title: "Question",
            icon: "question",
            msg: "Here is a question message!"
        });
    }
    alert5() {
        this.messager.alert({
            title: "Warning",
            icon: "warning",
            msg: "Here is a warning message!"
        });
    }
    render() {
        return (
            <div>
                <h2>Alert Messager</h2>
                <ButtonGroup>
                    <LinkButton onClick={this.alert1.bind(this)}>Alert</LinkButton>
                    <LinkButton onClick={this.alert2.bind(this)}>Error</LinkButton>
                    <LinkButton onClick={this.alert3.bind(this)}>Info</LinkButton>
                    <LinkButton onClick={this.alert4.bind(this)}>Question</LinkButton>
                    <LinkButton onClick={this.alert5.bind(this)}>Warning</LinkButton>
                </ButtonGroup>
                <Messager ref={ref => this.messager = ref}></Messager>
            </div>
        );
    }
}

export default App;