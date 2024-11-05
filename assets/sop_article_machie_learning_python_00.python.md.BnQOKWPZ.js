import{j as s,b as n,c as a,aa as p}from"./chunks/framework.Dkh8-idd.js";const u=JSON.parse('{"title":"1. python安装","description":"","frontmatter":{"title":"1. python安装","date":"2024-03-15T10:00:31.000Z","tags":["Web","python"],"categories":["Web"],"cover":"https://miro.medium.com/v2/resize:fit:1400/1*ycIMlwgwicqlO6PcFRA-Iw.png","hiddenCover":true},"headers":[],"relativePath":"sop/article/machie_learning/python/00.python.md","filePath":"sop/article/machie_learning/python/00.python.md","lastUpdated":1710756774000}'),e={name:"sop/article/machie_learning/python/00.python.md"},l=p(`<h1 id="_1-python安装" tabindex="-1">1. python安装 <a class="header-anchor" href="#_1-python安装" aria-label="Permalink to &quot;1. python安装&quot;">​</a></h1><ol><li>安装pyenv</li></ol><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>brew install pyenv</span></span>
<span class="line"><span>//设置环境</span></span>
<span class="line"><span>vi ~/.bash_profile</span></span>
<span class="line"><span>//内容如下：</span></span>
<span class="line"><span>export PYENV_ROOT=/usr/local/var/pyenv</span></span>
<span class="line"><span>if which pyenv &gt; /dev/null; then eval &quot;$(pyenv init -)&quot;; fi</span></span>
<span class="line"><span></span></span>
<span class="line"><span>//执行生效</span></span>
<span class="line"><span>source ~/.bash_profile</span></span></code></pre></div><ol start="2"><li>根据系统，安装对应python。 <a href="https://www.python.org/downloads/" target="_blank" rel="noreferrer">下载地址</a></li></ol><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>//比如查看最新的是3.10.1</span></span>
<span class="line"><span>pyenv install 3.10.1</span></span>
<span class="line"><span></span></span>
<span class="line"><span>//查看本地版本</span></span>
<span class="line"><span>python --version</span></span>
<span class="line"><span>python3 --version</span></span>
<span class="line"><span>pyenv --version</span></span>
<span class="line"><span>pyenv versions</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>卸载python3.10.1</span></span>
<span class="line"><span>sudo rm -rf /Library/Frameworks/Python.framework/Versions/3.10</span></span>
<span class="line"><span>cd /Applications</span></span>
<span class="line"><span>sudo rm -rf Python 3.7</span></span>
<span class="line"><span>cd /usr/local/bin/</span></span>
<span class="line"><span>ls -l /usr/local/bin</span></span>
<span class="line"><span>rm Python3*</span></span>
<span class="line"><span></span></span>
<span class="line"><span>vi ~/.bash_profile //删掉3.10相关路径</span></span>
<span class="line"><span>source ~/.bash_profile</span></span></code></pre></div><ol start="3"><li>安装pip</li></ol><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>curl https://bootstrap.pypa.io/get-pip.py -o get-pip.py</span></span>
<span class="line"><span>//python2.x</span></span>
<span class="line"><span>sudo python get-pip.py</span></span>
<span class="line"><span>//python3.x</span></span>
<span class="line"><span>sudo python3 get-pip.py</span></span></code></pre></div>`,7),t=[l];function i(o,c,r,h,d,y){return n(),a("div",null,t)}const v=s(e,[["render",i]]);export{u as __pageData,v as default};
