const fetch = require('node-fetch');
import {
  transformDimensions,
  transformMeasures,
} from './utils';
asyncModule(async () => {
  const dynamicCubes = await (
    await fetch('http://localhost:8080/app.json')
  ).json();

  console.log(dynamicCubes);
  dynamicCubes.forEach((dynamicCube) => {
    const dimensions = transformDimensions(dynamicCube.dimensions);
    const measures = transformMeasures(dynamicCube.measures);

    cube(dynamicCube.title, {
      sql: dynamicCube.sql,
      dimensions,
      measures,
      preAggregations: {
        main: {
          type: `originalSql`,
        },
      },
    });
  });
});