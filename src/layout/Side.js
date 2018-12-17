import React from 'react';
import { Layout, LayoutPanel } from 'rc-easyui';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            collapsed: true
        }
    }
    handleCollapse() {
        this.setState({ collapsed: true })
    }
    handleExpand() {
        this.setState({ collapsed: false })
    }
    handlePanelCollapse() {
        this.setState({ collapsed: true })
    }
    render() {
        return (
            <div>
                <h2>Side Panel</h2>
                <Layout style={{ width: 700, height: 250 }}>
                    <LayoutPanel
                        style={{ width: 180 }}
                        region="west"
                        headerCls="side-menu-header"
                        bodyCls="f-column"
                        float
                        border={false}
                        collapsed={this.state.collapsed}
                        header={() => (
                            <div>
                                <svg className="side-toggle" viewBox="0 0 24 24" onClick={this.handleCollapse.bind(this)}><path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"></path></svg>
                                <span>Side Menu</span>
                            </div>
                        )}
                        onCollapse={this.handlePanelCollapse.bind(this)}
                    >
                        <div className="side-menu f-full">
                            <div className="side-menu-item">
                                <div className="side-menu-icon">
                                    <svg className="side-toggle" viewBox="0 0 24 24"><path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"></path></svg>
                                </div>
                                <div className="side-menu-text">Login</div>
                            </div>
                            <div className="side-menu-item">
                                <div className="side-menu-icon">
                                    <svg className="side-toggle" viewBox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg>
                                </div>
                                <div className="side-menu-text">Mark</div>
                            </div>
                        </div>
                    </LayoutPanel>
                    <LayoutPanel
                        style={{ height: '100%' }}
                        region="center"
                        headerCls="main-header"
                        header={() => (
                            <div>
                                <svg className="side-toggle" viewBox="0 0 24 24" onClick={this.handleExpand.bind(this)}><path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"></path></svg>
                                <span>Main Title</span>
                            </div>
                        )}
                    >
                        <div style={{ padding: '10px' }}>
                            <p>Click the top menu icon to expand the side panel.</p>
                        </div>
                    </LayoutPanel>
                </Layout>
            </div>
        );
    }
}

export default App;