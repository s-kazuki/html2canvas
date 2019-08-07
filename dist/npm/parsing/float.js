'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.parseCSSFloat = exports.FLOAT = void 0;
var FLOAT = {
  NONE: 0,
  LEFT: 1,
  RIGHT: 2,
  INLINE_START: 3,
  INLINE_END: 4
};
exports.FLOAT = FLOAT;

var parseCSSFloat = function parseCSSFloat(float) {
  switch (float) {
    case 'left':
      return FLOAT.LEFT;

    case 'right':
      return FLOAT.RIGHT;

    case 'inline-start':
      return FLOAT.INLINE_START;

    case 'inline-end':
      return FLOAT.INLINE_END;
  }

  return FLOAT.NONE;
};

exports.parseCSSFloat = parseCSSFloat;