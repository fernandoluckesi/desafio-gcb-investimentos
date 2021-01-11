const getFetchCep = async (cepInput) => {
  const headers = {
    Accept: 'application/json',
  };
  return await fetch(`http://cep.la/${cepInput}`, { headers })
    .then((res) => res.json());
  };

module.exports = {
  getFetchCep,
};