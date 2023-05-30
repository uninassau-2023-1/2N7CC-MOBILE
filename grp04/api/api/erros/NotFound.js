class NotFound extends Error {
  constructor(object) {
    super(`${object} Not found`);
    this.description = `Not Found`;
    this.name = `${object} Not found`;
  }
}

module.exports = NotFound;
