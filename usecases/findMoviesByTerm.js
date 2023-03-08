module.exports = async function searchByTerm(repository, query) {
  return await repository.findBy("name", query);
};
