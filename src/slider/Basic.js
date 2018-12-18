import React from 'react';
import { Slider } from 'rc-easyui';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: 0
        }
    }
    render() {
        return (
            <div>
                <h2>Basic Slider</h2>
                <div style={{ padding: 20 }}>
                    <Slider
                        style={{ width: 300 }}
                        showTip
                        value={this.state.value}
                        onChange={value => this.setState({ value: value })}
                    />
                </div>
                <p>Current value: {this.state.value}</p>
            </div>
        );
    }
}

export default App;