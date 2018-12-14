import React from 'react';
import { ComboBox, Label } from 'rc-easyui';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.dataSource = []
        this.state = {
            data: [],
            total: 0,
            pageNumber: 1,
            pageSize: 20
        }
    }
    componentDidMount() {
        for (let i = 1; i <= 10000; i++) {
            this.dataSource.push({
                id: "Id" + i,
                name: "Item" + i
            });
        }
    }
    getData(term, pageNumber, pageSize) {
        term = (term || "").trim();
        let data = this.dataSource.filter(
            row => row.name.toLowerCase().indexOf(term.toLowerCase()) !== -1
        );
        let start = (pageNumber - 1) * pageSize;
        let rows = data.slice(start, start + pageSize);
        return {
            total: data.length,
            pageNumber: pageNumber,
            pageSize: pageSize,
            rows: rows
        };
    }
    handleFilterChange(event) {
        setTimeout(() => {
            let result = this.getData(
                event.filterValue,
                event.pageNumber,
                event.pageSize
            );
            this.setState(Object.assign({}, result, {
                data: result.rows
            }))
        }, 100);
    }
    render() {
        return (
            <div>
                <h2>Virtual Scroll - Lazy Load</h2>
                <p>The Virtual Scroll allows the ComboBox to display millions of items.</p>
                <Label htmlFor="c1" align="top">Select a hero:</Label>
                <ComboBox
                    {...this.state}
                    virtualScroll
                    lazy
                    valueField="id"
                    textField="name"
                    rowHeight={30}
                    onChange={(value) => this.setState({ value: value })}
                    onFilterChange={this.handleFilterChange.bind(this)}
                />
                <p>You selected: {this.state.value}</p>
            </div>
        );
    }
}

export default App;