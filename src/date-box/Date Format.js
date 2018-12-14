import React from 'react';
import { DateBox, Label } from 'rc-easyui';

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            value: new Date()
        }
    }
    formatDate(date) {
        let y = date.getFullYear();
        let m = date.getMonth() + 1;
        let d = date.getDate();
        return [m, d, y].join('/')
    }
    handleChange(value) {
        this.setState({ value: value })
    }
    render() {
        const dbProps = {
            panelStyle: { width: 250, height: 250 },
            value: this.state.value,
            onChange: this.handleChange.bind(this)
        }
        return (
            <div>
                <h2>Date Format</h2>
                <div style={{ marginBottom: 20 }}>
                    <Label htmlFor="d1" align="top">Default Format</Label>
                    <DateBox inputId="d1" {...dbProps}></DateBox>
                </div>
                <div style={{ marginBottom: 20 }}>
                    <Label htmlFor="d2" align="top">yyyy-MM-dd</Label>
                    <DateBox inputId="d2" format="yyyy-MM-dd" {...dbProps}></DateBox>
                </div>
                <p>{this.formatDate(this.state.value)}</p>
            </div>
        );
    }
}

export default App;