import React from 'react';
import PropTypes from 'prop-types';
import '../App.css';

export default class Input extends React.Component {

    static propTypes = {
        value: PropTypes.string.isRequired,
        onChange: PropTypes.func.isRequired,
        divClasses: PropTypes.string,
        error: PropTypes.string
    };

    constructor(props) {
        super(props);

        const { value } = this.props;
        this.state = { value };

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        const { value } = event.target;
        this.props.onChange(value);
        this.setState({ value });
    }

    render() {
        const { value } = this.props;

        return (
                <input
                    type={this.props.type.toLowerCase()}
                    value={ value }
                    onChange={ this.handleChange }
                    className='contact--form-input'
                    name='name'
                    placeholder={this.props.type}
                    required=''
                />
                // { this.props.error ? <span className='help-block'>{ this.props.error }</span> : null }
        );
    }
}
