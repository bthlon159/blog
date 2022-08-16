const e=JSON.parse('{"key":"v-7699d466","path":"/reading-notes/%E5%AE%9E%E6%88%98Java%E9%AB%98%E5%B9%B6%E5%8F%91%E7%A8%8B%E5%BA%8F%E8%AE%BE%E8%AE%A1/%E7%AC%AC3%E7%AB%A0JDK%E5%B9%B6%E5%8F%91%E5%8C%85.html","title":"\u7B2C 3 \u7AE0 JDK \u5E76\u53D1\u5305","lang":"zh-CN","frontmatter":{"summary":"\u7B2C 3 \u7AE0 JDK \u5E76\u53D1\u5305 \u4E3A\u4E86\u66F4\u597D\u5730\u652F\u6301\u5E76\u53D1\u7A0B\u5E8F\uFF0CJDK \u5185\u90E8\u63D0\u4F9B\u4E86\u5927\u91CF\u5B9E\u7528\u7684 API \u548C\u6846\u67B6\u3002\u672C\u7AE0\u4E3B\u8981\u4ECB\u7ECD\u8FD9\u4E9B JDK \u5185\u90E8\u7684\u529F\u80FD\uFF0C\u5176\u4E3B\u8981\u5206\u4E3A\u4E09\u5927\u90E8\u5206\u3002 \u9996\u5148\uFF0C\u5C06\u4ECB\u7ECD\u6709\u5173\u540C\u6B65\u63A7\u5236\u7684\u5DE5\u5177\uFF0C\u4E4B\u524D\u4ECB\u7ECD\u7684\u5173\u952E\u5B57 synchronized \u5C31\u662F\u4E00\u79CD\u540C\u6B65\u63A7\u5236\u624B\u6BB5\uFF0C\u5728\u8FD9\u91CC\uFF0C\u6211\u4EEC\u5C06\u770B\u5230\u66F4\u52A0\u4E30\u5BCC\u591A\u5F69\u7684\u591A\u7EBF\u7A0B\u63A7\u5236\u65B9\u6CD5\u3002 \u5176\u6B21\uFF0C\u5C06\u8BE6\u7EC6\u4ECB\u7ECD JDK \u4E2D\u5BF9\u7EBF\u7A0B\u6C60\u7684\u652F\u6301\uFF0C\u4F7F\u7528\u7EBF\u7A0B\u6C60","head":[["meta",{"property":"og:url","content":"https://www.cxlsn.cn/reading-notes/%E5%AE%9E%E6%88%98Java%E9%AB%98%E5%B9%B6%E5%8F%91%E7%A8%8B%E5%BA%8F%E8%AE%BE%E8%AE%A1/%E7%AC%AC3%E7%AB%A0JDK%E5%B9%B6%E5%8F%91%E5%8C%85.html"}],["meta",{"property":"og:site_name","content":"MyBlog"}],["meta",{"property":"og:title","content":"\u7B2C 3 \u7AE0 JDK \u5E76\u53D1\u5305"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:updated_time","content":"2022-08-06T09:11:40.000Z"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:modified_time","content":"2022-08-06T09:11:40.000Z"}]]},"excerpt":"","headers":[{"level":2,"title":"3.1 \u591A\u7EBF\u7A0B\u7684\u56E2\u961F\u534F\u4F5C\uFF1A\u540C\u6B65\u63A7\u5236","slug":"_3-1-\u591A\u7EBF\u7A0B\u7684\u56E2\u961F\u534F\u4F5C-\u540C\u6B65\u63A7\u5236","children":[{"level":3,"title":"3.1.1 \u5173\u952E\u5B57 synchronized \u7684\u529F\u80FD\u6269\u5C55\uFF1A\u91CD\u5165\u9501","slug":"_3-1-1-\u5173\u952E\u5B57-synchronized-\u7684\u529F\u80FD\u6269\u5C55-\u91CD\u5165\u9501","children":[]},{"level":3,"title":"3.1.2 \u91CD\u5165\u9501\u7684\u597D\u642D\u6863\uFF1ACondition","slug":"_3-1-2-\u91CD\u5165\u9501\u7684\u597D\u642D\u6863-condition","children":[]},{"level":3,"title":"3.1.3 \u5141\u8BB8\u591A\u4E2A\u7EBF\u7A0B\u540C\u65F6\u8BBF\u95EE\uFF1A\u4FE1\u53F7\u91CF\uFF08Semaphore\uFF09","slug":"_3-1-3-\u5141\u8BB8\u591A\u4E2A\u7EBF\u7A0B\u540C\u65F6\u8BBF\u95EE-\u4FE1\u53F7\u91CF-semaphore","children":[]},{"level":3,"title":"3.1.4 ReadWriteLock \u8BFB\u5199\u9501","slug":"_3-1-4-readwritelock-\u8BFB\u5199\u9501","children":[]},{"level":3,"title":"3.1.5 \u5012\u8BA1\u6570\u5668\uFF1ACountDownLatch","slug":"_3-1-5-\u5012\u8BA1\u6570\u5668-countdownlatch","children":[]},{"level":3,"title":"3.1.6 \u5FAA\u73AF\u6805\u680F\uFF1ACyclicBarrier","slug":"_3-1-6-\u5FAA\u73AF\u6805\u680F-cyclicbarrier","children":[]},{"level":3,"title":"3.1.7 \u7EBF\u7A0B\u963B\u585E\u5DE5\u5177\u7C7B\uFF1ALockSupport","slug":"_3-1-7-\u7EBF\u7A0B\u963B\u585E\u5DE5\u5177\u7C7B-locksupport","children":[]},{"level":3,"title":"3.1.8 Guava \u548C RateLimiter \u9650\u6D41","slug":"_3-1-8-guava-\u548C-ratelimiter-\u9650\u6D41","children":[]}]},{"level":2,"title":"3.2 \u7EBF\u7A0B\u590D\u7528\uFF1A\u7EBF\u7A0B\u6C60","slug":"_3-2-\u7EBF\u7A0B\u590D\u7528-\u7EBF\u7A0B\u6C60","children":[{"level":3,"title":"3.2.1 \u4EC0\u4E48\u662F\u7EBF\u7A0B\u6C60","slug":"_3-2-1-\u4EC0\u4E48\u662F\u7EBF\u7A0B\u6C60","children":[]},{"level":3,"title":"3.2.2 \u4E0D\u8981\u91CD\u590D\u53D1\u660E\u8F6E\u5B50\uFF1AJDK \u5BF9\u7EBF\u7A0B\u6C60\u7684\u652F\u6301","slug":"_3-2-2-\u4E0D\u8981\u91CD\u590D\u53D1\u660E\u8F6E\u5B50-jdk-\u5BF9\u7EBF\u7A0B\u6C60\u7684\u652F\u6301","children":[]},{"level":3,"title":"3.2.3 \u5228\u6839\u7A76\u5E95\uFF1A\u6838\u5FC3\u7EBF\u7A0B\u6C60\u7684\u5185\u90E8\u5B9E\u73B0","slug":"_3-2-3-\u5228\u6839\u7A76\u5E95-\u6838\u5FC3\u7EBF\u7A0B\u6C60\u7684\u5185\u90E8\u5B9E\u73B0","children":[]},{"level":3,"title":"3.2.4 \u8D85\u8D1F\u8F7D\u4E86\u600E\u4E48\u529E\uFF1A\u62D2\u7EDD\u7B56\u7565","slug":"_3-2-4-\u8D85\u8D1F\u8F7D\u4E86\u600E\u4E48\u529E-\u62D2\u7EDD\u7B56\u7565","children":[]},{"level":3,"title":"3.2.5 \u81EA\u5B9A\u4E49\u7EBF\u7A0B\u521B\u5EFA\uFF1AThreadFactory","slug":"_3-2-5-\u81EA\u5B9A\u4E49\u7EBF\u7A0B\u521B\u5EFA-threadfactory","children":[]},{"level":3,"title":"3.2.6 \u6211\u7684\u5E94\u7528\u6211\u505A\u4E3B\uFF1A\u6269\u5C55\u7EBF\u7A0B\u6C60","slug":"_3-2-6-\u6211\u7684\u5E94\u7528\u6211\u505A\u4E3B-\u6269\u5C55\u7EBF\u7A0B\u6C60","children":[]},{"level":3,"title":"3.2.7 \u5408\u7406\u7684\u9009\u62E9\uFF1A\u4F18\u5316\u7EBF\u7A0B\u6C60\u7EBF\u7A0B\u6570\u91CF","slug":"_3-2-7-\u5408\u7406\u7684\u9009\u62E9-\u4F18\u5316\u7EBF\u7A0B\u6C60\u7EBF\u7A0B\u6570\u91CF","children":[]},{"level":3,"title":"3.2.8 \u5806\u6808\u53BB\u54EA\u91CC\u4E86\uFF1A\u5728\u7EBF\u7A0B\u6C60\u4E2D\u5BFB\u627E\u5806\u6808","slug":"_3-2-8-\u5806\u6808\u53BB\u54EA\u91CC\u4E86-\u5728\u7EBF\u7A0B\u6C60\u4E2D\u5BFB\u627E\u5806\u6808","children":[]},{"level":3,"title":"3.2.9 \u5206\u800C\u6CBB\u4E4B\uFF1AFork / Join \u6846\u67B6","slug":"_3-2-9-\u5206\u800C\u6CBB\u4E4B-fork-join-\u6846\u67B6","children":[]},{"level":3,"title":"3.2.10 Guava \u4E2D\u5BF9\u7EBF\u7A0B\u6C60\u7684\u6269\u5C55","slug":"_3-2-10-guava-\u4E2D\u5BF9\u7EBF\u7A0B\u6C60\u7684\u6269\u5C55","children":[]}]},{"level":2,"title":"3.3 \u4E0D\u8981\u91CD\u590D\u53D1\u660E\u8F6E\u5B50\uFF1AJDK \u7684\u5E76\u53D1\u5BB9\u5668","slug":"_3-3-\u4E0D\u8981\u91CD\u590D\u53D1\u660E\u8F6E\u5B50-jdk-\u7684\u5E76\u53D1\u5BB9\u5668","children":[{"level":3,"title":"3.3.1 \u8D85\u597D\u7528\u7684\u5DE5\u5177\u7C7B\uFF1A\u5E76\u53D1\u96C6\u5408\u7B80\u4ECB","slug":"_3-3-1-\u8D85\u597D\u7528\u7684\u5DE5\u5177\u7C7B-\u5E76\u53D1\u96C6\u5408\u7B80\u4ECB","children":[]},{"level":3,"title":"3.3.2 \u7EBF\u7A0B\u5B89\u5168\u7684 HashMap","slug":"_3-3-2-\u7EBF\u7A0B\u5B89\u5168\u7684-hashmap","children":[]},{"level":3,"title":"3.3.3 \u6709\u5173 List \u7684\u7EBF\u7A0B\u5B89\u5168","slug":"_3-3-3-\u6709\u5173-list-\u7684\u7EBF\u7A0B\u5B89\u5168","children":[]},{"level":3,"title":"3.3.4 \u9AD8\u6548\u8BFB\u5199\u7684\u961F\u5217\uFF1A\u6DF1\u5EA6\u5256\u6790 ConcurrentLinkedQueue \u7C7B","slug":"_3-3-4-\u9AD8\u6548\u8BFB\u5199\u7684\u961F\u5217-\u6DF1\u5EA6\u5256\u6790-concurrentlinkedqueue-\u7C7B","children":[]},{"level":3,"title":"3.3.5 \u9AD8\u6548\u8BFB\u53D6\uFF1A\u4E0D\u53D8\u6A21\u5F0F\u4E0B\u7684 CopyOnWriteArrayList \u7C7B","slug":"_3-3-5-\u9AD8\u6548\u8BFB\u53D6-\u4E0D\u53D8\u6A21\u5F0F\u4E0B\u7684-copyonwritearraylist-\u7C7B","children":[]},{"level":3,"title":"3.3.6 \u6570\u636E\u5171\u4EAB\u901A\u9053\uFF1ABlockingQueue","slug":"_3-3-6-\u6570\u636E\u5171\u4EAB\u901A\u9053-blockingqueue","children":[]},{"level":3,"title":"3.3.7 \u968F\u673A\u6570\u636E\u7ED3\u6784\uFF1A\u8DF3\u8868\uFF08SkipList\uFF09","slug":"_3-3-7-\u968F\u673A\u6570\u636E\u7ED3\u6784-\u8DF3\u8868-skiplist","children":[]}]},{"level":2,"title":"3.4 \u4F7F\u7528 JMH \u8FDB\u884C\u6027\u80FD\u6D4B\u8BD5","slug":"_3-4-\u4F7F\u7528-jmh-\u8FDB\u884C\u6027\u80FD\u6D4B\u8BD5","children":[{"level":3,"title":"3.4.1 \u4EC0\u4E48\u662F JMH","slug":"_3-4-1-\u4EC0\u4E48\u662F-jmh","children":[]},{"level":3,"title":"3.4.2 Hello JMH","slug":"_3-4-2-hello-jmh","children":[]},{"level":3,"title":"3.4.3 JMH \u7684\u57FA\u672C\u6982\u5FF5\u548C\u914D\u7F6E","slug":"_3-4-3-jmh-\u7684\u57FA\u672C\u6982\u5FF5\u548C\u914D\u7F6E","children":[]},{"level":3,"title":"3.4.4 \u7406\u89E3 JMH \u4E2D\u7684 Mode","slug":"_3-4-4-\u7406\u89E3-jmh-\u4E2D\u7684-mode","children":[]},{"level":3,"title":"3.4.5 \u7406\u89E3 JMH \u4E2D\u7684 State","slug":"_3-4-5-\u7406\u89E3-jmh-\u4E2D\u7684-state","children":[]},{"level":3,"title":"3.4.6 \u6709\u5173\u6027\u80FD\u7684\u4E00\u4E9B\u601D\u8003","slug":"_3-4-6-\u6709\u5173\u6027\u80FD\u7684\u4E00\u4E9B\u601D\u8003","children":[]},{"level":3,"title":"3.4.7 CopyOnWriteArrayList \u7C7B\u4E0E ConcurrentLinkedQueue \u7C7B","slug":"_3-4-7-copyonwritearraylist-\u7C7B\u4E0E-concurrentlinkedqueue-\u7C7B","children":[]}]}],"git":{"createdTime":1659013506000,"updatedTime":1659777100000,"contributors":[{"name":"\u963F\u6960sneaker","email":"cl55563@163.com","commits":3}]},"readingTime":{"minutes":109.39,"words":32816},"filePathRelative":"reading-notes/\u5B9E\u6218Java\u9AD8\u5E76\u53D1\u7A0B\u5E8F\u8BBE\u8BA1/\u7B2C3\u7AE0JDK\u5E76\u53D1\u5305.md","localizedDate":"2022\u5E747\u670828\u65E5"}');export{e as data};
