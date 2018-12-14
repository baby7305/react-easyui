import React from 'react';
import { ComboBox, Label } from 'rc-easyui';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: 11,
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
    render() {
        return (
            <div>
                <h2>Basic ComboBox</h2>
                <Label htmlFor="c1" align="top">Select a value:</Label>
                <ComboBox
                    inputId="c1"
                    data={this.state.data}
                    value={this.state.value}
                    onChange={(value) => this.setState({ value: value })}
                />
                <p>You selected: {this.state.value}</p>
            </div>
        );
    }
}

export default App;