module.exports = {
  "ftp": {
    "host": "192.168.2.228",
    "port": "",
    "user": "account",
    "password": "password"
  },
  "remoteBasePath": "",
  "remotePath": "/activity/{$target}",
  "localAssetPath": "build/activity/{$target}",
  "domainName": "http://m.okpapa.net",
  "cdnDomain": "https://images.okpapa.com",
  "proxyPort": 80,
  "servePort": 3005,
  "staticFileConcatOrder": ["reset.js", "responsive.js", "config.js"],
  "commonVersion": "12",
  "webpackConfig": {
    "resolve": {
      "alias": {
        "common": "modules/tools/common"
      }
    }
  }
}
