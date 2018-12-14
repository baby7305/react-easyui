import React from 'react';
import { DateBox } from 'rc-easyui';

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
        return (
            <div>
                <h2>Basic DateBox</h2>
                <DateBox value={this.state.value} onChange={this.handleChange.bind(this)}></DateBox>
                <p>{this.formatDate(this.state.value)}</p>
            </div>
        );
    }
}

export default App;