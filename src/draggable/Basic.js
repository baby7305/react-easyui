import React from 'react';
import { Draggable } from 'rc-easyui';

class App extends React.Component {
    render() {
        return (
            <div>
                <h2>Basic Draggable</h2>
                <Draggable>
                    <div style={{ width: '200px', height: '200px', border: '1px solid #ccc' }}>
                        <p style={{ textAlign: 'center' }}>Drag Me</p>
                    </div>
                </Draggable>
            </div>
        );
    }
}

export default App;