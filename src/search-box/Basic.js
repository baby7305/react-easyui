import React from 'react';
import { SearchBox } from 'rc-easyui';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: null
        }
    }
    handleSearch({ value }) {
        this.setState({ value: value })
    }
    handleClear() {
        this.setState({ value: null })
    }
    render() {
        const value = this.state.value;
        return (
            <div>
                <h2>Basic SearchBox</h2>
                <SearchBox
                    style={{ width: 300 }}
                    placeholder="Input something here"
                    value={value}
                    onSearch={this.handleSearch.bind(this)}
                    addonRight={() => (
                        <span className="textbox-icon icon-clear" title="Clear value" onClick={this.handleClear.bind(this)}></span>
                    )}
                />
                <p>You are searching: {value}</p>
            </div>
        );
    }
}

export default App;