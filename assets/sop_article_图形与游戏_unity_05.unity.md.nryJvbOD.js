import{j as a,b as s,c as n,aa as e,aT as t}from"./chunks/framework.Dkh8-idd.js";const m=JSON.parse('{"title":"给对象增加一个定时消失的效果","description":"","frontmatter":{"title":"给对象增加一个定时消失的效果","date":"2024-03-28T06:57:31.000Z","tags":["unity"],"cover":"https://s.yimg.com/ny/api/res/1.2/frr7UBkGb2ZttpkNPinS.g--/YXBwaWQ9aGlnaGxhbmRlcjt3PTY0MDtoPTM4NA--/https://s.yimg.com/os/creatr-uploaded-images/2023-09/dc057330-51b1-11ee-9e6f-7e13a99ea9c5","hiddenCover":true},"headers":[],"relativePath":"sop/article/图形与游戏/unity/05.unity.md","filePath":"sop/article/图形与游戏/unity/05.unity.md","lastUpdated":1711582995000}'),p={name:"sop/article/图形与游戏/unity/05.unity.md"},i=e('<h1 id="给对象增加一个定时消失的效果" tabindex="-1">给对象增加一个定时消失的效果 <a class="header-anchor" href="#给对象增加一个定时消失的效果" aria-label="Permalink to &quot;给对象增加一个定时消失的效果&quot;">​</a></h1><ul><li><p>假设场景中有一个效果对象,我们默认将它隐藏 <img src="'+t+`" alt="unity power up"></p></li><li><p>将效果对象添加作用到目标对象上</p></li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>    void Update()</span></span>
<span class="line"><span>    {</span></span>
<span class="line"><span>        // Set powerup indicator position to beneath player</span></span>
<span class="line"><span>        powerupIndicator.transform.position = transform.position + new Vector3(0, -0.6f, 0);</span></span>
<span class="line"><span>    }</span></span></code></pre></div><ul><li>当目标对象获得效果的时候，我们将它激活</li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>hasPowerup = true;</span></span>
<span class="line"><span>powerupIndicator.SetActive(true);</span></span></code></pre></div><ul><li>添加一个定时失活方法</li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>IEnumerator PowerupCooldown()</span></span>
<span class="line"><span>{</span></span>
<span class="line"><span>    yield return new WaitForSeconds(powerUpDuration);</span></span>
<span class="line"><span>    hasPowerup = false;</span></span>
<span class="line"><span>    powerupIndicator.SetActive(false);</span></span>
<span class="line"><span>}</span></span></code></pre></div><ul><li>在激活的同时，触发一个是活倒计时</li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>StartCoroutine(&quot;PowerupCooldown&quot;);</span></span></code></pre></div>`,9),o=[i];function l(c,r,d,u,h,g){return s(),n("div",null,o)}const v=a(p,[["render",l]]);export{m as __pageData,v as default};
