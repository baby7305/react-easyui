import React from 'react';
import { Dialog, LinkButton, TextBox } from 'rc-easyui';

class App extends React.Component {
    render() {
        return (
            <div>
                <h2>No Border</h2>
                <Dialog borderType="none" modal>
                    <div style={{ padding: '0 20px' }}>
                        <div className="mytitle">Sign up</div>
                        <div className="mytext">
                            <p>Please enter your email address.</p>
                        </div>
                        <TextBox placeholder="Email address" style={{ width: '100%' }}></TextBox>
                        <LinkButton className="c5" style={{ width: '100%', height: '34px', margin: '40px 0' }}>Sign me up!</LinkButton>
                    </div>
                </Dialog>
            </div>
        );
    }
}

export default App;