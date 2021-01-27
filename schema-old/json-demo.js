cube(`joindemo`, {
  sql: `SELECT * FROM public.demoapp2`,
  
  joins: {
    Demoapp3: {
      relationship: `hasOne`,
      sql: `${CUBE}.id = ${Demoapp3}.id`
    }
  },
  preAggregations: {
    mydemo: {
      type: `rollup`,
      measureReferences: [Demoapp.count],
      dimensionReferences: [name],
      external: true
    }
  },
  measures: {
    count: {
      type: `count`,
      drillMembers: [name, id]
    },
    "price": {
      sql: "id",
      "type":"count"
   }
  },
  
  dimensions: {
    name: {
      sql: `name`,
      type: `string`
    },
    
    id: {
      sql: `id`,
      type: `number`,
      primaryKey: true
    }
  }
});
