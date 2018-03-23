import React from 'react';

import './Tabs.css';

export default class Tabs extends React.Component {
    state = {
        activeTabIndex: 0
    };

    // shouldComponentUpdate(nextProps, nextState) {
    //     return this.state.activeTabIndex !== nextState.activeTabIndex;
    // }

    handleTabClick = tabIndex => this.setState(state => state.activeTabIndex === tabIndex ? null : ({ activeTabIndex: tabIndex })); 
    
    /* ☝️ you can pass down setState() not a new state but a function which will receive state, check whether it's ☝️
    changed and then return null or new state. While returning null component won't e rerendered */

    render() {
        console.log('render');
        return (
            <div className="tabs">
                <nav className="tab-bar">
                    {React.Children.map(this.props.children, (tab, index) =>
                        React.cloneElement(tab, {
                            index,
                            active: index === this.state.activeTabIndex,
                            onClick: this.handleTabClick
                        }))
                    }
                </nav>

                <div className="tab-panel">
                    {this.props.children[this.state.activeTabIndex].props.children}
                </div>
            </div>
        );
    }
}