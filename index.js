module.exports = function (ee) {
  return function (type, handler) {
    ee._events[type] = (
      !handler
      ? []
      : ee.listeners(type).filter(function (item) { return item !== handler })
    )
    return this
  }
}

