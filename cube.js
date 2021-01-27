// Cube.js configuration options: https://cube.dev/docs/config
const PostgresDriver = require("@cubejs-backend/postgres-driver");
const CubeStoreDriver = require("@cubejs-backend/cubestore-driver")
const myS3FileRepository = require("@dalongrong/cube-s3repository")
const fetch = require('node-fetch');
const jwt = require('jsonwebtoken');
module.exports = {
    devServer: false,
    dbType: ({ dataSource } = {}) => {
        return 'postgres';
    },
    scheduledRefreshTimer: false,
    contextToAppId: ({ authInfo }) => {
        return `CUBEJS_APP_${authInfo.myappid}`
    },
    contextToOrchestratorId: ({ authInfo }) => {
        return `CUBEJS_APP_${authInfo.myappid}`
    },
    scheduledRefreshContexts: async () => {
        return [{
            authInfo: {
                myappid: "demoappid",
                u: {
                    bucket: "demo"
                }
            }
        },
        {
            authInfo: {
                myappid: "demoappid2",
                u: {
                    bucket: "demo2"
                }
            }
        }]
    },
    preAggregationsSchema: ({ authInfo }) => {
        return `pre_aggregations_${authInfo.myappid}`
    },
    checkAuth: (req, auth) => {
        console.log("checkAuth=====",auth)
        if (auth) {
            var decoded = jwt.verify(auth, "b2db7688e328d316d85e924d8b9a0737d87162a9f2cf36325f1ca0ae08dbdaa990520750847226cf8dcbb1fb4c07afe1087c7cb03b8f9f05b9abad3eb4058f3f");
            if (decoded) {
                req.authInfo = decoded
            }
        }
        else {
            throw new Error(`Unauthorized`);
        }
    },
    telemetry: false,
    apiSecret: "b2db7688e328d316d85e924d8b9a0737d87162a9f2cf36325f1ca0ae08dbdaa990520750847226cf8dcbb1fb4c07afe1087c7cb03b8f9f05b9abad3eb4058f3f",
    driverFactory: ({ dataSource } = {}) => {
        return new PostgresDriver({
            user: "postgres",
            database: "postgres",
            password: "dalong",
            port: 5432,
            host: "127.0.0.1",
            readOnly: true
        });
    },
    repositoryFactory: ({ authInfo }) => {
        console.log("repositoryFactory=====",authInfo);
        if (authInfo && authInfo.u.bucket) {
            return new myS3FileRepository.S3FileRepository(authInfo.u.bucket)
        }
        return new myS3FileRepository.S3FileRepository()
    },
    externalDbType: 'cubestore',
    externalDriverFactory: () => new CubeStoreDriver({
        user: "root",
        port: 3306,
        host: "127.0.0.1"
    }),
    // schemaVersion: async ({ authInfo }) => {
    //     console.log("schemaVersion====:",authInfo)
    //     const schemaVersions = await (
    //         await fetch('http://localhost:8080/versions.json')
    //     ).json();
    //     let info = schemaVersions["app1"];
    //     console.log(info)
    //     return info
    // }
};
