import React from 'react';
import { Panel, Pagination } from 'rc-easyui';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            total: 114,
            pageNumber: 1,
            pageSize: 10,
            layout1: [
                "list",
                "sep",
                "first",
                "prev",
                "next",
                "last",
                "sep",
                "refresh",
                "info"
            ],
            layout2: ["first", "prev", "next", "last", "info"],
            layout3: ["links", "info"]
        }
    }
    render() {
        const { total, pageNumber, pageSize } = this.state;
        const pager = (layout) => (
            <Pagination
                total={total}
                pageNumber={pageNumber}
                pageSize={pageSize}
                layout={layout}
                onPageChange={event => this.setState(event)}
            />
        );
        const panel = (layout) => (
            <Panel
                style={{ marginBottom: 10 }}
                bodyStyle={{ padding: 20 }}
                footer={() => (pager(layout))}
            >
                <p>Page Number: {pageNumber}</p>
            </Panel>
        );
        return (
            <div>
                <h2>Pagination Layout</h2>
                {panel(this.state.layout1)}
                {panel(this.state.layout2)}
                {panel(this.state.layout3)}
            </div>
        );
    }
}

export default App;