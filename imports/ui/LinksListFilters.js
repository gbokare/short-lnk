import React from "react";
import { Tracker } from 'meteor/tracker';
import {Session} from 'meteor/session';

import { Links } from '../api/links';

export default class LinksListFilters extends React.Component {
    constructor(props){
        super(props);
        this.state ={
            showVisible:true
        }
    }

    componentDidMount() {
        console.log('Componenet Did Mount LinksList');
        this.tracker = Tracker.autorun(() => {
            this.setState({ 
                showVisible : Session.get('showVisible')
             });
        });
    }
    componentWillUnmount() {
        console.log('Coponent will Unamout links list');
        this.tracker.stop();
    }

        render() {
            return (
                <div>
                    <label className ="checkbox">
                        <input className ='checkbox__box' type ="checkbox" checked ={!this.state.showVisible}onChange={(e) =>{
                             Session.set('showVisible',!e.target.checked);
                        }}/>
                        Show Hidden links
                    </label>
                </div>
             );
        }
    }
