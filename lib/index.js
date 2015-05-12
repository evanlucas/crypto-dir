var home = require('user-home')
var path = require('path')

module.exports = function getDir(name) {
  var platform = process.platform
  name = getProperCase(name)
  if (platform === 'win32')
    return path.win32.join(process.env.APPDATA, name)
  else if (platform === 'darwin')
    return path.join(home, 'Library', 'Application Support', name)
  else
    return path.join(home, '.' + name)
}

function getProperCase(name, platform) {
  if (platform === 'linux' || platform === 'freebsd' || platform === 'sunos')
    return name.toLowerCase()

  return name.charAt(0).toUpperCase() + name.substr(1).toLowerCase()
}
