import React from 'react';
import PropTypes from 'prop-types';

export default class NumInput extends React.Component {

  constructor (props) {
    super(props);
    this.state = { value: this.format(props.value) };
    this.onBlur = this.onBlur.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  componentWillReceiveProps (newProps) {
    this.setState({ value: this.format(newProps.value) });
  }

  onBlur (e) {
    console.log('NumInput onBlur firing');
    this.props.onChange(e, this.unformat(this.state.value));
  }

  onChange (e) {
    if (e.target.value.match(/^\d*$/)) {
      this.setState ({ value: e.target.value });
    }
  }

  format (num) {
    return num != null ? num.toString() : '';
  }

  unformat (str) {
    console.log('unformat firing');
    const val = parseInt(str, 10);

    console.log('unformat firing with original val =', val);
    return isNaN(val) ? null : val;
  }

  render () {
    return (
      <input
        type="text" {...this.props} value={this.state.value}
        onBlur={this.onBlur} onChange={this.onChange}
      />
    );
  }
}

NumInput.propTypes = {
  value: PropTypes.number,
  onChange: PropTypes.func.isRequired,
};