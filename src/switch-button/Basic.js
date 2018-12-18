import React from 'react';
import { Label, SwitchButton } from 'rc-easyui';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            received: true,
            shared: true,
            subscribed: false
        }
    }
    render() {
        const { received, shared, subscribed } = this.state;
        return (
            <div>
                <h2>Basic SwitchButton</h2>
                <div style={{ marginBottom: 20 }}>
                    <Label htmlFor="s1" style={{ width: 150 }}>Receive mail:</Label>
                    <SwitchButton inputId="s1" value={received} onChange={(value) => this.setState({ received: value })}></SwitchButton>
                </div>
                <div style={{ marginBottom: 20 }}>
                    <Label htmlFor="s2" style={{ width: 150 }}>Shared network:</Label>
                    <SwitchButton inputId="s2" value={shared} onChange={(value) => this.setState({ shared: value })}></SwitchButton>
                </div>
                <div style={{ marginBottom: 20 }}>
                    <Label htmlFor="s3" style={{ width: 150 }}>Subscribed:</Label>
                    <SwitchButton inputId="s3" value={subscribed} onChange={(value) => this.setState({ subscribed: value })}></SwitchButton>
                </div>
                <p>Received: {String(received)}, Shared: {String(shared)}, Subscribed: {String(subscribed)}</p>
            </div>
        );
    }
}

export default App;