module.exports = {
  globals: { __PATH_PREFIX__: '' },
  moduleFileExtensions: ['js', 'scss'],
  moduleNameMapper: {
    '\\.(css|scss)$': 'identity-obj-proxy',
    '.+\\.(jpg|jpeg|png|gif|ico)$': '<rootDir>/test/__mocks__/fileMock.js',
  },
  setupFiles: ['<rootDir>/test/loadershim.js'],
  setupFilesAfterEnv: ['<rootDir>/test/setup.js'],
  snapshotSerializers: ['enzyme-to-json/serializer'],
  testPathIgnorePatterns: ['/.cache/', '/node_modules/', '/public/'],
  testURL: 'http://localhost/',
  transform: {
    '.js': '<rootDir>/test/preprocess.js',
  },
  transformIgnorePatterns: ['node_modules/(?!(gatsby)/)'],
}
