module.exports = {
    //=========================================================================
    // Retorna dados da venda  
    // =========================================================================
    get(_, res) {      
       // ID, valor da venda em reais, a lista e quantidade de cada produtos.
 
        let = vendas =[
           {'id': 1 ,'valorVenda': '200.00','listaProduto':
            [{'nomeProduto':'Notebook core i5', 'quantidade':1},
            {'nomeProduto':'Celular Iphone', 'quantidade':2}] },
         {'id': 1 ,'valorVenda': '200.00','listaProduto':
            [{'nomeProduto':'Notebook core i5', 'quantidade':1},
            {'nomeProduto':'Celular Iphone', 'quantidade':2}] }
            ];        
        res.json(vendas);
    },
    //=========================================================================
    // Altera estado do pedido 
    // =========================================================================
    put(req, res) {
        
        var  pedido = {'idPedido': 2 ,'dataPedido': '03/06/2019','valorTotal': 2500.00,'estadoPedido':'Cancelado'};

        if (!req.body.id) {
            res.json(pedido);
        }
        res.json(pedido);
    },
    //=========================================================================
    // Registra novo produto 
    // =========================================================================
    post(req, res) {        
        var ret; 
        console.log(req.body);  

        if(!req.body.id){            
            var ret = {'msg':'Erro ao registrar pedido!'}
        }else{
            var id              = req.body.id; 
            var valorVenda      = req.body.valorVenda; 
            var listaProduto    = req.body.listaProduto;
           
            if(listaProduto <= 1){                
                var ret = {'msg':'A quantidade de produtos deve ser maior que 0!'}    
            }
            else if(valorVenda <= 0){
                ret = {'msg':'O valor total do pedido não deve ser igual ou menor que R$ 0.00'}    
            }
            else{
                ret = {'msg':'Venda registrada com sucesso!'}    
            }
        }
        // retorna resultado 
        res.json(ret);
    },
    //=========================================================================
    // Remove produto  
    // =========================================================================
    deleteID(req,res){    
    var  let = vendas =[
        {'id': 1 ,'valorVenda': '200.00','listaProduto':
         [{'nomeProduto':'Notebook core i5', 'quantidade':1},
         {'nomeProduto':'Celular Iphone', 'quantidade':2}] },
      {'id': 1 ,'valorVenda': '200.00','listaProduto':
         [{'nomeProduto':'Notebook core i5', 'quantidade':1},
         {'nomeProduto':'Celular Iphone', 'quantidade':2}] }
         ];      

    var id = req.params.id;
     var ret = ""  ;
     var removido = false;
    if(!req.params.id){
        ret = 'Venda não encontrada!';
    }else{
        for(var i =0 ; i < produtos.length; i++){           
            if(id==produtos[i].id){
                produtos.splice(i,1);
                i--                            
                removido  =true; // indica que o produto foi removido 
                ret ='Venda cancelada com sucesso!';
            }
        }

        if(removido==true){
            ret ='Produto removido com sucesso!';           
        }else{
            ret ='Nenhum produto encontrado!';            
        }
    }          
    res.json({ret:ret});
}
};
