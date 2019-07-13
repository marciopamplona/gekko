// This config is used in both the
// frontend as well as the web server.

// see https://github.com/askmike/gekko/blob/stable/docs/installing_gekko_on_a_server.md

const CONFIG = {
    headless: true,
    api: {
      host: '127.0.0.1',
      port: 3100,
      timeout: 10 * 60 * 1000 // 10 minutes
    },
    ui: {
      ssl: true,
      host: 'jmp-home.dynu.net',
      port: 443,
      path: '/'
    },
    adapter: 'sqlite',
    /*userChartConfig: {
      patterns:['hasInvertedHammer']
    }*/
  }

  if(typeof window === 'undefined')
    module.exports = CONFIG;
  else
    window.CONFIG = CONFIG;
