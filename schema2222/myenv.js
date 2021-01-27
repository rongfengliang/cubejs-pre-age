import {measureRatioDefinition}  from "../utils/myschema"
cube(`myenv`, {

  sql: `SELECT * FROM public.demoapp`,
  measures: {
    count: {
      type: `count`,
      drillMembers: [name, id]
    },
    mycount: measureRatioDefinition
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
