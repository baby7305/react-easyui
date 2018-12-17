import React from 'react';
import { Messager, LinkButton, ButtonGroup } from 'rc-easyui';

class App extends React.Component {
    alert() {
        this.messager.alert({
            title: "Alert",
            msg: "Here is a message!"
        });
    }
    confirm() {
        this.messager.confirm({
            title: "Confirm",
            msg: "Are you confirm this?",
            result: r => {
                if (r) {
                    alert("confirmed: " + r);
                }
            }
        });
    }
    render() {
        return (
            <div>
                <h2>Custom Messager</h2>
                <ButtonGroup>
                    <LinkButton onClick={this.alert.bind(this)}>Alert</LinkButton>
                    <LinkButton onClick={this.confirm.bind(this)}>Confirm</LinkButton>
                </ButtonGroup>
                <Messager
                    ref={ref => this.messager = ref}
                    showHeader={false}
                    borderType="none"
                    content={({ title, msg, buttons }) => (
                        <div className="m-content">
                            <h2>{title}</h2>
                            <p>{msg}</p>
                            <div className="m-buttons">
                                {
                                    buttons.map((button, index) => (
                                        <LinkButton
                                            key={index}
                                            text={button.text}
                                            onClick={() => this.messager.close(button)}
                                        />
                                    ))
                                }
                            </div>
                        </div>
                    )}
                />
            </div>
        );
    }
}

export default App;