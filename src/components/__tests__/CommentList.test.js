import React from 'react';
import { mount } from 'enzyme';

import CommentList from 'components/CommentList';
import Root from 'Root';

let wrapper;

beforeEach(() => {

  const initialState = {
    comments: ['Comment1', 'Comment 2']
  }
  wrapper = mount(
    <Root initialState = {initialState}>
      <CommentList />
    </Root>
  )
})

it('creates one <li></li> per coment', () => {
  console.log(wrapper.find('li').length); 
})