export default {
  testMatch: ['<rootDir>/src/**/*.{spec,test,journey}.{js,jsx,ts,tsx}'],
  collectCoverageFrom: ['<rootDir>/src/**/*.{js,jsx,ts,tsx}'],
  coveragePathIgnorePatterns: ['<rootDir>/src/main.tsx', '<rootDir>/src/test-utils/'],
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  testEnvironment: 'jsdom',
  testRunner: '<rootDir>/node_modules/jest-circus/runner.js',
  transform: {
    '.+\\.(css|styl|less|sass|scss)$': 'jest-css-modules-transform',
    '^.+\\.(js|jsx|ts|tsx)$': '<rootDir>/node_modules/babel-jest',
  },
  transformIgnorePatterns: [
    '[/\\\\]node_modules[/\\\\].+\\.(js|jsx|mjs|cjs|ts|tsx)$',
    '^.+\\.module\\.(css|sass|scss)$',
  ],
  modulePaths: [],
  moduleFileExtensions: ['web.js', 'js', 'web.ts', 'ts', 'web.tsx', 'tsx', 'json', 'web.jsx', 'jsx', 'node'],
  watchPlugins: ['jest-watch-typeahead/filename', 'jest-watch-typeahead/testname'],
  resetMocks: true,
  modulePathIgnorePatterns: [
    '<rootDir>/build/',
    '<rootDir>/jest.config.js',
    '<rootDir>/jest.setup.js',
    '<rootDir>/vite.config.js',
    '<rootDir>/coverage/',
    '<rootDir>/npm_packages/',
    '<rootDir>/src/stories/',
  ],
}
