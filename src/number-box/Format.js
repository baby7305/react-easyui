import React from 'react';
import { Label, NumberBox } from 'rc-easyui';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            numbers: [
                {
                    label: "Number in the United States",
                    groupSeparator: ",",
                    decimalSeparator: "."
                },
                {
                    label: "Number in France",
                    groupSeparator: " ",
                    decimalSeparator: ","
                },
                {
                    label: "Currency:USD",
                    groupSeparator: ",",
                    decimalSeparator: ".",
                    prefix: "$"
                },
                {
                    label: "Currency:EUR",
                    groupSeparator: ",",
                    decimalSeparator: " ",
                    prefix: "€"
                },
                {
                    label: "Currency:EUR",
                    groupSeparator: " ",
                    decimalSeparator: ",",
                    suffix: "€"
                }
            ]
        }
    }
    render() {
        return (
            <div>
                <h2>Format NumberBox</h2>
                <div style={{ width: '100%', maxWidth: '400px' }}>
                    {
                        this.state.numbers.map((n, index) => (
                            <div key={index} style={{ marginBottom: 10 }}>
                                <Label htmlFor={'n' + index} align="top">{n.label}</Label>
                                <NumberBox
                                    inputId={'n' + index}
                                    style={{ width: '80%' }}
                                    value={1234567.89}
                                    precision={2}
                                    spinners={false}
                                    groupSeparator={n.groupSeparator}
                                    decimalSeparator={n.decimalSeparator}
                                    prefix={n.prefix || ''}
                                    suffix={n.suffix || ''}
                                />
                            </div>
                        ))
                    }
                </div>
            </div>
        );
    }
}

export default App;