const http = require("http");
const fs = require("fs");
const port = 3000; // default

const server = http.createServer(function (req, res) {
  res.writeHead(200, { "Content-Type": "text/html" });
  fs.readFile("index.html", function (err, data) {
    if (err) {
      res.writeHead(404);
      res.write("Error: File not found");
    } else {
      res.write(data);
    }
    res.end();
  });
});

server.listen(port, function (err) {
  if (err) {
    console.error(err);
  } else {
    console.log(`Listening on port ${port}`);
  }
});
