import React from 'react';
import { Accordion, AccordionPanel } from 'rc-easyui';

class App extends React.Component {
    render() {
        return (
            <div>
                <h2>Basic Accordion</h2>
                <Accordion style={{ height: 250 }}>
                    <AccordionPanel title="Title1">
                        <p>Content1</p>
                    </AccordionPanel>
                    <AccordionPanel title="Title2">
                        <p>Content2</p>
                    </AccordionPanel>
                    <AccordionPanel title="Title3">
                        <p>Content3</p>
                    </AccordionPanel>
                </Accordion>
            </div>
        );
    }
}

export default App;