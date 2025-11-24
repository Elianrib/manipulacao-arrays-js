// -----------------------------------------------
// PARTE 1 – Transformação com map
// -----------------------------------------------
console.log("teste");

const produtos = [
  { nome: "Camisa", preco: 50 },
  { nome: "Calça", preco: 80 },
  { nome: "Tênis", preco: 120 },
  { nome: "Boné", preco: 40 }
];

const precosComDesconto = produtos.map(p => ({
  nome: p.nome,
  preco: p.preco * 0.85 // 15% de desconto
}));

console.log("Preços com 15% de desconto:");
console.log(precosComDesconto);



// ---------------------------------------------------------------
// PARTE 2 – Filtragem com filter
// ---------------------------------------------------------------

const produtosCaros = produtos.filter(p => p.preco > 60);
const produtosBaratos = produtos.filter(p => p.preco <= 60);

console.log("Produtos caros (acima de 60):");
console.log(produtosCaros);

console.log("Produtos baratos (60 ou menos):");
console.log(produtosBaratos);



// --------------------------------------------------------------
// PARTE 3 – Redução com reduce
// --------------------------------------------------------------

const pedidos = [
  { cliente: "Ana", total: 150 },
  { cliente: "Bruno", total: 200 },
  { cliente: "Carla", total: 100 },
  { cliente: "Daniel", total: 180 }
];

const totalPedidos = pedidos.reduce((acc, pedido) => acc + pedido.total, 0);
const mediaPedidos = totalPedidos / pedidos.length;

console.log("Total de todos os pedidos:");
console.log(totalPedidos);

console.log("Média dos pedidos:");
console.log(mediaPedidos);



// -------------------------------------------------------------------
// PARTE 4 – Integração (map + filter + reduce)
// -------------------------------------------------------------------

const alunos = [
  { nome: "Ana", nota: 9 },
  { nome: "Bruno", nota: 6 },
  { nome: "Carla", nota: 8 },
  { nome: "Diego", nota: 4 },
  { nome: "Eduarda", nota: 7 }
];

// Alunos aprovados (nota ≥ 7)
const aprovados = alunos.filter(a => a.nota >= 7);
console.log("Alunos aprovados:");
console.log(aprovados);

// Apenas nomes dos aprovados
const nomesAprovados = aprovados.map(a => a.nome);
console.log("Nomes dos aprovados:");
console.log(nomesAprovados);

// Média da turma
const mediaTurma = alunos.reduce((acc, a) => acc + a.nota, 0) / alunos.length;
console.log("Média geral da turma:");
console.log(mediaTurma);
