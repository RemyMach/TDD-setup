module.exports = {
    roots: ['<rootDir>/src'],
    testMatch: ['./tests/**/*.+(ts|js)', '**/?(*.)+(spec|test).+(ts|js)'],
    transform: {
        '^.+\\.ts$': [
            'ts-jest',
            {
                tsconfig: 'tsconfig.json',
            },
        ],
    },
    coverageDirectory: '<rootDir>/coverage',
    collectCoverage: true,
    coverageReporters: ['text', 'lcov'],
    collectCoverageFrom: ['**/*.{js,ts}', '!**/*.d.ts', '!**/node_modules/**'],
};
