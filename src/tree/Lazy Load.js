import React from 'react';
import { Tree } from 'rc-easyui';

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            data: []
        }
    }
    componentDidMount() {
        this.getNodes().then(data => {
            this.setState({ data: data })
        });
    }
    getNodes(node) {
        let nodes = [
            {
                id: 1,
                text: "My Documents",
                children: [
                    {
                        id: 11,
                        text: "Photos",
                        state: "closed"
                    },
                    {
                        id: 12,
                        text: "Program Files",
                        state: "closed"
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
        let photos = [
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
        ];
        let programs = [
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
        ];
        return new Promise(resolve => {
            if (!node) {
                resolve(nodes);
                return;
            }
            setTimeout(() => {
                if (node.id == 11) {
                    resolve(photos);
                } else if (node.id == 12) {
                    resolve(programs);
                }
            }, 1000);
        });
    }
    handleNodeExpand(node) {
        if (!node.children) {
            this.getNodes(node).then(data => {
                node.children = data;
                this.setState({})
            });
        }
    }
    render() {
        const { data } = this.state;
        return (
            <div>
                <h2>Lazy Load</h2>
                <Tree data={data} onNodeExpand={this.handleNodeExpand.bind(this)}></Tree>
            </div>
        );
    }
}

export default App;