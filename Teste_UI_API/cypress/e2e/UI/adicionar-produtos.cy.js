/// <reference types="cypress" />
import produtosPage from "../../support/page_objects/produtos.page";

context('Exercicio - Testes End-to-end - Fluxo de pedido', () => {


    beforeEach(() => {
        cy.viewport(1280, 1000)
        produtosPage.visitarUrl('')


    });

    it('Adicionar item ao carrinho', () => {
        let fone = '+55 91983243157';
        let cep = '66896-500'

        cy.fixture('produtos').then(dados => {
            produtosPage.buscarProdutoLista(dados[0].nomeProduto)
            produtosPage.addProdutoCarrinho(dados[0].tamanho,
                dados[0].cor,
                dados[0].quantidade)
            cy.get('.woocommerce-message').should('contain', dados[0].nomeProduto)
            cy.get('#primary-menu > .menu-item-629 > a').click()

            produtosPage.buscarProdutoLista(dados[1].nomeProduto)
            produtosPage.addProdutoCarrinho(dados[1].tamanho,
                dados[1].cor,
                dados[1].quantidade)
            cy.get('.woocommerce-message').should('contain', dados[1].nomeProduto)
            cy.get('#primary-menu > .menu-item-629 > a').click()

            produtosPage.buscarProdutoLista(dados[2].nomeProduto)
            produtosPage.addProdutoCarrinho(dados[2].tamanho,
                dados[2].cor,
                dados[2].quantidade)
            cy.get('.woocommerce-message').should('contain', dados[2].nomeProduto)
            cy.get('#primary-menu > .menu-item-629 > a').click()

            produtosPage.buscarProdutoLista(dados[3].nomeProduto)
            produtosPage.addProdutoCarrinho(dados[3].tamanho,
                dados[3].cor,
                dados[3].quantidade)
            cy.get('.woocommerce-message').should('contain', dados[3].nomeProduto)
            cy.get('.woocommerce-message > .button').click()

            cy.contains('a', 'Aether Gym Pant - 36, Blue').should('to.have', 'Aether Gym Pant - 36, Blue')
            cy.contains('a', 'Ajax Full-Zip Sweatshirt - M, Blue').should('to.have', 'Aether Gym Pant - 36, Blue')
            cy.contains('a', 'Arcadio Gym Short - 36, Black').should('to.have', 'Arcadio Gym Short - 36, Black')
            cy.contains('span', '4').should('to.have', '4')


        })
    })


})