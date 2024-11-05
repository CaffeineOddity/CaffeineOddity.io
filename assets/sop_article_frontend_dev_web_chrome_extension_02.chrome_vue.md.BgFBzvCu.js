import{j as s,b as a,c as n,aa as p,aJ as e,aK as l}from"./chunks/framework.Dkh8-idd.js";const b=JSON.parse('{"title":"vue开发chrome插件系列二","description":"","frontmatter":{"title":"vue开发chrome插件系列二","date":"2024-04-11T05:40:00.000Z","tags":["Web","chorme_extension"],"categories":["chorme_extension"],"hiddenCover":true,"cover":"https://wqmoran.com/content/images/2024/02/chrome-7.png"},"headers":[],"relativePath":"sop/article/frontend_dev/web/chrome_extension/02.chrome_vue.md","filePath":"sop/article/frontend_dev/web/chrome_extension/02.chrome_vue.md","lastUpdated":1712806918000}'),i={name:"sop/article/frontend_dev/web/chrome_extension/02.chrome_vue.md"},t=p('<h1 id="vue开发chrome插件系列二" tabindex="-1">Vue开发Chrome插件系列二 <a class="header-anchor" href="#vue开发chrome插件系列二" aria-label="Permalink to &quot;Vue开发Chrome插件系列二&quot;">​</a></h1><p>为什么要用Vue开发Chrome插件？个人主要是回到自己熟悉的模式，提高效率。</p><p><strong>好处：</strong></p><ol><li><p><strong>简单易用的框架：</strong> Vue.js是一种简单易用的JavaScript框架，它提供了许多工具和功能来简化前端开发过程。使用Vue.js可以快速构建用户界面，这对于开发Chrome插件来说非常方便。</p></li><li><p><strong>组件化开发：</strong> Vue.js鼓励组件化开发，将用户界面拆分成多个独立的组件，每个组件都有自己的状态和功能。这种方式非常适合Chrome插件的开发，因为插件通常由多个部分组成，例如弹出窗口、选项页面等。</p></li><li><p><strong>响应式数据绑定：</strong> Vue.js的响应式数据绑定机制使得数据与视图保持同步，当数据发生变化时，视图会自动更新。这使得开发Chrome插件时可以更轻松地管理和更新用户界面。</p></li><li><p><strong>丰富的生态系统：</strong> Vue.js拥有一个庞大的生态系统，包括许多第三方库、插件和工具，可以帮助开发者更快速地构建功能强大的Chrome插件。</p></li></ol><p><strong>坏处：</strong></p><ol><li><p><strong>性能问题：</strong> 虽然Vue.js是一个性能良好的框架，但是在某些情况下，使用Vue.js可能会导致一些性能问题，特别是当插件需要处理大量数据或者有复杂的用户界面时。</p></li><li><p><strong>体积：</strong> Vue.js的核心库相对较大，这可能会增加Chrome插件的总体积。对于一些需要尽可能减小插件大小的场景来说，这可能是一个问题。</p></li><li><p><strong>学习曲线：</strong> 对于那些对Vue.js不熟悉的开发者来说，学习曲线可能是一个挑战。尽管Vue.js相对来说比较易学易用，但是仍然需要一定的时间和精力来学习其核心概念和API。</p></li><li><p><strong>兼容性问题：</strong> 虽然大多数现代浏览器都支持Vue.js，但是Chrome插件可能需要在旧版本的浏览器上运行，这可能会导致一些兼容性问题。</p></li></ol><h2 id="使用vue开发的原理" tabindex="-1">使用Vue开发的原理 <a class="header-anchor" href="#使用vue开发的原理" aria-label="Permalink to &quot;使用Vue开发的原理&quot;">​</a></h2><p>上一篇文章，我们介绍了如何开发一个chrome插件，感兴趣的可以查看<a href="./01.chrome.html">《vue开发chrome插件系列一》</a>。</p><p>接下来我们切到Vue配置过程，方便接下来实践项目。</p><p>主要原理: 将Vue build的时候，生成的内容是chrome插件结构. 同时根据dist结构，配置maifest.json</p><h3 id="一-创建vue项目" tabindex="-1">一. 创建Vue项目 <a class="header-anchor" href="#一-创建vue项目" aria-label="Permalink to &quot;一. 创建Vue项目&quot;">​</a></h3><p>确保在计算机上安装了Node.js和npm。接下来，你可以按照以下步骤创建一个新的Vue.js项目：</p><ul><li>安装Vue CLI（命令行工具）：</li></ul><p>打开终端（命令行界面），运行以下命令来全局安装Vue CLI：</p><p><code>npm install -g @vue/cli</code></p><ul><li>创建新项目：</li></ul><p>在终端中，进入你想要创建项目的目录，然后运行以下命令创建一个新的Vue项目：</p><p><code>vue create chrome-focus</code></p><p>选择vue3，等待项目自动创建完成</p><ul><li>build观察目录结构</li></ul><p><img src="'+e+`" alt="vue-build"></p><p>可以看到public目录下的内容，被原封不动的搬到dist目录下。</p><p>而src下的vue组件和main.js, 则被编译成js和css文件,分别存储到js和css下。</p><p>由于我们开发的是chrome插件，可以把不渲染的文件放到public目录下，把渲染源文件放到src下。</p><p>另外在public下，创建一个manifest.json文件即可。</p><p>把不编译的js,放到public的好处是:</p><p><code>对于chrome api，我们可以直接跳过编译。直接使用chrome.xxx的形式</code>.</p><h3 id="二-删除不需要的内容" tabindex="-1">二. 删除不需要的内容 <a class="header-anchor" href="#二-删除不需要的内容" aria-label="Permalink to &quot;二. 删除不需要的内容&quot;">​</a></h3><p>接下来，我们删除不需要的文件和目录：</p><ul><li><p>删除public目录下的favicon.ico、index.html文件。</p></li><li><p>删除src目录下的所有文件，让内容保持成初始状态。</p></li></ul><p>最终初始目录结构如下：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>./</span></span>
<span class="line"><span>├── vue.config.js</span></span>
<span class="line"><span>├── src</span></span>
<span class="line"><span>├── public</span></span>
<span class="line"><span>├── package.json</span></span>
<span class="line"><span>├── package-lock.json</span></span>
<span class="line"><span>├── jsconfig.json</span></span>
<span class="line"><span>├── babel.config.js</span></span>
<span class="line"><span>└── README.md</span></span></code></pre></div><h3 id="三-public目录下添加文件" tabindex="-1">三. public目录下添加文件 <a class="header-anchor" href="#三-public目录下添加文件" aria-label="Permalink to &quot;三. public目录下添加文件&quot;">​</a></h3><p>这里用把上一篇文章<a href="./01.chrome.html">《vue开发chrome插件系列一》</a>的logo、js、css等文件，全部搬到public目录下。</p><p>chrome-focus/public目录结构如下：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>.</span></span>
<span class="line"><span>├── service-worker    </span></span>
<span class="line"><span>│   └── background.js   # 插件后台运行js</span></span>
<span class="line"><span>├── manifest.json       # 插件主描述文件</span></span>
<span class="line"><span>├── css</span></span>
<span class="line"><span>│   └── mode.css       # 专注模式css</span></span>
<span class="line"><span>└── assets             # icon图片</span></span>
<span class="line"><span>    ├── todolist48.png</span></span>
<span class="line"><span>    ├── todolist16.png</span></span>
<span class="line"><span>    └── todolist128.png</span></span></code></pre></div><h3 id="四-创建主入口" tabindex="-1">四. 创建主入口 <a class="header-anchor" href="#四-创建主入口" aria-label="Permalink to &quot;四. 创建主入口&quot;">​</a></h3><p>接下来，我们配置一个主入口文件，以便渲染出插件要显示的页面。</p><ul><li>4.1 创建src/popup目录，并创建文件</li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>mkdir src/popup             # 创建popup目录</span></span>
<span class="line"><span>touch src/popup/components/App.vue              # 创建app组件</span></span>
<span class="line"><span>touch src/popup/components/ImageGallery.vue     # 创建ImageGallery组件,这个会被加载到app组件中</span></span>
<span class="line"><span>touch src/popup/main.js     # main.js渲染程序</span></span>
<span class="line"><span>touch src/popup/index.html  # 渲染页面</span></span></code></pre></div><p>这里的目的是：</p><p>告诉vue-cli, 在main.js中启动程序。</p><p>然后将App.vue组件，加载到要index.html中，从而渲染出我们的主页面。</p><ul><li>4.2 配置main.js 初始化app</li></ul><div class="language-# vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">#</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>import { createApp } from &#39;vue&#39;</span></span>
<span class="line"><span>import App from &#39;./components/App.vue&#39;</span></span>
<span class="line"><span>createApp(App).mount(&#39;#app&#39;)</span></span></code></pre></div><ul><li>4.3 配置index.html</li></ul><p>告诉index.html,在body.div中加载app组件</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>&lt;!DOCTYPE html&gt;</span></span>
<span class="line"><span>&lt;html lang=&quot;&quot;&gt;</span></span>
<span class="line"><span>  &lt;body&gt;</span></span>
<span class="line"><span>    &lt;div id=&quot;app&quot;&gt;&lt;/div&gt;</span></span>
<span class="line"><span>  &lt;/body&gt;</span></span>
<span class="line"><span>&lt;/html&gt;</span></span></code></pre></div><ul><li>4.4 配置ImageGallery.vue</li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>&lt;template&gt;</span></span>
<span class="line"><span>  &lt;div&gt;</span></span>
<span class="line"><span>    &lt;img alt=&quot;Vue logo&quot; id=&quot;v-logo&quot; src=&quot;assets/todolist128.png&quot;&gt;</span></span>
<span class="line"><span>  &lt;/div&gt;</span></span>
<span class="line"><span>&lt;/template&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;script&gt;</span></span>
<span class="line"><span>export default {</span></span>
<span class="line"><span>  name: &#39;ImageGallery&#39;,</span></span>
<span class="line"><span>  components: {</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>&lt;/script&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;style&gt;</span></span>
<span class="line"><span>#v-logo {</span></span>
<span class="line"><span>  width: 30px;</span></span>
<span class="line"><span>  height:30px;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>&lt;/style&gt;</span></span></code></pre></div><ul><li>4.5 配置App.vue</li></ul><p>我们创建一个app组件，它支持显示ImageGallery组件和<code>Hellow world</code></p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>&lt;template&gt;</span></span>
<span class="line"><span>  &lt;ImageGallery&gt;&lt;/ImageGallery&gt;</span></span>
<span class="line"><span>  &lt;div&gt; hello world&lt;/div&gt;</span></span>
<span class="line"><span>&lt;/template&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;script&gt;</span></span>
<span class="line"><span>import ImageGallery from &#39;./ImageGallery.vue&#39;</span></span>
<span class="line"><span>export default {</span></span>
<span class="line"><span>  name: &#39;App&#39;,</span></span>
<span class="line"><span>  components: {</span></span>
<span class="line"><span>    ImageGallery</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>&lt;/script&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;style&gt;</span></span>
<span class="line"><span>#app {</span></span>
<span class="line"><span>  font-family: Avenir, Helvetica, Arial, sans-serif;</span></span>
<span class="line"><span>  -webkit-font-smoothing: antialiased;</span></span>
<span class="line"><span>  -moz-osx-font-smoothing: grayscale;</span></span>
<span class="line"><span>  text-align: center;</span></span>
<span class="line"><span>  color: #2c3e50;</span></span>
<span class="line"><span>  margin-top: 60px;</span></span>
<span class="line"><span>  width: 500px;</span></span>
<span class="line"><span>  height:100px;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>&lt;/style&gt;</span></span></code></pre></div><p>插件的主体结构已经完成。插件的表现应该是：</p><p>点击插件图标，弹出页面。页面上面有一个图标和hello world。</p><h3 id="五-配置build过程" tabindex="-1">五. 配置build过程 <a class="header-anchor" href="#五-配置build过程" aria-label="Permalink to &quot;五. 配置build过程&quot;">​</a></h3><p>在vue.config.js中，配置build过程，主要说明要加载的页面是popup/index.html。</p><ul><li>5.1 配置vue.config.js</li></ul><div class="language-#vue.config.js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">#vue.config.js</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>const { defineConfig } = require(&#39;@vue/cli-service&#39;)</span></span>
<span class="line"><span>const pages = {}; #声明一个page集合，如果有</span></span>
<span class="line"><span>const chromepages=[&quot;popup&quot;];        # 这里主要有一个popup页面,页面我们叫做popup和</span></span>
<span class="line"><span>chromepages.forEach(name=&gt;{</span></span>
<span class="line"><span>pages[name]={</span></span>
<span class="line"><span>entry:\`src/\${name}/main.js\`,        #页面入口是popup下的main.js</span></span>
<span class="line"><span>template:\`src/\${name}/index.html\`,  #渲染的模版是index.html</span></span>
<span class="line"><span>filename:\`\${name}.html\`             #最终渲染的页面是popup.html      </span></span>
<span class="line"><span>};</span></span>
<span class="line"><span>});</span></span>
<span class="line"><span>module.exports = {</span></span>
<span class="line"><span>  pages,</span></span>
<span class="line"><span>  productionSourceMap: false,</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>如果希望组件css独立文件，则可以配置:</p><div class="language-#vue.config.js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">#vue.config.js</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>...,</span></span>
<span class="line"><span>css: {</span></span>
<span class="line"><span>    extract: {</span></span>
<span class="line"><span>    filename: &quot;css/[name].css&quot;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>  },</span></span></code></pre></div><ul><li><p>5.2 执行build操作 <code>npm run build</code></p></li><li><p>查看dist目录结构</p></li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>cd dist</span></span>
<span class="line"><span>tree -r</span></span></code></pre></div><p>目录结构如下</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>.</span></span>
<span class="line"><span>├── service-worker</span></span>
<span class="line"><span>│   └── background.js</span></span>
<span class="line"><span>├── popup.html     #渲染的弹出页面</span></span>
<span class="line"><span>├── manifest.json  主程序入口</span></span>
<span class="line"><span>├── js</span></span>
<span class="line"><span>│   ├── popup.ff36d80a.js</span></span>
<span class="line"><span>│   └── chunk-vendors.1c3d3fe0.js</span></span>
<span class="line"><span>├── css</span></span>
<span class="line"><span>│   ├── popup.0b9776ec.css</span></span>
<span class="line"><span>│   └── mode.css</span></span>
<span class="line"><span>└── assets</span></span>
<span class="line"><span>    ├── todolist48.png</span></span>
<span class="line"><span>    ├── todolist16.png</span></span>
<span class="line"><span>    └── todolist128.png</span></span></code></pre></div><h3 id="六-验证加载插件" tabindex="-1">六. 验证加载插件 <a class="header-anchor" href="#六-验证加载插件" aria-label="Permalink to &quot;六. 验证加载插件&quot;">​</a></h3><ul><li>6.1 配置manifest.json</li></ul><p>这一步，我们需要根据dist目录，配置manifest.json。</p><p>通常我们只需要关注dist生成后的目录结构，然后配置manifest.json即可。</p><div class="language-#manifest.json vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">#manifest.json</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>{</span></span>
<span class="line"><span>    &quot;manifest_version&quot;: 3,</span></span>
<span class="line"><span>    &quot;name&quot;: &quot;chrome-todo-daily&quot;,</span></span>
<span class="line"><span>    &quot;description&quot;: &quot;Browse extension to work with your daily&quot;,</span></span>
<span class="line"><span>    &quot;author&quot;:&quot;caffeineoddity&quot;,</span></span>
<span class="line"><span>    &quot;version&quot;: &quot;1.0&quot;,</span></span>
<span class="line"><span>    &quot;action&quot;: {</span></span>
<span class="line"><span>      &quot;default_popup&quot;: &quot;popup.html&quot;,  #重要: 默认加载popup.html</span></span>
<span class="line"><span>      &quot;default_icon&quot;: {</span></span>
<span class="line"><span>        &quot;16&quot;: &quot;assets/todolist16.png&quot;,</span></span>
<span class="line"><span>        &quot;48&quot;: &quot;assets/todolist48.png&quot;,</span></span>
<span class="line"><span>        &quot;128&quot;: &quot;assets/todolist128.png&quot;</span></span>
<span class="line"><span>      }</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>  }</span></span></code></pre></div><ul><li><p>6.2 加载插件 chrome://extensions/中加载dist目录。</p></li><li><p>6.3 点击查看效果</p></li></ul><p>很好，这里已经加载出我们要的效果了：</p><p><img src="`+l+`" alt="vue chrome extension"></p><p>如果要查看上篇文章的专注模式，</p><p>移除action里的<code>&quot;default_popup&quot;: &quot;popup.html&quot;,</code>，重新载</p><h3 id="七-热重载-可选" tabindex="-1">七. 热重载(可选) <a class="header-anchor" href="#七-热重载-可选" aria-label="Permalink to &quot;七. 热重载(可选)&quot;">​</a></h3><p>如果希望修改src/publich内容时，能够自动build成dist。可以如下操作：</p><ul><li>7.1 安装watch</li></ul><p><code>npm install --save-dev watch</code></p><ul><li>7.2 配置package.json</li></ul><div class="language-#package.json vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">#package.json</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>{</span></span>
<span class="line"><span>...,</span></span>
<span class="line"><span>&quot;scripts&quot;: {</span></span>
<span class="line"><span>    &quot;watch&quot;: &quot;watch &#39;npm run build&#39; src public&quot;,</span></span>
<span class="line"><span>    ...,</span></span>
<span class="line"><span>},</span></span>
<span class="line"><span>}</span></span></code></pre></div><ul><li>7.3 执行watch</li></ul><p><code>npm run watch</code></p><hr><p>ok，vue接入配置完成。</p><p>接下来，开始研究项目接入。</p>`,86),o=[t];function c(u,r,d,h,g,m){return a(),n("div",null,o)}const q=s(i,[["render",c]]);export{b as __pageData,q as default};
