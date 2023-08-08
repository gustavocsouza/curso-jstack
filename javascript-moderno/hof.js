const array = [
  { name: 'iPhone', price: 5000, quantity: 2 },
  { name: 'Macbook', price: 10000, quantity: 1 },
  { name: 'Mouse', price: 1000, quantity: 5 },
];

//.find -> retorna o valor onde a verificação for verdadeira
const find = array.find((product) => product.name === 'iPhone');

//.findIndex -> retonar a posicao do valor onde a verificacao for verdadeira
const findIndex = array.findIndex((product) => product.name === 'iPhone');

//.some -> retona true se a verificação for verdadeira pra alguma das posicoes, se nao retorna false
const some = array.some((product) => product.price > 1000)

// every -> retorna true se a verificacao for verdadeira pra todas as posicoes, se nao retorna false
const every = array.every((product) => product.price > 100)

// .map
const map = array.map((product) => ({
  ...product,
  subtotal: product.price * product.quantity
}));

// filter
const filter = array.filter((product) => product.quantity > 1);

// reduce
const reduce = array.reduce((accumulator, product) => {
  return accumulator + (product.price * product.quantity);
}, 0);

console.log(reduce);