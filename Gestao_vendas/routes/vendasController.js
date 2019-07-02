var contVenda =1;
var numVenda = 0 ;
var vendas = [];
var valorTotal = 0; //valor total da venda 

module.exports = {
    //=========================================================================
    // Retorna dados da venda  
    // =========================================================================
    get(_, res) {               
        res.json(vendas);
    },
  
    //=========================================================================
    // Remove venda 
    // =========================================================================
    deleteID(req,res){        
    var id = req.params.id;
     var ret = ""  ;
     var removido = false;

    if(!req.params.id){
        ret = 'Venda não encontrada!';
    }else{
        for(var i =0 ; i < vendas.length; i++){           
            if(id==vendas[i].id){

                vendas.splice(i,1);
                i--                            
                removido  = true; // indica que o produto foi removido                             
            }
        }

        if(removido){
            ret ='Venda cancelada com sucesso!';           
        }else{
            ret ='Nenhuma venda encontrada!';            
        }
    }          
    res.json({ret:ret});
    },

    // Adiciona array de produtos na venda 
    // Realiza o somatório de todos os produtos 
    add_produto(req,res){
        let itensVenda = [];
        let totalVenda  = 0; 
        var valorTotalVenda = 0; 
        itensVenda.push(req.body);

        var quant = itensVenda[0].length;
        // verifica a quantidade de itens que estão na venda 
        for(var i = 0 ; i < quant; i++){
           valorItem = 0 ; 
           valorItem = itensVenda[0][i].valorProduto;
           valorItem = itensVenda[0][i].valorProduto * itensVenda[0][i].quantidade;
           valorTotalVenda  += valorItem
        }
           
        vendas = [{'id': 1 ,'valorVenda': valorTotalVenda ,listaProduto:itensVenda, 'totalVenda': valorTotal}];    
        res.json(vendas);   
    },
    // Adiciona nova venda  
    cria_venda(req,res){
        // Cria venda 
        vendas = [{'id': 1 ,'valorVenda': '0.00','listaProduto':[]}];
        res.json(vendas);   
    }
};
