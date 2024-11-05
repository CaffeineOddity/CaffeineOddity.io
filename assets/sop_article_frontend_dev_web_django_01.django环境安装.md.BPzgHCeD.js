import{j as a,b as n,c as s,aa as e}from"./chunks/framework.Dkh8-idd.js";const j=JSON.parse('{"title":"django环境搭建安装","description":"","frontmatter":{"title":"django环境搭建安装","date":"2024-03-15T10:00:31.000Z","tags":["Web","django"],"categories":["Web"],"cover":"https://inspector.dev/wp-content/uploads/2023/04/logo-python-django.png","hiddenCover":true},"headers":[],"relativePath":"sop/article/frontend_dev/web/django/01.django环境安装.md","filePath":"sop/article/frontend_dev/web/django/01.django环境安装.md","lastUpdated":1710785203000}'),t={name:"sop/article/frontend_dev/web/django/01.django环境安装.md"},p=e(`<h1 id="_01-python安装" tabindex="-1">01.python安装 <a class="header-anchor" href="#_01-python安装" aria-label="Permalink to &quot;01.python安装&quot;">​</a></h1><p>python环境搭建可以看另外一篇文章<a href="/sop/article/machie_learning/python/00.python.html">python环境搭建</a></p><h2 id="安装django" tabindex="-1">安装django <a class="header-anchor" href="#安装django" aria-label="Permalink to &quot;安装django&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>git clone https://github.com/django/django.git</span></span>
<span class="line"><span></span></span>
<span class="line"><span>cd Django目录</span></span>
<span class="line"><span>//执行安装命令。注意最后的 &quot;.&quot;</span></span>
<span class="line"><span>python3 -m pip install .</span></span>
<span class="line"><span></span></span>
<span class="line"><span>//确认是否安装成功</span></span>
<span class="line"><span>python3  </span></span>
<span class="line"><span>&gt;&gt;&gt; import django</span></span>
<span class="line"><span>&gt;&gt;&gt; print(django.get_version()) // 输出4.1.dev20211227051659</span></span>
<span class="line"><span>//或者</span></span>
<span class="line"><span>python3 -m django --version // 输出4.1.dev20211227051659</span></span></code></pre></div>`,4),o=[p];function d(i,l,c,r,g,h){return n(),s("div",null,o)}const m=a(t,[["render",d]]);export{j as __pageData,m as default};
