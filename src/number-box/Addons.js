import React from 'react';
import { Label, NumberBox, LinkButton } from 'rc-easyui';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            n2: 100
        }
    }
    render() {
        return (
            <div>
                <h2>NumberBox Addons</h2>
                <div style={{ marginBottom: 10 }}>
                    <Label for="n1" align="top">Icon:</Label>
                    <NumberBox inputId="n1" value={100} iconCls="icon-man" iconAlign="left"></NumberBox>
                </div>
                <div style={{ marginBottom: 10 }}>
                    <Label for="n2" align="top">Clear button:</Label>
                    <NumberBox
                        inputId="n2"
                        value={this.state.n2}
                        onChange={(value) => this.setState({ n2: value })}
                        addonRight={() => (
                            <span
                                className="textbox-icon icon-clear"
                                onClick={() => this.setState({ n2: null })}
                            />
                        )}
                    />
                </div>
                <div style={{ marginBottom: 10 }}>
                    <Label for="n3" align="top">Button on left:</Label>
                    <NumberBox
                        inputId="n3"
                        value={100}
                        addonLeft={() => (
                            <LinkButton iconCls="icon-search" style={{ borderRadius: 0, borderWidth: '0 1px 0 0', width: '70px', height: '30px' }}>Search</LinkButton>
                        )}
                    />
                </div>
            </div>
        );
    }
}

export default App;