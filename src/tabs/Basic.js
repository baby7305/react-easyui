import React from 'react';
import { Tabs, TabPanel } from 'rc-easyui';

class App extends React.Component {
    render() {
        return (
            <div>
                <h2>Basic Tabs</h2>
                <Tabs style={{ height: 250 }}>
                    <TabPanel title="Tab1">
                        <p>Tab Panel1</p>
                    </TabPanel>
                    <TabPanel title="Tab2">
                        <p>Tab Panel2</p>
                    </TabPanel>
                    <TabPanel title="Tab3">
                        <p>Tab Panel3</p>
                    </TabPanel>
                    <TabPanel title="Help" closable iconCls="icon-help">
                        <p>This is the help content.</p>
                    </TabPanel>
                </Tabs>
            </div>
        );
    }
}

export default App;