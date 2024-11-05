import{j as s,b as n,c as a,aa as p}from"./chunks/framework.Dkh8-idd.js";const h=JSON.parse('{"title":"05.模板显示","description":"","frontmatter":{"title":"05.模板显示","date":"2024-03-15T10:00:31.000Z","tags":["Web","django"],"categories":["Web"],"cover":"https://inspector.dev/wp-content/uploads/2023/04/logo-python-django.png","hiddenCover":true},"headers":[],"relativePath":"sop/article/frontend_dev/web/django/05.模板显示.md","filePath":"sop/article/frontend_dev/web/django/05.模板显示.md","lastUpdated":1710785203000}'),e={name:"sop/article/frontend_dev/web/django/05.模板显示.md"},l=p(`<h1 id="_05-模板显示" tabindex="-1">05.模板显示 <a class="header-anchor" href="#_05-模板显示" aria-label="Permalink to &quot;05.模板显示&quot;">​</a></h1><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>django模板系统基本语法</span></span>
<span class="line"><span>变量标签:{{variable_name}}</span></span>
<span class="line"><span>for循环标签{%for x in list %},{% endfor %}</span></span>
<span class="line"><span>if-else标签{% if %},{%.else %},{% endif %}</span></span>
<span class="line"><span>举个栗子:</span></span>
<span class="line"><span>&lt;ul&gt;</span></span>
<span class="line"><span>    {% for item in list %}</span></span>
<span class="line"><span>        &lt;li&gt;{{item}&lt;/li&gt;</span></span>
<span class="line"><span>    {% endfor %}</span></span>
<span class="line"><span>&lt;/ul&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>{% if true %}</span></span>
<span class="line"><span>    &lt;p&gt;it is a true part&lt;/p&gt;</span></span>
<span class="line"><span>{% else %}</span></span>
<span class="line"><span>    &lt;p&gt;it is a false part&lt;/p&gt;</span></span>
<span class="line"><span>{% endif %}</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>//设置template路径setting.py</span></span>
<span class="line"><span>INSTALLED_APPS = [</span></span>
<span class="line"><span>    &#39;django.contrib.admin&#39;,</span></span>
<span class="line"><span>    &#39;django.contrib.auth&#39;,</span></span>
<span class="line"><span>    &#39;django.contrib.contenttypes&#39;,</span></span>
<span class="line"><span>    &#39;django.contrib.sessions&#39;,</span></span>
<span class="line"><span>    &#39;django.contrib.messages&#39;,</span></span>
<span class="line"><span>    &#39;django.contrib.staticfiles&#39;,</span></span>
<span class="line"><span>    &#39;userapp&#39;,</span></span>
<span class="line"><span>    &#39;learnproject&#39; //设置app</span></span>
<span class="line"><span>]</span></span>
<span class="line"><span>TEMPLATES = [</span></span>
<span class="line"><span>    {</span></span>
<span class="line"><span>        &#39;BACKEND&#39;: &#39;django.template.backends.django.DjangoTemplates&#39;,</span></span>
<span class="line"><span>        &#39;DIRS&#39;: [BASE_DIR/&#39;templates&#39;], //设置路径</span></span>
<span class="line"><span>        &#39;APP_DIRS&#39;: True,</span></span>
<span class="line"><span>        &#39;OPTIONS&#39;: {</span></span>
<span class="line"><span>            &#39;context_processors&#39;: [</span></span>
<span class="line"><span>                &#39;django.template.context_processors.debug&#39;,</span></span>
<span class="line"><span>                &#39;django.template.context_processors.request&#39;,</span></span>
<span class="line"><span>                &#39;django.contrib.auth.context_processors.auth&#39;,</span></span>
<span class="line"><span>                &#39;django.contrib.messages.context_processors.messages&#39;,</span></span>
<span class="line"><span>            ],</span></span>
<span class="line"><span>        },</span></span>
<span class="line"><span>    },</span></span>
<span class="line"><span>]</span></span>
<span class="line"><span>// 渲染视图 views.py</span></span>
<span class="line"><span>def renderIndex(request):</span></span>
<span class="line"><span>    users = User.objects.all()</span></span>
<span class="line"><span>    name=request.GET[&#39;geo&#39;]</span></span>
<span class="line"><span>    return render(request, &#39;season1/index.html&#39;, {</span></span>
<span class="line"><span>    &#39;Users&#39;: users</span></span>
<span class="line"><span>})</span></span>
<span class="line"><span></span></span>
<span class="line"><span>def hello3(request,userid):</span></span>
<span class="line"><span>    if request.method == &#39;GET&#39;:</span></span>
<span class="line"><span>        //do_something()</span></span>
<span class="line"><span>    elif request.method == &#39;POST&#39;:</span></span>
<span class="line"><span>        //do_something_else()</span></span>
<span class="line"><span>    name= request.GET[&#39;name&#39;]</span></span>
<span class="line"><span>    user_list = User.objects.all()</span></span>
<span class="line"><span>    peiqi = None</span></span>
<span class="line"><span>    for user in user_list:</span></span>
<span class="line"><span>        if int(user.uid) == userid:</span></span>
<span class="line"><span>            peiqi = user</span></span>
<span class="line"><span>            break</span></span>
<span class="line"><span>    if peiqi == None:</span></span>
<span class="line"><span>        return HttpResponse(&quot;你好呀，404&quot;)    </span></span>
<span class="line"><span>    return HttpResponse(&quot;你好呀，%s&quot;%(peiqi.nick))</span></span>
<span class="line"><span>    </span></span>
<span class="line"><span>//urls.py</span></span>
<span class="line"><span>urlpatterns = [</span></span>
<span class="line"><span>    path(&#39;admin/&#39;, admin.site.urls),</span></span>
<span class="line"><span>    path(&#39;hello/&#39;, views.hello),</span></span>
<span class="line"><span>    path(&#39;hello2/&#39;,views.hello_db)，</span></span>
<span class="line"><span>    path(&#39;/&#39;,views.renderIndex),</span></span>
<span class="line"><span>    path(&#39;hello/&lt;int:userid&gt;&#39;,views.views.hello3)</span></span>
<span class="line"><span>]</span></span></code></pre></div>`,2),i=[l];function t(c,o,r,d,u,_){return n(),a("div",null,i)}const m=s(e,[["render",t]]);export{h as __pageData,m as default};
