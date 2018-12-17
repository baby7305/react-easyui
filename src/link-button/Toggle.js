import React from 'react';
import { LinkButton } from 'rc-easyui';

class App extends React.Component {
    render() {
        const style = {
            toggle: true,
            style: { margin: '0 2px' }
        }
        return (
            <div>
                <h2>Toggle Button</h2>
                <LinkButton iconCls="icon-add"  {...style} selected>Add</LinkButton>
                <LinkButton iconCls="icon-remove"  {...style}>Remove</LinkButton>
                <LinkButton iconCls="icon-save"  {...style}>Save</LinkButton>
                <LinkButton iconCls="icon-cut" disabled {...style}>Cut</LinkButton>
            </div>
        );
    }
}

export default App;