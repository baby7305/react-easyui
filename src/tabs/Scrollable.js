import React from 'react';
import { Tabs, TabPanel } from 'rc-easyui';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            languages: [
                "Basic",
                "Pascal",
                "C++",
                "Java",
                "JavaScript",
                "Fortran",
                "Perl",
                "Ruby",
                "Python",
                "Scratch",
                "Erlang"
            ]
        }
    }
    render() {
        return (
            <div>
                <h2>Scrollable Tabs</h2>
                <Tabs scrollable style={{ width: 600, height: 250 }}>
                    {
                        this.state.languages.map(lang => (
                            <TabPanel key={lang} title={lang} closable>
                                <div style={{ padding: 20 }}>{lang}</div>
                            </TabPanel>
                        ))
                    }
                </Tabs>
            </div>
        );
    }
}

export default App;