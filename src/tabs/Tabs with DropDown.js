import React from 'react';
import { Tabs, TabPanel, Menu, MenuItem, MenuButton } from 'rc-easyui';

class App extends React.Component {
    renderDropdown() {
        return (
            <MenuButton
                text="Help"
                iconCls="icon-help"
                plain
                border={false}
                menu={() => (
                    <Menu>
                        <MenuItem text="Welcome"></MenuItem>
                        <MenuItem text="Help Contents"></MenuItem>
                        <MenuItem text="Search" iconCls="icon-search"></MenuItem>
                        <MenuItem text="Dynamic Help"></MenuItem>
                    </Menu>
                )}
                onClick={() => this.tabs.select(2)}
            />
        )
    }
    render() {
        return (
            <div>
                <h2>Tabs with DropDown</h2>
                <Tabs style={{ height: 250 }} ref={ref => this.tabs = ref}>
                    <TabPanel title="About">
                        <p>EasyUI for React</p>
                    </TabPanel>
                    <TabPanel title="My Documents">
                        <p>My Documents</p>
                    </TabPanel>
                    <TabPanel header={this.renderDropdown.bind(this)} headerStyle={{ padding: 0 }}>
                        <p>This is the help content.</p>
                    </TabPanel>
                </Tabs>
            </div>
        );
    }
}

export default App;