import React from 'react';
import { Accordion, AccordionPanel } from 'rc-easyui';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            menus: [
                {
                    text: "Forms",
                    iconCls: "wpforms",
                    submenus: ["Form Element", "Wizard", "File Upload"]
                },
                {
                    text: "Mail",
                    iconCls: "at",
                    submenus: ["Inbox", "Sent", "Trash"]
                },
                {
                    text: "Layout",
                    iconCls: "table",
                    submenus: ["Panel", "Accordion", "Tabs"]
                }
            ]
        }
    }
    render() {
        return (
            <div>
                <h2>Accordion Style</h2>
                <Accordion className="a1" animate>
                    {
                        this.state.menus.map((menu, index) => (
                            <AccordionPanel
                                key={index}
                                title={menu.text}
                                iconCls={'fa fa-' + menu.iconCls}
                            >
                                <div style={{ padding: 5 }}>
                                    {
                                        menu.submenus.map((item, index) => (
                                            <a href=" " className="item" key={index} onClick={e => e.preventDefault()}>{item}</a>
                                        ))
                                    }
                                </div>
                            </AccordionPanel>
                        ))
                    }
                </Accordion>
            </div>
        );
    }
}

export default App;