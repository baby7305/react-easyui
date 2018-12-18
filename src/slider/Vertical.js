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
                <h2>Vertical Slider</h2>
                <div style={{ padding: 20 }}>
                    <Slider
                        style={{ height: 300 }}
                        showTip
                        mode="v"
                        rule={[0, '|', 25, '|', 50, '|', 75, '|', 100]}
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