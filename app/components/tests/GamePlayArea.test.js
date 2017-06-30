import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import GamePlayArea from './../GamePlayArea';
import {retriveShipLocation } from './../../actions';

// Snapshot for SignUpForm React Component
describe('GamePlayArea --- Snapshot',()=>{
    const currentUser = {
        "message":"",
        "status":true,
        "statusCode":200,
        "gameId":"",
        "playerId":"",
        "playerName":""
    };
    const shipLocation = {};
    const data = {};
    it('capturing Snapshot of GamePlayArea', () => {
        const renderedValue =  renderer.create(<GamePlayArea currentUser={currentUser}
        retriveShipLocation={retriveShipLocation}
        shipLocation={shipLocation}
        data={data}
        />).toJSON()
        expect(renderedValue).toMatchSnapshot();
    });

});