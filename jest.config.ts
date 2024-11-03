module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  transform: {
   '^.+\\.tsx?$': ['ts-jest', { tsconfig: 'tsconfig.spec.json' }],
  },
  moduleNameMapper: {
    // Mock image files
    '\\.(jpg|jpeg|png|gif|svg)$': '<rootDir>/src/_tests_/_mocks_/fileMock.js',
    // Mock CSS files
    '\\.(css|less|scss|sass)$': 'identity-obj-proxy',
  },
};
