let generated = {}
let color = 0

for (let c = 0; c < 256; c++) {
  let r = color
  color += 7

  let g = color
  color += 7

  let b = color
  color += 7

  generated[c] = `rgb(${r}, ${g}, ${b})`
}

export const colors = {
  debug: `rgba(255, 0, 255, 1)`,

  black0: `rgba(0, 0, 0, 0)`,
  black40: `rgba(0, 0, 0, 0.4)`,
  black50: `rgba(0, 0, 0, 0.5)`,
  black90: `rgba(0, 0, 0, 0.9)`,

  grey30: `regba(128, 128, 128, 0.3)`,
  grey40: `rgba(128, 128, 128, 0.4)`,
  grey60: `rgba(128, 128, 128, 0.6)`,

  white25: `rgba(255, 255, 255, 0.25)`,
  white30: `rgba(255, 255, 255, 0.3)`,
  white50: `rgba(255, 255, 255, 0.5)`,
  white70: `rgba(255, 255, 255, 0.7)`,
  white75: `rgba(255, 255, 255, 0.75)`,
  white90: `rgba(255, 255, 255, 0.9)`,
  white: `rgba(255, 255, 255, 1)`,

  blue10: `rgba(0, 0, 255, 0.1)`,
  blue50: `rgba(0, 0, 255, 0.5)`,

  red25: `rgba(255 ,0, 0, 0.25)`,
  red30: `rgba(255 ,0, 0, 0.30)`,
  red90: `rgba(255 ,0, 0, 0.9)`,

  brown30: `rgba(97, 65, 38, 0.30)`,
  brown90: `rgba(97, 65, 38, 0.9)`,

  yellow75: `rgba(255, 255, 0, 0.75)`,

  l_res: `rgba(0, 255, 0, 0.3)`,
  d_res: `rgba(0, 180, 0, 0.3)`,
  l_com: `rgba(0, 0, 255, 0.3)`,
  d_com: `rgba(0, 0, 180, 0.3)`,
  l_ind: `rgba(255, 255, 0, 0.3)`,
  d_ind: `rgba(180, 180, 0, 03)`,
  sea: `rgba(255, 0, 255, 0.3)`,
  mil: `rgba(0, 255, 255, 0.3)`,
  air: `rgba(255, 0, 0, 0.3)`,

  palette: {
    ...generated,
    0: `rgb(0, 0, 0)`,
    0xA4: `rgb(103, 103, 103)`,
    0xA0: `rgb(159, 159, 159)`,
    0x9F: `rgb(171, 171, 171)`,
    0xA1: `rgb(143, 143, 143)`,
    0xFF: `rgb(255, 255, 255)`,
    0x48: `rgb(7, 115, 0)`,
    0x46: `rgb(7, 167, 0)`,
    0x49: `rgb(7, 91, 0)`,
    0x27: `rgb(175, 63, 27)`,
    0x28: `rgb(255, 159, 159)`,
    0x73: `rgb(203, 199, 135)`,
    0x55: `rgb(107, 199, 219)`,
    0x58: `rgb(19, 123, 183)`,
    0x59: `rgb(0, 99, 171),`,
    0x33: `rgb(191, 179, 43)`,
    0x31: `rgb(231, 231, 75)`,
    0x26: `rgb(199, 87, 43)`,
    0xA5: `rgb(87, 87, 87)`,
    0x47: `rgb(7, 139, 0)`,
    0x4A: `rgb(7, 67, 0)`,
    0x4F: `rgb(0, 207, 207)`,
    0x29: `rgb(127, 23, 7)`,
    0x7D: `rgb(107, 71, 27)`,
    0xA3: `rgb(115, 115, 115)`,
    0xA8: `rgb(47, 47, 47)`,
    0xA7: `rgb(59, 59, 59)`,
    0x9E: `rgb(187, 187, 187)`,
    0x74: `rgb(191, 183, 119)`,
    0x9D: `rgb(199, 199, 199)`,
    0x2E: `rgb(255, 67, 67)`,
    0x2F: `rgb(255, 35, 35)`,
    0x9A: `rgb(243, 243, 243)`,
    0x87: `rgb(19, 183, 243)`,
    0x88: `rgb(15, 167, 219)`,
    0x51: `rgb(0, 115, 115)`,
    0x52: `rgb(0, 67, 67)`,
    0xA6: `rgb(75, 75, 75)`,
    0xE0: `rgb(201, 2, 2)`,
    0x8A: `rgb(27, 119, 211)`,
    0x8F: `rgb(0, 0, 119)`,
    0x7A: `rgb(135, 107, 51)`,
    0x78: `rgb(155, 135, 71)`,
    0x89: `rgb(7, 147, 215)`,
    0x9B: `rgb(227, 227, 227)`,
    0x76: `rgb(171, 159, 95)`,
    0x7C: `rgb(115, 83, 35)`,
    0x37: `rgb(111, 87, 0)`,
    0xA9: `rgb(37, 37, 37)`,
    0x21: `rgb(119, 0, 0)`,
    0xA2: `rgb(131, 131, 131)`,
    0x9C: `rgb(215, 215, 215)`,
    0xAA: `rgb(19, 19, 19)`,
    0x8B: `rgb(11, 83, 243)`,
    0x86: `rgb(139, 223, 239)`,
    0x63: `rgb(0, 0, 227)`,
    0x5E: `rgb(67, 67, 255)`,
    0x75: `rgb(183, 171, 107)`,
    0x77: `rgb(163, 147, 83)`,
    0x7B: `rgb(123, 95, 43)`,
    0x80: `rgb(75, 39, 11)`,
    0x82: `rgb(55, 23, 0)`,
    0x79: `rgb(143, 119, 59)`,
    0x34: `rgb(171, 155, 31)`,
    0x3F: `rgb(99, 159, 0)`,
    0x7E: `rgb(95, 59, 19)`,
    0x5F: `rgb(35, 39, 255)`,
    0x5D: `rgb(95, 99, 255)`,
    0x64: `rgb(0, 0, 203)`,
    0x67: `rgb(0, 0, 127)`,
    0x69: `rgb(0, 0, 79)`,
    0x62: `rgb(0, 0, 239)`,
    0x65: `rgb(0, 0, 179)`,
    0x1F: `rgb(171, 0, 0)`,
    0x1E: `rgb(199, 0, 0)`,
    0x1C: `rgb(255, 0, 0)`,
    0x1D: `rgb(227, 0, 0)`,
    0x20: `rgb(147, 0, 0)`,
    0x22: `rgb(91, 0, 0)`,
    0x60: `rgb(0, 7, 255)`,
    0xCF: `rgb(73, 69, 255)`,
    0xCE: `rgb(92, 119, 255)`,
    0xCD: `rgb(39, 32, 255)`,
    0xCC: `rgb(73, 69, 255)`,
    0xCB: `rgb(92, 119, 255)`,
    0xCA: `rgb(99, 155, 255)`,
    0xC9: `rgb(16, 10, 255)`,
    0xC8: `rgb(39, 32, 255)`,
    0x2D: `rgb(255, 95, 95)`,
    0x2C: `rgb(255, 127, 127)`,
    0x23: `rgb(67, 0, 0)`,
    0x2A: `rgb(103, 7, 0)`,
    0x24: `rgb(251, 143, 75)`,
    0x7F: `rgb(87, 51, 15)`,
    0x81: `rgb(67, 31, 7)`,
    0x83: `rgb(47, 15, 0)`,
    0x30: `rgb(251, 255, 163)`,
    0xE8: `rgb(0, 0, 0)`,
    0x32: `rgb(211, 207, 59)`,
    0x25: `rgb(223, 111, 55)`,
    0x35: `rgb(151, 131, 19)`,
    0x36: `rgb(131, 107, 11)`,
    0x38: `rgb(91, 67, 0)`,
    0x39: `rgb(199, 255, 67)`,
    0x3C: `rgb(147, 231, 0)`,
    0x3D: `rgb(131, 207, 0)`,
    0x3E: `rgb(119, 183, 0)`,
    0x43: `rgb(0, 239, 0)`,
    0x44: `rgb(0, 215, 0)`,
    0x45: `rgb(7, 191, 0)`,
    0x41: `rgb(99, 255, 95)`,
    0x40: `rgb(159, 255, 159)`,
    0x8E: `rgb(0, 0, 215)`,
    0x61: `rgb(0, 0, 255)`,
    0xD0: `rgb(35, 39, 255)`,
    0xD1: `rgb(35, 39, 255)`,
    0xD2: `rgb(49, 62, 255)`,
    0xD3: `rgb(35, 39, 255)`,
    0x84: `rgb(39, 11, 0)`,
    0x8C: `rgb(31, 0, 251)`,
    0x90: `rgb(0, 0, 167)`,
    0x8D: `rgb(0, 35, 247)`,
    0x6D: `rgb(191, 67, 255)`,
    0xC5: `rgb(64, 16, 3)`,
    0xC3: `rgb(255, 15, 17)`,
    0xC4: `rgb(255, 249, 6)`,
    0x6B: `rgb(231, 187, 255)`,
    0x6C: `rgb(211, 127, 255)`,
    0x70: `rgb(99, 0, 159)`,
    0x6F: `rgb(131, 0, 207)`,
    0x6A: `rgb(0, 0, 67)`,
    0x50: `rgb(0, 159, 159)`,
    0x42: `rgb(35, 255, 35)`,
    0x85: `rgb(187, 179, 135)`,
    0x12: `rgb(16, 117, 101)`,
    0x13: `rgb(20, 125, 109)`,
    0x14: `rgb(24, 154, 134)`,
    0x15: `rgb(24, 166, 142)`,
    0x16: `rgb(28, 178, 154)`,
    0x17: `rgb(28, 190, 166)`,
    0x18: `rgb(32, 207, 178)`,
    0x19: `rgb(255, 255, 255)`,
    0x1A: `rgb(255, 85, 85)`,
    0x1B: `rgb(255, 85, 255)`,
    0x3A: `rgb(182, 255, 32)`,
    0x3B: `rgb(162, 255, 0)`,
    0x66: `rgb(0, 0, 154)`,
    0x68: `rgb(0, 0, 89)`
  }
}

export const lookup = value => {
  if (value === null) return `rgba(0,0,0,0)`
  return colors.palette[value]
}
