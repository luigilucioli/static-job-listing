import hexToRgba from 'hex-rgba'
import mq, { sizes } from './mq'
import colors from './colors'
import easings from './easings'

export default {
  mq,
  sizes,
  colors,
  easings,
  getRgba: (color, opacity) => hexToRgba(color, opacity * 100),
}
