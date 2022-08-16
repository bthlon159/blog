const e=JSON.parse('{"key":"v-0bf728d5","path":"/reading-notes/%E5%AE%9E%E6%88%98Java%E8%99%9A%E6%8B%9F%E6%9C%BA%EF%BC%9AJVM%E6%95%85%E9%9A%9C%E8%AF%8A%E6%96%AD%E4%B8%8E%E6%80%A7%E8%83%BD%E4%BC%98%E5%8C%96/%E7%AC%AC4%E7%AB%A0%E5%9E%83%E5%9C%BE%E5%9B%9E%E6%94%B6%E7%9A%84%E6%A6%82%E5%BF%B5%E4%B8%8E%E7%AE%97%E6%B3%95.html","title":"\u7B2C 4 \u7AE0 \u5783\u573E\u56DE\u6536\u7684\u6982\u5FF5\u4E0E\u7B97\u6CD5","lang":"zh-CN","frontmatter":{"summary":"\u7B2C 4 \u7AE0 \u5783\u573E\u56DE\u6536\u7684\u6982\u5FF5\u4E0E\u7B97\u6CD5 \u5783\u573E\u56DE\u6536\u662F Java \u4F53\u7CFB\u6700\u91CD\u8981\u7684\u7EC4\u6210\u90E8\u5206\u4E4B\u4E00\u3002\u548C C / C++ \u7684\u624B\u5DE5\u5185\u5B58\u7BA1\u7406\u65B9\u5F0F\u4E0D\u540C\uFF0CJava \u865A\u62DF\u673A\u63D0\u4F9B\u4E86\u4E00\u5957\u5168\u81EA\u52A8\u7684\u5185\u5B58\u7BA1\u7406\u65B9\u6848\uFF0C\u5C3D\u53EF\u80FD\u5730\u51CF\u5C11\u5F00\u53D1\u4EBA\u5458\u5728\u5185\u5B58\u8D44\u6E90\u7BA1\u7406\u65B9\u9762\u7684\u5DE5\u4F5C\u91CF\u3002\u8981\u638C\u63E1\u8FD9\u5957\u5185\u5B58\u7BA1\u7406\u65B9\u6848\uFF0C\u5C31\u5FC5\u987B\u7406\u89E3\u5783\u573E\u56DE\u6536\u5668\u7684\u5DE5\u4F5C\u539F\u7406\u3002\u672C\u7AE0\u5C31\u6765\u4ECB\u7ECD\u5783\u573E\u56DE\u6536\u5668\u7684\u57FA\u672C\u7B97\u6CD5\u548C\u5DE5\u4F5C\u65B9\u5F0F\u3002 \u672C\u7AE0\u6D89\u53CA\u7684\u4E3B\u8981\u77E5\u8BC6\u70B9\u6709\uFF1A \u4E86\u89E3\u4EC0\u4E48\u662F","head":[["meta",{"property":"og:url","content":"https://www.cxlsn.cn/reading-notes/%E5%AE%9E%E6%88%98Java%E8%99%9A%E6%8B%9F%E6%9C%BA%EF%BC%9AJVM%E6%95%85%E9%9A%9C%E8%AF%8A%E6%96%AD%E4%B8%8E%E6%80%A7%E8%83%BD%E4%BC%98%E5%8C%96/%E7%AC%AC4%E7%AB%A0%E5%9E%83%E5%9C%BE%E5%9B%9E%E6%94%B6%E7%9A%84%E6%A6%82%E5%BF%B5%E4%B8%8E%E7%AE%97%E6%B3%95.html"}],["meta",{"property":"og:site_name","content":"MyBlog"}],["meta",{"property":"og:title","content":"\u7B2C 4 \u7AE0 \u5783\u573E\u56DE\u6536\u7684\u6982\u5FF5\u4E0E\u7B97\u6CD5"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://www.cxlsn.cn/"}],["meta",{"property":"og:updated_time","content":"2022-08-06T09:11:40.000Z"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"name":"twitter:card","content":"summary_large_image"}],["meta",{"name":"twitter:image:alt","content":"\u7B2C 4 \u7AE0 \u5783\u573E\u56DE\u6536\u7684\u6982\u5FF5\u4E0E\u7B97\u6CD5"}],["meta",{"property":"article:modified_time","content":"2022-08-06T09:11:40.000Z"}]]},"excerpt":"","headers":[{"level":2,"title":"4.1 \u5185\u5B58\u7BA1\u7406\u6E05\u6D01\u5DE5\uFF1A\u8BA4\u8BC6\u5783\u573E\u56DE\u6536","slug":"_4-1-\u5185\u5B58\u7BA1\u7406\u6E05\u6D01\u5DE5-\u8BA4\u8BC6\u5783\u573E\u56DE\u6536","children":[]},{"level":2,"title":"4.2 \u6E05\u6D01\u5DE5\u5177\u5927 PK\uFF1A\u8BA8\u8BBA\u5E38\u7528\u7684\u5783\u573E\u56DE\u6536\u7B97\u6CD5","slug":"_4-2-\u6E05\u6D01\u5DE5\u5177\u5927-pk-\u8BA8\u8BBA\u5E38\u7528\u7684\u5783\u573E\u56DE\u6536\u7B97\u6CD5","children":[{"level":3,"title":"4.2.1 \u5F15\u7528\u8BA1\u6570\u6CD5\uFF08Reference Counting\uFF09","slug":"_4-2-1-\u5F15\u7528\u8BA1\u6570\u6CD5-reference-counting","children":[]},{"level":3,"title":"4.2.2 \u6807\u8BB0\u6E05\u9664\u6CD5\uFF08Mark-Sweep\uFF09","slug":"_4-2-2-\u6807\u8BB0\u6E05\u9664\u6CD5-mark-sweep","children":[]},{"level":3,"title":"4.2.3 \u590D\u5236\u7B97\u6CD5\uFF08Copying\uFF09","slug":"_4-2-3-\u590D\u5236\u7B97\u6CD5-copying","children":[]},{"level":3,"title":"4.2.4 \u6807\u8BB0\u538B\u7F29\u6CD5\uFF08Mark-Compact\uFF09","slug":"_4-2-4-\u6807\u8BB0\u538B\u7F29\u6CD5-mark-compact","children":[]},{"level":3,"title":"4.2.5 \u5206\u4EE3\u7B97\u6CD5\uFF08Generational Collecting\uFF09","slug":"_4-2-5-\u5206\u4EE3\u7B97\u6CD5-generational-collecting","children":[]},{"level":3,"title":"4.2.6 \u5206\u533A\u7B97\u6CD5\uFF08Region\uFF09","slug":"_4-2-6-\u5206\u533A\u7B97\u6CD5-region","children":[]}]},{"level":2,"title":"4.3 \u8C01\u624D\u662F\u771F\u6B63\u7684\u5783\u573E\uFF1A\u5224\u65AD\u53EF\u89E6\u53CA\u6027","slug":"_4-3-\u8C01\u624D\u662F\u771F\u6B63\u7684\u5783\u573E-\u5224\u65AD\u53EF\u89E6\u53CA\u6027","children":[{"level":3,"title":"4.3.1 \u5BF9\u8C61\u7684\u590D\u6D3B","slug":"_4-3-1-\u5BF9\u8C61\u7684\u590D\u6D3B","children":[]},{"level":3,"title":"4.3.2 \u5F15\u7528\u548C\u53EF\u89E6\u53CA\u6027\u7684\u5F3A\u5EA6","slug":"_4-3-2-\u5F15\u7528\u548C\u53EF\u89E6\u53CA\u6027\u7684\u5F3A\u5EA6","children":[]},{"level":3,"title":"4.3.3 \u8F6F\u5F15\u7528\u2014\u2014\u53EF\u88AB\u56DE\u6536\u7684\u5F15\u7528","slug":"_4-3-3-\u8F6F\u5F15\u7528\u2014\u2014\u53EF\u88AB\u56DE\u6536\u7684\u5F15\u7528","children":[]},{"level":3,"title":"4.3.4 \u5F31\u5F15\u7528\u2014\u2014\u53D1\u73B0\u5373\u56DE\u6536","slug":"_4-3-4-\u5F31\u5F15\u7528\u2014\u2014\u53D1\u73B0\u5373\u56DE\u6536","children":[]},{"level":3,"title":"4.3.5 \u865A\u5F15\u7528\u2014\u2014\u5BF9\u8C61\u56DE\u6536\u8DDF\u8E2A","slug":"_4-3-5-\u865A\u5F15\u7528\u2014\u2014\u5BF9\u8C61\u56DE\u6536\u8DDF\u8E2A","children":[]}]},{"level":2,"title":"4.4 \u5783\u573E\u56DE\u6536\u65F6\u7684\u505C\u987F\u73B0\u8C61\uFF1AStop-The-World \u6848\u4F8B\u5B9E\u6218","slug":"_4-4-\u5783\u573E\u56DE\u6536\u65F6\u7684\u505C\u987F\u73B0\u8C61-stop-the-world-\u6848\u4F8B\u5B9E\u6218","children":[]},{"level":2,"title":"4.5 \u5C0F\u7ED3","slug":"_4-5-\u5C0F\u7ED3","children":[]}],"git":{"createdTime":1659171106000,"updatedTime":1659777100000,"contributors":[{"name":"\u963F\u6960sneaker","email":"cl55563@163.com","commits":2}]},"readingTime":{"minutes":30.3,"words":9091},"filePathRelative":"reading-notes/\u5B9E\u6218Java\u865A\u62DF\u673A\uFF1AJVM\u6545\u969C\u8BCA\u65AD\u4E0E\u6027\u80FD\u4F18\u5316/\u7B2C4\u7AE0\u5783\u573E\u56DE\u6536\u7684\u6982\u5FF5\u4E0E\u7B97\u6CD5.md","localizedDate":"2022\u5E747\u670830\u65E5"}');export{e as data};
