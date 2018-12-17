import React from 'react';
import { LinkButton, ButtonGroup } from 'rc-easyui';

class App extends React.Component {
    render() {
        return (
            <div>
                <h2>Button Group</h2>
                <p>Single Selection</p>
                <ButtonGroup selectionMode="single">
                    <LinkButton iconCls="icon-add" toggle selected>Add</LinkButton>
                    <LinkButton iconCls="icon-remove" toggle>Remove</LinkButton>
                    <LinkButton iconCls="icon-save" toggle>Save</LinkButton>
                    <LinkButton iconCls="icon-cut" disabled>Cut</LinkButton>
                </ButtonGroup>
                <p>Multiple Selection</p>
                <ButtonGroup selectionMode="multiple">
                    <LinkButton iconCls="icon-add" toggle>Add</LinkButton>
                    <LinkButton iconCls="icon-remove" toggle>Remove</LinkButton>
                    <LinkButton iconCls="icon-save" toggle>Save</LinkButton>
                    <LinkButton iconCls="icon-cut" disabled>Cut</LinkButton>
                </ButtonGroup>
            </div>
        );
    }
}

export default App;