const HtmlParser = require("./HtmlParser");
const Processor = require("./Processor");
const Reader = require("./Reader");
const Table = require("./Table");
const Writer = require("./Writer");
const PDFWriter = require("./PDFWriter");

const leitor = new Reader();
const escritor = new Writer();

async function main() {
  const data = await leitor.Read("./users.csv");
  const processData = Processor.Process(data);
  const usuarios = new Table(processData);

  const html = await HtmlParser.Parse(usuarios);
  escritor.Write(Date.now() + ".html", html);
  PDFWriter.WritePDF(Date.now() + ".pdf", html);
}
main();
