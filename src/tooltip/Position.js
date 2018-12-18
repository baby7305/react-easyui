import React from 'react';
import { Tooltip, LinkButton } from 'rc-easyui';

class App extends React.Component {
    render() {
        return (
            <div>
                <h2>Tooltip Position</h2>
                <div style={{ padding: '20px 80px' }}>
                    <Tooltip content="This is a tooltip." position="right">
                        <LinkButton style={{ margin: '0 5px' }}>Right</LinkButton>
                    </Tooltip>
                    <Tooltip content="This is a tooltip." position="left">
                        <LinkButton style={{ margin: '0 5px' }}>Left</LinkButton>
                    </Tooltip>
                    <Tooltip content="This is a tooltip." position="bottom">
                        <LinkButton style={{ margin: '0 5px' }}>Bottom</LinkButton>
                    </Tooltip>
                    <Tooltip content="This is a tooltip." position="top">
                        <LinkButton style={{ margin: '0 5px' }}>Top</LinkButton>
                    </Tooltip>
                </div>
            </div>
        );
    }
}

export default App;