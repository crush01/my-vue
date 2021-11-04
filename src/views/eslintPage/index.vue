<template>
  <div>
    <h4>vue 使用eslint</h4>
    使用eslint自动保存格式化代码
    <p>
      1.vscode 安装插件 Prettier - Code formatter Eslint
    </p>
    <p>
      2. 在package.json 配置以下以来版本 并npm安装
    </p>
    <code>
      "devDependencies":<br />
      { "@vue/cli-plugin-babel": "~4.5.0", <br />"@vue/cli-plugin-eslint": "~4.5.0",<br />
      "@vue/cli-plugin-router": "~4.4.0", <br />"@vue/cli-plugin-vuex": "~4.4.0",<br />
      "@vue/cli-service": "~4.5.0",<br />
      "@vue/eslint-config-prettier": "^6.0.0",<br />
      "babel-eslint": "^10.1.0", <br />"babel-plugin-component": "^1.1.1", <br />"eslint":
      "^6.7.2",<br />
      "eslint-plugin-babel": "^5.3.1", <br />"eslint-plugin-prettier": "^3.1.3",<br />
      "eslint-plugin-vue": "^6.2.2", <br />"prettier": "^1.19.1", " },<br />
    </code>
    <p>3. 在package。json里加上以下配置 不然编辑器自带prettier 跟代码里eslint会有冲突</p>
    <code>
      "eslintConfig": { <br />"root": true, <br />"env": { <br />"node": true <br />}, "extends":
      [<br />
      "plugin:vue/essential", "eslint:recommended", "@vue/prettier" ], "parserOptions": {
      <br />"parser": "babel-eslint" }, "rules": {} },
    </code>
    <p>4. 在根目录，手动添加.eslintrc.js文件</p>
    <code>
      module.exports = { root: true, env: { node: true, }, extends: [ "plugin:vue/vue3-essential",
      "eslint:recommended", "@vue/typescript/recommended", "@vue/prettier",
      "@vue/prettier/@typescript-eslint", ], parserOptions: { ecmaVersion: 2020, }, rules: {
      "no-console": process.env.NODE_ENV === "production" ? "warn" : "off", "no-debugger":
      process.env.NODE_ENV === "production" ? "warn" : "off", }, };
    </code>
    <p>
      具体eslint 配置参考
      <a href="https://eslint.org/docs/rules/">
        规则的细节请到ESLint官方网站查看
      </a>
    </p>
    <p>
      5.编辑器setting.json 配置
    </p>
    <code>
      { // 保存时候使用eslint自动修复 "editor.codeActionsOnSave": { "source.fixAll.eslint": true, },
      // 換行 "editor.wordWrap": "on", // 代码缩进修改成2个空格 "editor.tabSize": 2,
      不檢查縮進，保存后統一按設置項來設置 "editor.detectIndentation": false, //保存的时候自动格式化
      "editor.formatOnSave": true, // 字體大小 "editor.fontSize": 16, // 設置行高
      "editor.lineHeight": 24, // 左側工具欄是否可見 "workbench.activityBar.visible": true,
      控制何时自动保存已更新文件。 // 接受值有: "off"、"afterDelay"、"onFocusChange"
      (编辑器失去焦点)、"onWindowChange" (窗口失去焦点)。如果设置为 "afterDelay"，可在
      "files.autoSaveDelay" 中配置延迟时间。 "files.autoSave": "onWindowChange", //
      "files.autoSaveDelay": 3000, // 让prettier使用eslint的代码格式进行校验
      "prettier.eslintIntegration": true, // 去掉代码结尾的分号 "prettier.semi": true,
      使用带引号替代双引号 "prettier.singleQuote": true, // 启用后，按下 TAB 键，将展开 Emmet 缩写。
      "emmet.triggerExpansionOnTab": true, // js設置單引號 "javascript.preferences.quoteStyle":
      "single", // 让函数(名)和后面的括号之间加个空格
      "javascript.format.insertSpaceBeforeFunctionParenthesis": true, // html格式化
      "vetur.format.defaultFormatter.html": "js-beautify-html", //自动保存信息 // By default, create
      file username "fileheader.Author": "you name", // By default, update file username.
      "fileheader.LastModifiedBy": "you name", // By default, common template. Do not modify it!!!!!
      "fileheader.tpl": "/*\r\n * @Author: {author}\n * @Date: {createTime}\n * @Last Modified by:
      {lastModifiedBy}\n * @Last Modified time: {updateTime}\n */\n", // vue组件中html代码格式化样式
      "vetur.format.defaultFormatterOptions": { "js-beautify-html": { "wrap_attributes":
      "force-aligned" } } }
    </code>
    <p>6.在根目录添加.eslintignore文件可以忽略不需要格式化的文件</p>
    <p>#代表注释</p>
    <code>
      .DS_Store<br />node_modules<br />
      /dist /src/vendor* <br /># local env files <br />.env.local <br />.env.*.local<br />
      # Log files<br />
      npm-debug.log* <br />yarn-debug.log* <br />yarn-error.log*<br />
      # Editor directories and files <br />.idea <br />.vscode<br />
      *.suo<br />
      *.ntvs* <br />*.njsproj <br />*.sln <br />*.sw?<br />
    </code>
  </div>
</template>

<script>
export default {
  data() {
    return {}
  }
}
</script>

<style></style>
