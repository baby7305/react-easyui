import React from 'react';
import { Draggable, Panel } from 'rc-easyui';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            containerWidth: 500,
            containerHeight: 300,
            dragWidth: 100,
            dragHeight: 100
        }
    }
    handleDrag(event) {
        const { containerWidth, containerHeight, dragWidth, dragHeight } = this.state;
        var d = event;
        if (d.left < 0) {
            d.left = 0;
        }
        if (d.top < 0) {
            d.top = 0;
        }
        if (d.left + dragWidth > containerWidth - 2) {
            d.left = containerWidth - 2 - dragWidth;
        }
        if (d.top + dragHeight > containerHeight - 2) {
            d.top = containerHeight - 2 - dragHeight;
        }
        d.target.applyDrag();
    }
    render() {
        const { containerWidth, containerHeight, dragWidth, dragHeight } = this.state;
        const panelStyle = {
            position: "relative",
            width: containerWidth + "px",
            height: containerHeight + "px"
        }
        const dragStyle = {
            border: "1px solid #ccc",
            width: dragWidth + "px",
            height: dragHeight + "px"
        }
        return (
            <div>
                <h2>Constrain Draggable</h2>
                <Panel bodyStyle={panelStyle}>
                    <Draggable onDrag={this.handleDrag.bind(this)}>
                        <div style={dragStyle}>
                            <p style={{ textAlign: 'center' }}>Drag Me</p>
                        </div>
                    </Draggable>
                </Panel>
            </div>
        );
    }
}

export default App;