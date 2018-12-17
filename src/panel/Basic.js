import React from 'react';
import { Panel } from 'rc-easyui';

class App extends React.Component {
    render() {
        return (
            <div>
                <h2>Basic Panel</h2>
                <Panel title="Panel Title" collapsible bodyStyle={{ padding: 20 }} style={{ height: 200 }}>
                    <p>Panel Content.</p>
                </Panel>
            </div>
        );
    }
}

export default App;