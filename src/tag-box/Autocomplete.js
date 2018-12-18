import React from 'react';
import { TagBox } from 'rc-easyui';

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            value: ["3", "4"],
            data: [
                {
                    id: "1",
                    text: "Java"
                },
                {
                    id: "2",
                    text: "C#"
                },
                {
                    id: "3",
                    text: "Ruby"
                },
                {
                    id: "4",
                    text: "Perl"
                },
                {
                    id: "5",
                    text: "Basic"
                }
            ]
        }
    }
    render() {
        return (
            <div>
                <h2>TagBox with Autocomplete</h2>
                <TagBox
                    style={{ width: 300 }}
                    valueField="id"
                    textField="text"
                    placeholder="Select a Language"
                    limitToList
                    hasDownArrow
                    data={this.state.data}
                    value={this.state.value}
                    onChange={value => this.setState({ value: value })}
                />
                <p>{JSON.stringify(this.state.value)}</p>
            </div>
        );
    }
}

export default App;