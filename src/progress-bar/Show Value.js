import React from 'react';
import { ProgressBar } from 'rc-easyui';

class App extends React.Component {
    render() {
        return (
            <div>
                <h2>Custom Value</h2>
                <div style={{ marginBottom: 20 }}>
                    <ProgressBar value={40} showValue></ProgressBar>
                </div>
                <div style={{ marginBottom: 20 }}>
                    <ProgressBar value={70}></ProgressBar>
                </div>
                <div style={{ marginBottom: 20 }}>
                    <div style={{ textAlign: 'right' }}>50%</div>
                    <ProgressBar value={50} barCls="c6" style={{ height: 4 }}></ProgressBar>
                </div>
            </div>
        );
    }
}

export default App;