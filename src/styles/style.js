import hexToRgba from 'hex-rgba'
import mq, { sizes } from './mq'
import colors from './colors'

export default {
  mq,
  sizes,
  colors,
  getRgba: (color, opacity) => hexToRgba(color, opacity * 100),
}
