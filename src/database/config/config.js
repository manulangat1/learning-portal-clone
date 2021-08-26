require('dotenv').config()
console.log(process.env.TEST_DATABASE_URL)
const dbConfig = {
  development: {
    use_env_variable: 'TEST_DATABASE_URL',
    dialect: "postgres",
    operatorsAliases: false
  },
  test: {
    username: "root",
    password: null,
    database: "database_test",
    host: "127.0.0.1",
    dialect: "postgres",
    operatorsAliases: false
  },
  production: {
    use_env_variable: "DATABASE_URL",
    dialect: "postgres",
    operatorsAliases: false
  }
}

module.exports = dbConfig;