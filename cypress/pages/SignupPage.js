class SignupPage {

    go() {
        cy.visit('/')

        cy.get('a[href="/deliver"]').click()
        cy.get('#page-deliver form h1').should('have.text', 'Cadastre-se para  fazer entregas')
    }

    fillForm(deliver) {

        cy.get('input[name="fullName"]').type(deliver.name)
        cy.get('input[name="cpf"]').type(deliver.cpf)
        cy.get('input[name="email"]').type(deliver.email)
        cy.get('input[name="whatsapp"]').type(deliver.whatsapp)

        cy.get('input[name="postalcode"]').type(deliver.address.postalcode)
        cy.get('input[type=button][value="Buscar CEP"]').click()
        cy.get('input[name="address-number"]').type(deliver.address.number)
        cy.get('input[name="address-details"]').type(deliver.address.details)
        //validar os campos preenchidos automaticamente ao clicar no botão busca cep    
        cy.get('input[name="address"]').should('have.value', deliver.address.street)
        cy.get('input[name="district"]').should('have.value', deliver.address.district)
        cy.get('input[name="city-uf"]').should('have.value', deliver.address.city_state)
        //clicar no botão e carregar a foto da cnh
        cy.contains('.delivery-method li', deliver.delivery_method).click()
        cy.get('input[accept^="image"]').attachFile('/images/' + deliver.cnh)
    }

    submit() {
        cy.get('form button[type="submit"]').click()
    }
    /*modalContentShouldBe(expectedMessage){
        cy.get('swal2-container .swal2-html-container').should('have.text', expectedMessage)
    }
    alertMessageShouldBe(expectedMessage){
        cy.get('.alert-error').should('have.text', expectedMessage)
        cy.contains('.alert-error', expectedMessage).should('be.visible')
    }*/

    click() {
        cy.get('button[class="swal2-confirm swal2-styled"]').click()
    }
alert() {
        cy.get('.alert-error').should('have.text', 'Oops! CPF inválido')
    }
    alert2() {
        cy.get('.alert-error').should('have.text', 'Oops! Email com formato inválido.')
    }
    alert3(){
        //cy.get('.alert-error').should('have.text', 'É necessário informar o nome')
        cy.contains('.alert-error', 'É necessário informar o nome').should('be.visible')
    }
    alert4(){
        //cy.get('.alert-error').should('have.text', 'É necessário informar o CEP')
        cy.contains('.alert-error', 'É necessário informar o CEP').should('be.visible')
    }
    alert5(){
       // cy.get('.alert-error').should('have.text', 'É necessário informar o número do endereço')
        cy.contains('.alert-error', 'É necessário informar o número do endereço').should('be.visible')
    }
    alert6(){
        //cy.get('.alert-error').should('have.text', 'Selecione o método de entrega')
        cy.contains('.alert-error', 'Selecione o método de entrega').should('be.visible')
    }
    alert7(){
        //cy.get('.alert-error').should('have.text', 'Adicione uma foto da sua CNH')
        cy.contains('.alert-error', 'Adicione uma foto da sua CNH').should('be.visible')
    }
    alert8(){
        //cy.get('.alert-error').should('have.text', 'É necessário informar o CPF')
        cy.contains('.alert-error', 'É necessário informar o CPF').should('be.visible')
    }
    alert9(){
        //cy.get('.alert-error').should('have.text', 'É necessário informar o email')
        cy.contains('.alert-error', 'É necessário informar o email').should('be.visible')
    }
      

}

export default SignupPage;



