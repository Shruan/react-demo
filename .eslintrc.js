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
    "comma-spacing": [2, {"before": false, "after": true}],
    // "linebreak-style": ["error", "windows"], // window环境
    "linebreak-style": ["error", "unix"],
    "react/forbid-prop-types": [0], // propTypes检查允许使用object array等
    "arrow-parens": [0],   // 箭头函数用小括号括起来
    "jsx-a11y/no-noninteractive-element-interactions": 0,
    "jsx-a11y/click-events-have-key-events": 0,
    "no-empty": 0,  // 块语句中的内容不能为空
    "no-unused-vars": 0, // 不能有声明后未被使用的变量或参
    "no-console": 0,  // 无console
    "no-const-assign": 2, // 禁止修改const声明的变量
    "no-dupe-class-members": 2,
    "no-duplicate-case": 2, // switch中的case标签不能重复
    "no-extra-parens": [2, "functions"],  // 禁止非必要的括号
    "no-self-compare": 2, // 不能比较自身
    "accessor-pairs": 2,  // 在对象中使用getter/setter
    "constructor-super": 2,  // 非派生类不能调用super，派生类必须调用super
    "new-cap": [2, {"newIsCap": true, "capIsNew": false}],
    "new-parens": 2,  // new时必须加小括号
    "no-array-constructor": 2,  // 禁止使用数组构造器
    "no-class-assign": 2, // 禁止给类赋值
    "no-cond-assign": 2,  // 禁止在条件表达式中使用赋值语句
    "class-methods-use-this": 0, // 类方法必须使用this
    "react/jsx-no-bind": 0, // 允许使用bind this.func.bind(this)
    "no-restricted-syntax": 0, // forin遍历原型链
    "no-prototype-builtins": 0, // 原型链方法 例如： hasOwnProperty
    "no-param-reassign": 0, //禁止给参数重新赋值
    "guard-for-in": 0, // forin 不用if语句过滤
    "jsx-quotes": 0, // JSX 属性值总是使用双引号("), 其他均使用单引号(')
  }
}
