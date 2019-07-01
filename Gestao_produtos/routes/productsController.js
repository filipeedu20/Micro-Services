let ListaProdutos = {
    items: [

        {
            id: '1',
            name: 'tablet',
            description: 'IPad',
            category: 'Informatic',
            price: '5500.00'
        },
        {
            id: '2',
            name: 'IPhone 8',
            description: 'Smartphone Apple Iphone 8 ',
            category: 'Cellphone',
            price: '3500.00'
        },
        {
            id: '3',
            name: 'Mac Air Pro',
            description: 'Notebook Mac Air Pro Apple',
            category: 'Informatic',
            price: '16999.99'
        }
    ]
};

module.exports = {
    /**Exibindo todos os produtos */
    get(_, res) {
        if (Array.isArray(ListaProdutos.items) != true) {
            res.json({ error: 'Exibir um lista de Produtos' })
        } else {
            console.log(ListaProdutos.items.length);
            res.json(ListaProdutos);
        }
    },
    
    getById(req, res) {
        let pid = req.params.id;
        let prod;
        for (let i = 0; i < ListaProdutos.items.length; i++) {
            if (ListaProdutos.items[i].id == pid) {
                prod = ListaProdutos.items[i];
            }
        }
        if (prod.id == undefined || prod.name == undefined || prod.description == undefined || prod.category == undefined || prod.price == undefined) {
            res.json({ error: 'Propriedades especificas do produto' })
        } else {
            res.json(prod)
        }
    },
    /**Inserindo um novo produto */
    insert(req, res) {
        if (req.body.description.length < 10) {
            res.json({ error: 'A descrição deve ser maior do que 10 caracteres' })
        } else if (req.body.price <= 0) {
            res.json({ error: 'O preço deve ser maior que 0' })
        } else {
            ListaProdutos.items.push(req.body)
            res.json({ success: 'true', error: '' });
        }
    },
    /**Apagando um produto */
    delete(req, res) {
        let lista = ListaProdutos.items;
        let pid = req.params.id;

        for (let i = 0; i < lista.length; i++) {
            if (lista[i].id == pid) {
                lista.splice(i, 1);
                i--;
                res.json(lista);
            }
        }
    }
};
