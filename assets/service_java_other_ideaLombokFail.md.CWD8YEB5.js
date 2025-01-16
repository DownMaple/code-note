import{_ as a,c as s,o as n,a4 as i}from"./chunks/framework.CzSkej0V.js";const m=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"service/java/other/ideaLombokFail.md","filePath":"service/java/other/ideaLombokFail.md","lastUpdated":1737019181000}'),e={name:"service/java/other/ideaLombokFail.md"},l=i(`<p>祖传开篇：没错，Idea 的问题。作者水平有限，可能比较简陋，也或许有些错误，欢迎指正。</p><h2 id="问题" tabindex="-1">问题 <a class="header-anchor" href="#问题" aria-label="Permalink to &quot;问题&quot;">​</a></h2><p>问题场景就是在 实体中，使用 @Data 注解</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>package com.file.uploadfilejava.file;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>import lombok.Data;</span></span>
<span class="line"><span>import org.springframework.web.multipart.MultipartFile;</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>@Data</span></span>
<span class="line"><span>public class UploadChunkDAO {</span></span>
<span class="line"><span>    private String fileName;</span></span>
<span class="line"><span>    private int chunkIndex;</span></span>
<span class="line"><span>    private String chunkHash;</span></span>
<span class="line"><span>    private String fileHash;</span></span>
<span class="line"><span>    private MultipartFile file;</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>在代码中能够正常使用，且会有代码提示，启动或者构建项目时会报错，如下：</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">java:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> 找不到符号</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">D:·········省略·············filelfileController.iava:12:42</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">符号:方法</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> getFileName</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">()</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">位置:类型为com.file.uploadfilejava.file.UploadchunkDA0的变量</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> uploadchunkData</span></span></code></pre></div><p>提示找不到！为啥？我代码提示都出来了，你给我说没有？！</p><h2 id="解决方法" tabindex="-1">解决方法 <a class="header-anchor" href="#解决方法" aria-label="Permalink to &quot;解决方法&quot;">​</a></h2><h3 id="第一步" tabindex="-1">第一步 <a class="header-anchor" href="#第一步" aria-label="Permalink to &quot;第一步&quot;">​</a></h3><p>打开idea设置：</p><ol><li>设置</li><li>构建、执行、部署</li><li>编译器</li><li>注解处理器</li><li>在这里 勾选 <code>启用注解处理</code></li><li>然后选择 <code>从项目路径获取处理器</code></li><li>点击应用，然后确定</li></ol><h3 id="第二部" tabindex="-1">第二部 <a class="header-anchor" href="#第二部" aria-label="Permalink to &quot;第二部&quot;">​</a></h3><p>打开插件，搜索 <code>Lombok</code> 然取消勾选（就是给卸载掉），然后重启 idea， 重新安装 <code>Lombok</code> 插件。</p><h2 id="结尾" tabindex="-1">结尾 <a class="header-anchor" href="#结尾" aria-label="Permalink to &quot;结尾&quot;">​</a></h2><p>我是这样弄好的，可能大家遇到的错误和我的不太一样导致无法解决，那就抱歉无法给您带来帮助了</p>`,15),p=[l];function t(o,c,r,h,d,k){return n(),s("div",null,p)}const b=a(e,[["render",t]]);export{m as __pageData,b as default};
