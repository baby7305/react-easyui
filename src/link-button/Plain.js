import React from 'react';
import { Panel, LinkButton } from 'rc-easyui';

class App extends React.Component {
    render() {
        return (
            <div>
                <h2>Plain Button</h2>
                <Panel bodyStyle={{ padding: '5px' }}>
                    <LinkButton iconCls="icon-add" plain>Add</LinkButton>
                    <LinkButton iconCls="icon-reload" plain>Reload</LinkButton>
                    <LinkButton iconCls="icon-search" plain>Search</LinkButton>
                    <LinkButton iconCls="icon-cut" plain>Cut</LinkButton>
                    <LinkButton iconCls="icon-print" plain>Print</LinkButton>
                    <LinkButton iconCls="icon-help" plain></LinkButton>
                    <LinkButton iconCls="icon-save" plain></LinkButton>
                    <LinkButton iconCls="icon-back" plain></LinkButton>
                </Panel>
            </div>
        );
    }
}

export default App;