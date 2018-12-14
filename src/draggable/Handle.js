import React from 'react';
import { Draggable } from 'rc-easyui';

class App extends React.Component {
    render() {
        return (
            <div>
                <h2>Draggable Handle</h2>
                <Draggable handle=".dd-title">
                    <div style={{ width: '200px', height: '200px', border: '1px solid #ccc' }}>
                        <div className="dd-title" style={{ padding: '5px', background: '#888', color: '#fff' }}>Title</div>
                    </div>
                </Draggable>
            </div>
        );
    }
}

export default App;