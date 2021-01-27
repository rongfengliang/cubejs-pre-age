# cube.js multi tenant demo


## cmd

```code
curl --location --request GET 'http://localhost:4000/cubejs-api/v1/load?query=%7B%22measures%22%3A%5B%22Orders.count%22%5D%2C%22timeDimensions%22%3A%5B%5D%2C%22order%22%3A%7B%7D%2C%22filters%22%3A%5B%5D%2C%22dimensions%22%3A%5B%22Orders.status%22%5D%7D&queryType=multi' \
--header 'Authorization: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1Ijp7InVzZXJfaWQiOjQyLCJidWNrZXQiOiJkZW1vIn0sIm15YXBwaWQiOiJkZW1vYXBwaWQiLCJpYXQiOjE2MTE3NDA1NjksImV4cCI6MTYxNDMzMjU2OX0.v84JquxkKuhcxAidfkjzW1hoP56jkfnOo9MDjqxRcR8'


curl --location -g --request GET 'http://localhost:4000/cubejs-api/v1/load?query={%22measures%22:[%22demo2Rongorders.count%22],%22timeDimensions%22:[],%22order%22:{},%22filters%22:[],%22dimensions%22:[%22demo2Rongorders.status%22]}&queryType=multi' \
--header 'Authorization: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1Ijp7InVzZXJfaWQiOjQzLCJidWNrZXQiOiJkZW1vMiJ9LCJteWFwcGlkIjoiZGVtb2FwcGlkMiIsImlhdCI6MTYxMTc0MDU2OSwiZXhwIjoxNjE0MzMyNTY5fQ.y2fpQVT40qbWcUNz-XeYaQoOcDdG0ogeePXHmMU3mE8'

```