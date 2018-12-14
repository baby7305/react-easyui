import React from 'react';
import { ComboTree } from 'rc-easyui';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: [],
            data: [
                {
                    id: 1,
                    text: "My Documents",
                    children: [
                        {
                            id: 11,
                            text: "Photos",
                            state: "closed",
                            children: [
                                {
                                    id: 111,
                                    text: "Friend"
                                },
                                {
                                    id: 112,
                                    text: "Wife"
                                },
                                {
                                    id: 113,
                                    text: "Company"
                                }
                            ]
                        },
                        {
                            id: 12,
                            text: "Program Files",
                            children: [
                                {
                                    id: 121,
                                    text: "Intel"
                                },
                                {
                                    id: 122,
                                    text: "Java"
                                },
                                {
                                    id: 123,
                                    text: "Microsoft Office"
                                },
                                {
                                    id: 124,
                                    text: "Games"
                                }
                            ]
                        },
                        {
                            id: 13,
                            text: "index.html"
                        },
                        {
                            id: 14,
                            text: "about.html"
                        },
                        {
                            id: 15,
                            text: "welcome.html"
                        }
                    ]
                }
            ]
        }
    }
    formatText(value) {
        if (this.state.value && this.state.value.length > 3) {
            return this.state.value.length + " nodes selected";
        }
        return value;
    }
    render() {
        return (
            <div>
                <h2>Multiple ComboTree</h2>
                <ComboTree
                    style={{ width: 300 }}
                    multiple
                    textFormatter={this.formatText.bind(this)}
                    data={this.state.data}
                    value={this.state.value}
                    onChange={(value) => this.setState({ value: value })}
                />
                <p>You selected: {this.state.value && this.state.value.join(',')}</p>
            </div>
        );
    }
}

export default App;