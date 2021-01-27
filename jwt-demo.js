const jwt = require('jsonwebtoken');
const CUBE_API_SECRET = 'b2db7688e328d316d85e924d8b9a0737d87162a9f2cf36325f1ca0ae08dbdaa990520750847226cf8dcbb1fb4c07afe1087c7cb03b8f9f05b9abad3eb4058f3f';
const cubejsToken = jwt.sign({ u: { user_id: 42 ,bucket:"demo"},myappid:"demoappid" }, CUBE_API_SECRET, {
  expiresIn: '30d',
});
const cubejsToken2 = jwt.sign({ u: { user_id: 43 ,bucket:"demo2"},myappid:"demoappid2" }, CUBE_API_SECRET, {
    expiresIn: '30d',
  });
console.log(cubejsToken)
console.log(cubejsToken2)