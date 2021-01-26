const measureRatioDefinition = {
    sql: (CUBE, count) => `sum(${CUBE}.id) *200/ ${count}`,
    type: `number`,
  };
exports.measureRatioDefinition = measureRatioDefinition