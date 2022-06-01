import React, {Component} from 'react';
import '../css/BaseBadge.css'

class BaseBadge extends Component {
    render() {
        return (
            <div className={`badge ${this.props.type}`}>{this.props.title}</div>
        );
    }
}

export default BaseBadge;
