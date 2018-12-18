import React from 'react';
import { SearchBox } from 'rc-easyui';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            searchingValue: {
                value: null,
                category: null
            },
            categories: [
                { value: 'all', text: 'All News', iconCls: 'icon-ok' },
                { value: 'sports', text: 'Sports News', iconCls: 'icon-man' }
            ]
        }
    }
    handleSearch(searchingValue) {
        this.setState({ searchingValue: searchingValue })
    }
    handleClear() {
        const value = Object.assign({}, this.state.searchingValue, { value: null })
        this.setState({ searchingValue: value })
    }
    render() {
        const { searchingValue, categories } = this.state;
        return (
            <div>
                <h2>Basic SearchBox</h2>
                <SearchBox
                    style={{ width: 300 }}
                    placeholder="Input something here"
                    value={searchingValue.value}
                    category={searchingValue.category}
                    categories={categories}
                    onSearch={this.handleSearch.bind(this)}
                    addonRight={() => (
                        <span className="textbox-icon icon-clear" title="Clear value" onClick={this.handleClear.bind(this)}></span>
                    )}
                />
                <p>You are searching: {JSON.stringify(searchingValue)}</p>
            </div>
        );
    }
}

export default App;