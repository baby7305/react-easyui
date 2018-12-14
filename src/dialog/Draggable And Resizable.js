import React from 'react';
import { Dialog, LinkButton } from 'rc-easyui';

class App extends React.Component {
    render() {
        return (
            <div>
                <h2>Draggable And Resizable</h2>
                <LinkButton onClick={() => this.dlg.open()}>Open Dialog</LinkButton>
                <Dialog
                    title="Draggable And Resizable"
                    style={{ width: 400, height: 200 }}
                    modal
                    draggable
                    resizable
                    ref={ref => this.dlg = ref}
                >
                    <p style={{ textAlign: 'center', margin: '50px 0', fontSize: '16px' }}>The Dialog Content.</p>
                </Dialog>
            </div>
        );
    }
}

export default App;