var assert = require('assert')
  , test = require('tape')
  , dir = require('./')
  , platform = process.platform

test('crypto-dir', function(t) {
  var out = dir('bitcoin')
  t.assert(out.length > 0, 'length > 0')
  if (platform === 'darwin') {
    t.ok(~out.indexOf('Application Support'), 'contains Application Support')
    t.ok(~out.indexOf('Bitcoin'), 'contains Bitcoin')
  } else if (platform === 'linux') {
    t.ok(~out.indexOf('.bitcoin'), 'contains .bitcoin')
  } else {
    t.ok(~out.indexOf('Bitcoin'), 'contains Bitcoin')
  }
  t.end()
})
