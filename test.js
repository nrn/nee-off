var test = require('tape')
  , nee = require('nee')
  , EE = require('events').EventEmitter
  , off = require('./index')

test('off', function (t) {
  var ee1 = nee()
    , ee2 = new EE()

  testOff(ee1, 'nee')
  testOff(ee2, 'node EventEmitter')

  t.end()

  function testOff (ee, name) {
    var handler = function (a) {
      if (name === 'node EventEmitter') a = a[0]
      t.equal(a, 1, 'basic emit ' + name)
    }

    ee.off = off(ee)
    ee.on('foo', handler)
    ee.emit('foo', [1])

    ee.off('foo', handler)
    ee.emit('foo', [2])

    ee.on('baz', function () { t.fail('off did not work ' + name) })
    ee.off('baz')
    ee.emit('baz')
  }
})

