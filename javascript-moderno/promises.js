const apiCall = new Promise((resolve, reject) => {
  setTimeout(() => {
    // resolve('Sucesso');
    reject('Deu Erro');
  }, 2000);
});

apiCall
  .then((response) => {
    console.log(response);
  })
  .catch((error) => {
    console.log(error);
  });

console.log('Depois da promise...'); // Executado antes de resolver a promise, nao trava a execução
async function run() {
  try {
    const response = await apiCall; // Await trava a execução até resolver a promise
    console.log(response);
  } catch (error) {
    console.log(error);
  }
}

run();
