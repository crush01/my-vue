<template>
  <div>
    <code> npm install sass-loader --save-dev; </code>
    <code> npm install node-sass --save-dev </code>
    <div>
      <h4>可能出现的错误</h4>
      <p class="redColor">
        '1.Syntax Error: TypeError: this.getOptions is not a function'
      </p>
      <p>问题：该sass-loader版本过高，不适用与Vue2.6.11</p>
      <p>解决：安装10.1.1的sass-loader</p>
    </div>
    <div>
      <h4>vue 全局注册sass变量</h4>
      <p>
        <code> 1. npm install sass-resources-loader -D </code>
      </p>
      <p>
        2. 在vue.config.js里添加
      </p>
      <p>
        <code>
          chainWebpack: config => { const oneOfsMap = config.module.rule('scss').oneOfs.store //
          set第一个参数：设置的别名，第二个参数：设置的路径 // config.resolve.alias.set('@',
          resolve('./src')) oneOfsMap.forEach(item => { item .use('sass-resources-loader')
          .loader('sass-resources-loader') .options({ // 要公用的scss的路径 resources:
          ['./src/assets/styles/utils.scss'] }) .end() }) },
        </code>
      </p>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style></style>
