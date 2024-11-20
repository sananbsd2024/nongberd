const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave: false,
  pages: {
    index: {
      // entry for the page
      entry: 'src/main.js',
      title: 'โรงเรียนบ้านหนองเบิด สพป.ร้อยเอ็ด เขต ๑',
    },
  }
})
