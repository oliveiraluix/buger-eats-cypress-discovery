var faker = require('faker')
var cpf = require('gerador-validador-cpf')

export default {


deliver: function () {

    var firstName = faker.name.firstName()
    var lastName = faker.name.lastName()

    var data = {

        name: `${firstName} ${lastName}`,
        cpf: cpf.generate(),
        email: faker.internet.email(firstName),
        whatsapp: '11999999999',
        address: {
            postalcode: '04719001',
            street: 'Rua Verbo Divino',
            number: '1356',
            details: 'bl1 ap5',
            district: 'Chácara Santo Antônio (Zona Sul)',
            city_state: 'São Paulo/SP'
        },
        delivery_method: 'Moto',
        cnh: 'cnh-digital.jpg'
    }
    
    return data
}

}