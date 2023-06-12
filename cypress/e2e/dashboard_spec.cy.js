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
    .find('input[name="title"]').type('text').should('have.value', 'text')
    cy.get('form')
    .find('input[name="urlToShorten"]').type('https://www.google.com').should('have.value', 'https://www.google.com')
  })
  
  it('When a user fills out and submits the form, the new shortened URL is rendered', () => {
    
    cy.intercept('GET', 'http://localhost:3001/api/v1/*', {
      fixture: 'urlStub.json'
    })
    cy.intercept('POST', 'http://localhost:3001/api/v1/urls', {
      fixture: 'postStub.json'
    })
    cy.visit('http://localhost:3000')

    cy.get('form')
    .find('input[name="title"]').type('Awesomer photo').should('have.value', 'Awesomer photo')
    cy.get('form')
    .find('input[name="urlToShorten"]').type('https://www.google.com').should('have.value', 'https://www.google.com')
    cy.get('button')
    .contains('Shorten Please!').click().wait(2000)

    cy.get('.url')
      .contains('Awesomer photo')
    cy.get('.url')
      .contains('https://www.google.com')
    cy.get('.url')
      .contains('http://localhost:3001/useshorturl/2')    

  })
})

