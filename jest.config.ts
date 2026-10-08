import type { Config } from 'jest';

const config: Config = {
  setupFilesAfterEnv: ['<rootDir>/setup-jest.ts'],
  testMatch: ['<rootDir>/src/**/*.spec.ts'],
  moduleNameMapper: {
    '^@core/(.*)$': '<rootDir>/src/app/core/$1',
    '^@shared/(.*)$': '<rootDir>/src/app/shared/$1',
    '^@features/(.*)$': '<rootDir>/src/app/features/$1',
    '^@environments/(.*)$': '<rootDir>/src/environments/$1',
  },
  collectCoverageFrom: ['src/app/**/*.ts', '!src/app/**/*.routes.ts', '!src/main.ts'],
  coverageDirectory: 'coverage',
};

export default config;
