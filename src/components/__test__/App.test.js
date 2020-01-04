import React from 'react';
import ReactDOM from 'react-dom';
import App from '../App';
import { shallow } from 'enzyme';
import CommentBox from  '../CommentBox';
import CommentList from '../CommentList';

let wrapped;

beforeEach(() =>{
     wrapped  = shallow(<App/>)
});
it('Shows the CommentBox', () => {


    expect(wrapped.find(CommentBox).length).toEqual(1);
});

it('shows the ListBox',() => {

    expect(wrapped.find(CommentList).length).toEqual(1)
})
