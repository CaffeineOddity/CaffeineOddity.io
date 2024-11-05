import{j as s,b as n,c as a,aa as p}from"./chunks/framework.Dkh8-idd.js";const u=JSON.parse('{"title":"04.数据显示","description":"","frontmatter":{"title":"04.数据显示","date":"2024-03-15T10:00:31.000Z","tags":["Web","django"],"categories":["Web"],"cover":"https://inspector.dev/wp-content/uploads/2023/04/logo-python-django.png","hiddenCover":true},"headers":[],"relativePath":"sop/article/frontend_dev/web/django/04.数据显示.md","filePath":"sop/article/frontend_dev/web/django/04.数据显示.md","lastUpdated":1710785203000}'),e={name:"sop/article/frontend_dev/web/django/04.数据显示.md"},l=p(`<h1 id="_04-数据显示" tabindex="-1">04.数据显示 <a class="header-anchor" href="#_04-数据显示" aria-label="Permalink to &quot;04.数据显示&quot;">​</a></h1><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>//注册admin用户</span></span>
<span class="line"><span>python3 manage.py createsuperuser</span></span>
<span class="line"><span></span></span>
<span class="line"><span>//admin.py</span></span>
<span class="line"><span>//注册模型进admin后台，登录admin，刷新查看新增用户</span></span>
<span class="line"><span>from userapp.models import User</span></span>
<span class="line"><span>admin.site.register(User)</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>//用户显示属性</span></span>
<span class="line"><span>//models.py User Class 内声明方法</span></span>
<span class="line"><span>    def __str__(self):</span></span>
<span class="line"><span>        return self.nick</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>//读取数据库显示</span></span>
<span class="line"><span>//views.py</span></span>
<span class="line"><span>from userapp.models import User</span></span>
<span class="line"><span>def hello_db(request):</span></span>
<span class="line"><span>    peiqi = User.objects.all()[0]</span></span>
<span class="line"><span>    return HttpResponse(&quot;你好呀，%s&quot;%(peiqi.nick))</span></span>
<span class="line"><span>    </span></span>
<span class="line"><span>//urls.py</span></span>
<span class="line"><span>from userapp import views</span></span>
<span class="line"><span>urlpatterns = [</span></span>
<span class="line"><span>    path(&#39;admin/&#39;, admin.site.urls),</span></span>
<span class="line"><span>    path(&#39;hello/&#39;, views.hello),</span></span>
<span class="line"><span>    path(&#39;hello2/&#39;,views.hello_db)</span></span>
<span class="line"><span>]</span></span></code></pre></div>`,2),t=[l];function i(o,c,r,d,_,h){return n(),a("div",null,t)}const f=s(e,[["render",i]]);export{u as __pageData,f as default};
