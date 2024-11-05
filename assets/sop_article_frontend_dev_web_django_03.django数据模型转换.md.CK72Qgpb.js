import{j as s,b as n,c as a,aa as p}from"./chunks/framework.Dkh8-idd.js";const m=JSON.parse('{"title":"03.django数据模型转换","description":"","frontmatter":{"title":"03.django数据模型转换","date":"2024-03-15T10:00:31.000Z","tags":["Web","django"],"categories":["Web"],"cover":"https://inspector.dev/wp-content/uploads/2023/04/logo-python-django.png","hiddenCover":true},"headers":[],"relativePath":"sop/article/frontend_dev/web/django/03.django数据模型转换.md","filePath":"sop/article/frontend_dev/web/django/03.django数据模型转换.md","lastUpdated":1710785203000}'),e={name:"sop/article/frontend_dev/web/django/03.django数据模型转换.md"},l=p(`<h1 id="_03-django数据模型转换" tabindex="-1">03.django数据模型转换 <a class="header-anchor" href="#_03-django数据模型转换" aria-label="Permalink to &quot;03.django数据模型转换&quot;">​</a></h1><p>常规的显示操作 database -&gt; models -&gt; views Django 对各种数据库提供了很好的支持，包括：PostgreSQL、MySQL、SQLite、Oracle。</p><p>Django 模型使用自带的 ORM。 对象关系映射（Object Relational Mapping，简称 ORM ）用于实现面向对象编程语言里不同类型系统的数据之间的转换。</p><p>ORM 在业务逻辑层和数据库层之间充当了桥梁的作用。</p><p>ORM 是通过使用描述对象和数据库之间的映射的元数据，将程序中的对象自动持久化到数据库中。</p><p><a href="./resource/orm-object.png">数据存储</a></p><p>使用 ORM 的好处： 提高开发效率。</p><p>不同数据库可以平滑切换。</p><p>使用 ORM 的缺点：</p><p>ORM 代码转换为 SQL 语句时，需要花费一定的时间，执行效率会有所降低。</p><p>长期写 ORM 代码，会降低编写 SQL 语句的能力。</p><p>ORM 解析过程:</p><p>1、ORM 会将 Python 代码转成为 SQL 语句。</p><p>2、SQL 语句通过 pymysql 传送到数据库服务端。</p><p>3、在数据库中执行 SQL 语句并将结果返回。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>//数据库配置</span></span>
<span class="line"><span>//settings.py</span></span>
<span class="line"><span>//sqlite</span></span>
<span class="line"><span>DATABASES = {</span></span>
<span class="line"><span>    &#39;default&#39;: {</span></span>
<span class="line"><span>        &#39;ENGINE&#39;: &#39;django.db.backends.sqlite3&#39;,</span></span>
<span class="line"><span>        &#39;NAME&#39;: BASE_DIR / &#39;db.sqlite3&#39;,</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>//postgresql </span></span>
<span class="line"><span>DATABASES = {</span></span>
<span class="line"><span>    &#39;default&#39;: {</span></span>
<span class="line"><span>        &#39;ENGINE&#39;: &#39;django.db.backends.postgresql&#39;,</span></span>
<span class="line"><span>        &#39;NAME&#39;: &#39;mydatabase&#39;,</span></span>
<span class="line"><span>        &#39;USER&#39;: &#39;mydatabaseuser&#39;,</span></span>
<span class="line"><span>        &#39;PASSWORD&#39;: &#39;mypassword&#39;,</span></span>
<span class="line"><span>        &#39;HOST&#39;: &#39;127.0.0.1&#39;,</span></span>
<span class="line"><span>        &#39;PORT&#39;: &#39;5432&#39;,</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>//mysql</span></span>
<span class="line"><span>DATABASES = { </span></span>
<span class="line"><span>    &#39;default&#39;: </span></span>
<span class="line"><span>    { </span></span>
<span class="line"><span>        &#39;ENGINE&#39;: &#39;django.db.backends.mysql&#39;,    # 数据库引擎</span></span>
<span class="line"><span>        &#39;NAME&#39;: &#39;mydatabase&#39;, # 数据库名称</span></span>
<span class="line"><span>        &#39;USER&#39;: &#39;root&#39;,  # 数据库用户名</span></span>
<span class="line"><span>        &#39;PASSWORD&#39;: &#39;123456&#39;, # 数据库密码</span></span>
<span class="line"><span>        &#39;HOST&#39;: &#39;127.0.0.1&#39;, # 数据库地址，本机 ip 地址 127.0.0.1 </span></span>
<span class="line"><span>        &#39;PORT&#39;: 3306, # 端口 </span></span>
<span class="line"><span>    }  </span></span>
<span class="line"><span>}</span></span></code></pre></div><p>设计用户信息表</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>user</span></span>
<span class="line"><span>-id</span></span>
<span class="line"><span>-uid</span></span>
<span class="line"><span>-nick</span></span>
<span class="line"><span>-gender</span></span>
<span class="line"><span>-local 区域</span></span>
<span class="line"><span>-createdate 创建时间</span></span></code></pre></div><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>//settings.py</span></span>
<span class="line"><span>// INSTALLED_APPS 声明追加一个模型</span></span>
<span class="line"><span>INSTALLED_APPS = [</span></span>
<span class="line"><span>    &#39;django.contrib.admin&#39;,</span></span>
<span class="line"><span>    &#39;django.contrib.auth&#39;,</span></span>
<span class="line"><span>    &#39;django.contrib.contenttypes&#39;,</span></span>
<span class="line"><span>    &#39;django.contrib.sessions&#39;,</span></span>
<span class="line"><span>    &#39;django.contrib.messages&#39;,</span></span>
<span class="line"><span>    &#39;django.contrib.staticfiles&#39;,</span></span>
<span class="line"><span>    &#39;userapp&#39; #追加此项</span></span>
<span class="line"><span>]</span></span>
<span class="line"><span></span></span>
<span class="line"><span>//models.py 声明表</span></span>
<span class="line"><span>class User(models.Model):</span></span>
<span class="line"><span>    uid     =   models.TextField(primary_key=True,unique=True)</span></span>
<span class="line"><span>    nick    =   models.TextField()</span></span>
<span class="line"><span>    sex     =   models.IntegerField()</span></span>
<span class="line"><span>    local   =   models.TextField()</span></span>
<span class="line"><span>    phone   =   models.TextField()</span></span>
<span class="line"><span>    createdate = models.DateTimeField(auto_now=True)</span></span>
<span class="line"><span>    </span></span>
<span class="line"><span>//执行创建模型py命令： python3 manage.py makemigrations userapp </span></span>
<span class="line"><span>//执行迁移到sqlite3命令： python3 manage.py migrate</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>//Django Shell</span></span>
<span class="line"><span>终端输入： django manage.py shell</span></span>
<span class="line"><span>//创建一个用户</span></span>
<span class="line"><span>&gt;&gt;&gt; from userapp.models import User</span></span>
<span class="line"><span>&gt;&gt;&gt; user = User()</span></span>
<span class="line"><span>&gt;&gt;&gt; user.name = &quot;佩奇&quot;</span></span>
<span class="line"><span>&gt;&gt;&gt; user.sex = 0</span></span>
<span class="line"><span>&gt;&gt;&gt; user.local = &quot;英国&quot;</span></span>
<span class="line"><span>&gt;&gt;&gt; user.phone = &quot;1344&quot;</span></span>
<span class="line"><span>&gt;&gt;&gt; user.save()</span></span>
<span class="line"><span>//sql: INSERT INTO userapp_user (uid, nick, sex,local,phone,createdate) VALUES (&#39;000000001&#39;, &#39;佩奇&#39;, 0, &#39;英国,伦敦&#39;,&#39;1333&#39;,date());</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>   # 通过objects这个模型管理器的all()获得所有数据行，相当于SQL中的SELECT * FROM</span></span>
<span class="line"><span>    list = User.objects.all()</span></span>
<span class="line"><span>        </span></span>
<span class="line"><span>    # filter相当于SQL中的WHERE，可设置条件过滤结果</span></span>
<span class="line"><span>    response2 = User.objects.filter(id=1) </span></span>
<span class="line"><span>    </span></span>
<span class="line"><span>    # 获取单个对象</span></span>
<span class="line"><span>    response3 = User.objects.get(id=1) </span></span>
<span class="line"><span>    </span></span>
<span class="line"><span>    # 限制返回的数据 相当于 SQL 中的 OFFSET 0 LIMIT 2;</span></span>
<span class="line"><span>    User.objects.order_by(&#39;name&#39;)[0:2]</span></span>
<span class="line"><span>    </span></span>
<span class="line"><span>    #数据排序</span></span>
<span class="line"><span>    User.objects.order_by(&quot;id&quot;)</span></span>
<span class="line"><span>    User.objects.order_by(&quot;-id&quot;)    </span></span>
<span class="line"><span>    # 上面的方法可以连锁使用</span></span>
<span class="line"><span>    User.objects.filter(name=&quot;佩奇&quot;).order_by(&quot;id&quot;)</span></span>
<span class="line"><span>    </span></span>
<span class="line"><span>    # 修改其中一个id=1的name字段，再save，相当于SQL中的UPDATE</span></span>
<span class="line"><span>    test1 = User.objects.get(id=1)</span></span>
<span class="line"><span>    test1.name = &#39;Google&#39;</span></span>
<span class="line"><span>    test1.save()</span></span>
<span class="line"><span>    </span></span>
<span class="line"><span>    # 另外一种方式</span></span>
<span class="line"><span>    #User.objects.filter(id=1).update(name=&#39;Google&#39;)</span></span>
<span class="line"><span>    </span></span>
<span class="line"><span>    # 修改所有的列</span></span>
<span class="line"><span>    # User.objects.all().update(name=&#39;Google&#39;)</span></span>
<span class="line"><span>    </span></span>
<span class="line"><span>    # 删除id=1的数据</span></span>
<span class="line"><span>    test1 = User.objects.get(id=1)</span></span>
<span class="line"><span>    test1.delete()</span></span>
<span class="line"><span>    </span></span>
<span class="line"><span>    # 另外一种方式</span></span>
<span class="line"><span>    # User.objects.filter(id=1).delete()</span></span>
<span class="line"><span>    </span></span>
<span class="line"><span>    # 删除所有数据</span></span>
<span class="line"><span>    # User.objects.all().delete()</span></span></code></pre></div>`,19),i=[l];function t(c,o,d,r,g,u){return n(),a("div",null,i)}const _=s(e,[["render",t]]);export{m as __pageData,_ as default};
