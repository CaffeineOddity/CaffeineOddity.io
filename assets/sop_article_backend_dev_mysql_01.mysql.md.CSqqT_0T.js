import{j as s,b as a,c as n,aa as p}from"./chunks/framework.Dkh8-idd.js";const g=JSON.parse('{"title":"centos7安装mysql","description":"","frontmatter":{"title":"centos7安装mysql","date":"2024-03-15T10:00:31.000Z","tags":["后端","mysql"],"categories":["后端"],"cover":"https://www.simplilearn.com/ice9/free_resources_article_thumb/MySQL-Logo.wine.png","hiddenCover":true},"headers":[],"relativePath":"sop/article/backend_dev/mysql/01.mysql.md","filePath":"sop/article/backend_dev/mysql/01.mysql.md","lastUpdated":1710785203000}'),l={name:"sop/article/backend_dev/mysql/01.mysql.md"},e=p(`<h1 id="mysql安装部署" tabindex="-1">mysql安装部署 <a class="header-anchor" href="#mysql安装部署" aria-label="Permalink to &quot;mysql安装部署&quot;">​</a></h1><p>数据库是项目非常关键的一部分，mysql是很多初创公司的首选。</p><h2 id="linux安装mysql" tabindex="-1">linux安装mysql <a class="header-anchor" href="#linux安装mysql" aria-label="Permalink to &quot;linux安装mysql&quot;">​</a></h2><p>通常linux 都是自带mysql的 我们先卸载本地已有mysql:</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>//1. 查看已有mysql信息</span></span>
<span class="line"><span>rpm -qa|grep -i mysql</span></span>
<span class="line"><span>//输出内容如下</span></span>
<span class="line"><span>mysql-community-common-5.7.36-1.el7.x86_64</span></span>
<span class="line"><span>mysql57-community-release-el7-10.noarch</span></span>
<span class="line"><span>mysql-community-libs-5.7.36-1.el7.x86_64</span></span>
<span class="line"><span>mysql-community-server-5.7.36-1.el7.x86_64</span></span>
<span class="line"><span>mysql-community-client-5.7.36-1.el7.x86_64</span></span>
<span class="line"><span></span></span>
<span class="line"><span>//2. 卸载已有选项</span></span>
<span class="line"><span>yum remove mysql-community-release-el7-5.noarch mysql-community-common-5.6.51-2.el7.x86_64 perl-DBD-MySQL-4.023-6.el7.x86_64 mysql-community-libs-5.6.47-2.el7.x86_64</span></span>
<span class="line"><span>yum remove mysql-server</span></span>
<span class="line"><span></span></span>
<span class="line"><span>//3. 删除本地已有缓存文件</span></span>
<span class="line"><span>which mysql</span></span>
<span class="line"><span>rm -rf /var/lib/mysql</span></span>
<span class="line"><span>rm -rf /etc/my.cnf</span></span>
<span class="line"><span></span></span>
<span class="line"><span>//4. 再重复1，确保本地已经没有任何mysql的内容即可</span></span></code></pre></div><p>安装mysql:</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>//安装mysql服务</span></span>
<span class="line"><span>yum -y install mysql-community-server</span></span>
<span class="line"><span></span></span>
<span class="line"><span>//启动mysql</span></span>
<span class="line"><span>systemctl start mysqld.service</span></span>
<span class="line"><span></span></span>
<span class="line"><span>//查看mysql状态，有active的信息即可</span></span>
<span class="line"><span>systemctl status mysqld.service</span></span></code></pre></div><p>安装完后，为mysql root用户重置密码</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>//先找到默认密码</span></span>
<span class="line"><span>grep &quot;password&quot; /var/log/mysqld.log</span></span>
<span class="line"><span></span></span>
<span class="line"><span>//进入mysql，确认后输入上一步grep到的密码，进入编辑模式</span></span>
<span class="line"><span>mysql -u root -p</span></span>
<span class="line"><span>//确定后显示如下</span></span>
<span class="line"><span>mysql&gt;</span></span>
<span class="line"><span>//修改初始密码，规则要求：大写、小写、特殊字符</span></span>
<span class="line"><span>mysql&gt;ALTER USER &#39;root&#39;@&#39;localhost&#39; IDENTIFIED BY &#39;root密码&#39;;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>//查看mysql数据库</span></span>
<span class="line"><span>mysql&gt;show databases;</span></span>
<span class="line"><span>//显示表</span></span>
<span class="line"><span>mysql&gt;use mysql;</span></span>
<span class="line"><span>mysql&gt;show tables;</span></span></code></pre></div><p>mysql-workbench远程链接</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>//先把远程mysql指定为任何ip可以访问</span></span>
<span class="line"><span>mysql&gt; update user set host = &#39;%&#39; where user = &#39;root&#39;;</span></span>
<span class="line"><span>mysql&gt; flush privileges;</span></span>
<span class="line"><span>//mysql-workbench设置你访问的账号、ip、重置后的密码即可</span></span>
<span class="line"><span>//如果无法访问，请定位以下原因：</span></span>
<span class="line"><span>//1. 查看防火墙状态，可以设置为关闭或者允许某个端口访问</span></span>
<span class="line"><span>systemctl status firewalld.service</span></span>
<span class="line"><span>//2. 如果是云服务器，确定是否服务器是否安全组拦截了端口，把3306端口打开即可</span></span></code></pre></div><h2 id="mac-安装mysql" tabindex="-1">mac 安装mysql <a class="header-anchor" href="#mac-安装mysql" aria-label="Permalink to &quot;mac 安装mysql&quot;">​</a></h2><p>要在Mac上本地安装MySQL，您可以使用Homebrew，这是macOS的一个软件包管理器。以下是使用Homebrew安装MySQL的步骤：</p><ol><li><p><strong>安装Homebrew</strong>（如果尚未安装）：</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">/bin/bash</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -c</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;$(</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">curl</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -fsSL</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)&quot;</span></span></code></pre></div></li><li><p><strong>安装MySQL</strong>：</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">brew</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> install</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> mysql</span></span></code></pre></div></li><li><p><strong>启动MySQL服务</strong>：</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">brew</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> services</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> start</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> mysql</span></span></code></pre></div></li></ol><p>这里必须先启动mysql，然后再执行步骤4.它会引导你完成安全性设置。</p><ol start="4"><li><p><strong>安全设置MySQL安装</strong>： 安装MySQL后，建议运行以下命令来保护您的MySQL安装：</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">mysql_secure_installation</span></span></code></pre></div><p>此命令将指导您完成通过设置根密码、删除匿名用户、禁止远程根登录和删除测试数据库来保护MySQL安装的过程。</p></li><li><p><strong>验证MySQL安装</strong>： 您可以通过执行以下命令来验证MySQL是否正在运行：</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">mysqladmin</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -u</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> root</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -p</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> version</span></span></code></pre></div><p>您将被提示输入在安全安装过程中设置的根密码。</p></li></ol><p>完成这些步骤后，您应该已经在Mac上本地安装并运行了MySQL。然后，您可以在项目中使用它，并且在通过pip安装<code>mysql.connector</code>后，您应该能够在Python脚本中导入它，就像前面的回答中提到的那样。</p>`,17),i=[e];function t(c,o,h,r,m,y){return a(),n("div",null,i)}const k=s(l,[["render",t]]);export{g as __pageData,k as default};
