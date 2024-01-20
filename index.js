const _storage = {}

const sessionStorage = {
  setItem: (key, value) => _storage[key] = value,
  getItem: (key) => _storage[key],
  removeItem: (key) => delete _storage[key],
  length: () => {
    return Object.keys(_storage).length
  },
  key: (num) => {
    return _storage[Object.keys(_storage).at(num)]
  },
  clear: () => {
    for(key in _storage){
      delete _storage[key]
    }
  },
}

module.exports = sessionStorage

