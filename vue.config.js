module.exports = {
  publicPath: process.env.NODE_ENV === 'production' ? '/hotel-booking/' : '/',
  css: {
    loaderOptions: {
      sass: {
        prependData: `
          @import "@/assets/style/all.scss";
        `
      }
    }
  }
}
