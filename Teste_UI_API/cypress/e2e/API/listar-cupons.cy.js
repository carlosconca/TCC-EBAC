/// <reference types="cypress" />

it('Deve listar todos os cupons cadastrados', () => {
    cy.request({
        method: 'GET',
        url: `${Cypress.env('baseUrlApi')}/coupons`,
        headers: {
            authorization: 'Basic YWRtaW5fZWJhYzpAYWRtaW4hJmJAYyEyMDIy'
        },
        failOnStatusCode: false
    }).then((response) => {
        cy.log(JSON.stringify(response.body));
        expect(response.status).to.equal(200);
    });
});

it('Deve cadastrar um novo cupom com os campos obrigatórios', () => {
   
    let code = `Ganhe ${Math.floor(Math.random() * 100000000)}`;

    cy.request({
        method: 'POST',
        url: `${Cypress.env('baseUrlApi')}/coupons`, 
        headers: {
            authorization: 'Basic YWRtaW5fZWJhYzpAYWRtaW4hJmJAYyEyMDIy',
    
        },
        body: {
            code: code,
            amount: "10.00",
            discount_type: "fixed_product",
            description: "Cupom de desconto de teste"
        },
        failOnStatusCode: false
    }).then((res) => {
        expect(res.status).to.equal(201);
    });
});

