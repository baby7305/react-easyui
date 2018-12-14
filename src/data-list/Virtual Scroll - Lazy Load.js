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
            loading: false,
            selection: null
        }
    }
    componentDidMount() {
        this.loadPage(this.state.pageNumber, this.state.pageSize);
    }
    loadPage(pageNumber, pageSize) {
        this.setState({ loading: true })
        setTimeout(() => {
            let result = this.getData(pageNumber, pageSize);
            this.setState(Object.assign({}, result, {
                data: result.rows,
                loading: false
            }))
        }, 300);
    }
    getData(pageNumber, pageSize) {
        let total = 100000;
        let data = [];
        let start = (pageNumber - 1) * pageSize;
        for (let i = start + 1; i <= start + pageSize; i++) {
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
            pageNumber: pageNumber,
            pageSize: pageSize,
            rows: data
        };
    }
    handleSelectionChange(selection) {
        this.setState({ selection: selection })
    }
    handlePageChange(event) {
        this.loadPage(event.pageNumber, event.pageSize);
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
                <h2>Virtual Scroll - Lazy Load</h2>
                <DataList
                    style={{ width: 550, height: 250 }}
                    {...this.state}
                    virtualScroll
                    lazy
                    rowHeight={75}
                    idField="inv"
                    selectionMode="single"
                    renderItem={this.renderItem.bind(this)}
                    onSelectionChange={this.handleSelectionChange.bind(this)}
                    onPageChange={this.handlePageChange.bind(this)}
                />
                <p>You selected: {JSON.stringify(this.state.selection)}</p>
            </div>
        );
    }
}

export default App;