import React from 'react';
import { TimeSpinner, Label } from 'rc-easyui';

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            time1: "01:20",
            time2: "15:50"
        }
    }
    render() {
        const { time1, time2 } = this.state;
        return (
            <div>
                <h2>Basic TimeSpinner</h2>
                <div style={{ marginBottom: 20 }}>
                    <Label htmlFor="t1" align="top">Start Time:</Label>
                    <TimeSpinner inputId="t1" value={time1} onChange={(value) => this.setState({ time1: value })}></TimeSpinner>
                </div>
                <div style={{ marginBottom: 20 }}>
                    <Label htmlFor="t2" align="top">End Time:</Label>
                    <TimeSpinner inputId="t2" value={time2} onChange={(value) => this.setState({ time2: value })}></TimeSpinner>
                </div>
                <p>Start: {time1}, End: {time2}</p>
            </div>
        );
    }
}

export default App;