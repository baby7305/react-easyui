import React from 'react';
import { DateTimeSpinner, Label } from 'rc-easyui';

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            time1: "08/01/2017 01:20",
            time2: "10/24/2017 15:50"
        }
    }
    render() {
        const { time1, time2 } = this.state;
        return (
            <div>
                <h2>Basic DateTimeSpinner</h2>
                <div style={{ marginBottom: 20 }}>
                    <Label htmlFor="t1" align="top">Start:</Label>
                    <DateTimeSpinner
                        inputId="t1"
                        value={time1}
                        onChange={(value) => this.setState({ time1: value })}
                    />
                </div>
                <div style={{ marginBottom: 20 }}>
                    <Label htmlFor="t2" align="top">End:</Label>
                    <DateTimeSpinner
                        inputId="t2"
                        value={time2}
                        onChange={(value) => this.setState({ time2: value })}
                    />
                </div>
                <p>Start: {time1}, End: {time2}</p>
            </div>
        );
    }
}

export default App;