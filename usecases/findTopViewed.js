module.exports = async function findTopViewed(repository, limit) {
  return await repository.getTop("view_count", limit);
};
