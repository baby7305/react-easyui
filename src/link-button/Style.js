import React from 'react';
import { ButtonGroup, LinkButton } from 'rc-easyui';

class App extends React.Component {
    render() {
        return (
            <div>
                <h2>Button Style</h2>
                <div style={{ margin: '20px 0' }}>
                    <ButtonGroup>
                        <LinkButton className="c1" style={{ width: '120px' }}>Button1</LinkButton>
                        <LinkButton className="c2" style={{ width: '120px' }}>Button2</LinkButton>
                        <LinkButton className="c3" style={{ width: '120px' }}>Button3</LinkButton>
                        <LinkButton className="c4" style={{ width: '120px' }}>Button4</LinkButton>
                    </ButtonGroup>
                </div>
                <div style={{ margin: '20px 0' }}>
                    <ButtonGroup>
                        <LinkButton className="c5" style={{ width: '120px' }}>Button5</LinkButton>
                        <LinkButton className="c6" style={{ width: '120px' }}>Button6</LinkButton>
                        <LinkButton className="c7" style={{ width: '120px' }}>Button7</LinkButton>
                        <LinkButton className="c8" style={{ width: '120px' }}>Button8</LinkButton>
                    </ButtonGroup>
                </div>
            </div>
        );
    }
}

export default App;