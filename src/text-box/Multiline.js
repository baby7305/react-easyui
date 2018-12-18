import React from 'react';
import { TextBox, Label } from 'rc-easyui';

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            description:
                "This TextBox will allow the user to enter multiple lines of text."
        }
    }
    handleSearch(value) {
        this.tree.doFilter(value)
    }
    render() {
        return (
            <div>
                <h2>Multiline TextBox</h2>
                <p>This example shows how to define a textbox htmlFor the user to enter multi-line text input.</p>
                <div style={{ width: '100%', maxWidth: '400px' }}>
                    <div style={{ marginBottom: '10px' }}>
                        <Label htmlFor="t1" align="top">Name:</Label>
                        <TextBox inputId="t1" iconCls="icon-man" style={{ width: '100%' }}></TextBox>
                    </div>
                    <div style={{ marginBottom: '10px' }}>
                        <Label htmlFor="t2" align="top">Description:</Label>
                        <TextBox inputId="t2" multiline value={this.state.description} style={{ width: '100%', height: 120 }}></TextBox>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;