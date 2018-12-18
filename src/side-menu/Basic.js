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
                    text: "Item1",
                    iconCls: "icon-sum",
                    state: "open",
                    children: [
                        {
                            text: "Option1"
                        },
                        {
                            text: "Option2"
                        },
                        {
                            text: "Option3",
                            children: [
                                {
                                    text: "Option31"
                                },
                                {
                                    text: "Option32"
                                }
                            ]
                        }
                    ]
                },
                {
                    text: "Item2",
                    iconCls: "icon-more",
                    children: [
                        {
                            text: "Option4"
                        },
                        {
                            text: "Option5"
                        },
                        {
                            text: "Option6"
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
                <h2>Basic SideMenu</h2>
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