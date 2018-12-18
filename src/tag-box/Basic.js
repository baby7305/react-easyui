import React from 'react';
import { TagBox } from 'rc-easyui';

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            value: ["Apple", "Orange"]
        }
    }
    render() {
        return (
            <div>
                <h2>Basic TagBox</h2>
                <TagBox
                    style={{ width: 300 }}
                    value={this.state.value}
                    onChange={value => this.setState({ value: value })}
                />
                <p>{JSON.stringify(this.state.value)}</p>
            </div>
        );
    }
}

export default App;