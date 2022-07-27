class Processor {
  static Process(data) {
    const arrayRows = data.split("\r\n");
    const rows = [];

    arrayRows.forEach(item => {
      rows.push(item.split(","));
    });
    return rows;
  }
}

module.exports = Processor;
