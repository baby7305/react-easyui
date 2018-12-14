import React from 'react';
import { DateTimeSpinner, Label } from 'rc-easyui';

class App extends React.Component {
    render() {
        return (
            <div>
                <h2>DateTime Format</h2>
                <div style={{ marginBottom: 20 }}>
                    <Label htmlFor="t1" align="top">MM/dd/yyyy HH:mm:ss</Label>
                    <DateTimeSpinner inputId="t1" value="06/24/2017 18:20:30" format="MM/dd/yyyy HH:mm:ss"></DateTimeSpinner>
                </div>
                <div style={{ marginBottom: 20 }}>
                    <Label htmlFor="t2" align="top">MM/dd/yyyy</Label>
                    <DateTimeSpinner inputId="t2" value="06/24/2017" format="MM/dd/yyyy"></DateTimeSpinner>
                </div>
                <div style={{ marginBottom: 20 }}>
                    <Label htmlFor="t3" align="top">yyyy-MM</Label>
                    <DateTimeSpinner inputId="t3" value="2017-09" format="yyyy-MM" selections={[[0, 4], [5, 7]]}></DateTimeSpinner>
                </div>
            </div>
        );
    }
}

export default App;