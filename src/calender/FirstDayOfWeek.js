import React from 'react';
import { Calendar, ComboBox } from 'rc-easyui';

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            value: new Date(),
            firstDay: 0,
            data: [
                { value: 0, text: "Sunday" },
                { value: 1, text: "Monday" },
                { value: 2, text: "Tuesday" },
                { value: 3, text: "Wednesday" },
                { value: 4, text: "Thursday" },
                { value: 5, text: "Friday" },
                { value: 6, text: "Saturday" }
            ]
        }
    }
    formatDate(date) {
        let y = date.getFullYear();
        let m = date.getMonth() + 1;
        let d = date.getDate();
        return [m, d, y].join('/')
    }
    handleFirstDayChange(value) {
        this.setState({ firstDay: value })
    }
    handleSelectionChange(selection) {
        this.setState({ value: selection })
    }
    render() {
        return (
            <div>
                <h2>First Day of Week</h2>
                <div style={{ marginBottom: 20 }}>
                    <ComboBox
                        style={{ width: 250 }}
                        data={this.state.data}
                        value={this.state.firstDay}
                        editable={false}
                        onChange={this.handleFirstDayChange.bind(this)}
                    />
                </div>
                <Calendar
                    style={{ width: 250, height: 250 }}
                    firstDay={this.state.firstDay}
                    selection={this.state.value}
                    onSelectionChange={this.handleSelectionChange.bind(this)}
                />
                <p>{this.formatDate(this.state.value)}</p>
            </div>
        );
    }
}

export default App;