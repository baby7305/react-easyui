import React from 'react';
import { Label, NumberBox } from 'rc-easyui';

class App extends React.Component {
    render() {
        return (
            <div>
                <h2>Spin Align</h2>
                <div style={{ marginBottom: 10 }}>
                    <Label htmlFor="n1" align="top">Left:</Label>
                    <NumberBox inputId="n1" value={100} spinAlign="left"></NumberBox>
                </div>
                <div style={{ marginBottom: 10 }}>
                    <Label htmlFor="n2" align="top">Right:</Label>
                    <NumberBox inputId="n2" value={100} spinAlign="right"></NumberBox>
                </div>
                <div style={{ marginBottom: 10 }}>
                    <Label htmlFor="n3" align="top">Horizontal:</Label>
                    <NumberBox inputId="n3" value={100} spinAlign="horizontal"></NumberBox>
                </div>
                <div style={{ marginBottom: 10 }}>
                    <Label htmlFor="n4" align="top">Vertical:</Label>
                    <NumberBox inputId="n4" value={100} spinAlign="vertical" inputStyle={{ textAlign: 'center' }} style={{ width: 50, height: 80 }}></NumberBox>
                </div>
            </div>
        );
    }
}

export default App;