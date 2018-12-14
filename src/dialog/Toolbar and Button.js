import React from 'react';
import { Dialog, LinkButton } from 'rc-easyui';

class App extends React.Component {
    render() {
        return (
            <div>
                <h2>Toolbar and Button</h2>
                <LinkButton onClick={() => this.dlg.open()}>Open Dialog</LinkButton>
                <Dialog
                    title="Toolbar and Button"
                    style={{ width: 400, height: 200 }}
                    bodyCls="f-column"
                    modal
                    ref={ref => this.dlg = ref}
                >
                    <div className="dialog-toolbar">
                        <LinkButton iconCls="icon-edit" plain>Edit</LinkButton>
                        <LinkButton iconCls="icon-help" plain>Help</LinkButton>
                    </div>
                    <div className="f-full">
                        <p style={{ textAlign: 'center', margin: '20px 0', fontSize: '16px' }}>The Dialog Content.</p>
                    </div>
                    <div className="dialog-button">
                        <LinkButton style={{ width: 80 }}>Save</LinkButton>
                        <LinkButton style={{ width: 80 }}>Close</LinkButton>
                    </div>
                </Dialog>
            </div>
        );
    }
}

export default App;