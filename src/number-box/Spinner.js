import React from 'react';
import { Label, NumberBox } from 'rc-easyui';

class App extends React.Component {
    render() {
        return (
            <div>
                <h2>Number Spinner</h2>
                <div style={{ marginBottom: 10 }}>
                    <Label for="n1" align="top">Increment:</Label>
                    <NumberBox inputId="n1" value={100} increment={10}></NumberBox>
                </div>
                <div style={{ marginBottom: 10 }}>
                    <Label for="n2" align="top">Range:</Label>
                    <NumberBox inputId="n2" value={100} increment={10} min={10} max={200}></NumberBox>
                </div>
            </div>
        );
    }
}

export default App;