const isProduction = true

module.exports = {
  webpack: (config) => {
    config.module.rules.push(
      {
        test: /\.md$/,
        use: 'raw-loader'
      }
    )
    return config
  },
  exportPathMap: function () {
    return {
      '/': { page: '/' },
      '/docs': { page: '/docs' }
    }
  },
  assetPrefix: isProduction ? 'https://react-native-csv.js.org' : ''
}
