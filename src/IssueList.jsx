import React        from 'react';
import 'whatwg-fetch';
import IssueAdd     from './IssueAdd';
import IssueFilter  from './IssueFilter';
import { Link }     from 'react-router-dom';

class IssueRow extends React.Component {
  render() {

    const issue = this.props.issue;

    return (
      <tr>
        <td>
          <Link to={`/issues/${this.props.issue._id}`}>{this.props.issue._id.substr(-4)}</Link>
        </td>
        <td>{issue.status}</td>
        <td>{issue.owner}</td>
        <td>{issue.created.toDateString()}</td>
        <td>{issue.effort}</td>
        <td>{issue.completionDate ? issue.completionDate.toDateString() : ''}</td>
        <td>{issue.title}</td>
      </tr>
    );
  }
}

class IssueTable extends React.Component {
  render() {

    const issueRows = this.props.issues.map(issue => <IssueRow key={issue._id} issue={issue} />);

    return (
      <table className="bordered-table">
        <thead>
        <tr>
          <th>Id</th>
          <th>Status</th>
          <th>Owner</th>
          <th>Created</th>
          <th>Effort</th>
          <th>Completion Date</th>
          <th>Title</th>
        </tr>
        </thead>
        <tbody>{issueRows}</tbody>
      </table>
    );
  }
}

export default class IssueList extends React.Component {
  constructor () {
    super();
    // this.state = { issues: [] };
    this.state = {issues: [],query: {}};
    this.createIssue = this.createIssue.bind(this);
  }

  static getDerivedStateFromProps(props){
    const query = {};
    props.location.search.substring(1).split("&").forEach( key_value => {
      let [key,value] = key_value.split("="); query[key] = value;
    });
    console.log('query is', query);
    return {query}; // Same as return {query: query}
  }

  componentDidMount() {
    this.loadData();
    console.log('component did mount');
  }

  componentDidUpdate(prevProps) {
    console.log('component did update');
    console.log('OLD', prevProps.location.search);
    console.log('NEW', this.props.location.search);

    const oldQuery = prevProps.location.search;
    const newQuery = this.props.location.search;
    // might be here is problem
    if (
      oldQuery === newQuery
      && oldQuery.effort_gte === newQuery.effort_gte
      && oldQuery.effort_lte === newQuery.effort_lte) {
      return;
    }
    this.loadData();
  }

  setFilter(query) {
    this.props.router.push({ pathname: this.props.location.pathname, query });
    console.log('setFilter firing with', query);
  }

  loadData() {
    fetch(`/api/issues${this.props.location.search}`).then(response => {
      if (response.ok) {
        response.json().then(data => {
          console.log('Total count of records:', data._metadata.total_count);
          data.records.forEach(issue => {
            issue.created = new Date(issue.created);
            if (issue.completionDate)
              issue.completionDate = new Date(issue.completionDate);
          });
          this.setState({issues: data.records});
        });
      } else {
        response.json().then(error => {
          alert('Failed to fetch issues:' + error.message)
        });
      }
    }).catch(err => {
      console.log(err);
    });
  }

  createIssue(newIssue) {

    fetch('/api/issues', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newIssue),

    }).then(response => {

      if (response.ok) {
        response.json().then(updatedIssue => {
          updatedIssue.created = new Date(updatedIssue.created);
          if (updatedIssue.completionDate)
            updatedIssue.completionDate = new Date(updatedIssue.completionDate);
          const newIssues = this.state.issues.concat(updatedIssue);
          this.setState({issues: newIssues});
          console.log('Issue is okay', newIssues);
        });
      } else {
        response.json().then(error => {
          console.log('Failed to add issue: ', error.message);
        });
      }
    }).catch(err => {
      console.log('Error in sending date to server: ', err.message);
    });

    // const newIssues = this.state.issues.slice();
    // newIssue.id = this.state.issues.length + 1;
    // newIssues.push(newIssue);
    // this.setState({ issues: newIssues });
  }

  // createIssue(newIssue) {
  //
  //   fetch('/api/issues', {
  //     method: 'POST',
  //     headers: { 'Content-Type': 'application/json' },
  //     body: JSON.stringify(newIssue),
  //
  //   }).then(response => {
  //
  //     if (response.ok) {
  //       response.json().then(updatedIssue => {
  //         updatedIssue.created = new Date(updatedIssue.created);
  //         if (updatedIssue.completionDate)
  //           updatedIssue.completionDate = new Date(updatedIssue.completionDate);
  //         const newIssues = this.state.issues.concat(updatedIssue);
  //         this.setState({ issues: newIssues });
  //       });
  //     } else {
  //       response.json().then(error => {
  //         alert("Failed to add issue: " + error.message)
  //       });
  //     }
  //   }).catch(err => {
  //     alert("Error in sending data to server: " + err.message);
  //   });
  // }

  render() {
    console.log('should see app');
    return (
      <div>
        <h1>Issue Tracker</h1>
        {/*<IssueFilter setFilter={this.setFilter} initFilter={this.props.location.query} />*/}
        {/*<IssueFilter setFilter={this.setFilter} initFilter={this.state.query} />*/}
        <IssueFilter initFilter={this.state.query} setFilter={this.setFilter}/>
        <hr/>
        <IssueTable issues={this.state.issues} />
        <hr/>
        <IssueAdd createIssue={this.createIssue}/>
      </div>
    );
  }
}