/**
 * 在此处配置字体
 */
const BLOG = require('../blog.config')

// const { fontFamily } = require('tailwindcss/defaultTheme')

function CJK() {
  switch (BLOG.LANG.toLowerCase()) {
    case 'zh-cn':
    case 'zh-sg':
      return 'SC'
    case 'zh':
    case 'zh-hk':
    case 'zh-tw':
      return 'TC'
    case 'ja':
    case 'ja-jp':
      return 'JP'
    case 'ko':
    case 'ko-kr':
      return 'KR'
    default:
      return null
  }
}

const fontSansCJK = !CJK()
  ? []
  : [`"Noto Sans CJK ${CJK()}"`, `"Noto Sans ${CJK()}"`]
const fontSerifCJK = !CJK()
  ? []
  : [`"Noto Serif CJK ${CJK()}"`, `"Noto Serif ${CJK()}"`]

const fontFamilies = {
  sans: [...BLOG.FONT_SANS, ...fontSansCJK],
  serif: [...BLOG.FONT_SERIF, ...fontSerifCJK],
  // 为gitbook2主题添加专门的字体配置
  'gitbook2-sans': [
    'Lato',
    '"Source Han Sans SC"',
    '"Source Han Sans TC"', 
    '"Source Han Sans JP"',
    '"Source Han Sans KR"',
    'sans-serif'
  ],
  'gitbook2-serif': [
    'Lato',
    '"Source Han Serif SC"',
    '"Source Han Serif TC"',
    '"Source Han Serif JP"', 
    '"Source Han Serif KR"',
    'serif'
  ],
  noEmoji: [
    'ui-sans-serif',
    'system-ui',
    '-apple-system',
    'BlinkMacSystemFont',
    'sans-serif'
  ]
}
module.exports = { fontFamilies }
