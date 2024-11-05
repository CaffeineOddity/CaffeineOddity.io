import{j as s,b as n,c as a,aa as p}from"./chunks/framework.Dkh8-idd.js";const g=JSON.parse('{"title":"vue3变量传递","description":"","frontmatter":{"title":"vue3变量传递","date":"2024-04-02 10:13","tags":["Web","Vue"],"categories":["Web"],"hiddenCover":true,"cover":"https://miro.medium.com/v2/resize:fit:500/1*CPDIH8BWrGipHRJ6o6E2Vw.png"},"headers":[],"relativePath":"sop/article/frontend_dev/web/vue3/04.vue3_var_pass.md","filePath":"sop/article/frontend_dev/web/vue3/04.vue3_var_pass.md","lastUpdated":1712454356000}'),e={name:"sop/article/frontend_dev/web/vue3/04.vue3_var_pass.md"},l=p(`<h1 id="vue3变量传递" tabindex="-1">vue3变量传递 <a class="header-anchor" href="#vue3变量传递" aria-label="Permalink to &quot;vue3变量传递&quot;">​</a></h1><p>组件间传递变量的方式</p><h2 id="_1-全局变量" tabindex="-1">1. 全局变量 <a class="header-anchor" href="#_1-全局变量" aria-label="Permalink to &quot;1. 全局变量&quot;">​</a></h2><ul><li>声明一个全局变量</li></ul><div class="language-globle.js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">globle.js</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>// 声明全局变量</span></span>
<span class="line"><span>export const document_refs = [];</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 声明全局函数</span></span>
<span class="line"><span>export function add_document(doc) {</span></span>
<span class="line"><span></span></span>
<span class="line"><span>}</span></span></code></pre></div><ul><li>引入全局变量</li></ul><div class="language-main.js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">main.js</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>// 头文件引入</span></span>
<span class="line"><span>import {document_refs} from &#39;./globalVar.js&#39;</span></span>
<span class="line"><span>// 使用globalProperties注入全局变量</span></span>
<span class="line"><span>const app = createApp(App)</span></span>
<span class="line"><span>app.config.globalProperties.$document_refs = document_refs;</span></span>
<span class="line"><span>app.mount(&#39;#app&#39;)</span></span></code></pre></div><ul><li>组件内部使用</li></ul><p>声明一个局部变量</p><div class="language-xxx.vue vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">xxx.vue</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>&lt;script&gt;</span></span>
<span class="line"><span>export default {</span></span>
<span class="line"><span>  name: &#39;XXX&#39;,</span></span>
<span class="line"><span>  components: {</span></span>
<span class="line"><span>  }, </span></span>
<span class="line"><span>  data() {</span></span>
<span class="line"><span>    return {</span></span>
<span class="line"><span>      local_refs: null,</span></span>
<span class="line"><span>  };</span></span>
<span class="line"><span>},</span></span>
<span class="line"><span>created() {</span></span>
<span class="line"><span>    // 将全局变量赋值给局部数据</span></span>
<span class="line"><span>    this.local_refs = this.$document_refs;</span></span>
<span class="line"><span>  },</span></span>
<span class="line"><span>methods: {</span></span>
<span class="line"><span>  deleteLink(index, linkIndex) {</span></span>
<span class="line"><span>    if (this.local_refs[index].links.length &gt; 0){</span></span>
<span class="line"><span>      this.local_refs[index].links.splice(linkIndex,1)</span></span>
<span class="line"><span>        if (this.local_refs[index].links.length === 0){</span></span>
<span class="line"><span>          this.local_refs.splice(index,1)</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>      }</span></span>
<span class="line"><span>      // console.log(&quot;deleteLink: &quot;+index+&quot; &quot;+linkIndex, this.$document_refs);</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>},</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>&lt;/script&gt;</span></span></code></pre></div><h2 id="_2-父子组件通信" tabindex="-1">2. 父子组件通信 <a class="header-anchor" href="#_2-父子组件通信" aria-label="Permalink to &quot;2. 父子组件通信&quot;">​</a></h2><p>常用的组件通讯方式，一般是使用父子组件通讯方式。可以使用vue3的pros和emit进行通信。</p><h3 id="父组件向子组件传递数据" tabindex="-1">父组件向子组件传递数据 <a class="header-anchor" href="#父组件向子组件传递数据" aria-label="Permalink to &quot;父组件向子组件传递数据&quot;">​</a></h3><p>如果子组件只需要监听父组件传递过来的数据，不需要修改并反馈回给父组件。那么可以使用props进行传递。</p><p><code>2.1 父组件声明一个变量，然后传递给子组件</code></p><div class="language-parent.vue vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">parent.vue</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>&lt;template&gt;</span></span>
<span class="line"><span>  &lt;div&gt;</span></span>
<span class="line"><span>  &lt;!-- 声明一个传递参数名，比如：pass_name 用&#39;:pass_name&#39; 表示。 然后传递父组件的变量引用--&gt;</span></span>
<span class="line"><span>    &lt;ChildComponent :pass_name=&quot;parent_var&quot;&gt;&lt;/MainBody&gt;</span></span>
<span class="line"><span>  &lt;/div&gt;</span></span>
<span class="line"><span>&lt;/template&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;script&gt;</span></span>
<span class="line"><span>export default {</span></span>
<span class="line"><span>  name: &#39;App&#39;,</span></span>
<span class="line"><span>  components: {</span></span>
<span class="line"><span>    ChildComponent,</span></span>
<span class="line"><span>  },</span></span>
<span class="line"><span>  data() {</span></span>
<span class="line"><span>    return {</span></span>
<span class="line"><span>      parent_var: [],  // 父组件传递给子组件的数据</span></span>
<span class="line"><span>    };</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>&lt;/script&gt;</span></span></code></pre></div><p><code>2.2 子组件接收父组件传递过来的数据</code></p><div class="language-ChildComponent.vue vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ChildComponent.vue</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>&lt;template&gt;</span></span>
<span class="line"><span>  &lt;div&gt;</span></span>
<span class="line"><span>      &lt;div v-show=&quot;pass_name.length !== 0&quot;&gt;父组件的决定我要不要显示 &lt;/div&gt;</span></span>
<span class="line"><span>  &lt;/div&gt;</span></span>
<span class="line"><span>&lt;/template&gt;</span></span>
<span class="line"><span>&lt;script&gt;</span></span>
<span class="line"><span>export default {</span></span>
<span class="line"><span>    pros: {  // 用pros 表面这些属性是父组件传递过来的。</span></span>
<span class="line"><span>        pass_name: Array,  // 表面父组件有一个属性叫做pass_name,类型是数组</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>&lt;/script&gt;</span></span></code></pre></div><h3 id="子组件接收父组件传递的数据-并修改后反馈给父组件" tabindex="-1">子组件接收父组件传递的数据，并修改后反馈给父组件 <a class="header-anchor" href="#子组件接收父组件传递的数据-并修改后反馈给父组件" aria-label="Permalink to &quot;子组件接收父组件传递的数据，并修改后反馈给父组件&quot;">​</a></h3><p>如果我们除了使用父组件传递过来的数据，还需要修改后反馈给父组件。那么可以使用emit进行通信。</p><p>前面我们已经实现了父组件向子组件传递数据，但由于props是单向传递的，并不支持子组件修改后反馈给父组件。所以我们需要使用emit进行通信。</p><p>首先、我们还是需要实现<code>2.1</code>和<code>2.2</code>的传递方式。接下来，我们实现子组件更新父组件数据的方式：</p><p><code>2.3 声明一个更新方法，用于接受通知，并更新父组件的数据</code></p><div class="language-paent.vue vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">paent.vue</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>//声明一个更新方法：</span></span>
<span class="line"><span>&lt;script&gt;</span></span>
<span class="line"><span>export default {</span></span>
<span class="line"><span>  name: &#39;App&#39;,</span></span>
<span class="line"><span>  components: {</span></span>
<span class="line"><span>    ChildComponent,</span></span>
<span class="line"><span>  },</span></span>
<span class="line"><span>  data() {</span></span>
<span class="line"><span>    return {</span></span>
<span class="line"><span>      parent_var: [],  // 父组件传递给子组件的数据</span></span>
<span class="line"><span>    };</span></span>
<span class="line"><span>  },</span></span>
<span class="line"><span>  methods: {</span></span>
<span class="line"><span>    update_parent_var(new_data) {</span></span>
<span class="line"><span>        this.parent_var = new_data;</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>&lt;/script&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 给子组件绑定一个事件，用于接收子组件传递过来的数据</span></span>
<span class="line"><span>// update_var是子组件抛出通知的名称，update_parent_var 表示接收到这个通知后，执行的方法名</span></span>
<span class="line"><span>&lt;template&gt;</span></span>
<span class="line"><span>  &lt;div&gt;</span></span>
<span class="line"><span>  &lt;!-- 声明一个传递参数名，比如：pass_name 用&#39;:pass_name&#39; 表示。 然后传递父组件的变量引用--&gt;</span></span>
<span class="line"><span>    &lt;ChildComponent :pass_name=&quot;parent_var&quot; @update_var=&quot;update_parent_var&quot;&gt;&lt;/MainBody&gt;</span></span>
<span class="line"><span>  &lt;/div&gt;</span></span>
<span class="line"><span>&lt;/template&gt;</span></span></code></pre></div><p><code>2.4 子组件更新数据，并抛出通知给父组件</code></p><p>前面说了子组件对于prop是只读左右，所以我们想更新值。需要本地创建一个变量副本，更新完成后在抛出通知给父组件</p><div class="language-ChildComponent.vue vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ChildComponent.vue</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>// 声明一个变量副本，并且引用prop对象</span></span>
<span class="line"><span>// 声明一个更新副本的方法，在收到操作后更新副本.</span></span>
<span class="line"><span>// 同时抛出update_var通知,这个通知携带一个更新值：this.local_pass_name</span></span>
<span class="line"><span>export default {</span></span>
<span class="line"><span>    pros: {  // 用pros 表面这些属性是父组件传递过来的。</span></span>
<span class="line"><span>        pass_name: Array,  // 表面父组件有一个属性叫做pass_name,类型是数组</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    data() {</span></span>
<span class="line"><span>        return {</span></span>
<span class="line"><span>        local_pass_name:this.pass_name,</span></span>
<span class="line"><span>        };</span></span>
<span class="line"><span>    },</span></span>
<span class="line"><span>    methods: {</span></span>
<span class="line"><span>        deleteLink(index) {</span></span>
<span class="line"><span>            // console.log(index, linkIndex)</span></span>
<span class="line"><span>            this.local_pass_name.splice(index,1)</span></span>
<span class="line"><span>            // 触发事件，将更新后的数据传递给父组件</span></span>
<span class="line"><span>            this.$emit(&#39;update_var&#39;, this.local_pass_name);</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>},</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>&lt;/script&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 执行更新操作</span></span>
<span class="line"><span>&lt;template&gt;</span></span>
<span class="line"><span>  &lt;div&gt;</span></span>
<span class="line"><span>      &lt;div v-show=&quot;pass_name.length !== 0&quot;&gt;父组件的决定我要不要显示 &lt;/div&gt;</span></span>
<span class="line"><span>      &lt;button @click=&quot;deleteLink(1)&quot;&gt;删除&lt;/button&gt;</span></span>
<span class="line"><span>  &lt;/div&gt;</span></span>
<span class="line"><span>&lt;/template&gt;</span></span></code></pre></div>`,27),t=[l];function i(c,o,d,r,u,h){return n(),a("div",null,t)}const _=s(e,[["render",i]]);export{g as __pageData,_ as default};
