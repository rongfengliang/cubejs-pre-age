const fetch = require('node-fetch');

(async()=>{
    const dynamicCubes = await (
        await fetch('http://localhost:8080/app.json')
      ).json();
    console.log(dynamicCubes)    
})()
