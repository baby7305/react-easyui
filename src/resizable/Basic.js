import React from 'react';
import { Resizable } from 'rc-easyui';

class App extends React.Component {
    render() {
        const itemStyle = {
            position: 'relative',
            width: '200px',
            height: '150px',
            border: '1px solid #ccc'
        }
        const resizeProps = {
            minWidth: 100,
            minHeight: 100
        }
        return (
            <div>
                <h2>Basic Resizable</h2>
                <Resizable {...resizeProps}>
                    <div style={itemStyle}>
                        <p style={{ textAlign: 'center' }}>Resize Me</p>
                    </div>
                </Resizable>
            </div>
        );
    }
}

export default App;