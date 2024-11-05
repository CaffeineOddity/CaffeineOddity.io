import{j as a,b as n,c as s,aa as e,aS as o}from"./chunks/framework.Dkh8-idd.js";const C=JSON.parse('{"title":"Unity中碰撞行为","description":"","frontmatter":{"title":"Unity中碰撞行为","date":"2024-03-17T19:30:31.000Z","tags":["unity"],"cover":"https://s.yimg.com/ny/api/res/1.2/frr7UBkGb2ZttpkNPinS.g--/YXBwaWQ9aGlnaGxhbmRlcjt3PTY0MDtoPTM4NA--/https://s.yimg.com/os/creatr-uploaded-images/2023-09/dc057330-51b1-11ee-9e6f-7e13a99ea9c5","hiddenCover":true},"headers":[],"relativePath":"sop/article/图形与游戏/unity/04. unity.md","filePath":"sop/article/图形与游戏/unity/04. unity.md","lastUpdated":1711582995000}'),l={name:"sop/article/图形与游戏/unity/04. unity.md"},i=e('<h1 id="unity中碰撞行为" tabindex="-1">Unity中碰撞行为 <a class="header-anchor" href="#unity中碰撞行为" aria-label="Permalink to &quot;Unity中碰撞行为&quot;">​</a></h1><p>在unity世界中，可以模拟现实世界的碰撞行为。 通过给GameObject添加Collider碰撞体组建即可。 unity中的Collider有比较多中，这里我们先介绍Box Collider。</p><h2 id="box-collider" tabindex="-1">Box Collider <a class="header-anchor" href="#box-collider" aria-label="Permalink to &quot;Box Collider&quot;">​</a></h2><p>Box Collider（盒碰撞体）是一种用于物体碰撞检测和触发事件的组件。<br> 它是一个简单的几何形状，以立方体的形式包围游戏对象，用于模拟物体的碰撞形状。<br> Box Collider 是 Unity 中常用的碰撞检测组件之一，可以帮助你实现游戏中物体的碰撞、触发和交互功能。</p><p><img src="'+o+`" alt="box_collider"></p><h3 id="如何使用-box-collider" tabindex="-1">如何使用 Box Collider： <a class="header-anchor" href="#如何使用-box-collider" aria-label="Permalink to &quot;如何使用 Box Collider：&quot;">​</a></h3><ol><li><p><strong>添加 Box Collider：</strong> 将 Box Collider 组件添加到游戏对象上。你可以在 Unity 编辑器中选择游戏对象，然后点击 Add Component -&gt; Physics -&gt; Box Collider，或者通过代码动态添加。</p></li><li><p><strong>调整属性：</strong> 在 Box Collider 组件的属性面板中，你可以调整碰撞体的大小（Size）、中心点（Center）、是否是触发器（Is Trigger）等属性。</p></li><li><p><strong>事件处理：</strong> 你可以通过编写脚本来处理 Box Collider 的碰撞事件或触发事件。例如，你可以实现 OnCollisionEnter、OnTriggerEnter 等方法来响应碰撞或触发事件，并在其中编写相应的逻辑代码。</p></li><li><p><strong>测试和调试：</strong> 在场景中运行游戏，观察 Box Collider 的行为，并根据需要进行调整和优化，确保它能够准确地模拟物体的碰撞和触发行为。</p></li></ol><h3 id="调整碰撞体大小" tabindex="-1">调整碰撞体大小 <a class="header-anchor" href="#调整碰撞体大小" aria-label="Permalink to &quot;调整碰撞体大小&quot;">​</a></h3><p>通过点击Box Collider组件 &gt; Edit Collider 旁边的小按钮即可。<br> 它默认会有一个正方体产生，可以选中正方体六个面上的点进行大小缩放。调整后的正方体就是碰撞体的范围。</p><h3 id="让对象可以穿过碰撞体" tabindex="-1">让对象可以穿过碰撞体 <a class="header-anchor" href="#让对象可以穿过碰撞体" aria-label="Permalink to &quot;让对象可以穿过碰撞体&quot;">​</a></h3><p>对于部分游戏，比如吃金币。我们希望主角可以穿过金币，那么我们可以把碰撞体的<code>is Trigger</code>钩上即可。<br> 钩上后，可以通过脚本的<code>OnCollisionEnter</code>、<code>OnTriggerEnter</code>监听是否进入。</p><h3 id="销毁collider对象" tabindex="-1">销毁Collider对象 <a class="header-anchor" href="#销毁collider对象" aria-label="Permalink to &quot;销毁Collider对象&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>//触发碰撞</span></span>
<span class="line"><span>void OnTriggerEnter(Collider other) {</span></span>
<span class="line"><span>    </span></span>
<span class="line"><span>    if (other.gameObject.CompareTag(&quot;powerup&quot;)){</span></span>
<span class="line"><span>        Destroy(other.gameObject);</span></span>
<span class="line"><span>        hasPower = true;</span></span>
<span class="line"><span>        StartCoroutine(&quot;PowerupCountdownRoutine&quot;);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>IEnumerator PowerupCountdownRoutine () {</span></span>
<span class="line"><span>    yield return new WaitForSeconds(7);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    hasPower = false;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>//触发碰撞后，触发进入</span></span>
<span class="line"><span>private void OnCollisionEnter(Collision other) {</span></span>
<span class="line"><span>    if (other.gameObject.CompareTag(&quot;enemy&quot;) &amp;&amp; hasPower){</span></span>
<span class="line"><span>        //这里方向上other 到player的方法</span></span>
<span class="line"><span>        Vector3 foce_direct =  other.transform.position - transform.position;</span></span>
<span class="line"><span>        Rigidbody rgbody = GetComponent&lt;Rigidbody&gt;();</span></span>
<span class="line"><span>        //给刚体添加推力</span></span>
<span class="line"><span>        rgbody.AddForce(foce_direct * 10.0f,ForceMode.Impulse);</span></span>
<span class="line"><span>        </span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre></div><h3 id="给碰撞对象添加一个反方向的力" tabindex="-1">给碰撞对象添加一个反方向的力 <a class="header-anchor" href="#给碰撞对象添加一个反方向的力" aria-label="Permalink to &quot;给碰撞对象添加一个反方向的力&quot;">​</a></h3><ul><li><code>Vector3 foce_direct = other.transform.position - transform.position;</code></li><li><code>rgbody.AddForce(foce_direct * 10.0f,ForceMode.Impulse);</code></li></ul><h2 id="box-collider-的特点和用途" tabindex="-1">Box Collider 的特点和用途： <a class="header-anchor" href="#box-collider-的特点和用途" aria-label="Permalink to &quot;Box Collider 的特点和用途：&quot;">​</a></h2><ol><li><p><strong>碰撞检测：</strong> Box Collider 可以检测游戏对象之间的碰撞，当两个物体的 Box Collider 重叠时，Unity 将触发碰撞事件，你可以在代码中捕获这些事件并执行相应的操作。</p></li><li><p><strong>物理模拟：</strong> Box Collider 与 Unity 的物理引擎结合使用，可以模拟真实世界中的物体碰撞和反应。当两个物体的 Box Collider 相交时，它们之间会施加物理力，并且可能会发生反弹、摩擦等效果。</p></li><li><p><strong>触发器：</strong> 除了用于物体的实际碰撞检测外，Box Collider 还可以作为触发器使用。你可以将其设置为 Is Trigger，使其不再响应物理碰撞，而是在其他物体进入或退出其区域时触发 OnTrigger 事件。</p></li><li><p><strong>可视化调整：</strong> 在 Unity 编辑器中，你可以直观地调整 Box Collider 的大小、位置和旋转，以确保它与物体的形状和大小相匹配。</p></li></ol>`,17),r=[i];function t(p,d,c,h,u,g){return n(),s("div",null,r)}const b=a(l,[["render",t]]);export{C as __pageData,b as default};
