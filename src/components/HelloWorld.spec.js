import { mount } from '@cypress/vue';
import HelloWorld from './HelloWorld';

describe('HelloWorld', () => {
  it('render message', () => {
    const msg = 'test component test';
    mount(HelloWorld, {
      propsData: {
        msg,
      },
    });

    cy.get('h1').should('have.text', msg);
  });
});
