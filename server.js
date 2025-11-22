const http = require("http");
const PORT = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
  res.write("Arcena, Jodie Lance A. , ");
  res.write("BSIT BA-4102 , ");
  res.write("“In the midst of chaos, there is also opportunity”");
  res.end();
});

server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});