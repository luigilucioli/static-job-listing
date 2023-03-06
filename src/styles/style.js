import hexToRgba from 'hex-rgba'
import mq, { sizes } from './mq'
import colors from './colors'
import easings from './easings'
import { fonts } from './fonts'

/*------------------------------
Export of general styles
------------------------------*/
export default {
  mq,
  sizes,
  colors,
  easings,
  fonts,
  getRgba: (color, opacity) => hexToRgba(color, opacity * 100),
}
