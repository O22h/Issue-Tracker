const express     = require('express');
const bodyParser  = require('body-parser');
const Issue       = require('./issue');
const MongoClient = require('mongodb').MongoClient;
const ObjectId    = require('mongodb').ObjectID;

// import 'babel-polyfill';
//
// import express        from 'express';
// import bodyParser     from 'body-parser';
// import MongoClient from 'mongodb';
// import Issue from './issue.js';



const app = express();
app.use(express.static('static'));
app.use(bodyParser.json());

// const issues = [
//   {
//     id: 1, status: 'Open', owner: 'Ravan',
//     created: new Date('2016-08-15'), effort: 5, completionDate: undefined,
//     title: 'Error in console when clicking Add',
//   },
//   {
//     id: 2, status: 'Assigned', owner: 'Eddie',
//     created: new Date('2016-08-16'), effort: 14, completionDate: new Date('2016-08-30'),
//     title: 'Missing bottom border on panel',
//   },
//   {
//     id: 3, status: 'Assigned', owner: 'Ron',
//     created: new Date('2016-08-20'), effort: 8, completionDate: new Date('2016-08-30'),
//     title: 'Test status number 300',
//   },
// ];

if (process.env.NODE_ENV !== 'PRODUCTION') {
  const webpack = require('webpack');
  const webpackDevMiddleware = require ('webpack-dev-middleware');
  const webpackHotMiddleware = require ('webpack-hot-middleware');

  const config = require('../webpack.config');
  config.entry.app.push('webpack-hot-middleware/client', 'webpack/hot/only-dev-server');
  config.plugins.push(new webpack.HotModuleReplacementPlugin());

  const bundler = webpack(config);
  app.use(webpackDevMiddleware(bundler, {noInfo: true}));
  app.use(webpackHotMiddleware(bundler, {log: console.log}));
}

app.get('/api/issues', (req, res) => {
  const filter = {};
  if (req.query.status) filter.status = req.query.status;
  if (req.query.effort_lte || req.query.effort_gte) filter.effort = {};
  if (req.query.effort_lte) filter.effort.$lte = parseInt(req.query.effort_lte, 10);
  if (req.query.effort_gte) filter.effort.$gte = parseInt(req.query.effort_gte, 10);

  db.collection('issues').find(filter).toArray()
    .then(issues => {
      const metadata = { total_count: issues.length };
      res.json({ _metadata: metadata, records: issues })
    })
    .catch(error => {
      console.log(error);
      res.status(500).json({ message: `Internal Server Error: ${error}` });
    });
});

app.get('/api/issues/:id', (req, res) => {
  let issueId;
  try {
    issueId = new ObjectId (req.params.id);
  } catch (error) {
    res.status(422).json({ message: `invalid issue id format: ${error}` });
    return;
  }

  db.collection('issues').find({_id: issueId}).limit(1)
    .next()
    .then(issue => {
      if (!issue) res.status(404).json({ message: `No such issue: ${issueId}` });
      else res.json(issue);
    })
    .catch(error => {
      console.log(error);
      res.status(500).json({ message: `Internal server error: ${error}` })
    })

});

app.post('/api/issues', (req, res) => {
  const newIssue = req.body;
  // newIssue.id = issues.length + 1;
  newIssue.created = new Date();

  // if (!newIssue.status) newIssue.status = 'New';

  const err = Issue.validateIssue(newIssue);
  if (err) {
    res.status(422).json({ message: `invalid request: ${err}` });
    return
  }

  db.collection('issues').insertOne(newIssue).then(result =>
    db.collection('issues').find({ _id: result.insertedId }).limit(1).next()
  ).then(newIssue => {
    res.json(newIssue);
  }).catch(error => {
    console.log(error);
    res.status(500).json({ message: `Internal Server Error: ${error}`});
  });

});

let db;

MongoClient.connect('mongodb://localhost/issuetracker').then(connection => {
  db = connection;
  app.listen(3000, () => {
    console.log('App started on port 3000');
  });
}).catch(error => {
  console.log('ERROR:', error);
});