import React from 'react';
import { Tooltip } from 'rc-easyui';

class App extends React.Component {
    render() {
        return (
            <div>
                <h2>Trigger Event</h2>
                <div style={{ padding: '20px 40px' }}>
                    <Tooltip content="This is a tooltip.">
                        <span>Hover Me</span>
                    </Tooltip>
                </div>
                <div style={{ padding: '20px 40px' }}>
                    <Tooltip content="This is a tooltip." showEvent="click">
                        <span>Click Me</span>
                    </Tooltip>
                </div>
            </div>
        );
    }
}

export default App;