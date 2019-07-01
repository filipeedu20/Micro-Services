const expect = require('chai').expect;

const { get, getById } = require('../../routes/productsController');

let req = {
    body: {},
    params: {},
};

const res = {
    jsonCalledWith: {},
    json(arg) {
        this.jsonCalledWith = arg
    }
}
/**Exibe a Lista de todos os Produtos */
describe('Lista de Produto', function(){
    it('Retornar a lista de produtos', function() {
        get(req, res);
        expect(res.jsonCalledWith).to.be.a('object');
    });
})

/**Exibe apenas um produto por id */
describe('Lista de produto por um único identificador', function(){
    it('Exibir um único produto por identificador', function(){
        const getReq = req;
        getReq.params = { 
            id: 1
        };
        getById(getReq, res);
        expect(res.jsonCalledWith).to.have.property('id', '1')
    });
    it('Propriedades especificas do produto', function(){
        const getReq = req;
        getReq.params = {
            id:1
        };
        getById(getReq, res);
        expect(res.jsonCalledWith).to.be.have.keys('id', 'name', 'description', 'category', 'price');
    });
});

/**Inserindo um novo produto */
describe('Adicionar novos Produtos', function(){
    it('Adicionar novo objeto', function(){
        const getReq = req;
        getReq.body = {
            id:'4',
            name:'Samgung Galaxy S10',
            description: 'Smartphone Samsung Galaxy S10',
            category: 'Cellphone',
            price:'3500.00'
        };
        insert(getReq, res);
        expect(res.jsonCalledWith).to.have.property('Adicionado com sucesso!!!');
    });
    it('Adicionar - descrição deve ser maior do que 10 caracteres', function(){
        const getReq = req;
        getReq.body = {
            id: '4',
            name: 'Samgung Galaxy S10',
            description: 'S10',
            category: 'Cellphone',
            price: '3500.00'
        };
        insert(getReq, res);
        expect(res.jsonCalledWith).to.have.property('Erro', 'A descrição deve ser maior do que 10 caracteres');
    });
    it('Adicionar preço maior que 0', function () {
        const getReq = req;
        getReq.body = {
            id: '4',
            name: 'Samgung Galaxy S10',
            description: 'Smartphone Samsung Galaxy S10',
            category: 'Cellphone',
            price: '-1'
        };
        insert(getReq, res);
        expect(res.jsonCalledWith).to.have.property('Erro', 'O preço tem que ser maior que 0');
    });
});

describe('Apagar um produto por identificador', function () {
    it('Apagar ', function () {
        const getReq = req;
        getReq.params = {
            id: 2
        };
        delet(getReq, res);
        //console.log(res);
        expect(res.jsonCalledWith.filter(p => p.id == 2).length == 0).to.be.true;
    });
});