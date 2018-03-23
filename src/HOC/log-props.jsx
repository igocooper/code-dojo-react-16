import React from 'react';

const logProps = (Component) => {
    class LogProps extends React.Component {

        componentWillReceiveProps(nextProps, nextState) {
            const props = this.props;
            console.log({nextProps,props});
        }

        render(){
            return (<Component {...this.props}/>
            )
        }
    }

    LogProps.displayName = `LogProps(${Component.displayName || Component.name || 'Component'})`;

    return LogProps;
};

export default logProps;