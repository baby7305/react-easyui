import React from 'react';
import { Panel, DataList, FileButton, LinkButton, ButtonGroup } from 'rc-easyui';

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            files: []
        }
    }
    handleSelect(files) {
        files.forEach(file => {
            file.url = window.URL.createObjectURL(file);
        })
        this.setState({
            files: this.state.files.concat(files)
        })
    }
    handleRemoveFile(file) {
        const files = this.state.files.filter(f => f !== file);
        this.setState({
            files: files
        })
    }
    handleClear() {
        this.setState({ files: [] })
    }
    renderItem({ row }) {
        return (
            <div className="fileitem">
                <img alt="" src={row.url} />
                <div className="name">{row.name}</div>
                <div className="size">{row.size}</div>
                <LinkButton iconCls="icon-clear" plain onClick={() => this.handleRemoveFile(row)}></LinkButton>
            </div>
        )
    }
    render() {
        return (
            <div>
                <h2>Select Files</h2>
                <Panel style={{ width: 600 }}>
                    <div className="panel-header" style={{ border: 0 }}>
                        <ButtonGroup>
                            <FileButton style={{ width: 110 }}
                                text="Select Files..."
                                accept="image/*"
                                multiple
                                onSelect={this.handleSelect.bind(this)}
                            />
                            <LinkButton style={{ width: 80 }} onClick={this.handleClear.bind(this)}>Clear</LinkButton>
                        </ButtonGroup>
                    </div>
                    <DataList
                        style={{ minHeight: 100 }}
                        border={false}
                        data={this.state.files}
                        renderItem={this.renderItem.bind(this)}
                    />
                </Panel>
            </div>
        );
    }
}

export default App;