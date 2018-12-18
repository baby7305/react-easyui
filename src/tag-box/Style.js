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
    tagCss(row) {
        if (row.id === '3') {
            return {
                background: "#ffd7d7",
                color: "#c65353"
            };
        } else if (row.id === '4') {
            return {
                background: "#b8eecf",
                color: "#45872c"
            };
        } else {
            return null;
        }
    }
    render() {
        return (
            <div>
                <h2>TagBox Style</h2>
                <TagBox
                    style={{ width: 300 }}
                    valueField="id"
                    textField="text"
                    placeholder="Select a Language"
                    limitToList
                    hasDownArrow
                    tagCss={this.tagCss}
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