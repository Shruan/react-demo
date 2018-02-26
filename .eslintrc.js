module.exports = {
  "parserOptions": {
    "ecmaVersion": 7, // ECMAScript版本，7为ES7
    "sourceType": "module", //默认script，如果代码是ECMAScript模块，设置为module
    "ecmaFeatures": { // 使用额外的语言特性
        "jsx": true // 启用JSX
    }
  },
  // 当访问未定义的变量时，no-undef 规则将发出警告
  // 指定脚本的运行环境。每种环境都有一组特定的预定义全局变量
  "env": {
    "es6": true,
    "node": true,
    "browser": true,
  },
  // 当访问未定义的变量时，no-undef 规则将发出警告
  // 脚本在执行期间访问的额外的全局变量
  "globals": {
    "document": true,
    "navigator": true,
    "window":true,
    "node":true
  },
  // 使用第三方airbnb开发配置合集
  "extends": "airbnb",
  // eslint-config-airbnb包括了以下3个插件
  "plugins": [
    "react",
    "jsx-a11y",
    "import"
  ],
  // 定义自己的规则(仿standard)
  "rules": {
    "no-trailing-spaces": ["error", {"skipBlankLines": false}], // 不允许过多空行
    "space-before-function-paren": ["error", "always"], // 方法参数的括号前加空格
    "semi": ["error", "never"], // 结尾不使用分号
    "comma-dangle": ["error", "never"], // 要求或禁止末尾逗号：不允许逗号
    // "linebreak-style": ["error", "windows"], // window环境
    "react/forbid-prop-types": [0], // propTypes检查允许使用object array等
    "arrow-parens": [0],
    "jsx-a11y/no-noninteractive-element-interactions": 0,
    "jsx-a11y/click-events-have-key-events": 0,
    "linebreak-style": ["error", "unix"],
    "no-empty": 0,
    "no-unused-vars": 0,
    "no-console": 0,
    "no-const-assign": 2,
    "no-dupe-class-members": 2,
    "no-duplicate-case": 2,
    "no-extra-parens": [2, "functions"],
    "no-self-compare": 2,
    "accessor-pairs": 2,
    "comma-spacing": [2, {"before": false, "after": true}],
    "constructor-super": 2,
    "new-cap": [2, {"newIsCap": true, "capIsNew": false}],
    "new-parens": 2,
    "no-array-constructor": 2,
    "no-class-assign": 2,
    "no-cond-assign": 2,
    "class-methods-use-this": 0,
    "react/jsx-no-bind": 0
  }
}
