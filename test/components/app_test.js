import { renderComponent , expect } from '../test_helper';
import App from '../../src/components/app';

describe('App' , () => {
  let component;

  beforeEach(() => {
    component = renderComponent(App);
  });

  it('should always have a comment box', () => {
    expect(component.find('.comment-box')).to.exist;
  });

  it('should always have a comment-list component', () => {
    expect(component.find('.comment-list')).to.exist;
  });
});
