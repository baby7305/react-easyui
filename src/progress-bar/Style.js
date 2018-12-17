import React from 'react';
import { ProgressBar } from 'rc-easyui';

class App extends React.Component {
    render() {
        return (
            <div>
                <h2>Custom Value</h2>
                <div style={{ marginBottom: 20 }}>
                    <ProgressBar value={30} className="mybar"></ProgressBar>
                </div>
                <div style={{ marginBottom: 20 }}>
                    <ProgressBar value={20} barCls="c1"></ProgressBar>
                </div>
                <div style={{ marginBottom: 20 }}>
                    <ProgressBar value={40} barCls="c2"></ProgressBar>
                </div>
                <div style={{ marginBottom: 20 }}>
                    <ProgressBar value={50} barCls="c3"></ProgressBar>
                </div>
                <div style={{ marginBottom: 20 }}>
                    <ProgressBar value={60} barCls="c4"></ProgressBar>
                </div>
                <div style={{ marginBottom: 20 }}>
                    <ProgressBar value={80} barCls="c5"></ProgressBar>
                </div>
                <div style={{ marginBottom: 20 }}>
                    <ProgressBar value={100} barCls="c6"></ProgressBar>
                </div>
            </div>
        );
    }
}

export default App;