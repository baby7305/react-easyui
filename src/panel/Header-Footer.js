import React from 'react';
import { Panel, TextBox, LinkButton } from 'rc-easyui';

class App extends React.Component {
    header() {
        return (
            <div className="f-row">
                <div className="f-full" style={{ lineHeight: '30px' }}>Panel Title</div>
                <TextBox iconCls="icon-search"></TextBox>
            </div>
        )
    }
    footer() {
        return (
            <div style={{ padding: 5 }}>
                <LinkButton iconCls="icon-add">New</LinkButton>
                <LinkButton iconCls="icon-remove">Remove</LinkButton>
            </div>
        )
    }
    render() {
        return (
            <div>
                <h2>Header and Footer</h2>
                <Panel
                    title="Panel Title"
                    style={{ height: 200 }}
                    bodyStyle={{ padding: 20 }}
                    header={this.header}
                    footer={this.footer}
                >
                    <p>Panel Content.</p>
                </Panel>
            </div>
        );
    }
}

export default App;