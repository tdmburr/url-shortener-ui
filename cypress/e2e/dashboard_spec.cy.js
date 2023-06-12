describe('URL Shortener Dashboard', () => {

  beforeEach(() => {

    cy.intercept('GET', 'http://localhost:3001/api/v1/urls', {
      fixture: 'urlStub.json'
    })
    cy.visit('http://localhost:3000')
  })

  it('When a user visits the page, they can view the page title and the existing shortened URLs', () => {
    cy.get('h1')
      .should('contain', 'URL Shortener')
    cy.get('.url')
      .contains('Awesome')  
  })

  it('When a user visits the page, they can view the Form with the proper inputs', () => {
    
    cy.get('form')
      cy.get('input[name="title"]')
      cy.get('input[name="urlToShorten"]')
    });

  it('When a user fills out the form, the information is reflected in the input fields', () => {
    cy.get('form')
    .find('input[name="title"]').type('text')
    cy.get('form')
    .find('input[name="urlToShorten"]').type('https://www.google.com')
  })
  
  
})

