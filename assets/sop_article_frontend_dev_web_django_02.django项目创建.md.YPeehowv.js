import{j as s,b as n,c as a,aa as p}from"./chunks/framework.Dkh8-idd.js";const m=JSON.parse('{"title":"02.django项目创建","description":"","frontmatter":{"title":"02.django项目创建","date":"2024-03-15T10:00:31.000Z","tags":["Web","django"],"categories":["Web"],"cover":"https://inspector.dev/wp-content/uploads/2023/04/logo-python-django.png","hiddenCover":true},"headers":[],"relativePath":"sop/article/frontend_dev/web/django/02.django项目创建.md","filePath":"sop/article/frontend_dev/web/django/02.django项目创建.md","lastUpdated":1710785203000}'),e={name:"sop/article/frontend_dev/web/django/02.django项目创建.md"},l=p(`<h1 id="_02-django项目创建" tabindex="-1">02.django项目创建 <a class="header-anchor" href="#_02-django项目创建" aria-label="Permalink to &quot;02.django项目创建&quot;">​</a></h1><ol><li>创建一个新的网站项目</li></ol><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>django-admin startproject mysite</span></span>
<span class="line"><span>//cd 到mysite,执行</span></span>
<span class="line"><span>python3 manage.py migrate</span></span>
<span class="line"><span>//运行网站</span></span>
<span class="line"><span>python3 manage.py runserver </span></span>
<span class="line"><span>python3 manage.py runserver 8081</span></span>
<span class="line"><span></span></span>
<span class="line"><span>//打开本地网站</span></span>
<span class="line"><span>http://127.0.0.1:8000/</span></span>
<span class="line"><span></span></span>
<span class="line"><span>//查看网站端口</span></span>
<span class="line"><span>lsof -i:8000     //输出Python    67183 yy.inc   10u  IPv4</span></span>
<span class="line"><span></span></span>
<span class="line"><span>//杀掉端口进程</span></span>
<span class="line"><span>kill -9 67183</span></span></code></pre></div><ol start="2"><li>安装虚拟环境 virtualenv</li></ol><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>pip3 install virtualenv</span></span>
<span class="line"><span>//创建一个虚拟环境的工程</span></span>
<span class="line"><span>virtualenv testproject</span></span>
<span class="line"><span></span></span>
<span class="line"><span>//安装环境依赖</span></span>
<span class="line"><span>pip install -r requirements.txt</span></span>
<span class="line"><span>//报错 error in jsmin setup command: use_2to3 is invalid.</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 解决：</span></span>
<span class="line"><span>sudo -H pip3 install -U pip setuptools==57.5.0</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// pg_config is required to build psycopg2 from source.  Please add the directory </span></span>
<span class="line"><span>// containing pg_config to the $PATH or specify the full executable path with the</span></span>
<span class="line"><span>// option:</span></span></code></pre></div><ol start="3"><li>django 命令：django-admin</li></ol><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>//终端输入： django-admin</span></span>
<span class="line"><span>Django的基本命令</span></span>
<span class="line"><span>startproject #创建一个Django项目</span></span>
<span class="line"><span>starapp #创建一个Django应用</span></span>
<span class="line"><span>check #校验项目的完整性</span></span>
<span class="line"><span>runserver #本地简易运行Django项目</span></span>
<span class="line"><span>shell #进入Django项目的python shell环境</span></span>
<span class="line"><span>test #执行Django用例测试</span></span>
<span class="line"><span>Django的基本命令（数据库相关）</span></span>
<span class="line"><span>makemigrations #创建模型变更的迁移文件</span></span>
<span class="line"><span>migrate #执行上一个命令创建的迁移文件</span></span>
<span class="line"><span>dumpdata #把数据库数据导出到文件</span></span>
<span class="line"><span>loaddata #把文件数据导入到数据库</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>一个项目可以包含多个应用，一个应用可以在多个项目中</span></span>
<span class="line"><span>views.py:视图处理的地方</span></span>
<span class="line"><span>models.py：定义应用模型的地方</span></span>
<span class="line"><span>admin.py：定义Admin模块管理对象的地方</span></span>
<span class="line"><span>apps.py：声明应用的地方</span></span>
<span class="line"><span>test.py：便携应用测试用例的地方</span></span>
<span class="line"><span>urls.py：（自行创建）管理应用路由的地方</span></span>
<span class="line"><span>//hello 程序</span></span>
<span class="line"><span>// views.py</span></span>
<span class="line"><span>from django.http import HttpResponse</span></span>
<span class="line"><span>def hello(request):</span></span>
<span class="line"><span>    return HttpResponse(&quot;你好呀，苏西!&quot;)</span></span>
<span class="line"><span>    </span></span>
<span class="line"><span>//urls.py</span></span>
<span class="line"><span>from userapp import views</span></span>
<span class="line"><span>urlpatterns = [</span></span>
<span class="line"><span>    path(&#39;hello/&#39;, views.hello),</span></span>
<span class="line"><span>]</span></span></code></pre></div>`,7),i=[l];function t(o,c,d,r,g,h){return n(),a("div",null,i)}const _=s(e,[["render",t]]);export{m as __pageData,_ as default};
