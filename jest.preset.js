const nxPreset = require('@nx/jest/preset').default

module.exports = {
  ...nxPreset,
  moduleFileExtensions: [...nxPreset.moduleFileExtensions, 'tsx'],
  transform: {
    ...nxPreset.transform,
    '^.+\\.tsx$': ['ts-jest', { tsconfig: '<rootDir>/tsconfig.spec.json' }]
  }
}
