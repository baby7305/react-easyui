import React from 'react';
import { Label, CheckBox } from 'rc-easyui';

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            values: [],
            fruits: ["Apple", "Orange", "Banana"]
        }
    }
    handleChange() {
        this.setState({ values: [...this.state.values] });
    }
    render() {
        return (
            <div>
                <h2>Basic Checkbox</h2>
                {
                    this.state.fruits.map(fruit => {
                        return (
                            <div key={fruit}>
                                <CheckBox inputId={fruit} multiple value={fruit} values={this.state.values} onChange={this.handleChange.bind(this)}></CheckBox>
                                <Label htmlFor={fruit} style={{ margin: '0 5px' }}>{fruit}</Label>
                            </div>
                        )
                    })

                }
                {
                    this.state.values.length > 0 &&
                    <p>You selected: {this.state.values.join(',')}</p>
                }
            </div>
        );
    }
}

export default App;