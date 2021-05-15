describe('test', () => {
  it('test', () => {
    cy.visit('/');
    cy.get('h1').should('contain.text', 'Welcome to Your Vue.js App');

    cy.get('[data-cy=test-input]').type('123');
  });
});
