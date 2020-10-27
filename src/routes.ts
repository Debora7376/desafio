import { Router } from 'express';

import ProdutosController from './controllers/ProdutosControllers';

const routes = Router();

routes.post('/AdicionarProduto', ProdutosController.adicionarProduto);
routes.put('/AlterarProduto', ProdutosController.alterarProduto);
routes.get('/BuscarProdutos', ProdutosController.buscarProduto);
routes.get('/BuscarProdutoPorId', ProdutosController.buscarProdutoPorId);
routes.delete('DeletarProduto', ProdutosController.deletarProduto);
routes.get('ObterQuantidadeProdutos', ProdutosController.quantidadeProdutos);
routes.get('ObterProdutoComMenorEstoque', ProdutosController.produtoComMenorEstoque);
routes.get('ObterProdutoComMaiorEstoque', ProdutosController.produtoComMaiorEstoque);
routes.get('ObterProdutosSemEstoque', ProdutosController.produtosSemEstoque);


export default routes;