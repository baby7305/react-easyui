import React from 'react';
import { Label, SwitchButton } from 'rc-easyui';

class App extends React.Component {
    render() {
        return (
            <div>
                <h2>SwitchButton State</h2>
                <div style={{ marginBottom: 20 }}>
                    <Label htmlFor="s1">Normal:</Label>
                    <SwitchButton inputId="s1"></SwitchButton>
                </div>
                <div style={{ marginBottom: 20 }}>
                    <Label htmlFor="s2">Disabled:</Label>
                    <SwitchButton inputId="s2" disabled></SwitchButton>
                </div>
                <div style={{ marginBottom: 20 }}>
                    <Label htmlFor="s3">Readonly:</Label>
                    <SwitchButton inputId="s3" readonly value></SwitchButton>
                </div>
            </div>
        );
    }
}

export default App;