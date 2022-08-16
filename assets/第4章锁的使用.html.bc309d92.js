const e=JSON.parse('{"key":"v-009bcf6f","path":"/reading-notes/Java%E5%A4%9A%E7%BA%BF%E7%A8%8B%E7%BC%96%E7%A8%8B%E6%A0%B8%E5%BF%83%E6%8A%80%E6%9C%AF/%E7%AC%AC4%E7%AB%A0%E9%94%81%E7%9A%84%E4%BD%BF%E7%94%A8.html","title":"\u7B2C 4 \u7AE0 \u9501\u7684\u4F7F\u7528","lang":"zh-CN","frontmatter":{"summary":"\u7B2C 4 \u7AE0 \u9501\u7684\u4F7F\u7528 \u672C\u7AE0\u4F7F\u7528\u9501\uFF08Lock \u5BF9\u8C61\uFF09\u5B9E\u73B0\u540C\u6B65\u7684\u6548\u679C\uFF0CLock \u5BF9\u8C61\u5728\u529F\u80FD\u4E0A\u6BD4 synchronized \u66F4\u52A0\u4E30\u5BCC\uFF0C\u672C\u7AE0\u91CD\u70B9\u4ECB\u7ECD\u5982\u4E0B 2 \u4E2A\u77E5\u8BC6\u70B9\uFF1A ReentrantLock \u7C7B\u7684\u4F7F\u7528\uFF1B; ReentrantReadWriteLock \u7C7B\u7684\u4F7F\u7528\u3002; 4.1 \u4F7F\u7528 ReentrantLock \u7C7B \u5728 Java \u591A\u7EBF\u7A0B\u4E2D\u53EF\u4EE5\u4F7F\u7528 synchroni","head":[["meta",{"property":"og:url","content":"https://www.cxlsn.cn/reading-notes/Java%E5%A4%9A%E7%BA%BF%E7%A8%8B%E7%BC%96%E7%A8%8B%E6%A0%B8%E5%BF%83%E6%8A%80%E6%9C%AF/%E7%AC%AC4%E7%AB%A0%E9%94%81%E7%9A%84%E4%BD%BF%E7%94%A8.html"}],["meta",{"property":"og:site_name","content":"MyBlog"}],["meta",{"property":"og:title","content":"\u7B2C 4 \u7AE0 \u9501\u7684\u4F7F\u7528"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:updated_time","content":"2022-08-06T09:11:40.000Z"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:modified_time","content":"2022-08-06T09:11:40.000Z"}]]},"excerpt":"","headers":[{"level":2,"title":"4.1 \u4F7F\u7528 ReentrantLock \u7C7B","slug":"_4-1-\u4F7F\u7528-reentrantlock-\u7C7B","children":[{"level":3,"title":"4.1.1 \u4F7F\u7528 ReentrantLock \u5B9E\u73B0\u540C\u6B65","slug":"_4-1-1-\u4F7F\u7528-reentrantlock-\u5B9E\u73B0\u540C\u6B65","children":[]},{"level":3,"title":"4.1.2 \u9A8C\u8BC1\u591A\u4EE3\u7801\u5757\u95F4\u7684\u540C\u6B65\u6027","slug":"_4-1-2-\u9A8C\u8BC1\u591A\u4EE3\u7801\u5757\u95F4\u7684\u540C\u6B65\u6027","children":[]},{"level":3,"title":"4.1.3 \u65B9\u6CD5 await() \u7684\u9519\u8BEF\u7528\u6CD5\u4E0E\u76F8\u5E94\u7684\u89E3\u51B3\u65B9\u6848","slug":"_4-1-3-\u65B9\u6CD5-await-\u7684\u9519\u8BEF\u7528\u6CD5\u4E0E\u76F8\u5E94\u7684\u89E3\u51B3\u65B9\u6848","children":[]},{"level":3,"title":"4.1.4 \u4F7F\u7528\u65B9\u6CD5 await() \u548C\u65B9\u6CD5 signal() \u5B9E\u73B0 wait / notify","slug":"_4-1-4-\u4F7F\u7528\u65B9\u6CD5-await-\u548C\u65B9\u6CD5-signal-\u5B9E\u73B0-wait-notify","children":[]},{"level":3,"title":"4.1.5 \u65B9\u6CD5 await() \u6682\u505C\u7684\u539F\u7406","slug":"_4-1-5-\u65B9\u6CD5-await-\u6682\u505C\u7684\u539F\u7406","children":[]},{"level":3,"title":"4.1.6 \u901A\u77E5\u90E8\u5206\u7EBF\u7A0B\uFF1A\u9519\u8BEF\u7528\u6CD5","slug":"_4-1-6-\u901A\u77E5\u90E8\u5206\u7EBF\u7A0B-\u9519\u8BEF\u7528\u6CD5","children":[]},{"level":3,"title":"4.1.7 \u901A\u77E5\u90E8\u5206\u7EBF\u7A0B\uFF1A\u6B63\u786E\u7528\u6CD5","slug":"_4-1-7-\u901A\u77E5\u90E8\u5206\u7EBF\u7A0B-\u6B63\u786E\u7528\u6CD5","children":[]},{"level":3,"title":"4.1.8 \u5B9E\u73B0\u751F\u4EA7\u8005 / \u6D88\u8D39\u8005\u6A21\u5F0F\u4E00\u5BF9\u4E00\u4EA4\u66FF\u6253\u5370","slug":"_4-1-8-\u5B9E\u73B0\u751F\u4EA7\u8005-\u6D88\u8D39\u8005\u6A21\u5F0F\u4E00\u5BF9\u4E00\u4EA4\u66FF\u6253\u5370","children":[]},{"level":3,"title":"4.1.9 \u5B9E\u73B0\u751F\u4EA7\u8005 / \u6D88\u8D39\u8005\u6A21\u5F0F\u591A\u5BF9\u591A\u4EA4\u66FF\u6253\u5370","slug":"_4-1-9-\u5B9E\u73B0\u751F\u4EA7\u8005-\u6D88\u8D39\u8005\u6A21\u5F0F\u591A\u5BF9\u591A\u4EA4\u66FF\u6253\u5370","children":[]},{"level":3,"title":"4.1.10 \u516C\u5E73\u9501\u4E0E\u975E\u516C\u5E73\u9501","slug":"_4-1-10-\u516C\u5E73\u9501\u4E0E\u975E\u516C\u5E73\u9501","children":[]},{"level":3,"title":"4.1.11 \u65B9\u6CD5 getHoldCount() \u7684\u4F7F\u7528","slug":"_4-1-11-\u65B9\u6CD5-getholdcount-\u7684\u4F7F\u7528","children":[]},{"level":3,"title":"4.1.12 \u65B9\u6CD5 getQueueLength() \u7684\u4F7F\u7528","slug":"_4-1-12-\u65B9\u6CD5-getqueuelength-\u7684\u4F7F\u7528","children":[]},{"level":3,"title":"4.1.13 \u65B9\u6CD5 getWaitQueueLength(Condition condition) \u7684\u4F7F\u7528","slug":"_4-1-13-\u65B9\u6CD5-getwaitqueuelength-condition-condition-\u7684\u4F7F\u7528","children":[]},{"level":3,"title":"4.1.14 \u65B9\u6CD5 hasQueuedThread(Thread thread) \u7684\u4F7F\u7528","slug":"_4-1-14-\u65B9\u6CD5-hasqueuedthread-thread-thread-\u7684\u4F7F\u7528","children":[]},{"level":3,"title":"4.1.15 \u65B9\u6CD5 hasQueuedThreads() \u7684\u4F7F\u7528","slug":"_4-1-15-\u65B9\u6CD5-hasqueuedthreads-\u7684\u4F7F\u7528","children":[]},{"level":3,"title":"4.1.16 \u65B9\u6CD5 hasWaiters(Condition condition) \u7684\u4F7F\u7528","slug":"_4-1-16-\u65B9\u6CD5-haswaiters-condition-condition-\u7684\u4F7F\u7528","children":[]},{"level":3,"title":"4.1.17 \u65B9\u6CD5 isFair() \u7684\u4F7F\u7528","slug":"_4-1-17-\u65B9\u6CD5-isfair-\u7684\u4F7F\u7528","children":[]},{"level":3,"title":"4.1.18 \u65B9\u6CD5 isHeldByCurrentThread() \u7684\u4F7F\u7528","slug":"_4-1-18-\u65B9\u6CD5-isheldbycurrentthread-\u7684\u4F7F\u7528","children":[]},{"level":3,"title":"4.1.19 \u65B9\u6CD5 isLocked() \u7684\u4F7F\u7528","slug":"_4-1-19-\u65B9\u6CD5-islocked-\u7684\u4F7F\u7528","children":[]},{"level":3,"title":"4.1.20 \u65B9\u6CD5 lockInterruptibly() \u7684\u4F7F\u7528","slug":"_4-1-20-\u65B9\u6CD5-lockinterruptibly-\u7684\u4F7F\u7528","children":[]},{"level":3,"title":"4.1.21 \u65B9\u6CD5 tryLock() \u7684\u4F7F\u7528","slug":"_4-1-21-\u65B9\u6CD5-trylock-\u7684\u4F7F\u7528","children":[]},{"level":3,"title":"4.1.22 \u65B9\u6CD5 tryLock(long timeout, TimeUnit unit) \u7684\u4F7F\u7528","slug":"_4-1-22-\u65B9\u6CD5-trylock-long-timeout-timeunit-unit-\u7684\u4F7F\u7528","children":[]},{"level":3,"title":"4.1.23 \u65B9\u6CD5 await(long time, TimeUnit unit) \u7684\u4F7F\u7528","slug":"_4-1-23-\u65B9\u6CD5-await-long-time-timeunit-unit-\u7684\u4F7F\u7528","children":[]},{"level":3,"title":"4.1.24 \u65B9\u6CD5 awaitNanos(long nanosTimeout) \u7684\u4F7F\u7528","slug":"_4-1-24-\u65B9\u6CD5-awaitnanos-long-nanostimeout-\u7684\u4F7F\u7528","children":[]},{"level":3,"title":"4.1.25 \u65B9\u6CD5 awaitUntil(Date deadline) \u7684\u4F7F\u7528","slug":"_4-1-25-\u65B9\u6CD5-awaituntil-date-deadline-\u7684\u4F7F\u7528","children":[]},{"level":3,"title":"4.1.26 \u65B9\u6CD5 awaitUninterruptibly() \u7684\u4F7F\u7528","slug":"_4-1-26-\u65B9\u6CD5-awaituninterruptibly-\u7684\u4F7F\u7528","children":[]},{"level":3,"title":"4.1.27 \u5B9E\u73B0\u7EBF\u7A0B\u6309\u987A\u5E8F\u6267\u884C\u4E1A\u52A1","slug":"_4-1-27-\u5B9E\u73B0\u7EBF\u7A0B\u6309\u987A\u5E8F\u6267\u884C\u4E1A\u52A1","children":[]}]},{"level":2,"title":"4.2 \u4F7F\u7528 ReentrantReadWriteLock \u7C7B","slug":"_4-2-\u4F7F\u7528-reentrantreadwritelock-\u7C7B","children":[{"level":3,"title":"4.2.1 \u7C7B ReentrantLock \u7684\u7F3A\u70B9","slug":"_4-2-1-\u7C7B-reentrantlock-\u7684\u7F3A\u70B9","children":[]},{"level":3,"title":"4.2.2 \u8BFB\u8BFB\u5171\u4EAB","slug":"_4-2-2-\u8BFB\u8BFB\u5171\u4EAB","children":[]},{"level":3,"title":"4.2.3 \u5199\u5199\u4E92\u65A5","slug":"_4-2-3-\u5199\u5199\u4E92\u65A5","children":[]},{"level":3,"title":"4.2.4 \u8BFB\u5199\u4E92\u65A5","slug":"_4-2-4-\u8BFB\u5199\u4E92\u65A5","children":[]},{"level":3,"title":"4.2.5 \u5199\u8BFB\u4E92\u65A5","slug":"_4-2-5-\u5199\u8BFB\u4E92\u65A5","children":[]}]},{"level":2,"title":"4.3 \u672C\u7AE0\u5C0F\u7ED3","slug":"_4-3-\u672C\u7AE0\u5C0F\u7ED3","children":[]}],"git":{"createdTime":1657034230000,"updatedTime":1659777100000,"contributors":[{"name":"\u963F\u6960sneaker","email":"cl55563@163.com","commits":4}]},"readingTime":{"minutes":34.31,"words":10294},"filePathRelative":"reading-notes/Java\u591A\u7EBF\u7A0B\u7F16\u7A0B\u6838\u5FC3\u6280\u672F/\u7B2C4\u7AE0\u9501\u7684\u4F7F\u7528.md","localizedDate":"2022\u5E747\u67085\u65E5"}');export{e as data};
