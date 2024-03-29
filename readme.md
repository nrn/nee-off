# nee off

A novel event emitter off function.

`npm install nee-off`

## Usage

```javascript
var EE = require('events').EventEmitter
  , off = require('nee-off')
  , ee = new EE()

ee.off = off(ee)

ee.on('foo', function (a) { console.log(a) })
ee.off('foo') // removes all listeners

var handler = function (a) { console.log(a) }
ee.on('bar', handler)
ee.off('foo', handler) // removes single handler

```

##License: ISC

Copyright (c) 2014 Nick Niemeir <nick.niemeir@gmail.com>

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted, provided that the above
copyright notice and this permission notice appear in all copies.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.

