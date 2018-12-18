import React from 'react';
import { Tabs, TabPanel, SwitchButton, Label } from 'rc-easyui';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            plain: false,
            narrow: false,
            justified: false
        }
    }
    render() {
        const switchButton = (field) => {
            const id = field + '_id';
            return (
                <div style={{ marginBottom: 4 }}>
                    <Label htmlFor={id}>{field}:</Label>
                    <SwitchButton
                        inputId={id}
                        value={this.state[field]}
                        onChange={(value) => this.setState({ [field]: value })}
                    />
                </div>
            )
        }
        return (
            <div>
                <h2>Tab Style</h2>
                {switchButton('plain')}
                {switchButton('narrow')}
                {switchButton('justified')}
                <Tabs {...this.state} style={{ height: 250 }}>
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