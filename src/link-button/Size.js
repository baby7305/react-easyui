import React from 'react';
import { ButtonGroup, LinkButton } from 'rc-easyui';

class App extends React.Component {
    render() {
        return (
            <div>
                <h2>Button Size</h2>
                <p>Small Buttons</p>
                <ButtonGroup>
                    <LinkButton iconCls="icon-add">Add</LinkButton>
                    <LinkButton iconCls="icon-remove">Remove</LinkButton>
                    <LinkButton iconCls="icon-save">Save</LinkButton>
                    <LinkButton iconCls="icon-cut" disabled>Cut</LinkButton>
                </ButtonGroup>
                <p>Large Buttons</p>
                <ButtonGroup>
                    <LinkButton iconCls="icon-large-picture" size="large" iconAlign="top">Picture</LinkButton>
                    <LinkButton iconCls="icon-large-clipart" size="large" iconAlign="top">Clipart</LinkButton>
                    <LinkButton iconCls="icon-large-shapes" size="large" iconAlign="top">Shapes</LinkButton>
                    <LinkButton iconCls="icon-large-smartart" size="large" iconAlign="top">SmartArt</LinkButton>
                    <LinkButton iconCls="icon-large-chart" size="large" iconAlign="top">Chart</LinkButton>
                </ButtonGroup>
            </div>
        );
    }
}

export default App;