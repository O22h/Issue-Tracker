import React from 'react';
import ReactDOM from 'react-dom';
import { Router, HashRouter, Route, Switch, Redirect } from 'react-router-dom';

import IssueList from './IssueList';
import IssueEdit from './IssueEdit';

const contentNode = document.getElementById('contents');
const NoMatch = () => <p>Page Not Found</p>;

const RoutedApp = () => (
  <HashRouter>
    <Switch>
      <Redirect exact from="/" to="/issues" />
      {/*<Route exact path="/" component={IssueList} />*/}
      <Route exact path="/issues" component={IssueList} />
      <Route exact path="/issues/:id" component={IssueEdit} />
      {/*<Route exact path="/issueEdit" component={IssueEdit} />*/}
      <Route exact path="*" component={NoMatch} />
    </Switch>
  </HashRouter>
);


// class IssueFilter extends React.Component {
//     render() {
//         return (
//             <div>This is a placeholder for the Issue Filter.</div>
//         )
//     }
// }

// class IssueRow extends React.Component {
//     render() {
//
//         const issue = this.props.issue;
//
//         return (
//             <tr>
//                 <td>{issue.id}</td>
//                 <td>{issue.status}</td>
//                 <td>{issue.owner}</td>
//                 <td>{issue.created.toDateString()}</td>
//                 <td>{issue.effort}</td>
//                 <td>{issue.completionDate ? issue.completionDate.toDateString() : ''}</td>
//                 <td>{issue.title}</td>
//             </tr>
//         );
//     }
// }
//
// class IssueTable extends React.Component {
//     render() {
//
//         const issueRows = this.props.issues.map(issue => <IssueRow key={issue.id} issue={issue} />);
//
//         return (
//             <table className="bordered-table">
//                 <thead>
//                     <tr>
//                         <th>Id</th>
//                         <th>Status</th>
//                         <th>Owner</th>
//                         <th>Created</th>
//                         <th>Effort</th>
//                         <th>Completion Date</th>
//                         <th>Title</th>
//                     </tr>
//                 </thead>
//                 <tbody>{issueRows}</tbody>
//             </table>
//         );
//     }
// }

// const issues = [
//     {
//         id: 1, status: 'Open', owner: 'Ravan',
//         created: new Date('2016-08-15'), effort: 5, completionDate: undefined,
//         title: 'Error in console when clicking Add',
//     },
//     {
//         id: 2, status: 'Assigned', owner: 'Eddie',
//         created: new Date('2016-08-16'), effort: 14, completionDate: new Date('2016-08-30'),
//         title: 'Missing bottom border on panel',
//     },
// ];
//
// class IssueAdd extends React.Component {
//     constructor () {
//         super();
//         this.handleSubmit = this.handleSubmit.bind(this);
//     }
//
//     handleSubmit(e) {
//         e.preventDefault();
//         let form = document.forms.issueAdd;
//         this.props.createIssue({
//             owner: form.owner.value,
//             title: form.title.value,
//             status: 'New',
//             created: new Date(),
//         });
//         form.owner.value = '';
//         form.owner.focus();
//         form.title.value = '';
//     }
//
//     render() {
//         return (
//             <div>
//                 <form name="issueAdd" onSubmit={this.handleSubmit}>
//                     <input type="text" name="owner" placeholder="Owner" />
//                     <input type="text" name="title" placeholder="Title" />
//                     <button>Add</button>
//                 </form>
//             </div>
//         );
//     }
// }

// class IssueList extends React.Component {
//     constructor () {
//         super();
//         this.state = { issues: [] };
//         this.createIssue = this.createIssue.bind(this);
//     }
//
//     componentDidMount() {
//         this.loadData();
//     }
//
//     loadData() {
//         // setTimeout(() => {
//         //     this.setState({ issues: issues});
//         // }, 500);
//
//       fetch('/api/issues').then(response =>
//         response.json()
//       ).then(data => {
//         console.log('total count of records:', data._metadata.total_count);
//         data.records.forEach(issue => {
//           issue.created = new Date(issue.created);
//           if (issue.completionDate)
//             issue.completionDate = new Date(issue.completionDate);
//         });
//         this.setState({ issues: data.records });
//       }).catch(err => {
//         console.log(err);
//       });
//
//     }
//
//     createIssue(newIssue) {
//
//       fetch('/api/issues', {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify(newIssue),
//
//       }).then(response => {
//
//         if (response.ok) {
//           response.json().then(updatedIssue => {
//             updatedIssue.created = new Date(updatedIssue.created);
//             if (updatedIssue.completionDate)
//               updatedIssue.completionDate = new Date(updatedIssue.completionDate);
//             const newIssues = this.state.issues.concat(updatedIssue);
//             this.setState({issues: newIssues});
//             console.log('Isue is okay', newIssues);
//           });
//         } else {
//           response.json().then(error => {
//             console.log('Failed to add issue: ', error.message);
//           });
//         }
//       }).catch(err => {
//         console.log('Error in sending date to server: ', err.message);
//       });
//
//       // const newIssues = this.state.issues.slice();
//       // newIssue.id = this.state.issues.length + 1;
//       // newIssues.push(newIssue);
//       // this.setState({ issues: newIssues });
//     }
//
//     // createIssue(newIssue) {
//     //
//     //   fetch('/api/issues', {
//     //     method: 'POST',
//     //     headers: { 'Content-Type': 'application/json' },
//     //     body: JSON.stringify(newIssue),
//     //
//     //   }).then(response => {
//     //
//     //     if (response.ok) {
//     //       response.json().then(updatedIssue => {
//     //         updatedIssue.created = new Date(updatedIssue.created);
//     //         if (updatedIssue.completionDate)
//     //           updatedIssue.completionDate = new Date(updatedIssue.completionDate);
//     //         const newIssues = this.state.issues.concat(updatedIssue);
//     //         this.setState({ issues: newIssues });
//     //       });
//     //     } else {
//     //       response.json().then(error => {
//     //         alert("Failed to add issue: " + error.message)
//     //       });
//     //     }
//     //   }).catch(err => {
//     //     alert("Error in sending data to server: " + err.message);
//     //   });
//     // }
//
//     render() {
//         return (
//             <div>
//                 <h1>Issue Tracker</h1>
//                 <IssueFilter/>
//                 <hr/>
//                 <IssueTable issues={this.state.issues} />
//                 <hr/>
//                 <IssueAdd createIssue={this.createIssue}/>
//              </div>
//         );
//     }
// }

ReactDOM.render(<RoutedApp />, contentNode);

if (module.hot) {
  module.hot.accept();
}
