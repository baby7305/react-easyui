import React from 'react';
import { Messager, LinkButton, ButtonGroup } from 'rc-easyui';

class App extends React.Component {
    confirm() {
        this.messager.confirm({
            title: "Confirm",
            msg: "Are you confirm this?",
            result: r => {
                if (r) {
                    alert("confirmed: " + r);
                }
            }
        });
    }
    prompt() {
        this.messager.prompt({
            title: "Prompt",
            msg: "Please type something",
            result: r => {
                if (r) {
                    alert("you type: " + r);
                }
            }
        });
    }
    render() {
        return (
            <div>
                <h2>Interactive Messager</h2>
                <ButtonGroup>
                    <LinkButton onClick={this.confirm.bind(this)}>Confirm</LinkButton>
                    <LinkButton onClick={this.prompt.bind(this)}>Prompt</LinkButton>
                </ButtonGroup>
                <Messager ref={ref => this.messager = ref}></Messager>
            </div>
        );
    }
}

export default App;