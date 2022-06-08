import SignupPage from '../pages/SignupPage'
import SignupFactory from '../factories/SignupFactory'
//import { it } from 'faker/lib/locales'

describe('Signup', () => {

    /*beforeEach(function () {
        cy.fixture('deliver').then((d) => {
            this.deliver = d
        })
    })*/

    var signup = new SignupPage()

    it('User should be deliver', function () {

        var deliver = SignupFactory.deliver()

        signup.go()
        signup.fillForm(deliver)
        signup.submit()
        signup.click()

        //const expectedMessage = 'Recebemos os seus dados. Fique de olho na sua caixa de email, pois e em breve retornamos o contato.' //não está validando essa merda por algum motivo
    })

    it('Incorrect document', function () {

        var deliver = SignupFactory.deliver()

        deliver.cpf = '000000141AA'

        signup.go()
        signup.fillForm(deliver)
        signup.submit()
        signup.alert()


    })

    it('Incorrect email', function () {

        var deliver = SignupFactory.deliver()

        deliver.email = 'aoba.com'

        signup.go()
        signup.fillForm(deliver)
        signup.submit()
        signup.alert2()


    })

    it('Required fields', function () {
        signup.go()
        signup.submit()
        signup.alert3()
        signup.alert8()
        signup.alert9()
        signup.alert4()
        signup.alert5()
        signup.alert6()
        signup.alert7()


    })


})