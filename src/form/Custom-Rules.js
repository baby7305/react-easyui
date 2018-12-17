import React from 'react';
import { Form, Label, TextBox, NumberBox, CheckBox, LinkButton } from 'rc-easyui';

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            user: {
                name: null,
                age: 10,
                email: null,
                accept: false
            },
            rules: {
                name: ['required', 'exists'],
                age: 'age[20]',
                email: "email"
            },
            errors: {}
        }
    }
    getCustomRules() {
        return {
            exists: {
                validator: (value) => {
                    return new Promise((resolve) => {
                        setTimeout(() => {
                            const b = ['name1', 'name2'].indexOf(value) > -1;
                            resolve(b)
                        }, 200)
                    })
                },
                message: 'The user does not exist.'
            },
            age: {
                validator(value, param) {
                    return value > parseInt(param[0], 10);
                },
                message: 'The age must be greater than {0}'
            }
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
        const { user, rules } = this.state;
        return (
            <div>
                <h2>Custom Rules</h2>
                <Form ref={ref => this.form = ref}
                    model={user}
                    rules={rules}
                    validateRules={this.getCustomRules()}
                    onChange={this.handleChange.bind(this)}
                    onValidate={(errors) => this.setState({ errors: errors })}
                >
                    <div style={{ marginBottom: '20px' }}>
                        <Label htmlFor="name" align="top">Name(name1,name2):</Label>
                        <TextBox inputId="name" name="name" value={user.name}></TextBox>
                        <div className="error">{this.getError('name')}</div>
                    </div>
                    <div style={{ marginBottom: '20px' }}>
                        <Label htmlFor="age" align="top">Age:</Label>
                        <NumberBox inputId="age" name="age" value={user.age}></NumberBox>
                        <div className="error">{this.getError('age')}</div>
                    </div>
                    <div style={{ marginBottom: '20px' }}>
                        <Label htmlFor="email" align="top">Email:</Label>
                        <TextBox inputId="email" name="email" value={user.email}></TextBox>
                        <div className="error">{this.getError('email')}</div>
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