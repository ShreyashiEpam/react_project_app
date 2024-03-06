describe('template spec', () => {
  beforeEach('passes', () => {
    cy.visit('http://localhost:3000');
    cy.get('div').should('exist');
  })

  it('should increment value when Increment button is clicked', () => {
    cy.contains('Increment').should('be.visible').click();
    cy.contains('Value: 1').should('exist'); 
  });

  it('should decrement value when Decrement button is clicked', () => {
    cy.contains('Decrement').should('be.visible').click();
    cy.contains('Value: -1').should('exist'); 
  });
})

