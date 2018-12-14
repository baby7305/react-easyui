import React from 'react';
import { Draggable, Droppable } from 'rc-easyui';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            dropped: false,
            isover: false
        }
    }
    render() {
        const dropCls = 'droparea' + (this.state.isover ? ' over' : '') + (this.state.dropped ? ' dropped' : '');
        return (
            <div>
                <h2>Basic Droppable</h2>
                <Draggable>
                    <div className="dragitem">
                        <p style={{ textAlign: 'center' }}>Drag Me</p>
                    </div>
                </Draggable>
                <Droppable
                    onDragEnter={() => this.setState({ isover: true })}
                    onDragLeave={() => this.setState({ isover: false })}
                    onDrop={() => this.setState({ dropped: true })}
                >
                    <div className={dropCls}>
                        <p style={{ textAlign: 'center' }}>Drop here</p>
                    </div>
                </Droppable>
            </div>
        );
    }
}

export default App;