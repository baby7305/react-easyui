import React from 'react';
import { Menu, MenuItem, SubMenu } from 'rc-easyui';

class App extends React.Component {
    handleContextMenu(event) {
        event.preventDefault();
        this.menu.showContextMenu(event.pageX, event.pageY)
    }
    render() {
        return (
            <div>
                <h2>Context Menu</h2>
                <div
                    className="f-row f-content-center"
                    style={{ width: 400, height: 200, border: '1px solid #ddd' }}
                    onContextMenu={this.handleContextMenu.bind(this)}
                >
                    <p>Right click here to open the Menu.</p>
                </div>
                <Menu ref={ref => this.menu = ref}>
                    <MenuItem text="New"></MenuItem>
                    <MenuItem text="Open">
                        <SubMenu>
                            <MenuItem text="Word"></MenuItem>
                            <MenuItem text="Excel"></MenuItem>
                            <MenuItem text="PowerPoint"></MenuItem>
                        </SubMenu>
                    </MenuItem>
                    <MenuItem text="Save" iconCls="icon-save"></MenuItem>
                    <MenuItem text="Print" iconCls="icon-print" disabled></MenuItem>
                    <MenuItem text="Exit"></MenuItem>
                </Menu>
            </div>
        );
    }
}

export default App;