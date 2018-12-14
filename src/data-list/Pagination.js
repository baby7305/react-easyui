import React from 'react';
import { DataList } from 'rc-easyui';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            total: 0,
            pageNumber: 1,
            pageSize: 20,
            data: [],
            selection: null
        }
    }
    componentDidMount() {
        let result = this.getData();
        this.setState({
            total: result.total,
            data: result.rows
        })
    }
    getData() {
        let total = 1000;
        let data = [];
        for (let i = 1; i <= total; i++) {
            let amount = Math.floor(Math.random() * 1000);
            let price = Math.floor(Math.random() * 1000);
            data.push({
                inv: "Inv No " + i,
                name: "Name " + i,
                amount: amount,
                price: price,
                cost: amount * price,
                note: "Note " + i
            });
        }
        return {
            total: total,
            rows: data
        };
    }
    handleSelectionChange(selection) {
        this.setState({ selection: selection })
    }
    renderItem({ row, rowIndex }) {
        return (
            <div className="product">
                <div className="num">{rowIndex + 1}</div>
                <div className="detail">
                    <p>{row.inv} - {row.name}</p>
                    <p>Amount: {row.amount}</p>
                    <p>Price: {row.price}</p>
                </div>
            </div>
        )
    }
    render() {
        return (
            <div>
                <h2>DataList Pagination</h2>
                <DataList
                    style={{ width: 550, height: 250 }}
                    {...this.state}
                    pagination
                    selectionMode="single"
                    onSelectionChange={this.handleSelectionChange.bind(this)}
                    renderItem={this.renderItem.bind(this)}
                />
                <p>You selected: {JSON.stringify(this.state.selection)}</p>
            </div>
        );
    }
}

export default App;