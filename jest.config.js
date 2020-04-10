/* eslint-disable @typescript-eslint/no-var-requires */
const dotenv = require('dotenv')
const fs = require('fs')

const envConfig = dotenv.parse(fs.readFileSync('.env.test'))
for (const k in envConfig) {
    process.env[k] = envConfig[k]
}

module.exports = {
    testEnvironment: 'node',
    roots: [
        "<rootDir>/src"
    ],
    testMatch: [
        "**/__tests__/**/*.+(ts|tsx|js)",
        "**/?(*.)+(spec|test).+(ts|tsx|js)"
    ],
    transform: {
        "^.+\\.(ts|tsx)$": "ts-jest"
    },
    globalSetup: "<rootDir>/.jest/globalSetup.js",
    globals: {
        __MONGO_URI__: `${process.env.DB_URL}/${process.env.DB_NAME}`
    }
}