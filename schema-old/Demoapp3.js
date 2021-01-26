cube(`Demoapp3`, {
  sql: `SELECT * FROM public.demoapp`,
  
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
