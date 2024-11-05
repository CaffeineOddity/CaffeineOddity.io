import{j as s,b as a,c as n,aa as p}from"./chunks/framework.Dkh8-idd.js";const h=JSON.parse('{"title":"02.开始认识go","description":"","frontmatter":{"title":"02.开始认识go","date":"2024-03-15T10:00:31.000Z","tags":["后端","go"],"categories":["后端"],"cover":"https://miro.medium.com/v2/resize:fit:1400/0*SoqCeEz9EctJBXKw.png","hiddenCover":true},"headers":[],"relativePath":"sop/article/backend_dev/go/02.开始认识go.md","filePath":"sop/article/backend_dev/go/02.开始认识go.md","lastUpdated":1710785203000}'),l={name:"sop/article/backend_dev/go/02.开始认识go.md"},e=p(`<h1 id="_02-开始认识go" tabindex="-1">02.开始认识go <a class="header-anchor" href="#_02-开始认识go" aria-label="Permalink to &quot;02.开始认识go&quot;">​</a></h1><h2 id="一、一切从main开始" tabindex="-1">一、一切从main开始 <a class="header-anchor" href="#一、一切从main开始" aria-label="Permalink to &quot;一、一切从main开始&quot;">​</a></h2><p>go和大部分编程语言一样，都有一个统一的main函数，表示程序启动入口。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>// 的第一行指明这个文件属于哪个包，如：package main。package main表示一个可独立执行的程序，</span></span>
<span class="line"><span>// 每个 Go 应用程序都包含一个名为 main 的包</span></span>
<span class="line"><span>package main</span></span>
<span class="line"><span></span></span>
<span class="line"><span>/*</span></span>
<span class="line"><span>* 下一行 import &quot;fmt&quot;，告诉 Go 编译器这个程序需要使用 fmt 包（的函数，或其他元素），</span></span>
<span class="line"><span>* fmt 包实现了格式化 IO（输入/输出）的函数</span></span>
<span class="line"><span> */</span></span>
<span class="line"><span>import (</span></span>
<span class="line"><span>    &quot;fmt&quot;</span></span>
<span class="line"><span>)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>/*</span></span>
<span class="line"><span> * func main() 是程序开始执行的函数。 如果有 init() 函数则会先执行该函数</span></span>
<span class="line"><span> * main 函数是每一个可执行程序所必须包含的，一般来说都是在启动后第一个执行的函数</span></span>
<span class="line"><span> */</span></span>
<span class="line"><span>func main() {</span></span>
<span class="line"><span>    /*</span></span>
<span class="line"><span>     *  下一行 fmt.Println(...) 可以将字符串输出到控制台，并在最后自动增加换行字符 \\n。</span></span>
<span class="line"><span>     *  使用 fmt.Print(&quot;hello, world\\n&quot;) 可以得到相同的结果。</span></span>
<span class="line"><span>     *  Print 和 Println 这两个函数也支持使用变量，如：fmt.Println(arr)。如果没有特别指定，它们会以默认的打印格式将变量 arr 输出到控制台</span></span>
<span class="line"><span>     */</span></span>
<span class="line"><span>    fmt.Println(&quot;hello world&quot;)</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>ps: 注释与其他一样</p><p>// 下一行 /<em>...</em>/ 是注释，在程序执行时将被忽略。单行注释是最常见的注释形式，</p><p>// 你可以在任何地方使用以 // 开头的单行注释。</p><p>// 多行注释也叫块注释，均已以 /* 开头，并以 */ 结尾，且不可以嵌套使用，</p><p>// 多行注释一般用于包的文档描述或注释成块的代码片段。</p><h2 id="二、跨文件引用" tabindex="-1">二、跨文件引用 <a class="header-anchor" href="#二、跨文件引用" aria-label="Permalink to &quot;二、跨文件引用&quot;">​</a></h2><p>我们在class.go.com目录下创建目录class1,生成文件vscode.go:</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>// vscode</span></span>
<span class="line"><span>package vscode</span></span>
<span class="line"><span>/*</span></span>
<span class="line"><span> * 当标识符（包括常量、变量、类型、函数名、结构字段等等）以一个大写字母开头，如：Group1</span></span>
<span class="line"><span> * 那么使用这种形式的标识符的对象就可以被外部包的代码所使用（客户端程序需要先导入这个包），这被称为导出（像面向对象语言中的 public）；</span></span>
<span class="line"><span> * 标识符如果以小写字母开头，则对包外是不可见的，但是他们在整个包的内部是可见并且可用的（像面向对象语言中的 protected ）。</span></span>
<span class="line"><span> */</span></span>
<span class="line"><span>func HelloVSCode() string {</span></span>
<span class="line"><span>    return sayhello() + &quot;vscode&quot;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>//string是返回类型，这个方法为protected</span></span>
<span class="line"><span>func sayhello() string {</span></span>
<span class="line"><span>    return &quot;hello &quot;</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>main.go调用方法</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>package main</span></span>
<span class="line"><span>//import我们看到引用了 vscode这个包。路径在class.go.com/class下面</span></span>
<span class="line"><span>import (</span></span>
<span class="line"><span>    &quot;fmt&quot;</span></span>
<span class="line"><span>    vscode &quot;class.go.com/class1&quot;</span></span>
<span class="line"><span>)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>func main() {</span></span>
<span class="line"><span>    fmt.Println(vscode.HelloVSCode())  //输出hello vscode</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>class1目录下生成文件xcode.go</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>// 这里尝试改包名改成非vscode。</span></span>
<span class="line"><span>// 发现会报错,说明同个目录下只能有一个包名</span></span>
<span class="line"><span>package vscode  </span></span>
<span class="line"><span>// 这里可以直接使用sayhello()方法,</span></span>
<span class="line"><span>// 说明内部protected方法，跨文件同个包内也可以使用</span></span>
<span class="line"><span>func HelloXCode() string {</span></span>
<span class="line"><span>    return sayhello() + &quot;Xcode&quot;</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>main.go调用方法</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>package main</span></span>
<span class="line"><span>//import我们看到引用了 vscode这个包。路径在class.go.com/class下面</span></span>
<span class="line"><span>import (</span></span>
<span class="line"><span>    &quot;fmt&quot;</span></span>
<span class="line"><span>    vscode &quot;class.go.com/class1&quot;</span></span>
<span class="line"><span>)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>func main() {</span></span>
<span class="line"><span>    fmt.Println(vscode.HelloXCode())  //输出hello xcode</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>创建另外一个目录class1package,生成文件IDE.go</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>// 这里尝试将包名，改成vscode。</span></span>
<span class="line"><span>// 发现报错,说明不同文件。不能使用已有的包名</span></span>
<span class="line"><span>package IDE</span></span>
<span class="line"><span></span></span>
<span class="line"><span>/*</span></span>
<span class="line"><span> * 这里尝试调用sayHello()方法，发现报错。说明跨文件，不能调用不同包内的protected名方法</span></span>
<span class="line"><span> * 我们创建同一个sayhello()、HelloXCode()方法，没发现报错。说明不同包名，可有相同名字的方法</span></span>
<span class="line"><span> * 声明HelloIDE() public方法,这个方法有一个字符串类型入参IDEName</span></span>
<span class="line"><span> */</span></span>
<span class="line"><span>func HelloIDE(IDEName string) string {</span></span>
<span class="line"><span>    return sayHello() + IDEName</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>func HelloXCode() string {</span></span>
<span class="line"><span>    return sayHello() + &quot;Xcode&quot;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>func sayHello() string {</span></span>
<span class="line"><span>    return &quot;HI &quot;</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>main.go 调用</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>package main</span></span>
<span class="line"><span>import (</span></span>
<span class="line"><span>    &quot;fmt&quot;</span></span>
<span class="line"><span>    vscode &quot;class.go.com/class1&quot;</span></span>
<span class="line"><span>    IDE &quot;class.go.com/class1package&quot;</span></span>
<span class="line"><span>)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>func main() {</span></span>
<span class="line"><span>     fmt.Println(IDE.HelloIDE(&quot;sublime&quot;))</span></span>
<span class="line"><span>    fmt.Println(IDE.HelloIDE(&quot;eclipe&quot;))</span></span>
<span class="line"><span>    fmt.Println(IDE.HelloXCode())</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>这里说明了go 包名的另外几个特点：</p><ol><li>文件名与包名没有直接关系，不一定要将文件名与包名定成同一个。</li><li>文件夹名与包名没有直接关系，并非需要一致。</li><li>同一个文件夹下的文件只能有一个包名，否则编译报错</li><li>跨文件同包名的go文件，可以直接访问其他同包名文件的protected方法</li><li>不同目录下面的go文件，不能声明已有包名。</li><li>不能直接访问其他包内的protected方法，不同包可直接声明相同名字的方法</li><li>引入其他目录下的go文件，通过import packagename packagepath的方式引入，然后通过packagename.MethodName()的形式访问</li></ol><p>我们还知道了方法的声明方式：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>func funcName(param1 int, param2 string ) string{</span></span>
<span class="line"><span>}</span></span></code></pre></div><ol><li>funcName 小写开头表示protected,包外不可访问;</li><li>FuncName 大写开头表示public,包外可访问方法</li><li>() 括号内表示方法入参，声明方式是：参数名1 参数类型1，参数名2 参数类型2</li><li>) 右括符号紧跟方法返回类型。如果不需要返回类型，可不写</li><li>{ 左花括号要和方法名同行，否则会报错</li></ol>`,27),i=[e];function c(t,o,d,r,u,g){return a(),n("div",null,i)}const v=s(l,[["render",c]]);export{h as __pageData,v as default};
