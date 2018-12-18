import React from 'react';
import { Tree } from 'rc-easyui';

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            data: this.getData(),
            selection: null
        }
    }
    getData() {
        return [
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
                        state: "closed",
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
                        id: 16,
                        text: "Actions",
                        children: [
                            {
                                text: "Add",
                                iconCls: "icon-add"
                            },
                            {
                                text: "Remove",
                                iconCls: "icon-remove"
                            },
                            {
                                text: "Save",
                                iconCls: "icon-save"
                            },
                            {
                                text: "Search",
                                iconCls: "icon-search"
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
        ];
    }
    handleSelectionChange(selection) {
        this.setState({ selection: selection })
    }
    render() {
        const { selection } = this.state;
        return (
            <div>
                <h2>Node Icon</h2>
                <Tree data={this.state.data} onSelectionChange={this.handleSelectionChange.bind(this)}></Tree>
                {
                    selection && <p>Selected: {selection.text}</p>
                }
            </div>
        );
    }
}

export default App;