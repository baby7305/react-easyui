import React from 'react';
import { ComboBox, RadioButton, Label } from 'rc-easyui';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            palign: "left",
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
    handleChange(align, checked) {
        if (checked) {
            this.setState({ palign: align })
        }
    }
    render() {
        return (
            <div>
                <h2>Panel Align</h2>
                <div style={{ margin: '0 40px 10px 40px' }}>
                    <RadioButton
                        inputId="r1"
                        value="left"
                        groupValue={this.state.palign}
                        onChange={(checked) => this.handleChange('left', checked)}
                    />
                    <Label htmlFor="r1" style={{ marginLeft: 10 }}>Left</Label>
                </div>
                <div style={{ margin: '0 40px 10px 40px' }}>
                    <RadioButton
                        inputId="r2"
                        value="right"
                        groupValue={this.state.palign}
                        onChange={(checked) => this.handleChange('right', checked)}
                    />
                    <Label htmlFor="r2" style={{ marginLeft: 10 }}>Right</Label>
                </div>
                <Label htmlFor="c1" align="top">Select a value:</Label>
                <ComboBox
                    style={{ width: 200 }}
                    inputId="c1"
                    data={this.state.data}
                    editable={false}
                    panelAlign={this.state.palign}
                    panelStyle={{ width: 220 }}
                />
            </div>
        );
    }
}

export default App;