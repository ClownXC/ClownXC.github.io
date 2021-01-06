/**
 * Copyright 2016 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
*/

// DO NOT EDIT THIS GENERATED OUTPUT DIRECTLY!
// This file should be overwritten as part of your build process.
// If you need to extend the behavior of the generated service worker, the best approach is to write
// additional code and include it using the importScripts option:
//   https://github.com/GoogleChrome/sw-precache#importscripts-arraystring
//
// Alternatively, it's possible to make changes to the underlying template file and then use that as the
// new base for generating output, via the templateFilePath option:
//   https://github.com/GoogleChrome/sw-precache#templatefilepath-string
//
// If you go that route, make sure that whenever you update your sw-precache dependency, you reconcile any
// changes made to this original template file with your modified copy.

// This generated service worker JavaScript will precache your site's resources.
// The code needs to be saved in a .js file at the top-level of your site, and registered
// from your pages in order to be used. See
// https://github.com/googlechrome/sw-precache/blob/master/demo/app/js/service-worker-registration.js
// for an example of how you can register this script and handle various service worker events.

/* eslint-env worker, serviceworker */
/* eslint-disable indent, no-unused-vars, no-multiple-empty-lines, max-nested-callbacks, space-before-function-paren, quotes, comma-spacing */
'use strict';

var precacheConfig = [["/2019/02/12/消息系统-Kafka(1)：初识Kafka/index.html","cb9fb9fec7ad3ff2662b7f8e489b37d8"],["/2019/02/12/消息系统-Kafka(2)：生产者/index.html","9c915ef8ee731af6f4c1d957f3ac853a"],["/2019/02/13/消息系统-Kafka(3)：消费者/index.html","786adbe5c9d7b6d1ef3d79f2f7bf5485"],["/2019/02/15/02_基于K最近邻的协同过滤推荐/index.html","42131b1264addaeca567c4fbe23462d4"],["/2019/02/15/03_基于回归模型的协同过滤推荐/index.html","c71e21e8125c66fe76b55606c1b94879"],["/2019/02/15/04_基于矩阵分解的协同过滤推荐/index.html","cf6380684773cf031ceaff844a83d7b9"],["/2019/02/15/05_LFM算法实现/index.html","7d0ba4da4b456888657d966f537f8cf1"],["/2019/02/15/06_BiasSVD算法实现/index.html","ca90008c403274143aa151daaedd2ffe"],["/2019/02/15/07_基于内容的推荐算法/index.html","3b85c2a196cb477bd27a35fb7834d3c1"],["/2019/02/15/08_电影推荐(ContentBased)_物品画像/index.html","12fd1169bc3d92519ac105c6b11547c7"],["/2019/02/15/消息系统-Kafka(5)：可靠性保障/index.html","0d4a91e906b99fd236efd13a031c4de1"],["/2019/02/22/DataNode启动流程/index.html","66f5007563b5907dbb41d5ec6d2c6e16"],["/2019/03/02/SparkSQL-基于-HBase-做⾃定义数据源/index.html","c0350e9f32a1e0cf45fe387bf8c7826e"],["/2019/03/10/01_基于模型的协同过滤推荐/index.html","56ce12f00c25317423c5acc648f1958a"],["/2019/03/15/09_电影推荐(ContentBased)_用户画像/index.html","c5c54a6174fa24d4fe035afdadfce420"],["/2019/03/15/10_电影推荐(ContentBased)_TOP-N用户推荐/index.html","136f48afbd38c35bc641595ff6890303"],["/2019/03/15/11_电影推荐(ContentBased)_物品冷启动处理/index.html","a1073c288fcfb93cec8bee0b35ee6778"],["/2019/03/16/12_基于关联规则的推荐/index.html","0d379bffdd11d92935fb2aead2ce3c7d"],["/2019/03/17/13_Apriori算法实现/index.html","f3f5813b8d5cdd20ce1f2ff0d52e1246"],["/2019/03/17/14_FP-Growth算法实现/index.html","be4399b8c8ad95208693b1126105e2f0"],["/2019/06/25/JVM 类加载机制学习/index.html","6d0538f80097504776ae0ae1444eef0b"],["/2019/07/01/JVM-垃圾收集器-1-垃圾回收算法/index.html","9b5f46d5160d227aa0f8572b10c104dd"],["/2019/07/03/JVM-指令集/index.html","4e6231f1260bb78dba04f8f0d833f88f"],["/2019/07/12/消息系统-Kafka(4)：事务/index.html","147945ecd2303daf8fe16e3781b2dfe2"],["/2019/07/27/JVM-字节码-1-数据类型/index.html","4848ae166960fb86178546d39a8ec0c1"],["/2019/10/10/Spark架构/index.html","26b530afd60ea64ef869612c5f14d137"],["/2019/10/15/Federation /index.html","2d862e488003ec007a83ee0d2ac9e1c0"],["/2019/11/13/智慧出行服务体系建设的开发之订单和轨迹监控/index.html","798eae6b1717d30e9a2e5a9f4672cbe0"],["/2019/11/19/Spark 优化/index.html","e068990aff1b76a4f85a105d63a3d3ec"],["/2019/11/22/Spark 共享变量/index.html","f17af4d88b73cdd1186512a418b47990"],["/2019/11/22/Spark 存储模块/index.html","119994b1af2c5d68cd6de0937f7bb79b"],["/2019/11/22/Spark 容错机制/index.html","b3b3bc31d6359955f3505f3bcbb2eb22"],["/2019/11/23/Spark 数据倾斜/index.html","3d5e32f747509fcd0d6342533ee08a80"],["/2019/11/28/Spark Shuffle/index.html","331c4a803612df95d4e8f823b5f00814"],["/2019/12/02/Spark 任务调度机制/index.html","91a2b71e399ae3c8ad7ea9ec76ab8357"],["/2019/12/07/Flink-State-深入理解/index.html","17abf7b354d30016c8747efecd67b7b8"],["/2019/12/09/Flink-重启策略/index.html","b62929a4a2fbf99446dba6c8ec4bc4f3"],["/2019/12/10/Flink-保证Exactly-Once-1/index.html","31bb633cde2940488053e6d1f2c9a55c"],["/2019/12/10/Flink-保证Exactly-Once-2/index.html","757c4742b36068542a29b1247e51fa5f"],["/2019/12/10/Flink概述/index.html","148776b5500373b8da765ca4b959c75b"],["/2019/12/11/Flink 任务提交流程/index.html","53afe3f7df9738ffdeb4ca53eeadf9eb"],["/2019/12/13/Flink-WaterMark-深入理解/index.html","a1efd85d3ad223e3b7ada4173707d511"],["/2019/12/15/Flink-数据倾斜/index.html","958cd09919826599101f7a3c1e919267"],["/2019/12/15/Spark Streaming 和 Kafka 整合开发/index.html","969f5f54456f9d9b9947ac0b58f5be3b"],["/2019/12/15/Watermark-与-Window-结合来处理延迟数据/index.html","7a181abf2c4164a0fbde35467271fabf"],["/2019/12/16/Flink 状态一致性/index.html","770b3fbfac7e6642019a4b43542349d3"],["/2019/12/17/Flink-Window-机制深入理解/index.html","38740e8de8bd9c0666de07a944f6c823"],["/2019/12/18/Flink-多种时间语义对比/index.html","ee57635dab7093cae3570a1cd7580284"],["/2019/12/18/Flink-常用的-Source-和-Sink-Connectors/index.html","6d1bfa8bfd90bab69d481fbde40bfa20"],["/2019/12/19/Flink-状态后端存储/index.html","5fce55c5219bbb6eaeeb5a13ce0d2359"],["/2019/12/26/Flink-CEP-API-学习/index.html","c15de319d98e7696d6ad169aeceac00f"],["/2019/12/26/Flink-CEP深入理解/index.html","3f9f30f7de59038aa63da1f3ba49836b"],["/2019/12/28/Flink-Checkpoint-和-Savepoint-区别/index.html","2ffcc7548cc38c72d31fe556c1581617"],["/2019/12/28/Flink-Parallelism-和-Slot-深度理解/index.html","8b250ef825634630b4a717e9ca5b4b1d"],["/2019/12/28/Flink-Side-Output-分流/index.html","3e2186ebaf14a9e26076ed779229cec5"],["/2019/12/28/使用-Flink-ParameterTool-读取配置/index.html","2ab4b2aacad19813cb149274509e7292"],["/2019/12/30/Flink-Job-并行度设置/index.html","8e37c8b43e4c3e2f0af4659282555a05"],["/2020/01/28/使用-Flink-ProcessFunction-处理宕机告警/index.html","d24ee628fe1521490ed072e1fa4ebf8d"],["/2020/04/04/Flink-数据倾斜/Kafka 消息有序/index.html","c937110b0d81254bc8e16f76192b79c3"],["/2020/04/22/Flink-数据倾斜/Kafka 消息不丢失/index.html","3587038ed01c3b3d78dbd08149e1c463"],["/2020/05/25/Cloudera平台搭建/index.html","a74311960c8507d9ee1fd661f190e8e3"],["/2020/09/14/数据平台架构-Kappa/index.html","d52c2516b36e2d7500c1f3f84f0d73e2"],["/2020/09/14/数据平台架构-Lambda/index.html","3cb0132196498c05c0036ec208fb1694"],["/2021/01/05/排序算法之快速排序/index.html","dfb30571ddea7eb8e4caa0e7ee96b5d6"],["/about/index.html","3151f2292885992500568f7cd5d59133"],["/archives/2019/02/index.html","5ebd0121274d5dc05d0af9fef07b6599"],["/archives/2019/02/page/2/index.html","eacab1ee07cf85cfd78435d45b39b009"],["/archives/2019/03/index.html","b31f236834b5c18c734443c774f35951"],["/archives/2019/06/index.html","6a8c463b51136fd2ed19786c29189f38"],["/archives/2019/07/index.html","39fb6bfb035820253bb3ebb0a2f7984c"],["/archives/2019/10/index.html","c656563bf6930393a0726b0393425913"],["/archives/2019/11/index.html","b7670012be570a780526989ce243b9ba"],["/archives/2019/12/index.html","473a354b95bf244a059831a8bb592354"],["/archives/2019/12/page/2/index.html","13aa9a060494641506285be4b4cd67b2"],["/archives/2019/12/page/3/index.html","030766b948f62ef0f65f9f4b40598db2"],["/archives/2019/index.html","7d3748ffebb32eb039f1d2664264168d"],["/archives/2019/page/2/index.html","8006ef793c9a682088dc7d144f088e97"],["/archives/2019/page/3/index.html","ba6677083ca972ebf9c2e3ac304349c4"],["/archives/2019/page/4/index.html","fba56bab372fb8b008b47fe7aea591d7"],["/archives/2019/page/5/index.html","4e5b688382fb57824747fa9d4a207e98"],["/archives/2019/page/6/index.html","c8fa19ed81b523cf43c5906e2e43e126"],["/archives/2020/01/index.html","f250dd4b15554379c1faa216da1b27bf"],["/archives/2020/04/index.html","2f75ee7bddb9cfe1762979a1a1f4d4f5"],["/archives/2020/05/index.html","7e07c577105838fd7ec57919f6acfa1e"],["/archives/2020/09/index.html","8acfc3ae10ddb285d71ffa31df0635bd"],["/archives/2020/index.html","00d9f92a8d7c960a1c461e8ed64aa864"],["/archives/2021/01/index.html","6d59efc8270c71eff30986afbfd19654"],["/archives/2021/index.html","b21059ae83d860fdee7e12a36b424682"],["/archives/index.html","579359f4dfa358758e72690642d7563e"],["/archives/page/2/index.html","e4b0ef4c9fc0b907af295e93d7d04613"],["/archives/page/3/index.html","317d6894fdb9391ec597cbdd1dd7c385"],["/archives/page/4/index.html","ff1467348e8cfe2c851fdf4e91724c4d"],["/archives/page/5/index.html","38671e4fb8a5ef492c2702e5243d6ea1"],["/archives/page/6/index.html","4e267baf0be59a213f03f01161ed1d1a"],["/archives/page/7/index.html","d464242a77d80d243726ffc7baad4378"],["/assets/algolia/algoliasearch.js","d5d2500bfe8443b42baaefe4996ee532"],["/assets/algolia/algoliasearch.min.js","9c5e51e57e2b1d888950bf4cb5708c49"],["/assets/algolia/algoliasearchLite.js","ce9b0e62645c036a143f639b92e7789f"],["/assets/algolia/algoliasearchLite.min.js","c2d71f042c879659dbc97f8853b62f21"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/douban-loading.gif","b86c6b435fc25c1366acaafc3fb5c252"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/bangumis/index.html","81daf91812f58ac96dbe8df4bc965890"],["/books/index.html","9269f9c650eed540783f8d0e540673ef"],["/categories/Cloudera/index.html","b71131ba62053efaf1e118fa12a92f6c"],["/categories/Flink/index.html","82bfed00475d2d6105bd3da160dbdf64"],["/categories/Flink/page/2/index.html","6dabce45c1e3f5ad8c89e614c4000bab"],["/categories/Flink/page/3/index.html","ab9e0d6cea121242fdb34d705fdca9da"],["/categories/Hadoop-源码阅读/index.html","95fcb8f05747e063f7bddea7d254248a"],["/categories/Hadoop/index.html","1e2d16f5cd9995deedc93fb60867808f"],["/categories/Kafka/index.html","bde0576c76703e095b7e966283ad507e"],["/categories/Kafka/page/2/index.html","def1a9e19c301d6ab861f1b2542edd74"],["/categories/Spark/index.html","359d5c5e198c9a1d7ca0e3e85225c955"],["/categories/index.html","80719ae20776b03318a20c7baabdf1f7"],["/categories/大数据/index.html","cc67e5ffc5e54e25dc6751d188cfc3bd"],["/categories/推荐算法/index.html","9a9fa73e47c363373c8346dd7d892898"],["/categories/深入理解-JVM/index.html","e268a3a98cf5997a432bfc95331aec1f"],["/categories/滴滴智慧出行/index.html","b97495be792bb70666d8411070254853"],["/css/iconali.css","fa1cccd4c0da43188e2be63d9caa7d72"],["/css/iconfont.css","eec88158584f09918b99a22b3a7157a4"],["/css/index.css","5133f7ba97eb4833b45d0ea9266a542e"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/gallery/index.html","557297a73a884adee37f317d90c61cd0"],["/gallery/marvel/index.html","816ba9326dce3a5702065029c200756c"],["/gallery/wallpaper/index.html","fe6e7500b5cb184ec5cf6c76c543a845"],["/games/index.html","a3be5c2268bce560b5aa8fc22ba35d6a"],["/hello/index.html","0a3bc2a637fbdf7f092026419dd2f775"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["/img/atguigu.png","b45caf5563140de0fb9714e4c3b468f7"],["/img/bilibili.png","4c563d5152162d427653335e00079a34"],["/img/brown.png","daa10a827eab673dd80c97c783fba48e"],["/img/chen.jpg","f7e5e4474ce8e32ad70391db846092ef"],["/img/drawio.png","89e735e0ca3ecf10c37b0442e5e6cc8a"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/hello.gif","7126e2e75b713bc0cda0bf327766607a"],["/img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["/img/imysql.png","4b7194790d7a4e2aedcdeeef73b8336d"],["/img/index.jpg","8c4c316aa611c93d6bf66ae8354ce041"],["/img/index2.jpg","c9271b5ef767f869fd90a3f3aff80ab5"],["/img/index3.jpg","8d9bc3a61c5c70e294785a956044e135"],["/img/iteblog.png","97ac27894e186504dea40f676a3c458a"],["/img/kaikeba.png","a195defc9b0f5bf459e4b9a4f51ae550"],["/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["/img/qi.png","9dd7c958a1b8457d96da286dcffdfadb"],["/img/r.png","b2de91b58d2db708f4540e9a7d4b559a"],["/img/radar.png","63a46542ee1ff838d1782943db611ff0"],["/img/sci.png","7df745d1e443f4e9172c9fd28b7ee25e"],["/img/tuan.png","6e690186e9383b822a0fbd9ad88d878d"],["/img/xinyuanjieyi.gif","54abff83241a0f8398232237eb4c20da"],["/img/zhisheng.png","5c0f70401c33a16a801a39a979e4e5eb"],["/index.html","b2533619708db42a25686af24fa018b6"],["/js/main.js","455fface5a0a3ff90766ca254affe502"],["/js/search/algolia.js","c9af02da2fc1f7d634843f61536369d1"],["/js/search/local-search.js","52d5277e9dddb5d80484d07595df8dbd"],["/js/tw_cn.js","bd869d5fd54e2fe1f1eeee7c46fa46bc"],["/js/utils.js","5720a78dca20fab16f21914ae3ac0757"],["/link/index.html","b519a163b388b2448e0cb12778e5d958"],["/live2dw/assets/moc/haruto.2048/texture_00.png","56ff69b411abfc80cb68d0b1267959c5"],["/live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["/live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["/movies/index.html","9a7c73fb501407b9771d4597c2b9cb15"],["/page/2/index.html","9d367a1001f9b15f6d59a989c248c38f"],["/page/3/index.html","4f01ff78a95a367cac1bfeef561995c3"],["/page/4/index.html","05d100fedf4b696877726aea866c4072"],["/page/5/index.html","c194315d9cd2a23c728552dd0456a3db"],["/page/6/index.html","39fbecb321409fa587121ad58256ab46"],["/page/7/index.html","0b771d3a23e902aee952b558374418ad"],["/playlist/index.html","b7ee69f18cbbef42bc6599fae6bbc3de"],["/project/index.html","574853c71bc57d62b45e3b6bbc3ab24f"],["/repository/index.html","77821ed790e0400bbf94c560ca11c10f"],["/tags/Flink/index.html","a8c48b5b8aa9fe3617d5ad76f646505c"],["/tags/Kafka-消息系统源码深度剖析/index.html","a36cab305b5b5c168382c0c237537463"],["/tags/index.html","3c195ebaa8604a61247bdf156eda374f"],["/tags/大数据/index.html","ac8e8803c4479426566abed87ea9cc20"],["/tags/滴滴智慧出行/index.html","560b0e1e956d68d7773c02b2a5c778ac"],["/tags/电影推荐系统算法综合实战/index.html","d2a6c1bbca0c219cf4252ea211e53efa"],["/tags/电影推荐系统算法综合实战/page/2/index.html","bb99dac42a2ef9d62026636d7016fde2"],["/teach/index.html","688c350b78b06a92bbb0e299044c8bfe"],["/teach/jvm/index.html","34e0b98ea23126b54abe39923ef9d340"]];
var cacheName = 'sw-precache-v3--' + (self.registration ? self.registration.scope : '');


var ignoreUrlParametersMatching = [/^utm_/];



var addDirectoryIndex = function(originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
      url.pathname += index;
    }
    return url.toString();
  };

var cleanResponse = function(originalResponse) {
    // If this is not a redirected response, then we don't have to do anything.
    if (!originalResponse.redirected) {
      return Promise.resolve(originalResponse);
    }

    // Firefox 50 and below doesn't support the Response.body stream, so we may
    // need to read the entire body to memory as a Blob.
    var bodyPromise = 'body' in originalResponse ?
      Promise.resolve(originalResponse.body) :
      originalResponse.blob();

    return bodyPromise.then(function(body) {
      // new Response() is happy when passed either a stream or a Blob.
      return new Response(body, {
        headers: originalResponse.headers,
        status: originalResponse.status,
        statusText: originalResponse.statusText
      });
    });
  };

var createCacheKey = function(originalUrl, paramName, paramValue,
                           dontCacheBustUrlsMatching) {
    // Create a new URL object to avoid modifying originalUrl.
    var url = new URL(originalUrl);

    // If dontCacheBustUrlsMatching is not set, or if we don't have a match,
    // then add in the extra cache-busting URL parameter.
    if (!dontCacheBustUrlsMatching ||
        !(url.pathname.match(dontCacheBustUrlsMatching))) {
      url.search += (url.search ? '&' : '') +
        encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
  };

var isPathWhitelisted = function(whitelist, absoluteUrlString) {
    // If the whitelist is empty, then consider all URLs to be whitelisted.
    if (whitelist.length === 0) {
      return true;
    }

    // Otherwise compare each path regex to the path of the URL passed in.
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function(whitelistedPathRegex) {
      return path.match(whitelistedPathRegex);
    });
  };

var stripIgnoredUrlParameters = function(originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);
    // Remove the hash; see https://github.com/GoogleChrome/sw-precache/issues/290
    url.hash = '';

    url.search = url.search.slice(1) // Exclude initial '?'
      .split('&') // Split into an array of 'key=value' strings
      .map(function(kv) {
        return kv.split('='); // Split each 'key=value' string into a [key, value] array
      })
      .filter(function(kv) {
        return ignoreUrlParametersMatching.every(function(ignoredRegex) {
          return !ignoredRegex.test(kv[0]); // Return true iff the key doesn't match any of the regexes.
        });
      })
      .map(function(kv) {
        return kv.join('='); // Join each [key, value] array into a 'key=value' string
      })
      .join('&'); // Join the array of 'key=value' strings into a string with '&' in between each

    return url.toString();
  };


var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
  precacheConfig.map(function(item) {
    var relativeUrl = item[0];
    var hash = item[1];
    var absoluteUrl = new URL(relativeUrl, self.location);
    var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
    return [absoluteUrl.toString(), cacheKey];
  })
);

function setOfCachedUrls(cache) {
  return cache.keys().then(function(requests) {
    return requests.map(function(request) {
      return request.url;
    });
  }).then(function(urls) {
    return new Set(urls);
  });
}

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return setOfCachedUrls(cache).then(function(cachedUrls) {
        return Promise.all(
          Array.from(urlsToCacheKeys.values()).map(function(cacheKey) {
            // If we don't have a key matching url in the cache already, add it.
            if (!cachedUrls.has(cacheKey)) {
              var request = new Request(cacheKey, {credentials: 'same-origin'});
              return fetch(request).then(function(response) {
                // Bail out of installation unless we get back a 200 OK for
                // every request.
                if (!response.ok) {
                  throw new Error('Request for ' + cacheKey + ' returned a ' +
                    'response with status ' + response.status);
                }

                return cleanResponse(response).then(function(responseToCache) {
                  return cache.put(cacheKey, responseToCache);
                });
              });
            }
          })
        );
      });
    }).then(function() {
      
      // Force the SW to transition from installing -> active state
      return self.skipWaiting();
      
    })
  );
});

self.addEventListener('activate', function(event) {
  var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return cache.keys().then(function(existingRequests) {
        return Promise.all(
          existingRequests.map(function(existingRequest) {
            if (!setOfExpectedUrls.has(existingRequest.url)) {
              return cache.delete(existingRequest);
            }
          })
        );
      });
    }).then(function() {
      
      return self.clients.claim();
      
    })
  );
});


self.addEventListener('fetch', function(event) {
  if (event.request.method === 'GET') {
    // Should we call event.respondWith() inside this fetch event handler?
    // This needs to be determined synchronously, which will give other fetch
    // handlers a chance to handle the request if need be.
    var shouldRespond;

    // First, remove all the ignored parameters and hash fragment, and see if we
    // have that URL in our cache. If so, great! shouldRespond will be true.
    var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
    shouldRespond = urlsToCacheKeys.has(url);

    // If shouldRespond is false, check again, this time with 'index.html'
    // (or whatever the directoryIndex option is set to) at the end.
    var directoryIndex = 'index.html';
    if (!shouldRespond && directoryIndex) {
      url = addDirectoryIndex(url, directoryIndex);
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond is still false, check to see if this is a navigation
    // request, and if so, whether the URL matches navigateFallbackWhitelist.
    var navigateFallback = '';
    if (!shouldRespond &&
        navigateFallback &&
        (event.request.mode === 'navigate') &&
        isPathWhitelisted([], event.request.url)) {
      url = new URL(navigateFallback, self.location).toString();
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond was set to true at any point, then call
    // event.respondWith(), using the appropriate cache key.
    if (shouldRespond) {
      event.respondWith(
        caches.open(cacheName).then(function(cache) {
          return cache.match(urlsToCacheKeys.get(url)).then(function(response) {
            if (response) {
              return response;
            }
            throw Error('The cached response that was expected is missing.');
          });
        }).catch(function(e) {
          // Fall back to just fetch()ing the request if some unexpected error
          // prevented the cached response from being valid.
          console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
          return fetch(event.request);
        })
      );
    }
  }
});


// *** Start of auto-included sw-toolbox code. ***
/* 
 Copyright 2016 Google Inc. All Rights Reserved.

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

     http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
*/!function(e){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=e();else if("function"==typeof define&&define.amd)define([],e);else{var t;t="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:this,t.toolbox=e()}}(function(){return function e(t,n,r){function o(c,s){if(!n[c]){if(!t[c]){var a="function"==typeof require&&require;if(!s&&a)return a(c,!0);if(i)return i(c,!0);var u=new Error("Cannot find module '"+c+"'");throw u.code="MODULE_NOT_FOUND",u}var f=n[c]={exports:{}};t[c][0].call(f.exports,function(e){var n=t[c][1][e];return o(n?n:e)},f,f.exports,e,t,n,r)}return n[c].exports}for(var i="function"==typeof require&&require,c=0;c<r.length;c++)o(r[c]);return o}({1:[function(e,t,n){"use strict";function r(e,t){t=t||{};var n=t.debug||m.debug;n&&console.log("[sw-toolbox] "+e)}function o(e){var t;return e&&e.cache&&(t=e.cache.name),t=t||m.cache.name,caches.open(t)}function i(e,t){t=t||{};var n=t.successResponses||m.successResponses;return fetch(e.clone()).then(function(r){return"GET"===e.method&&n.test(r.status)&&o(t).then(function(n){n.put(e,r).then(function(){var r=t.cache||m.cache;(r.maxEntries||r.maxAgeSeconds)&&r.name&&c(e,n,r)})}),r.clone()})}function c(e,t,n){var r=s.bind(null,e,t,n);d=d?d.then(r):r()}function s(e,t,n){var o=e.url,i=n.maxAgeSeconds,c=n.maxEntries,s=n.name,a=Date.now();return r("Updating LRU order for "+o+". Max entries is "+c+", max age is "+i),g.getDb(s).then(function(e){return g.setTimestampForUrl(e,o,a)}).then(function(e){return g.expireEntries(e,c,i,a)}).then(function(e){r("Successfully updated IDB.");var n=e.map(function(e){return t.delete(e)});return Promise.all(n).then(function(){r("Done with cache cleanup.")})}).catch(function(e){r(e)})}function a(e,t,n){return r("Renaming cache: ["+e+"] to ["+t+"]",n),caches.delete(t).then(function(){return Promise.all([caches.open(e),caches.open(t)]).then(function(t){var n=t[0],r=t[1];return n.keys().then(function(e){return Promise.all(e.map(function(e){return n.match(e).then(function(t){return r.put(e,t)})}))}).then(function(){return caches.delete(e)})})})}function u(e,t){return o(t).then(function(t){return t.add(e)})}function f(e,t){return o(t).then(function(t){return t.delete(e)})}function h(e){e instanceof Promise||p(e),m.preCacheItems=m.preCacheItems.concat(e)}function p(e){var t=Array.isArray(e);if(t&&e.forEach(function(e){"string"==typeof e||e instanceof Request||(t=!1)}),!t)throw new TypeError("The precache method expects either an array of strings and/or Requests or a Promise that resolves to an array of strings and/or Requests.");return e}function l(e,t,n){if(!e)return!1;if(t){var r=e.headers.get("date");if(r){var o=new Date(r);if(o.getTime()+1e3*t<n)return!1}}return!0}var d,m=e("./options"),g=e("./idb-cache-expiration");t.exports={debug:r,fetchAndCache:i,openCache:o,renameCache:a,cache:u,uncache:f,precache:h,validatePrecacheInput:p,isResponseFresh:l}},{"./idb-cache-expiration":2,"./options":4}],2:[function(e,t,n){"use strict";function r(e){return new Promise(function(t,n){var r=indexedDB.open(u+e,f);r.onupgradeneeded=function(){var e=r.result.createObjectStore(h,{keyPath:p});e.createIndex(l,l,{unique:!1})},r.onsuccess=function(){t(r.result)},r.onerror=function(){n(r.error)}})}function o(e){return e in d||(d[e]=r(e)),d[e]}function i(e,t,n){return new Promise(function(r,o){var i=e.transaction(h,"readwrite"),c=i.objectStore(h);c.put({url:t,timestamp:n}),i.oncomplete=function(){r(e)},i.onabort=function(){o(i.error)}})}function c(e,t,n){return t?new Promise(function(r,o){var i=1e3*t,c=[],s=e.transaction(h,"readwrite"),a=s.objectStore(h),u=a.index(l);u.openCursor().onsuccess=function(e){var t=e.target.result;if(t&&n-i>t.value[l]){var r=t.value[p];c.push(r),a.delete(r),t.continue()}},s.oncomplete=function(){r(c)},s.onabort=o}):Promise.resolve([])}function s(e,t){return t?new Promise(function(n,r){var o=[],i=e.transaction(h,"readwrite"),c=i.objectStore(h),s=c.index(l),a=s.count();s.count().onsuccess=function(){var e=a.result;e>t&&(s.openCursor().onsuccess=function(n){var r=n.target.result;if(r){var i=r.value[p];o.push(i),c.delete(i),e-o.length>t&&r.continue()}})},i.oncomplete=function(){n(o)},i.onabort=r}):Promise.resolve([])}function a(e,t,n,r){return c(e,n,r).then(function(n){return s(e,t).then(function(e){return n.concat(e)})})}var u="sw-toolbox-",f=1,h="store",p="url",l="timestamp",d={};t.exports={getDb:o,setTimestampForUrl:i,expireEntries:a}},{}],3:[function(e,t,n){"use strict";function r(e){var t=a.match(e.request);t?e.respondWith(t(e.request)):a.default&&"GET"===e.request.method&&0===e.request.url.indexOf("http")&&e.respondWith(a.default(e.request))}function o(e){s.debug("activate event fired");var t=u.cache.name+"$$$inactive$$$";e.waitUntil(s.renameCache(t,u.cache.name))}function i(e){return e.reduce(function(e,t){return e.concat(t)},[])}function c(e){var t=u.cache.name+"$$$inactive$$$";s.debug("install event fired"),s.debug("creating cache ["+t+"]"),e.waitUntil(s.openCache({cache:{name:t}}).then(function(e){return Promise.all(u.preCacheItems).then(i).then(s.validatePrecacheInput).then(function(t){return s.debug("preCache list: "+(t.join(", ")||"(none)")),e.addAll(t)})}))}e("serviceworker-cache-polyfill");var s=e("./helpers"),a=e("./router"),u=e("./options");t.exports={fetchListener:r,activateListener:o,installListener:c}},{"./helpers":1,"./options":4,"./router":6,"serviceworker-cache-polyfill":16}],4:[function(e,t,n){"use strict";var r;r=self.registration?self.registration.scope:self.scope||new URL("./",self.location).href,t.exports={cache:{name:"$$$toolbox-cache$$$"+r+"$$$",maxAgeSeconds:null,maxEntries:null},debug:!1,networkTimeoutSeconds:null,preCacheItems:[],successResponses:/^0|([123]\d\d)|(40[14567])|410$/}},{}],5:[function(e,t,n){"use strict";var r=new URL("./",self.location),o=r.pathname,i=e("path-to-regexp"),c=function(e,t,n,r){t instanceof RegExp?this.fullUrlRegExp=t:(0!==t.indexOf("/")&&(t=o+t),this.keys=[],this.regexp=i(t,this.keys)),this.method=e,this.options=r,this.handler=n};c.prototype.makeHandler=function(e){var t;if(this.regexp){var n=this.regexp.exec(e);t={},this.keys.forEach(function(e,r){t[e.name]=n[r+1]})}return function(e){return this.handler(e,t,this.options)}.bind(this)},t.exports=c},{"path-to-regexp":15}],6:[function(e,t,n){"use strict";function r(e){return e.replace(/[-\/\\^$*+?.()|[\]{}]/g,"\\$&")}var o=e("./route"),i=e("./helpers"),c=function(e,t){for(var n=e.entries(),r=n.next(),o=[];!r.done;){var i=new RegExp(r.value[0]);i.test(t)&&o.push(r.value[1]),r=n.next()}return o},s=function(){this.routes=new Map,this.routes.set(RegExp,new Map),this.default=null};["get","post","put","delete","head","any"].forEach(function(e){s.prototype[e]=function(t,n,r){return this.add(e,t,n,r)}}),s.prototype.add=function(e,t,n,c){c=c||{};var s;t instanceof RegExp?s=RegExp:(s=c.origin||self.location.origin,s=s instanceof RegExp?s.source:r(s)),e=e.toLowerCase();var a=new o(e,t,n,c);this.routes.has(s)||this.routes.set(s,new Map);var u=this.routes.get(s);u.has(e)||u.set(e,new Map);var f=u.get(e),h=a.regexp||a.fullUrlRegExp;f.has(h.source)&&i.debug('"'+t+'" resolves to same regex as existing route.'),f.set(h.source,a)},s.prototype.matchMethod=function(e,t){var n=new URL(t),r=n.origin,o=n.pathname;return this._match(e,c(this.routes,r),o)||this._match(e,[this.routes.get(RegExp)],t)},s.prototype._match=function(e,t,n){if(0===t.length)return null;for(var r=0;r<t.length;r++){var o=t[r],i=o&&o.get(e.toLowerCase());if(i){var s=c(i,n);if(s.length>0)return s[0].makeHandler(n)}}return null},s.prototype.match=function(e){return this.matchMethod(e.method,e.url)||this.matchMethod("any",e.url)},t.exports=new s},{"./helpers":1,"./route":5}],7:[function(e,t,n){"use strict";function r(e,t,n){return n=n||{},i.debug("Strategy: cache first ["+e.url+"]",n),i.openCache(n).then(function(t){return t.match(e).then(function(t){var r=n.cache||o.cache,c=Date.now();return i.isResponseFresh(t,r.maxAgeSeconds,c)?t:i.fetchAndCache(e,n)})})}var o=e("../options"),i=e("../helpers");t.exports=r},{"../helpers":1,"../options":4}],8:[function(e,t,n){"use strict";function r(e,t,n){return n=n||{},i.debug("Strategy: cache only ["+e.url+"]",n),i.openCache(n).then(function(t){return t.match(e).then(function(e){var t=n.cache||o.cache,r=Date.now();if(i.isResponseFresh(e,t.maxAgeSeconds,r))return e})})}var o=e("../options"),i=e("../helpers");t.exports=r},{"../helpers":1,"../options":4}],9:[function(e,t,n){"use strict";function r(e,t,n){return o.debug("Strategy: fastest ["+e.url+"]",n),new Promise(function(r,c){var s=!1,a=[],u=function(e){a.push(e.toString()),s?c(new Error('Both cache and network failed: "'+a.join('", "')+'"')):s=!0},f=function(e){e instanceof Response?r(e):u("No result returned")};o.fetchAndCache(e.clone(),n).then(f,u),i(e,t,n).then(f,u)})}var o=e("../helpers"),i=e("./cacheOnly");t.exports=r},{"../helpers":1,"./cacheOnly":8}],10:[function(e,t,n){t.exports={networkOnly:e("./networkOnly"),networkFirst:e("./networkFirst"),cacheOnly:e("./cacheOnly"),cacheFirst:e("./cacheFirst"),fastest:e("./fastest")}},{"./cacheFirst":7,"./cacheOnly":8,"./fastest":9,"./networkFirst":11,"./networkOnly":12}],11:[function(e,t,n){"use strict";function r(e,t,n){n=n||{};var r=n.successResponses||o.successResponses,c=n.networkTimeoutSeconds||o.networkTimeoutSeconds;return i.debug("Strategy: network first ["+e.url+"]",n),i.openCache(n).then(function(t){var s,a,u=[];if(c){var f=new Promise(function(r){s=setTimeout(function(){t.match(e).then(function(e){var t=n.cache||o.cache,c=Date.now(),s=t.maxAgeSeconds;i.isResponseFresh(e,s,c)&&r(e)})},1e3*c)});u.push(f)}var h=i.fetchAndCache(e,n).then(function(e){if(s&&clearTimeout(s),r.test(e.status))return e;throw i.debug("Response was an HTTP error: "+e.statusText,n),a=e,new Error("Bad response")}).catch(function(r){return i.debug("Network or response error, fallback to cache ["+e.url+"]",n),t.match(e).then(function(e){if(e)return e;if(a)return a;throw r})});return u.push(h),Promise.race(u)})}var o=e("../options"),i=e("../helpers");t.exports=r},{"../helpers":1,"../options":4}],12:[function(e,t,n){"use strict";function r(e,t,n){return o.debug("Strategy: network only ["+e.url+"]",n),fetch(e)}var o=e("../helpers");t.exports=r},{"../helpers":1}],13:[function(e,t,n){"use strict";var r=e("./options"),o=e("./router"),i=e("./helpers"),c=e("./strategies"),s=e("./listeners");i.debug("Service Worker Toolbox is loading"),self.addEventListener("install",s.installListener),self.addEventListener("activate",s.activateListener),self.addEventListener("fetch",s.fetchListener),t.exports={networkOnly:c.networkOnly,networkFirst:c.networkFirst,cacheOnly:c.cacheOnly,cacheFirst:c.cacheFirst,fastest:c.fastest,router:o,options:r,cache:i.cache,uncache:i.uncache,precache:i.precache}},{"./helpers":1,"./listeners":3,"./options":4,"./router":6,"./strategies":10}],14:[function(e,t,n){t.exports=Array.isArray||function(e){return"[object Array]"==Object.prototype.toString.call(e)}},{}],15:[function(e,t,n){function r(e,t){for(var n,r=[],o=0,i=0,c="",s=t&&t.delimiter||"/";null!=(n=x.exec(e));){var f=n[0],h=n[1],p=n.index;if(c+=e.slice(i,p),i=p+f.length,h)c+=h[1];else{var l=e[i],d=n[2],m=n[3],g=n[4],v=n[5],w=n[6],y=n[7];c&&(r.push(c),c="");var b=null!=d&&null!=l&&l!==d,E="+"===w||"*"===w,R="?"===w||"*"===w,k=n[2]||s,$=g||v;r.push({name:m||o++,prefix:d||"",delimiter:k,optional:R,repeat:E,partial:b,asterisk:!!y,pattern:$?u($):y?".*":"[^"+a(k)+"]+?"})}}return i<e.length&&(c+=e.substr(i)),c&&r.push(c),r}function o(e,t){return s(r(e,t))}function i(e){return encodeURI(e).replace(/[\/?#]/g,function(e){return"%"+e.charCodeAt(0).toString(16).toUpperCase()})}function c(e){return encodeURI(e).replace(/[?#]/g,function(e){return"%"+e.charCodeAt(0).toString(16).toUpperCase()})}function s(e){for(var t=new Array(e.length),n=0;n<e.length;n++)"object"==typeof e[n]&&(t[n]=new RegExp("^(?:"+e[n].pattern+")$"));return function(n,r){for(var o="",s=n||{},a=r||{},u=a.pretty?i:encodeURIComponent,f=0;f<e.length;f++){var h=e[f];if("string"!=typeof h){var p,l=s[h.name];if(null==l){if(h.optional){h.partial&&(o+=h.prefix);continue}throw new TypeError('Expected "'+h.name+'" to be defined')}if(v(l)){if(!h.repeat)throw new TypeError('Expected "'+h.name+'" to not repeat, but received `'+JSON.stringify(l)+"`");if(0===l.length){if(h.optional)continue;throw new TypeError('Expected "'+h.name+'" to not be empty')}for(var d=0;d<l.length;d++){if(p=u(l[d]),!t[f].test(p))throw new TypeError('Expected all "'+h.name+'" to match "'+h.pattern+'", but received `'+JSON.stringify(p)+"`");o+=(0===d?h.prefix:h.delimiter)+p}}else{if(p=h.asterisk?c(l):u(l),!t[f].test(p))throw new TypeError('Expected "'+h.name+'" to match "'+h.pattern+'", but received "'+p+'"');o+=h.prefix+p}}else o+=h}return o}}function a(e){return e.replace(/([.+*?=^!:${}()[\]|\/\\])/g,"\\$1")}function u(e){return e.replace(/([=!:$\/()])/g,"\\$1")}function f(e,t){return e.keys=t,e}function h(e){return e.sensitive?"":"i"}function p(e,t){var n=e.source.match(/\((?!\?)/g);if(n)for(var r=0;r<n.length;r++)t.push({name:r,prefix:null,delimiter:null,optional:!1,repeat:!1,partial:!1,asterisk:!1,pattern:null});return f(e,t)}function l(e,t,n){for(var r=[],o=0;o<e.length;o++)r.push(g(e[o],t,n).source);var i=new RegExp("(?:"+r.join("|")+")",h(n));return f(i,t)}function d(e,t,n){return m(r(e,n),t,n)}function m(e,t,n){v(t)||(n=t||n,t=[]),n=n||{};for(var r=n.strict,o=n.end!==!1,i="",c=0;c<e.length;c++){var s=e[c];if("string"==typeof s)i+=a(s);else{var u=a(s.prefix),p="(?:"+s.pattern+")";t.push(s),s.repeat&&(p+="(?:"+u+p+")*"),p=s.optional?s.partial?u+"("+p+")?":"(?:"+u+"("+p+"))?":u+"("+p+")",i+=p}}var l=a(n.delimiter||"/"),d=i.slice(-l.length)===l;return r||(i=(d?i.slice(0,-l.length):i)+"(?:"+l+"(?=$))?"),i+=o?"$":r&&d?"":"(?="+l+"|$)",f(new RegExp("^"+i,h(n)),t)}function g(e,t,n){return v(t)||(n=t||n,t=[]),n=n||{},e instanceof RegExp?p(e,t):v(e)?l(e,t,n):d(e,t,n)}var v=e("isarray");t.exports=g,t.exports.parse=r,t.exports.compile=o,t.exports.tokensToFunction=s,t.exports.tokensToRegExp=m;var x=new RegExp(["(\\\\.)","([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))"].join("|"),"g")},{isarray:14}],16:[function(e,t,n){!function(){var e=Cache.prototype.addAll,t=navigator.userAgent.match(/(Firefox|Chrome)\/(\d+\.)/);if(t)var n=t[1],r=parseInt(t[2]);e&&(!t||"Firefox"===n&&r>=46||"Chrome"===n&&r>=50)||(Cache.prototype.addAll=function(e){function t(e){this.name="NetworkError",this.code=19,this.message=e}var n=this;return t.prototype=Object.create(Error.prototype),Promise.resolve().then(function(){if(arguments.length<1)throw new TypeError;return e=e.map(function(e){return e instanceof Request?e:String(e)}),Promise.all(e.map(function(e){"string"==typeof e&&(e=new Request(e));var n=new URL(e.url).protocol;if("http:"!==n&&"https:"!==n)throw new t("Invalid scheme");return fetch(e.clone())}))}).then(function(r){if(r.some(function(e){return!e.ok}))throw new t("Incorrect response status");return Promise.all(r.map(function(t,r){return n.put(e[r],t)}))}).then(function(){})},Cache.prototype.add=function(e){return this.addAll([e])})}()},{}]},{},[13])(13)});


// *** End of auto-included sw-toolbox code. ***



// Runtime cache configuration, using the sw-toolbox library.

toolbox.router.get("/*", toolbox.cacheFirst, {"origin":"www.zxchome.com"});




