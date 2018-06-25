import React from 'react';
import { Meteor } from "meteor/meteor";
import PropTypes from 'prop-types';
import { Accounts } from 'meteor/accounts-base';

import { Links } from '../api/links';
import LinksList from './LinksList';

export default class link extends React.Component {
  onLogout() {
    Accounts.logout();
  }
  onSubmit(e) {
    const url = this.refs.url.value.trim();
    e.preventDefault();
    if (url) {
      Meteor.call('links.insert',url);
      //Links.insert({ url,userId:Meteor.userId() });
      this.refs.url.value = '';
    }

  }
  render() {
    return (
      <div>
        <h1>Add ur Link here</h1>
        <button onClick={this.onLogout.bind(this)}>Logout</button>
        <LinksList />
        <p>Add Link</p>
        <form onSubmit={this.onSubmit.bind(this)}>
          <input type="text" ref='url' placeholder="URL" />
          <button>Add Link</button>
        </form>
      </div>
    );
  }
};
