import React from 'react';
import { LinkButton, ComboBox } from 'rc-easyui';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            align: "left",
            alignOptions: [
                { value: "left", text: "Left" },
                { value: "right", text: "Right" },
                { value: "top", text: "Top" },
                { value: "bottom", text: "Bottom" }
            ]
        }
    }
    render() {
        const { align, alignOptions } = this.state;
        const btnStyle = {
            minWidth: '80px',
            margin: '0 2px'
        }
        return (
            <div>
                <h2>Icon Align</h2>
                <ComboBox
                    data={alignOptions}
                    editable={false}
                    value={align}
                    onChange={(value) => this.setState({ align: value })}
                />
                <div style={{ marginTop: 20 }}>
                    <LinkButton style={btnStyle} iconCls="icon-add" iconAlign={align}>Add</LinkButton>
                    <LinkButton style={btnStyle} iconCls="icon-remove" iconAlign={align}>Remove</LinkButton>
                    <LinkButton style={btnStyle} iconCls="icon-save" iconAlign={align}>Save</LinkButton>
                    <LinkButton style={btnStyle} iconCls="icon-cut" disabled iconAlign={align}>Cut</LinkButton>
                </div>
            </div>
        );
    }
}

export default App;