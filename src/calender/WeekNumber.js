import React from 'react';
import { Calendar } from 'rc-easyui';

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
    handleSelectionChange(selection) {
        this.setState({ value: selection })
    }
    render() {
        return (
            <div>
                <h2>Week Number</h2>
                <Calendar
                    style={{ width: 250, height: 250 }}
                    showWeek
                    weekNumberHeader="Wk"
                    selection={this.state.value}
                    onSelectionChange={this.handleSelectionChange.bind(this)}
                />
                <p>{this.formatDate(this.state.value)}</p>
            </div>
        );
    }
}

export default App;