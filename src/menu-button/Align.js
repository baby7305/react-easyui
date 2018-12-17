import React from 'react';
import { MenuButton, Menu, MenuItem, MenuSep, SubMenu, Panel, LinkButton, ComboBox, Label } from 'rc-easyui';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            menuAlign: "left",
            alignments: [
                { value: "left", text: "Left" },
                { value: "right", text: "Right" }
            ]
        }
    }
    editMenu() {
        return (
            <Menu>
                <MenuItem text="Undo" iconCls="icon-undo"></MenuItem>
                <MenuItem text="Redo" iconCls="icon-redo"></MenuItem>
                <MenuSep></MenuSep>
                <MenuItem text="Cut"></MenuItem>
                <MenuItem text="Copy"></MenuItem>
                <MenuItem text="Paste"></MenuItem>
                <MenuSep></MenuSep>
                <MenuItem text="Toolbar">
                    <SubMenu>
                        <MenuItem text="Address"></MenuItem>
                        <MenuItem text="Link"></MenuItem>
                        <MenuItem text="Navigation Toolbar"></MenuItem>
                        <MenuItem text="Bookmark Toolbar"></MenuItem>
                        <MenuSep></MenuSep>
                        <MenuItem text="New Toolbar..."></MenuItem>
                    </SubMenu>
                </MenuItem>
                <MenuItem text="Delete" iconCls="icon-remove"></MenuItem>
                <MenuItem text="Select All"></MenuItem>
            </Menu>
        )
    }
    helpMenu() {
        return (
            <Menu>
                <MenuItem text="Help"></MenuItem>
                <MenuItem text="Update"></MenuItem>
                <MenuItem text="About"></MenuItem>
            </Menu>
        )
    }
    aboutMenu() {
        return (
            <Menu noline>
                <div style={{ padding: '10px' }}>
                    <img src="https://www.jeasyui.com/images/logo1.png" style={{ width: 150, height: 50 }} />
                </div>
            </Menu>
        )
    }
    render() {
        const { menuAlign } = this.state;
        return (
            <div>
                <h2>Menu Align</h2>
                <div style={{ marginBottom: 20 }}>
                    <Label htmlFor="c1" style={{ width: 100 }}>Alignment:</Label>
                    <ComboBox
                        inputId="c1"
                        panelStyle={{ height: 'auto' }}
                        data={this.state.alignments}
                        editable={false}
                        value={this.state.menuAlign}
                        onChange={(value) => this.setState({ menuAlign: value })}
                    />
                </div>
                <Panel bodyStyle={{ padding: '5px' }}>
                    <LinkButton plain>Home</LinkButton>
                    <MenuButton menuAlign={menuAlign} text="Edit" plain iconCls="icon-edit" menu={this.editMenu}></MenuButton>
                    <MenuButton menuAlign={menuAlign} text="Help" plain iconCls="icon-help" menu={this.helpMenu}></MenuButton>
                    <MenuButton menuAlign={menuAlign} text="About" plain menu={this.aboutMenu}></MenuButton>
                </Panel>
            </div>
        );
    }
}

export default App;