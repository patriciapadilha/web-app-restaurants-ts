// eslint-disable-next-line @typescript-eslint/no-unused-vars
import * as C from "cypress";

describe('Inicial Page', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000')
  })
  
  it('Open Page', () => {
    cy.visit('http://localhost:3000')
  })

  it('The page render restaurants', () => {
    cy.get('[data-testid="restaurant-card"]').first().should('contain', 'Restaurant 1')
  })

  it('Filter by name', () => {
    cy.get('[data-testid="input-seach-by-name"]').type('restaurant 5');
    cy.wait(3000);
    cy.get('[data-testid="restaurant-card"]').first().should('contain', 'Restaurant 5')
  })

  it('Remove filter', () => {
    cy.get('[data-testid="input-seach-by-name"]').type('r');
    cy.get('[data-testid="restaurant-card"]').first().should('contain', 'Restaurant 1');
  })

  it('Go to Details', () => {
    cy.get('[data-testid="restaurant-card"]').first().click();
    cy.url().should('be.equal', 'http://localhost:3000/restaurants/1')
    cy.get('[data-testid="restaurant-name"]').should('contain', 'Restaurant 1');
  })

  it('Return', () => {
    cy.get('[data-testid="restaurant-card"]').first().click();
    cy.url().should('be.equal', 'http://localhost:3000/restaurants/1')
    cy.get('[data-testid="btn-return"]').click();
    cy.url().should('be.equal', 'http://localhost:3000/restaurants')
  })
})