import React from 'react';
import { SideMenu, LinkButton } from 'rc-easyui';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            width: 200,
            collapsed: false,
            selection: null,
            menus: [
                {
                    text: "Forms",
                    iconCls: "fa fa-wpforms",
                    state: "open",
                    children: [
                        {
                            text: "Form Element"
                        },
                        {
                            text: "Wizard"
                        },
                        {
                            text: "File Upload"
                        }
                    ]
                },
                {
                    text: "Mail",
                    iconCls: "fa fa-at",
                    selected: true,
                    children: [
                        {
                            text: "Inbox"
                        },
                        {
                            text: "Sent"
                        },
                        {
                            text: "Trash",
                            children: [
                                {
                                    text: "Item1"
                                },
                                {
                                    text: "Item2"
                                }
                            ]
                        }
                    ]
                },
                {
                    text: "Layout",
                    iconCls: "fa fa-table",
                    children: [
                        {
                            text: "Panel"
                        },
                        {
                            text: "Accordion"
                        },
                        {
                            text: "Tabs"
                        }
                    ]
                }
            ]
        }
    }
    handleClick() {
        this.setState({
            collapsed: !this.state.collapsed,
            width: this.state.collapsed ? 200 : 50
        })
    }
    render() {
        return (
            <div>
                <h2>SideMenu Style</h2>
                <LinkButton onClick={this.handleClick.bind(this)} style={{ marginBottom: 20 }}>Toggle</LinkButton>
                <SideMenu style={{ width: this.state.width }}
                    data={this.state.menus}
                    collapsed={this.state.collapsed}
                    onSelectionChange={(selection) => this.setState({ selection: selection })}
                />
                <p>You selected: {this.state.selection ? this.state.selection.text : null}</p>
            </div>
        );
    }
}

export default App;