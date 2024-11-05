import{j as a,b as s,c as n,aa as o}from"./chunks/framework.Dkh8-idd.js";const q=JSON.parse('{"title":"01. go环境安装部署","description":"","frontmatter":{"title":"01. go环境安装部署","date":"2024-03-15T10:00:31.000Z","tags":["后端","go"],"categories":["后端"],"cover":"https://miro.medium.com/v2/resize:fit:1400/0*SoqCeEz9EctJBXKw.png","hiddenCover":true},"headers":[],"relativePath":"sop/article/backend_dev/go/01.go.md","filePath":"sop/article/backend_dev/go/01.go.md","lastUpdated":1710785203000}'),p={name:"sop/article/backend_dev/go/01.go.md"},e=o(`<h1 id="go环境安装部署" tabindex="-1">go环境安装部署 <a class="header-anchor" href="#go环境安装部署" aria-label="Permalink to &quot;go环境安装部署&quot;">​</a></h1><h2 id="一、linux系统安装golang环境" tabindex="-1">一、linux系统安装golang环境 <a class="header-anchor" href="#一、linux系统安装golang环境" aria-label="Permalink to &quot;一、linux系统安装golang环境&quot;">​</a></h2><p>具体下载链接见：<a href="https://golang.org/dl/" target="_blank" rel="noreferrer">点这里</a> 具体安装链接见：<a href="https://golang.org/doc/install" target="_blank" rel="noreferrer">点这里</a></p><p>步骤1：下载对应系统版本 我的服务器是云服务器cenos系统,所以选择了linux版本 go1.17.3.linux-amd64.tar.gz</p><p>步骤2：使用fileZilla将压缩包上传到云端 /usr/local/ 目录下</p><p>步骤3：执行安装go版 rm -rf /usr/local/go &amp;&amp; tar -C /usr/local -xzf /usr/local/downloads/go1.17.3.linux-amd64.tar.gz</p><p>步骤4：配置go目录环境 export PATH=$PATH:/usr/local/go/bin</p><p>步骤5：验证安装是否成功 go version //输出 go version go1.17.3 linux/amd64 具体环境说明：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>$ go env        //执行 go env 指令，将输出当前 Go 开发包的环境变量状态。</span></span>
<span class="line"><span>GOARCH=&quot;amd64&quot;  //GOARCH 表示目标处理器架构</span></span>
<span class="line"><span>GOBIN=&quot;&quot;        //GOBIN 表示编译器和链接器的安装位置</span></span>
<span class="line"><span>GOEXE=&quot;&quot;</span></span>
<span class="line"><span>GOHOSTARCH=&quot;amd64&quot;</span></span>
<span class="line"><span>GOHOSTOS=&quot;linux&quot; </span></span>
<span class="line"><span>GOOS=&quot;linux&quot;   //GOOS 表示目标操作系统</span></span>
<span class="line"><span>GOPATH=&quot;/home/davy/go&quot;   //GOPATH 表示当前工作目录</span></span>
<span class="line"><span>GORACE=&quot;&quot;</span></span>
<span class="line"><span>GOROOT=&quot;/usr/local/go&quot;   //GOROOT 表示 Go 开发包的安装目录</span></span>
<span class="line"><span>GOTOOLDIR=&quot;/usr/local/go/pkg/tool/linux_amd64&quot;</span></span>
<span class="line"><span>GCCGO=&quot;gccgo&quot;</span></span>
<span class="line"><span>CC=&quot;gcc&quot;</span></span>
<span class="line"><span>GOGCCFLAGS=&quot;-fPIC -m64 -pthread -fmessage-length=0&quot;</span></span>
<span class="line"><span>CXX=&quot;g++&quot;</span></span>
<span class="line"><span>CGO_ENABLED=&quot;1&quot;</span></span>
<span class="line"><span>CGO_CFLAGS=&quot;-g -O2&quot;</span></span>
<span class="line"><span>CGO_CPPFLAGS=&quot;&quot;</span></span>
<span class="line"><span>CGO_CXXFLAGS=&quot;-g -O2&quot;</span></span>
<span class="line"><span>CGO_FFLAGS=&quot;-g -O2&quot;</span></span>
<span class="line"><span>CGO_LDFLAGS=&quot;-g -O2&quot;</span></span>
<span class="line"><span>PKG_CONFIG=&quot;pkg-config&quot;</span></span></code></pre></div><h2 id="二、mac下安装golang环境" tabindex="-1">二、mac下安装golang环境 <a class="header-anchor" href="#二、mac下安装golang环境" aria-label="Permalink to &quot;二、mac下安装golang环境&quot;">​</a></h2><p>由于本地笔记本开发是macbookpro, 验证问题需要在本地。所以本地同样配置一套golang环境</p><p>步骤1：下载同上，选择mac版本</p><p>步骤2：下载完成，点击运行安装pkg</p><p>步骤3：执行命令</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>go version</span></span></code></pre></div><p>步骤4：设置go环境配置。执行 vim ~/.bash_profile，设置一下路径后 wq!。 然后执行 source ~/.bash_profile。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>#gopath</span></span>
<span class="line"><span>//go根目录</span></span>
<span class="line"><span>GOPATH=&quot;/Users/yy.inc/go&quot;</span></span>
<span class="line"><span>GOROOT=&quot;/usr/local/Cellar/go/1.17.2/libexec&quot;</span></span>
<span class="line"><span>//放置二进制产物的路径，正常在GOPATH路径bin目录下</span></span>
<span class="line"><span>export GOBIN=&quot;&quot;</span></span>
<span class="line"><span>//表示编译器和链接器的安装位置</span></span>
<span class="line"><span>export PATH=\${PATH}:$GOPATH/bin</span></span></code></pre></div><h3 id="三、安装golang开发工具vscode" tabindex="-1">三、安装golang开发工具VSCode <a class="header-anchor" href="#三、安装golang开发工具vscode" aria-label="Permalink to &quot;三、安装golang开发工具VSCode&quot;">​</a></h3><pre><code>    工欲善其事必先利其器，安装go开发IDE。由于平常还会兼顾开发python, 考虑到后续的拓展性，所以选择了VSCode。
</code></pre><p>步骤1： <a href="https://code.visualstudio.com/download" target="_blank" rel="noreferrer">下载VSCode</a> ，选择mac版本</p><p>步骤2： 下载下来后，移动到应用程序运行。</p><p>步骤3：打开VSCode, <a href="https://code.visualstudio.com/docs/languages/go" target="_blank" rel="noreferrer">设置golang环境</a>.</p><p>code/preferences/extensions，在输入框输入： @id:golang.go，点击install。</p><p>另外为了方便国人开发，推荐安装vscode汉化拓展“chinese”。</p><p>报错：The &quot;gopls&quot; command is not available. Run &quot;go get -v golang.org/x/tools/gopls&quot; to install.</p><p>解决办法，执行命令：go get -v golang.org/x/tools/gopls</p><h2 id="四、创建第一个程序" tabindex="-1">四、创建第一个程序 <a class="header-anchor" href="#四、创建第一个程序" aria-label="Permalink to &quot;四、创建第一个程序&quot;">​</a></h2><ol><li><p>vscode 创建一个空目录： mkdir class.go.com</p></li><li><p>执行命令，创建go.mod : go mod init class.go.com</p></li><li><p>文件目录下创建一个main.go</p></li></ol><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>package main</span></span>
<span class="line"><span>import &quot;fmt&quot;</span></span>
<span class="line"><span>func main() {</span></span>
<span class="line"><span>    fmt.Println(&quot;hello world&quot;)</span></span>
<span class="line"><span>}</span></span></code></pre></div><ol start="4"><li><p>终端到当前目录，执行 go build 生成可执行文件 class.go.com</p></li><li><p>运行可执行文件 ./class.go.com</p></li></ol>`,30),l=[e];function t(i,c,g,r,u,d){return s(),n("div",null,l)}const m=a(p,[["render",t]]);export{q as __pageData,m as default};
