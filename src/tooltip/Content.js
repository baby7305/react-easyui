import React from 'react';
import { Tooltip, Panel, TextBox, PasswordBox, LinkButton } from 'rc-easyui';

class App extends React.Component {
    tipContent() {
        return (
            <Panel border={false} style={{ width: 200 }}>
                <div style={{ marginBottom: 10 }}>
                    <TextBox iconCls="icon-man" placeholder="Username" style={{ width: '100%' }}></TextBox>
                </div>
                <div style={{ marginBottom: 10 }}>
                    <PasswordBox iconCls="icon-lock" placeholder="Password" style={{ width: '100%' }}></PasswordBox>
                </div>
                <div style={{ marginBottom: 10, textAlign: 'center' }}>
                    <LinkButton>Login</LinkButton>
                    <LinkButton>Cancel</LinkButton>
                </div>
            </Panel>
        )
    }
    render() {
        return (
            <div>
                <h2>Tooltip Content</h2>
                <div style={{ padding: '20px 40px' }}>
                    <Tooltip content={this.tipContent}>
                        <span>Login to System</span>
                    </Tooltip>
                </div>
            </div>
        );
    }
}

export default App;