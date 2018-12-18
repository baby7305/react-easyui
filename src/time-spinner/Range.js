import React from 'react';
import { TimeSpinner } from 'rc-easyui';

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            time: null
        }
    }
    handleChange(value) {
        this.setState({ time: value })
    }
    render() {
        const time = this.state.time;
        return (
            <div>
                <h2>Time Range</h2>
                <p>The time value is constrained in specified range(08:30 - 18:10).</p>
                <TimeSpinner placeholder="Select a time"
                    min="08:30"
                    max="18:10"
                    value={time}
                    onChange={this.handleChange.bind(this)}
                />
                <p>Selected: {time}</p>
            </div>
        );
    }
}

export default App;