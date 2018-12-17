import React from 'react';
import { LinkButton } from 'rc-easyui';

class App extends React.Component {
    style1() {
        return { margin: '0 2px' }
    }
    style2() {
        return { margin: '0 2px', width: '80px' }
    }
    render() {
        return (
            <div>
                <h2>Basic LinkButton</h2>
                <div style={{ marginBottom: '20px' }}>
                    <LinkButton iconCls="icon-add" style={this.style1()}>Add</LinkButton>
                    <LinkButton iconCls="icon-remove" style={this.style1()}>Remove</LinkButton>
                    <LinkButton iconCls="icon-save" style={this.style1()}>Save</LinkButton>
                    <LinkButton iconCls="icon-cut" disabled style={this.style1()}>Cut</LinkButton>
                </div>
                <div>
                    <LinkButton iconCls="icon-search" style={this.style2()}>Search</LinkButton>
                    <LinkButton iconCls="icon-print" style={this.style2()}>Print</LinkButton>
                    <LinkButton iconCls="icon-reload" style={this.style2()}>Reload</LinkButton>
                    <LinkButton iconCls="icon-help" style={this.style2()}>Help</LinkButton>
                </div>
            </div>
        );
    }
}

export default App;