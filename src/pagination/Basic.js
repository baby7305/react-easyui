import React from 'react';
import { Panel, Pagination } from 'rc-easyui';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            total: 114,
            pageNumber: 1,
            pageSize: 10
        }
    }
    render() {
        const { total, pageNumber, pageSize } = this.state;
        return (
            <div>
                <h2>Basic Pagination</h2>
                <Panel bodyStyle={{ padding: 20 }}
                    footer={() => (
                        <Pagination
                            total={total}
                            pageNumber={pageNumber}
                            pageSize={pageSize}
                            onPageChange={event => this.setState(event)}
                        />
                    )}
                >
                    <p>Total: {total}</p>
                    <p>Page Number: {pageNumber}</p>
                    <p>Page Size: {pageSize}</p>
                </Panel>
            </div>
        );
    }
}

export default App;