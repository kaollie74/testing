import React from 'react'
import { mount } from 'enzyme'
import Root from 'Root';
import CommentBox from 'components/CommentBox'

let wrapped;

beforeEach(() => {
  wrapped = mount(<Root><CommentBox /></Root>);

})

afterEach(() => {
  wrapped.unmount()
})

it('has a text area and a button', () => {
  expect(wrapped.find("textarea").length).toEqual(1);
  expect(wrapped.find("button").length).toEqual(1)

})

describe('the textarea', () => {

  beforeEach(() => {
    //provide a fake object to pass to the event handler
    wrapped.find('textarea').simulate('change', {
      target: { value: 'new comment' }
    })
  })

  it('has a text area that users can type in', () => {

    wrapped.update(); // forces React to re-render
    // check to see if new comment
    expect(wrapped.find('textarea').prop('value')).toEqual('new comment')

  })

  it('when form is submitted, textarea is emptied', () => {
    wrapped.update(); // update to re-render
    expect(wrapped.find('textarea').prop('value')).toEqual('new comment'); // make new comment is there
    wrapped.find('form').simulate('submit') // simulate the onSubmit function to submit the form
    wrapped.update(); // update to re-render

    expect(wrapped.find('textarea').prop('value')).toEqual('');// we expect after the re-render that the the property of 'value' should be '' 

  })
})

