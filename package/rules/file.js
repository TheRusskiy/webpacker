const { join } = require('path')
const { source_path: sourcePath, static_assets_extensions: fileExtensions } = require('../config')

module.exports = {
  test: new RegExp(`(${fileExtensions.join('|')})$`, 'i'),
  use: [
    {
      loader: 'file-loader',
      options: {
        name: 'media/[path][name]-[hash].[ext]',
        context: join(sourcePath)
      }
    }
  ]
}
