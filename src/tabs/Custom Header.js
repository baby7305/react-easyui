import React from 'react';
import { Tabs, TabPanel } from 'rc-easyui';

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            panels: [{
                name: 'Modem',
                desp: 'A modem (modulator-demodulator) is a device that modulates an analog carrier signal to encode digital information, and also demodulates such a carrier signal to decode the transmitted information.'
            }, {
                name: 'Scanner',
                desp: 'In computing, an image scanner—often abbreviated to just scanner—is a device that optically scans images, printed text, handwriting, or an object, and converts it to a digital image.'
            }, {
                name: 'Pda',
                desp: 'A personal digital assistant (PDA), also known as a palmtop computer, or personal data assistant, is a mobile device that functions as a personal information manager. PDAs are largely considered obsolete with the widespread adoption of smartphones.'
            }, {
                name: 'Tablet',
                desp: 'A tablet computer, or simply tablet, is a one-piece mobile computer. Devices typically have a touchscreen, with finger or stylus gestures replacing the conventional computer mouse.'
            }]
        }
    }
    render() {
        const tabHeader = (panel) => {
            return (
                <div className="tt-inner">
                    <img alt="" src={'https://www.jeasyui.com/demo/main/images/' + panel.name.toLowerCase() + '.png'} />
                    <p>{panel.name}</p>
                </div>
            )
        }
        return (
            <div>
                <h2>Custom Header</h2>
                <Tabs style={{ height: 250 }} headerHeight={64}>
                    {
                        this.state.panels.map((panel, index) => (
                            <TabPanel key={index} header={() => tabHeader(panel)}>
                                <p>{panel.desp}</p>
                            </TabPanel>
                        ))
                    }
                </Tabs>
            </div>
        );
    }
}

export default App;