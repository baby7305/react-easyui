import React from 'react';
import { SplitButton, MenuButton, Menu, MenuItem, MenuSep, SubMenu, Panel, LinkButton, SwitchButton } from 'rc-easyui';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            enabled: true
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
        const enabled = this.state.enabled;
        const disabled = !enabled;
        return (
            <div>
                <h2>SplitButton State</h2>
                <div style={{ marginBottom: 20 }}>
                    <SwitchButton
                        style={{ width: 100 }}
                        onText="Enabled"
                        offText="Disabled"
                        value={enabled}
                        onChange={(value) => this.setState({ enabled: value })}
                    />
                </div>
                <Panel bodyStyle={{ padding: '5px' }}>
                    <LinkButton plain>Home</LinkButton>
                    <SplitButton text="Edit" disabled={disabled} plain iconCls="icon-edit" menu={this.editMenu}></SplitButton>
                    <SplitButton text="Help" disabled={disabled} plain iconCls="icon-help" menu={this.helpMenu}></SplitButton>
                    <MenuButton text="About" disabled={disabled} plain menu={this.aboutMenu}></MenuButton>
                </Panel>
            </div>
        );
    }
}

export default App;