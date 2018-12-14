import React from 'react';
import { Calendar } from 'rc-easyui';

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            value: null
        }
    }
    formatDate(date) {
        if (!date) {
            return null;
        }
        let y = date.getFullYear();
        let m = date.getMonth() + 1;
        let d = date.getDate();
        return [m, d, y].join('/')
    }
    validator(date) {
        if (date.getDay() == 1 || date.getDay() == 2) {
            return true;
        }
        return false;
    }
    handleSelectionChange(selection) {
        this.setState({ value: selection })
    }
    render() {
        return (
            <div>
                <h2>Disable Date</h2>
                <p>Only the Monday and Tuesday can be selected.</p>
                <Calendar
                    style={{ width: 250, height: 250 }}
                    validator={this.validator}
                    selection={this.state.value}
                    onSelectionChange={this.handleSelectionChange.bind(this)}
                />
                <p>{this.formatDate(this.state.value)}</p>
            </div>
        );
    }
}

export default App;