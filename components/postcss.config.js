module.exports = {
  plugins: [
    // require('postcss-import'),
    // require('postcss-nesting'),
    // require('postcss-custom-properties'),
    // require('postcss-custom-media'),
    // require('postcss-calc'),
    // require('postcss-inline-svg'),
    require('autoprefixer')({
      'browsers': 'last 2 versions'
    }),
    // require('cssnano')
  ]
};
