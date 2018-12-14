import React from 'react';
import { ComboBox, Label } from 'rc-easyui';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: null,
            data: this.getData()
        }
    }
    getData() {
        return [
            { value: 11, text: "Mr. Nice" },
            { value: 12, text: "Narco" },
            { value: 13, text: "Bombasto" },
            { value: 14, text: "Celeritas" },
            { value: 15, text: "Magneta" },
            { value: 16, text: "RubberMan" },
            { value: 17, text: "Dynama" },
            { value: 18, text: "Dr IQ" },
            { value: 19, text: "Magma" },
            { value: 20, text: "Tornado" }
        ];
    }
    formatText(value) {
        if (this.state.value && this.state.value.length > 3) {
            return this.state.value.length + " items selected";
        }
        return value;
    }
    render() {
        return (
            <div>
                <h2>Multiple Select</h2>
                <Label htmlFor="c1" align="top">Select a hero:</Label>
                <ComboBox
                    style={{ width: 250 }}
                    inputId="c1"
                    multiple
                    data={this.state.data}
                    value={this.state.value}
                    textFormatter={this.formatText.bind(this)}
                    onChange={(value) => this.setState({ value: value })}
                />
                <p>You selected: {this.state.value && this.state.value.join(',')}</p>
            </div>
        );
    }
}

export default App;