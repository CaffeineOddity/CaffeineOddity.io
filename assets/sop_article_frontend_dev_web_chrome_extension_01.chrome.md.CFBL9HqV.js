import{j as s,b as n,c as a,aa as e,aH as p,aI as t}from"./chunks/framework.Dkh8-idd.js";const v=JSON.parse('{"title":"vue开发chrome插件系列一","description":"","frontmatter":{"title":"vue开发chrome插件系列一","date":"2024-04-10T05:40:00.000Z","tags":["Web","chorme_extension"],"categories":["chorme_extension"],"hiddenCover":true,"cover":"https://wqmoran.com/content/images/2024/02/chrome-7.png"},"headers":[],"relativePath":"sop/article/frontend_dev/web/chrome_extension/01.chrome.md","filePath":"sop/article/frontend_dev/web/chrome_extension/01.chrome.md","lastUpdated":1712806918000}'),o={name:"sop/article/frontend_dev/web/chrome_extension/01.chrome.md"},i=e(`<h1 id="vue-chrome插件开发一" tabindex="-1">vue chrome插件开发一 <a class="header-anchor" href="#vue-chrome插件开发一" aria-label="Permalink to &quot;vue chrome插件开发一&quot;">​</a></h1><p>研究浏览器插件开发过程, 结合vue的开发实践过程</p><p>官方开发文档<a href="https://developer.chrome.com/docs/extensions/how-to/ui/localization-message-formats?hl=zh-cn" target="_blank" rel="noreferrer">入口</a></p><p>主要开发过程：</p><ol><li>了解如何开发一个简单的chrome插件</li><li>如何配合vue使用</li><li>项目实践</li></ol><h2 id="开发一个简单的chrome插件" tabindex="-1">开发一个简单的chrome插件 <a class="header-anchor" href="#开发一个简单的chrome插件" aria-label="Permalink to &quot;开发一个简单的chrome插件&quot;">​</a></h2><p>manifest.json是插件程序说明文档，也是描述入口设置文档。接下来我们说明一下开发过程</p><h3 id="一、创建一个项目目录" tabindex="-1">一、创建一个项目目录 <a class="header-anchor" href="#一、创建一个项目目录" aria-label="Permalink to &quot;一、创建一个项目目录&quot;">​</a></h3><ul><li>创建目录后，进入该目录路径</li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>mkdir chrome_focus</span></span>
<span class="line"><span>cd chrome_focus</span></span></code></pre></div><ul><li>创建一个资源目录</li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>mkdir src/assest</span></span></code></pre></div><ul><li>拖入你的插件图标 官方通常推荐是16x16, 32x32, 48x48, 128x128四个格式 这里我们拖入focus16.png、focus48.png、 focus128.png</li></ul><h3 id="二、manifest-json" tabindex="-1">二、manifest.json <a class="header-anchor" href="#二、manifest-json" aria-label="Permalink to &quot;二、manifest.json&quot;">​</a></h3><ul><li>根目录下创建一个manifest.json主程序文件</li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>touch manifest.json</span></span></code></pre></div><ul><li>编辑插件基本信息信息</li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>{</span></span>
<span class="line"><span>    &quot;manifest_version&quot;: 3,  #主程序api版本，这个通常默认后续会说到</span></span>
<span class="line"><span>    &quot;name&quot;: &quot;chrome-focus&quot;, #关于专注度的chrome</span></span>
<span class="line"><span>    &quot;description&quot;: &quot;Browse extension to focus&quot;, #插件描述</span></span>
<span class="line"><span>    &quot;author&quot;:&quot;caffeineoddity&quot;, #作者信息</span></span>
<span class="line"><span>    &quot;version&quot;: &quot;1.0&quot;, #插件版本</span></span>
<span class="line"><span>    &quot;icons&quot;: { #声明你的应用图标</span></span>
<span class="line"><span>        &quot;16&quot;: &quot;src/assets/focus16.png&quot;,</span></span>
<span class="line"><span>        &quot;48&quot;: &quot;src/assets/focus48.png&quot;,</span></span>
<span class="line"><span>        &quot;128&quot;: &quot;src/assets/focus128.png&quot;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>基本信息配好后，其实我们已经可以加载插件到chrome里了</p><h3 id="三、加载插件" tabindex="-1">三、加载插件 <a class="header-anchor" href="#三、加载插件" aria-label="Permalink to &quot;三、加载插件&quot;">​</a></h3><ol><li><p><strong>chrome浏览器输入: <code>chrome://extensions/</code></strong></p></li><li><p><strong>选中<code>加载已解压的扩展程序</code></strong></p></li><li><p><strong>选择你的项目目录</strong></p></li><li><p><strong>查看你的插件如下：</strong><img src="`+p+'" alt="chrome extionsion focus"></p></li><li><p><strong>固定插件</strong><img src="'+t+`" alt="chrome extionsion pin"> 根据步骤1、2固定后，可以看到插件图标在3位置</p></li><li><p><strong>修改刷新</strong> 如果你文件有改动，通过4底部的刷新按钮，刷新加载文件观看变化。</p></li></ol><p>至此,你已经完成插件的初步加载过程。</p><h3 id="四、专注模式" tabindex="-1">四、专注模式 <a class="header-anchor" href="#四、专注模式" aria-label="Permalink to &quot;四、专注模式&quot;">​</a></h3><p>专注模式:是希望插件可以通过打开和关闭，隐藏网页不重要的内容。</p><p>根本原理是通过打开功能的时候，对当前焦点tab注入js脚本。增加字体效果、隐藏侧边栏等功能。</p><p>我们常见的阅读模式，就是这种原理。</p><ul><li><strong>增加一个action</strong></li></ul><div class="language-/manifest.json vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">/manifest.json</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>{</span></span>
<span class="line"><span>  ..,</span></span>
<span class="line"><span>  &quot;action&quot;: { ## action 默认icon。</span></span>
<span class="line"><span>    &quot;default_icon&quot;: {</span></span>
<span class="line"><span>      &quot;16&quot;: &quot;src/assets/focus16.png&quot;,</span></span>
<span class="line"><span>      &quot;48&quot;: &quot;src/assets/focus48.png&quot;,</span></span>
<span class="line"><span>      &quot;128&quot;: &quot;src/assets/focus128.png&quot;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>  },</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>大多数清单文件包含一个 &quot;action&quot; 键，用于声明 Chrome 应用作扩展程序的操作图标的图片，以及当用户点击扩展程序的操作图标时在弹出式窗口中显示的 HTML 页面 比如指定action要打开一个popup页面，详情见插件<a href="https://developer.chrome.com/docs/extensions/get-started/tutorial/hello-world?hl=zh-cn" target="_blank" rel="noreferrer">hellowold例子</a></p><ul><li><strong>增加一个后台脚本background.js</strong></li></ul><div class="language-/manifest.json vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">/manifest.json</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>{</span></span>
<span class="line"><span>    ..,</span></span>
<span class="line"><span>    &quot;background&quot;: {</span></span>
<span class="line"><span>      &quot;service_worker&quot;: &quot;src/service-worker/background.js&quot;</span></span>
<span class="line"><span>  },</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>service_worker 表面我们有一个worker服务，路径是...background.js. 其实就是后台运行js的路径声明。</p><ul><li><strong>声明权限</strong></li></ul><p>因为我们需要让tab生效和调用js脚本，所以我们需要<code>activeTab</code>和<code>scripting</code>两个权限</p><div class="language-//manifest.json vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">//manifest.json</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>{</span></span>
<span class="line"><span>    ..,</span></span>
<span class="line"><span>    &quot;permissions&quot;: [&quot;activeTab&quot;,&quot;scripting&quot;],</span></span>
<span class="line"><span>}</span></span></code></pre></div><ul><li><strong>操作background.js</strong></li></ul><ol><li>当安装程序的时候，我们希望在icon上显示一个关闭的默认状态：</li></ol><div class="language-background.js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">background.js</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>chrome.runtime.onInstalled.addListener(() =&gt; {</span></span>
<span class="line"><span>    chrome.action.setBadgeText({</span></span>
<span class="line"><span>      text: &quot;OFF&quot;,</span></span>
<span class="line"><span>    });</span></span>
<span class="line"><span>  });</span></span></code></pre></div><ol start="2"><li>当用户操作图标的时候，切换开关状态：</li></ol><div class="language-background.js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">background.js</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>const extensions = &#39;https://developer.chrome.com/docs/extensions&#39;</span></span>
<span class="line"><span>const webstore = &#39;https://developer.chrome.com/docs/webstore&#39;</span></span>
<span class="line"><span>chrome.action.onClicked.addListener(async (tab) =&gt; {</span></span>
<span class="line"><span>  if (tab.url.startsWith(extensions) || tab.url.startsWith(webstore)) {</span></span>
<span class="line"><span>    // Retrieve the action badge to check if the extension is &#39;ON&#39; or &#39;OFF&#39;</span></span>
<span class="line"><span>    const prevState = await chrome.action.getBadgeText({ tabId: tab.id });</span></span>
<span class="line"><span>    // Next state will always be the opposite</span></span>
<span class="line"><span>    const nextState = prevState === &#39;ON&#39; ? &#39;OFF&#39; : &#39;ON&#39;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    // Set the action badge to the next state</span></span>
<span class="line"><span>    await chrome.action.setBadgeText({</span></span>
<span class="line"><span>      tabId: tab.id,</span></span>
<span class="line"><span>      text: nextState,</span></span>
<span class="line"><span>    });</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>});</span></span></code></pre></div><p>这一步可以在<a href="https://developer.chrome.com/docs/extensions/get-started/tutorial/scripts-activetab?hl=zh-cn" target="_blank" rel="noreferrer">文献中心</a>查看打开和关闭效果</p><ul><li><strong>隐藏页面样式</strong></li></ul><p>这里我们需要创建一个css文件，路径为：src/css/mode.css.</p><p>然后在切换开关的时候，选择注入和移除css样式</p><div class="language-background.js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">background.js</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>const extensions = &#39;https://developer.chrome.com/docs/extensions&#39;</span></span>
<span class="line"><span>const webstore = &#39;https://developer.chrome.com/docs/webstore&#39;</span></span>
<span class="line"><span>chrome.action.onClicked.addListener(async (tab) =&gt; {</span></span>
<span class="line"><span>  if (tab.url.startsWith(extensions) || tab.url.startsWith(webstore)) {</span></span>
<span class="line"><span>    // Retrieve the action badge to check if the extension is &#39;ON&#39; or &#39;OFF&#39;</span></span>
<span class="line"><span>    const prevState = await chrome.action.getBadgeText({ tabId: tab.id });</span></span>
<span class="line"><span>    // Next state will always be the opposite</span></span>
<span class="line"><span>    const nextState = prevState === &#39;ON&#39; ? &#39;OFF&#39; : &#39;ON&#39;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    // Set the action badge to the next state</span></span>
<span class="line"><span>    await chrome.action.setBadgeText({</span></span>
<span class="line"><span>      tabId: tab.id,</span></span>
<span class="line"><span>      text: nextState,</span></span>
<span class="line"><span>    });</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    if (nextState === &quot;ON&quot;) {</span></span>
<span class="line"><span>      // Insert the CSS file when the user turns the extension on</span></span>
<span class="line"><span>      await chrome.scripting.insertCSS({</span></span>
<span class="line"><span>        files: [&quot;src/css/mode.css&quot;],</span></span>
<span class="line"><span>        target: { tabId: tab.id },</span></span>
<span class="line"><span>      });</span></span>
<span class="line"><span>    } else if (nextState === &quot;OFF&quot;) {</span></span>
<span class="line"><span>      // Remove the CSS file when the user turns the extension off</span></span>
<span class="line"><span>      await chrome.scripting.removeCSS({</span></span>
<span class="line"><span>        files: [&quot;src/css/mode.css&quot;],</span></span>
<span class="line"><span>        target: { tabId: tab.id },</span></span>
<span class="line"><span>      });</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>});</span></span></code></pre></div><ul><li><strong>css样式</strong></li></ul><p>需要关注页面的元素标签信息，然后调整样式显示。</p><div class="language-xxx/xxx/mode.css vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">xxx/xxx/mode.css</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>body &gt; .scaffold &gt; :is(top-nav, navigation-rail, side-nav, footer),</span></span>
<span class="line"><span>main &gt; :not(:last-child),</span></span>
<span class="line"><span>main &gt; :last-child &gt; navigation-tree,</span></span>
<span class="line"><span>main .toc-container {</span></span>
<span class="line"><span>  display: none;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>main &gt; :last-child {</span></span>
<span class="line"><span>  margin-top: min(10vmax, 10rem);</span></span>
<span class="line"><span>  margin-bottom: min(10vmax, 10rem);</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>查看效果,随着官方迭代版本，可能会丢掉元素跟踪，自行调整。</p><hr><p>ok，到这里我们就开发了一个针对谷歌文献的专注模式的插件，后面只需要打包发布即可。</p><p>后续文章，我们会将一下怎么配合vue使用。</p>`,52),l=[i];function c(r,u,d,h,g,m){return n(),a("div",null,l)}const q=s(o,[["render",c]]);export{v as __pageData,q as default};
