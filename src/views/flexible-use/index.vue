<template>
  <div>
    <p>
      1,<a href="https://github.com/amfe/lib-flexible/archive/master.zip">
        下载flexble.js、flexible.css
      </a>
    </p>
    <p>2. 在main.js引入</p>
    <code>
      import '@/vendor/lib-flexible/flexible.css' <br />import '@/vendor/lib-flexible/flexible.js'
    </code>
    <p>或者直接使用阿里CDN</p>
    <code>
      &lt; script src="http://g.tbcdn.cn/mtb/lib-flexible/{{
        version
      }}/??flexible_css.js,flexible.js"&gt;&lt;/script &gt;
    </code>
    <p>3. 使用sass可以定义sass函数</p>
    <code>
      @function px2rem($px, $base-font-size: 75px) { @if (unitless($px)) { @warn "Assuming #{$px} to
      be in pixels, attempting to convert it into pixels for you"; @return px2rem($px + 0px); //
      That may fail. } @else if (unit($px) == rem) { @return $px; } @return ($px / $base-font-size)
      * 1rem; }
    </code>
    <p>4.字体不用rem可以使用定义font-dpr函数实现不同屏幕字体大小</p>
    <code>
      @mixin font-dpr($font-size){ font-size: $font-size; [data-dpr="2"] & { font-size: $font-size *
      2; } [data-dpr="3"] & { font-size: $font-size * 3; } }
    </code>
    <p>5.viewport 的 meta标签</p>
    <code>
      &lt; meta name="viewport" content="width=device-width, user-scalable=no"&gt;
    </code>
    <p>或者</p>
    <code>
      &lt; meta content="maximum-dpr=2" name="flexible" /&gt;
    </code>
    <p>
      原理：flexible.js会先去获取页面上[name="viewport"]或[name="flexible"]的meta标签，如果有就直接根据获取到的值来判断
      如果没有，会自己创建一个meta标签，我们看一下源码就知道了。
    </p>
  </div>
</template>

<script>
export default {}
</script>

<style></style>
