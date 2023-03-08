module.exports = async function findMediaName(repository, media_id) {
  return await repository.findMediaID(media_id);
};
