import React from 'react';
import { SideMenu } from 'rc-easyui';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: 'AppLayout',
            width: 200,
            collapsed: false,
            selectedMenu: null,
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
    toggle() {
        const { collapsed } = this.state;
        this.setState({
            collapsed: !collapsed,
            width: collapsed ? 200 : 50
        })
    }
    handleItemClick(item) {
        this.setState({ selectedMenu: item })
    }
    render() {
        const { menus, title, width, selectedMenu, collapsed } = this.state;
        return (
            <div>
                <div className="f-column">
                    <div className="main-header f-row">
                        <div className="f-row f-full">
                            <div className="main-title f-animate f-row" style={{ width: width }}>
                                <img className="app-logo" src="https://www.jeasyui.com/favicon.ico" />
                                {!collapsed && <span>{title}</span>}
                            </div>
                            <div className="main-bar f-full">
                                <span className="main-toggle fa fa-bars" onClick={this.toggle.bind(this)}></span>
                            </div>
                        </div>
                    </div>
                    <div className="f-row f-full">
                        <div className="sidebar-body f-animate" style={{ width: width }}>
                            {!collapsed && <div className="sidebar-user">User Panel</div>}
                            <SideMenu data={menus} border={false} collapsed={collapsed} onItemClick={this.handleItemClick.bind(this)}></SideMenu>
                        </div>
                        <div className="main-body f-full">
                            {selectedMenu && <p>{selectedMenu.text}</p>}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;