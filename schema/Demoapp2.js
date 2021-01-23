cube(`Demoapp2`, {
  sql: `SELECT * FROM public.demoapp2`,
  
  joins: {
    
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
