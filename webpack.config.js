const path = require('path');

module.exports = {
  entry: {
    index: './aws-sdk-light-apigee.js'
  },
  output: {
    filename: 'aws-sdk-light-apigee.bundle.js',
    path: path.resolve(__dirname, './release')
  },
  mode: 'production'
};
