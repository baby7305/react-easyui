import React from 'react';
import { Form, Label, TextBox, CheckBox, ComboBox, LinkButton, Tooltip } from 'rc-easyui';

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            user: {
                name: null,
                email: null,
                hero: null,
                accept: false
            },
            rules: {
                name: ["required", "length[5,10]"],
                email: "email",
                hero: "required"
            },
            errors: {},
            heroes: [
                { value: 11, text: "Mr. Nice" },
                { value: 12, text: "Narco" },
                { value: 13, text: "Bombasto" },
                { value: 14, text: "Celeritas" },
                { value: 15, text: "Magneta" },
                { value: 16, text: "RubberMan" },
                { value: 17, text: "Dynama" },
                { value: 18, text: "Dr IQ" },
                { value: 19, text: "Magma" },
                { value: 20, text: "Tornado" }
            ]
        }
    }
    getError(name) {
        const { errors } = this.state;
        return errors[name] && errors[name].length
            ? errors[name][0]
            : null;
    }
    hasError(name) {
        return this.getError(name) != null;
    }
    handleChange(name, value) {
        let user = Object.assign({}, this.state.user);
        user[name] = value;
        this.setState({ user: user })
    }
    handleSubmit() {
        this.form.validate(errors => {
            // ...
        })
    }
    render() {
        const { user, rules, heroes } = this.state;
        return (
            <div>
                <h2>Validate Form with Tooltip</h2>
                <Form ref={ref => this.form = ref}
                    model={user}
                    rules={rules}
                    onChange={this.handleChange.bind(this)}
                    onValidate={(errors) => this.setState({ errors: errors })}
                >
                    <div style={{ marginBottom: '20px' }}>
                        <Label htmlFor="name" align="top">Name:</Label>
                        <Tooltip content={this.getError('name')}>
                            <TextBox inputId="name" name="name" value={user.name}></TextBox>
                        </Tooltip>
                    </div>
                    <div style={{ marginBottom: '20px' }}>
                        <Label htmlFor="email" align="top">Email:</Label>
                        <Tooltip content={this.getError('email')}>
                            <TextBox inputId="email" name="email" value={user.email}></TextBox>
                        </Tooltip>
                    </div>
                    <div style={{ marginBottom: '20px' }}>
                        <Label htmlFor="hero" align="top">Select a hero:</Label>
                        <Tooltip content={this.getError('hero')}>
                            <ComboBox inputId="hero" data={heroes} name="hero" value={user.hero}></ComboBox>
                        </Tooltip>
                    </div>
                    <div style={{ marginBottom: '20px' }}>
                        <CheckBox inputId="accept" name="accept" checked={user.accept}></CheckBox>
                        <Label htmlFor="accept" style={{ width: 100 }}>Accept Me</Label>
                    </div>
                    <div style={{ marginBottom: '20px' }}>
                        <LinkButton onClick={this.handleSubmit.bind(this)}>Submit</LinkButton>
                    </div>
                </Form>
                <p>{JSON.stringify(user)}</p>
            </div>
        );
    }
}

export default App;