import{_ as e}from"./plugin-vue_export-helper.21dcd24c.js";import{r as p,o as l,c as o,a as s,b as c,d as n,e as a}from"./app.0d56c066.js";const i={},r={id:"_1-\u4E24\u6570\u4E4B\u548C",tabindex:"-1"},u=s("a",{class:"header-anchor",href:"#_1-\u4E24\u6570\u4E4B\u548C","aria-hidden":"true"},"#",-1),m=n(),d={href:"https://leetcode.cn/problems/two-sum/",target:"_blank",rel:"noopener noreferrer"},k=n("1. \u4E24\u6570\u4E4B\u548C"),h=a(`<h2 id="\u9898\u76EE" tabindex="-1"><a class="header-anchor" href="#\u9898\u76EE" aria-hidden="true">#</a> \u9898\u76EE</h2><div class="notranslate"><p> \u7ED9\u5B9A\u4E00\u4E2A\u6574\u6570\u6570\u7EC4 <code>nums</code>\xA0\u548C\u4E00\u4E2A\u6574\u6570\u76EE\u6807\u503C <code>target</code>\uFF0C\u8BF7\u4F60\u5728\u8BE5\u6570\u7EC4\u4E2D\u627E\u51FA <strong>\u548C\u4E3A\u76EE\u6807\u503C </strong><em><code>target</code></em>\xA0 \u7684\u90A3\xA0<strong>\u4E24\u4E2A</strong>\xA0\u6574\u6570\uFF0C\u5E76\u8FD4\u56DE\u5B83\u4EEC\u7684\u6570\u7EC4\u4E0B\u6807\u3002 </p><p>\u4F60\u53EF\u4EE5\u5047\u8BBE\u6BCF\u79CD\u8F93\u5165\u53EA\u4F1A\u5BF9\u5E94\u4E00\u4E2A\u7B54\u6848\u3002\u4F46\u662F\uFF0C\u6570\u7EC4\u4E2D\u540C\u4E00\u4E2A\u5143\u7D20\u5728\u7B54\u6848\u91CC\u4E0D\u80FD\u91CD\u590D\u51FA\u73B0\u3002</p><p>\u4F60\u53EF\u4EE5\u6309\u4EFB\u610F\u987A\u5E8F\u8FD4\u56DE\u7B54\u6848\u3002</p><p><strong>\u793A\u4F8B 1\uFF1A</strong></p><pre>        <strong>\u8F93\u5165\uFF1A</strong>nums = [2,7,11,15], target = 9
        <strong>\u8F93\u51FA\uFF1A</strong>[0,1]
        <strong>\u89E3\u91CA\uFF1A</strong>\u56E0\u4E3A nums[0] + nums[1] == 9 \uFF0C\u8FD4\u56DE [0, 1] \u3002
    </pre><p><strong>\u793A\u4F8B 2\uFF1A</strong></p><pre>        <strong>\u8F93\u5165\uFF1A</strong>nums = [3,2,4], target = 6
        <strong>\u8F93\u51FA\uFF1A</strong>[1,2]
    </pre><p><strong>\u793A\u4F8B 3\uFF1A</strong></p><pre>        <strong>\u8F93\u5165\uFF1A</strong>nums = [3,3], target = 6
        <strong>\u8F93\u51FA\uFF1A</strong>[0,1]
    </pre><p><strong>\u63D0\u793A\uFF1A</strong></p><ul><li><code>2 &lt;= nums.length &lt;= 10<sup>4</sup></code></li><li><code>-10<sup>9</sup> &lt;= nums[i] &lt;= 10<sup>9</sup></code></li><li><code>-10<sup>9</sup> &lt;= target &lt;= 10<sup>9</sup></code></li><li><strong>\u53EA\u4F1A\u5B58\u5728\u4E00\u4E2A\u6709\u6548\u7B54\u6848</strong></li></ul><p><strong>\u8FDB\u9636\uFF1A</strong>\u4F60\u53EF\u4EE5\u60F3\u51FA\u4E00\u4E2A\u65F6\u95F4\u590D\u6742\u5EA6\u5C0F\u4E8E <code>O(n<sup>2</sup>)</code> \u7684\u7B97\u6CD5\u5417\uFF1F</p></div><h2 id="\u9898\u89E3" tabindex="-1"><a class="header-anchor" href="#\u9898\u89E3" aria-hidden="true">#</a> \u9898\u89E3</h2><h3 id="\u65B9\u6CD5\u4E00-\u66B4\u529B\u679A\u4E3E" tabindex="-1"><a class="header-anchor" href="#\u65B9\u6CD5\u4E00-\u66B4\u529B\u679A\u4E3E" aria-hidden="true">#</a> \u65B9\u6CD5\u4E00\uFF1A\u66B4\u529B\u679A\u4E3E</h3><p><strong>\u601D\u8DEF\u53CA\u7B97\u6CD5</strong></p><p>\u6700\u5BB9\u6613\u60F3\u5230\u7684\u65B9\u6CD5\u662F\u679A\u4E3E\u6570\u7EC4\u4E2D\u7684\u6BCF\u4E00\u4E2A\u6570 <code>x</code>\uFF0C\u5BFB\u627E\u6570\u7EC4\u4E2D\u662F\u5426\u5B58\u5728 <code>target - x</code>\u3002</p><p>\u5F53\u6211\u4EEC\u4F7F\u7528\u904D\u5386\u6574\u4E2A\u6570\u7EC4\u7684\u65B9\u5F0F\u5BFB\u627E <code>target - x</code> \u65F6\uFF0C\u9700\u8981\u6CE8\u610F\u5230\u6BCF\u4E00\u4E2A\u4F4D\u4E8E <code>x</code> \u4E4B\u524D\u7684\u5143\u7D20\u90FD\u5DF2\u7ECF\u548C <code>x</code> \u5339\u914D\u8FC7\uFF0C\u56E0\u6B64\u4E0D\u9700\u8981\u518D\u8FDB\u884C\u5339\u914D\u3002\u800C\u6BCF\u4E00\u4E2A\u5143\u7D20\u4E0D\u80FD\u88AB\u4F7F\u7528\u4E24\u6B21\uFF0C\u6240\u4EE5\u6211\u4EEC\u53EA\u9700\u8981\u5728 <code>x</code> \u540E\u9762\u7684\u5143\u7D20\u4E2D\u5BFB\u627E <code>target - x</code>\u3002</p><p><strong>\u4EE3\u7801</strong></p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">class</span> <span class="token class-name">Solution</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token function">twoSum</span><span class="token punctuation">(</span><span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span> nums<span class="token punctuation">,</span> <span class="token keyword">int</span> target<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">int</span> n <span class="token operator">=</span> nums<span class="token punctuation">.</span>length<span class="token punctuation">;</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> n<span class="token punctuation">;</span> <span class="token operator">++</span>i<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> j <span class="token operator">=</span> i <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">;</span> j <span class="token operator">&lt;</span> n<span class="token punctuation">;</span> <span class="token operator">++</span>j<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token keyword">if</span> <span class="token punctuation">(</span>nums<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">+</span> nums<span class="token punctuation">[</span>j<span class="token punctuation">]</span> <span class="token operator">==</span> target<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                    <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">{</span>i<span class="token punctuation">,</span> j<span class="token punctuation">}</span><span class="token punctuation">;</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token keyword">int</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>\u590D\u6742\u5EA6\u5206\u6790</strong></p>`,10),g=s("ul",null,[s("li",null,[s("p",null,[n("\u65F6\u95F4\u590D\u6742\u5EA6\uFF1A"),s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[s("semantics",null,[s("mrow",null,[s("mi",null,"O"),s("mo",{stretchy:"false"},"("),s("msup",null,[s("mi",null,"N"),s("mn",null,"2")]),s("mo",{stretchy:"false"},")")]),s("annotation",{encoding:"application/x-tex"},"O(N^2)")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"1.0641em","vertical-align":"-0.25em"}}),s("span",{class:"mord mathnormal",style:{"margin-right":"0.02778em"}},"O"),s("span",{class:"mopen"},"("),s("span",{class:"mord"},[s("span",{class:"mord mathnormal",style:{"margin-right":"0.10903em"}},"N"),s("span",{class:"msupsub"},[s("span",{class:"vlist-t"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.8141em"}},[s("span",{style:{top:"-3.063em","margin-right":"0.05em"}},[s("span",{class:"pstrut",style:{height:"2.7em"}}),s("span",{class:"sizing reset-size6 size3 mtight"},[s("span",{class:"mord mtight"},"2")])])])])])])]),s("span",{class:"mclose"},")")])])]),n("\uFF0C\u5176\u4E2D "),s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[s("semantics",null,[s("mrow",null,[s("mi",null,"N")]),s("annotation",{encoding:"application/x-tex"},"N")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.6833em"}}),s("span",{class:"mord mathnormal",style:{"margin-right":"0.10903em"}},"N")])])]),n(" \u662F\u6570\u7EC4\u4E2D\u7684\u5143\u7D20\u6570\u91CF\u3002\u6700\u574F\u60C5\u51B5\u4E0B\u6570\u7EC4\u4E2D\u4EFB\u610F\u4E24\u4E2A\u6570\u90FD\u8981\u88AB\u5339\u914D\u4E00\u6B21\u3002")])]),s("li",null,[s("p",null,[n("\u7A7A\u95F4\u590D\u6742\u5EA6\uFF1A"),s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[s("semantics",null,[s("mrow",null,[s("mi",null,"O"),s("mo",{stretchy:"false"},"("),s("mn",null,"1"),s("mo",{stretchy:"false"},")")]),s("annotation",{encoding:"application/x-tex"},"O(1)")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"1em","vertical-align":"-0.25em"}}),s("span",{class:"mord mathnormal",style:{"margin-right":"0.02778em"}},"O"),s("span",{class:"mopen"},"("),s("span",{class:"mord"},"1"),s("span",{class:"mclose"},")")])])]),n("\u3002")])])],-1),w=s("h3",{id:"\u65B9\u6CD5\u4E8C-\u54C8\u5E0C\u8868",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#\u65B9\u6CD5\u4E8C-\u54C8\u5E0C\u8868","aria-hidden":"true"},"#"),n(" \u65B9\u6CD5\u4E8C\uFF1A\u54C8\u5E0C\u8868")],-1),x=s("p",null,[s("strong",null,"\u601D\u8DEF\u53CA\u7B97\u6CD5")],-1),v=s("p",null,[n("\u6CE8\u610F\u5230\u65B9\u6CD5\u4E00\u7684\u65F6\u95F4\u590D\u6742\u5EA6\u8F83\u9AD8\u7684\u539F\u56E0\u662F\u5BFB\u627E "),s("code",null,"target - x"),n(" \u7684\u65F6\u95F4\u590D\u6742\u5EA6\u8FC7\u9AD8\u3002\u56E0\u6B64\uFF0C\u6211\u4EEC\u9700\u8981\u4E00\u79CD\u66F4\u4F18\u79C0\u7684\u65B9\u6CD5\uFF0C\u80FD\u591F\u5FEB\u901F\u5BFB\u627E\u6570\u7EC4\u4E2D\u662F\u5426\u5B58\u5728\u76EE\u6807\u5143\u7D20\u3002\u5982\u679C\u5B58\u5728\uFF0C\u6211\u4EEC\u9700\u8981\u627E\u51FA\u5B83\u7684\u7D22\u5F15\u3002")],-1),y=s("p",null,[n("\u4F7F\u7528\u54C8\u5E0C\u8868\uFF0C\u53EF\u4EE5\u5C06\u5BFB\u627E "),s("code",null,"target - x"),n(" \u7684\u65F6\u95F4\u590D\u6742\u5EA6\u964D\u4F4E\u5230\u4ECE "),s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[s("semantics",null,[s("mrow",null,[s("mi",null,"O"),s("mo",{stretchy:"false"},"("),s("mi",null,"N"),s("mo",{stretchy:"false"},")")]),s("annotation",{encoding:"application/x-tex"},"O(N)")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"1em","vertical-align":"-0.25em"}}),s("span",{class:"mord mathnormal",style:{"margin-right":"0.02778em"}},"O"),s("span",{class:"mopen"},"("),s("span",{class:"mord mathnormal",style:{"margin-right":"0.10903em"}},"N"),s("span",{class:"mclose"},")")])])]),n(" \u964D\u4F4E\u5230 "),s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[s("semantics",null,[s("mrow",null,[s("mi",null,"O"),s("mo",{stretchy:"false"},"("),s("mn",null,"1"),s("mo",{stretchy:"false"},")")]),s("annotation",{encoding:"application/x-tex"},"O(1)")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"1em","vertical-align":"-0.25em"}}),s("span",{class:"mord mathnormal",style:{"margin-right":"0.02778em"}},"O"),s("span",{class:"mopen"},"("),s("span",{class:"mord"},"1"),s("span",{class:"mclose"},")")])])]),n("\u3002")],-1),b=a(`<p>\u8FD9\u6837\u6211\u4EEC\u521B\u5EFA\u4E00\u4E2A\u54C8\u5E0C\u8868\uFF0C\u5BF9\u4E8E\u6BCF\u4E00\u4E2A <code>x</code>\uFF0C\u6211\u4EEC\u9996\u5148\u67E5\u8BE2\u54C8\u5E0C\u8868\u4E2D\u662F\u5426\u5B58\u5728 <code>target - x</code>\uFF0C\u7136\u540E\u5C06 <code>x</code> \u63D2\u5165\u5230\u54C8\u5E0C\u8868\u4E2D\uFF0C\u5373\u53EF\u4FDD\u8BC1\u4E0D\u4F1A\u8BA9 <code>x</code> \u548C\u81EA\u5DF1\u5339\u914D\u3002</p><p><strong>\u4EE3\u7801</strong></p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">class</span> <span class="token class-name">Solution</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token function">twoSum</span><span class="token punctuation">(</span><span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span> nums<span class="token punctuation">,</span> <span class="token keyword">int</span> target<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">Map</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Integer</span><span class="token punctuation">,</span> <span class="token class-name">Integer</span><span class="token punctuation">&gt;</span></span> hashtable <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">HashMap</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Integer</span><span class="token punctuation">,</span> <span class="token class-name">Integer</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> nums<span class="token punctuation">.</span>length<span class="token punctuation">;</span> <span class="token operator">++</span>i<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>hashtable<span class="token punctuation">.</span><span class="token function">containsKey</span><span class="token punctuation">(</span>target <span class="token operator">-</span> nums<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">{</span>hashtable<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>target <span class="token operator">-</span> nums<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">,</span> i<span class="token punctuation">}</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
            hashtable<span class="token punctuation">.</span><span class="token function">put</span><span class="token punctuation">(</span>nums<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">,</span> i<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token keyword">int</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>\u590D\u6742\u5EA6\u5206\u6790</strong></p>`,4),_=s("ul",null,[s("li",null,[s("p",null,[n("\u65F6\u95F4\u590D\u6742\u5EA6\uFF1A"),s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[s("semantics",null,[s("mrow",null,[s("mi",null,"O"),s("mo",{stretchy:"false"},"("),s("mi",null,"N"),s("mo",{stretchy:"false"},")")]),s("annotation",{encoding:"application/x-tex"},"O(N)")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"1em","vertical-align":"-0.25em"}}),s("span",{class:"mord mathnormal",style:{"margin-right":"0.02778em"}},"O"),s("span",{class:"mopen"},"("),s("span",{class:"mord mathnormal",style:{"margin-right":"0.10903em"}},"N"),s("span",{class:"mclose"},")")])])]),n("\uFF0C\u5176\u4E2D "),s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[s("semantics",null,[s("mrow",null,[s("mi",null,"N")]),s("annotation",{encoding:"application/x-tex"},"N")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.6833em"}}),s("span",{class:"mord mathnormal",style:{"margin-right":"0.10903em"}},"N")])])]),n(" \u662F\u6570\u7EC4\u4E2D\u7684\u5143\u7D20\u6570\u91CF\u3002\u5BF9\u4E8E\u6BCF\u4E00\u4E2A\u5143\u7D20 "),s("code",null,"x"),n("\uFF0C\u6211\u4EEC\u53EF\u4EE5 "),s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[s("semantics",null,[s("mrow",null,[s("mi",null,"O"),s("mo",{stretchy:"false"},"("),s("mn",null,"1"),s("mo",{stretchy:"false"},")")]),s("annotation",{encoding:"application/x-tex"},"O(1)")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"1em","vertical-align":"-0.25em"}}),s("span",{class:"mord mathnormal",style:{"margin-right":"0.02778em"}},"O"),s("span",{class:"mopen"},"("),s("span",{class:"mord"},"1"),s("span",{class:"mclose"},")")])])]),n(" \u5730\u5BFB\u627E "),s("code",null,"target - x"),n("\u3002")])]),s("li",null,[s("p",null,[n("\u7A7A\u95F4\u590D\u6742\u5EA6\uFF1A"),s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[s("semantics",null,[s("mrow",null,[s("mi",null,"O"),s("mo",{stretchy:"false"},"("),s("mi",null,"N"),s("mo",{stretchy:"false"},")")]),s("annotation",{encoding:"application/x-tex"},"O(N)")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"1em","vertical-align":"-0.25em"}}),s("span",{class:"mord mathnormal",style:{"margin-right":"0.02778em"}},"O"),s("span",{class:"mopen"},"("),s("span",{class:"mord mathnormal",style:{"margin-right":"0.10903em"}},"N"),s("span",{class:"mclose"},")")])])]),n("\uFF0C\u5176\u4E2D "),s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[s("semantics",null,[s("mrow",null,[s("mi",null,"N")]),s("annotation",{encoding:"application/x-tex"},"N")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.6833em"}}),s("span",{class:"mord mathnormal",style:{"margin-right":"0.10903em"}},"N")])])]),n(" \u662F\u6570\u7EC4\u4E2D\u7684\u5143\u7D20\u6570\u91CF\u3002\u4E3B\u8981\u4E3A\u54C8\u5E0C\u8868\u7684\u5F00\u9500\u3002")])])],-1);function f(M,N){const t=p("ExternalLinkIcon");return l(),o("div",null,[s("h1",r,[u,m,s("a",d,[k,c(t)])]),h,g,w,x,v,y,b,_])}var j=e(i,[["render",f],["__file","001-two-sum.html.vue"]]);export{j as default};
