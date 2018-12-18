import React from 'react';
import { Label, SwitchButton } from 'rc-easyui';

class App extends React.Component {
    render() {
        return (
            <div>
                <h2>SwitchButton Style</h2>
                <div style={{ marginBottom: 20 }}>
                    <Label htmlFor="s1">Default:</Label>
                    <SwitchButton inputId="s1"></SwitchButton>
                </div>
                <div style={{ marginBottom: 20 }}>
                    <Label htmlFor="s2">Rounded:</Label>
                    <SwitchButton className="rounded" inputId="s2" value></SwitchButton>
                </div>
            </div>
        );
    }
}

export default App;