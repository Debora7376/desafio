import { Request, Response } from 'express';
import { getRepository } from 'typeorm';

import Produto from '../models/Produto';

export default {
  
  async adicionarProduto( request: Request, response: Response) {
    const { 
      nome_do_produto,
      fabricante,
      quantidade_em_estoque,
      valor,
    } = request.body;

    const produtosRepostitory = getRepository(Produto);

    const data = {
      nome_do_produto,
      fabricante,
      quantidade_em_estoque,
      valor,
    }
    const produto = produtosRepostitory.create(data);
    await produtosRepostitory.save(produto);
    return response.status(201).json(produto);
  },

  async alterarProduto( request: Request, response: Response) {
  },

  async buscarProduto( request: Request, response: Response) {
    const produtosRepostitory = getRepository(Produto);
    const listaDeProdutos = await produtosRepostitory.find();
    return response.json(listaDeProdutos);
  },

  async buscarProdutoPorId( request: Request, response: Response) {
  },

  async deletarProduto( request: Request, response: Response) {
  },

  async quantidadeProdutos( request: Request, response: Response) {
  },

  async produtoComMenorEstoque( request: Request, response: Response) {
  },

  async produtoComMaiorEstoque( request: Request, response: Response) {
  },

  async produtosSemEstoque( request: Request, response: Response) {
  }

  
}