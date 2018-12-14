import React from 'react';
import { Dialog, LinkButton, ButtonGroup } from 'rc-easyui';

class App extends React.Component {
    header() {
        return <div>Please Confirm</div>
    }
    footer() {
        return (
            <div>
                <ButtonGroup style={{ width: '100%', height: '50px' }}>
                    <LinkButton className="f-full mybtn" plain>Ok</LinkButton>
                    <LinkButton className="f-full mybtn" plain>Cancel</LinkButton>
                </ButtonGroup>
            </div>
        )
    }
    render() {
        return (
            <div>
                <h2>Custom Dialog Style</h2>
                <LinkButton onClick={() => this.dlg.open()}>Open Dialog</LinkButton>
                <Dialog
                    className="mydlg"
                    headerCls="mydlg-header"
                    footerCls="mydlg-footer"
                    borderType="none"
                    modal
                    ref={ref => this.dlg = ref}
                    header={this.header}
                    footer={this.footer}
                >
                    <p style={{ textAlign: 'center', margin: '50px 0', fontSize: '16px' }}>The Dialog Content.</p>
                </Dialog>
            </div>
        );
    }
}

export default App;