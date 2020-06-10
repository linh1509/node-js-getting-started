var http = require('http');
var lanthu=0;
const PORT = process.env.PORT || 5000

function XuLyWEB (req, res) {
  lanthu++;
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.end('Hello World!'
  +"http://127.0.0.1:8080/"
  +"localhost:8080"
  +"La thu "+lanthu);
  console.log("\n\t... lan thu -"+lanthu);
}
http.createServer(XuLyWEB).listen(PORT);
console.log("Nodejs dang Run o Server!");