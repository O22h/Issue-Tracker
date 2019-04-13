import React    from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

export default class IssueFilter extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      status: props.initFilter.status || '',
      effort_gte: props.initFilter.effort_gte || '',
      effort_lte: props.initFilter.effort_lte || '',
      changed: false,
    };
    this.onChangeStatus = this.onChangeStatus.bind(this);
    this.onChangeEffortGte = this.onChangeEffortGte.bind(this);
    this.onChangeEffortLte = this.onChangeEffortLte.bind(this);
    this.applyFilter = this.applyFilter.bind(this);
    this.resetFilter = this.resetFilter.bind(this);
    this.clearFilter = this.clearFilter.bind(this);
  }

  componentWillReceiveProps(newProps) {
    this.setState({
      status: newProps.initFilter.status || '',
      effort_gte: newProps.initFilter.effort_gte || '',
      effort_lte: newProps.initFilter.effort_lte || '',
      changed: false,
    })
  }

  resetFilter() {
    this.setState({
      status: this.props.initFilter.status || '',
      effort_gte: this.props.initFilter.effort_gte || '',
      effort_lte: this.props.initFilter.effort_lte || '',
      changed: false,
    })
  }

  onChangeStatus(e) {
    this.setState({ status: e.target.value, changed: true })
  }

  onChangeEffortGte(e) {
    const effortString = e.target.value;
    if (effortString.match(/^\d*$/)) {
      this.setState({ effort_gte: e.target.value, changed: true })
    }
  }

  onChangeEffortLte(e) {
    const effortString = e.target.value;
    if (effortString.match(/^\d*$/)) {
      this.setState({ effort_lte: e.target.value, changed: true })
    }
  }

  applyFilter() {
    const newFilter = {};

    if (this.state.status) newFilter.status = this.state.status;
    if (this.state.effort_gte) newFilter.efforort_gte = this.state.effort_gte;
    if (this.state.effort_lte) newFilter.effort_lte = this.state.effort_lte;
    console.log('apply filter is firing and newFilter is', newFilter);
    this.props.setFilter(newFilter);
  }

  clearFilter() {
    this.props.setFilter({});
  }

  render() {
    const Separator = () => <span> | </span>;
    return (
      <div>
        Status:
        <select value={this.state.status} onChange={this.onChangeStatus}>
          <option value="">(Any)</option>
          <option value="New">New</option>
          <option value="Open">Open</option>
          <option value="Assigned">Assigned</option>
          <option value="Fixed">Fixed</option>
          <option value="Verified">Verified</option>
          <option value="Closed">Closed</option>
        </select>
        &nbsp;Effort Between:
        <input size={5} value={this.state.effort_gte} onChange={this.onChangeEffortGte} />
        &nbsp;-&nbsp;
        <input size={5} value={this.state.effort_lte} onChange={this.onChangeEffortLte} />
        <button onClick={this.applyFilter}>Apply</button>
        <button onClick={this.resetFilter}>Reset</button>
        <button onClick={this.clearFilter}>Clear</button>

        {/*<Link to="/issues">All Issues</Link>*/}
        {/*<Separator />*/}
        {/*<Link to={{ pathname: '/issues', search: '?status=Open' }}>Open Issues </Link>*/}
        {/*<Separator />*/}
        {/*<Link to="/issues?status=Assigned">Assigned Issues</Link>*/}

      </div>
    );
  }
}

IssueFilter.propTypes = {
  setFilter: PropTypes.func.isRequired,
  initFilter: PropTypes.object.isRequired,
};