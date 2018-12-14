import React from 'react';
import { ComboBox, Label } from 'rc-easyui';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: null,
            total: 10000,
            pageSize: 20,
            data: this.getData(10000)
        }
    }
    getData(total) {
        let data = [];
        for (let i = 0; i < total; i++) {
            data.push({
                id: i,
                name: "Item" + i
            });
        }
        return data;
    }
    render() {
        return (
            <div>
                <h2>Virtual Scroll</h2>
                <p>The Virtual Scroll allows the ComboBox to display millions of items.</p>
                <Label htmlFor="c1" align="top">Select a hero:</Label>
                <ComboBox
                    {...this.state}
                    virtualScroll
                    valueField="id"
                    textField="name"
                    rowHeight={30}
                    onChange={(value) => this.setState({ value: value })}
                />
                <p>You selected: {this.state.value}</p>
            </div>
        );
    }
}

export default App;