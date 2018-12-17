import React from 'react';
import { Label, MaskedBox } from 'rc-easyui';

class App extends React.Component {
    render() {
        return (
            <div>
                <h2>Basic MaskedBox</h2>
                <div style={{ marginBottom: 10 }}>
                    <Label htmlFor="m1" align="top">Phone Number:</Label>
                    <MaskedBox inputId="m1" mask="(999) 999-9999"></MaskedBox>
                </div>
                <div style={{ marginBottom: 10 }}>
                    <Label htmlFor="m2" align="top">Credit Card:</Label>
                    <MaskedBox inputId="m2" mask="9999 9999 9999 9999"></MaskedBox>
                </div>
                <div style={{ marginBottom: 10 }}>
                    <Label htmlFor="m3" align="top">Percent:</Label>
                    <MaskedBox inputId="m3" mask="99%"></MaskedBox>
                </div>
            </div>
        );
    }
}

export default App;