import React from 'react';
import { TimeSpinner, Label } from 'rc-easyui';

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            time: '08:30',
            inputStyle: {
                textAlign: "center",
                fontSize: "16px"
            }
        }
    }
    handleChange(value) {
        this.setState({ time: value })
    }
    render() {
        const { time, inputStyle } = this.state;
        const tsProps = {
            inputStyle: inputStyle,
            value: time,
            onChange: this.handleChange.bind(this)
        }
        return (
            <div>
                <h2>TimeSpinner Style</h2>
                <div style={{ marginBottom: 20 }}>
                    <Label htmlFor="t1" align="top">Horizontal:</Label>
                    <TimeSpinner inputId="t1" spinAlign="horizontal" {...tsProps}></TimeSpinner>
                </div>
                <div style={{ marginBottom: 20 }}>
                    <Label htmlFor="t2" align="top">Vertical:</Label>
                    <TimeSpinner inputId="t2" spinAlign="vertical" style={{ width: 60, height: 90 }} {...tsProps}></TimeSpinner>
                </div>
            </div>
        );
    }
}

export default App;