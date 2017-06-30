import React from 'react';
import renderer from 'react-test-renderer';
import PlaceMyShip from './../PlaceMyShip';

// Snapshot for PlaceMyShip React Component
describe('Place My Ship --- Snapshot',()=>{
    const placeShip = {};
    beforeEach(()=>{
        let data = {"message":"","status":true,"statusCode":200,"gameId":"","playerId":"","playerName":""};
        global.sessionStorage.setItem('currentUser',JSON.stringify(data));
    })
    it('capturing Snapshot of PlaceMyShip', () => {
        const renderedValue =  renderer.create(<PlaceMyShip placeShip={placeShip} />).toJSON()
        expect(renderedValue).toMatchSnapshot();
    });

});
