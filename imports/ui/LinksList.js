import React from 'react';
import { Tracker } from 'meteor/tracker';
import { Meteor } from 'meteor/meteor';
//import PropTypes from 'prop-types';

import { Links } from "../api/links";

export default class LinksList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            links: []
        }
    }
    componentDidMount() {
        console.log('Componenet Did Mount LinksList');
        this.linkstracker = Tracker.autorun(() => {
            Meteor.subscribe('links');
            const links = Links.find().fetch();
            this.setState({ links });
        });
    }
    componentWillUnmount() {
        console.log('Coponent will Unamout links list');
        this.linkstracker.stop();
    }
    renderLinksListItems() {
        return this.state.links.map((link) => {
            return <p key={link._id}>{link.url}</p>;
        });
    }
    render() {
        return (
            <div>
                <p>Links List</p>
                <div>
                    {this.renderLinksListItems()}
                </div>
            </div>
        );
    }
}
