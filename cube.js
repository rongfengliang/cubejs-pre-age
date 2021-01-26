// Cube.js configuration options: https://cube.dev/docs/config
const PostgresDriver = require("@cubejs-backend/postgres-driver");
const CubeStoreDriver = require("@cubejs-backend/cubestore-driver")
const myS3FileRepository = require("@dalongrong/cube-s3repository")
module.exports = {
    devServer: true,
    dbType: ({ dataSource } = {}) => {
        return 'postgres';
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
    repositoryFactory: myS3FileRepository.repositoryFactory,
    externalDbType: 'cubestore',
    externalDriverFactory: () => new CubeStoreDriver({
        user: "root",
        port: 3306,
        host: "127.0.0.1"
    })

};
