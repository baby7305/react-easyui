import React from 'react';
import { Tree } from 'rc-easyui';

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            data: this.getData()
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
        ];
    }
    render() {
        return (
            <div>
                <h2>Editable Tree</h2>
                <Tree data={this.state.data} clickToEdit></Tree>
            </div>
        );
    }
}

export default App;