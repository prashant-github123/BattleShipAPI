import React from 'react';
import { shallow } from 'enzyme';
// import renderer from 'react-test-renderer';
import CreateShip from '../CreateShip';
// import {retriveShipLocation } from './../actions';
describe('CreateShip (Shallow passing the ship coords directly)', () => {
  let wrapper;
  let output;
  const currentUser = {
    'message':'',
    'status':true,
    'statusCode':200,
    'gameId':'',
    'playerId':'',
    'playerName':'',
  };

  beforeEach(() => {
    wrapper = shallow(<CreateShip currentUser={currentUser} />);
  });
  it('+++ render the DUMB component', () => {
    expect(wrapper.length).toEqual(1);
  });
  it('+++ contains button with class="next-submit"', () => {
    expect(wrapper.find('button.next-submit').type()).toEqual('button');
    wrapper.find('button.next-submit').simulate('click');
  });
  it('on click of box change class', () => {
    wrapper.setState({
      rows: [0, 1, 2, 3, 4, 5, 6],
      cols: [0, 1, 2, 3, 4, 5, 6],
      horizontal: true,
      shipSize: 3,
    });
    wrapper.find('.indent').slice(1).at(1).simulate('mouseOver', { target: {
      id: '0',
    } });
    // expect(wrapper.find('.indent').hasClass('shipSelected')).to.equal(true);
    wrapper.find('.indent').forEach((node) => {
      expect(node.hasClass('shipSelected')).to.equal(true);
    });
  });
  it('on click of box change class', () => {
    wrapper.setState({ 
      rows: [0, 1, 2, 3, 4, 5, 6],
      cols: [0, 1, 2, 3, 4, 5, 6],
      horizontal: true,
      shipSize: 3,
    });
    wrapper.find('.indent').slice(1).at(1).simulate('click', { target: {
      id: '0',
    } });
    wrapper.find('.indent').forEach((node) => {
      expect(node.hasClass('shipSelected')).to.equal(true);
    });
    // expect(wrapper.find('.indent').hasClass('shipSelected')).to.equal(3);
  });
});
