import React from 'react';
import { ProgressBar, LinkButton } from 'rc-easyui';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: 0,
            disabled: false
        }
    }
    run() {
        this.setState({ disabled: true })
        let timeout = Math.random() * 500;
        setTimeout(() => {
            let value = this.state.value;
            value += Math.floor(Math.random() * 10);
            this.setState({ value: value })
            if (value > 100) {
                this.setState({ value: 100, disabled: false })
            } else {
                this.run();
            }
        }, timeout);
    }
    render() {
        return (
            <div>
                <h2>Basic ProgressBar</h2>
                <div style={{ marginBottom: 20 }}>
                    <LinkButton disabled={this.state.disabled} onClick={this.run.bind(this)}>Start</LinkButton>
                </div>
                <ProgressBar value={this.state.value}></ProgressBar>
            </div>
        );
    }
}

export default App;