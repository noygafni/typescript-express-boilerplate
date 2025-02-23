module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'node', // Use 'node' for server-side testing
    testMatch: ['**/tests/**/*.test.ts', '**/?(*.)+(spec|test).ts'],
    moduleFileExtensions: ['ts', 'js', 'json', 'node'],
    // Optionally, add other configurations such as coverage settings, globals, etc.
  };