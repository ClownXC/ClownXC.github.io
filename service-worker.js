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

var precacheConfig = [["/2019/02/12/消息系统-Kafka(1)：初识Kafka/index.html","36282fc24259606d88367eecc8351844"],["/2019/02/12/消息系统-Kafka(2)：生产者/index.html","b3c5caa309b26414544ad148a205f2da"],["/2019/02/13/消息系统-Kafka(3)：消费者/index.html","5b689ed62c217884459ad9132da6daa7"],["/2019/02/15/消息系统-Kafka(5)：可靠性保障/index.html","8ac2d76ce9dd82c3476eb3122483be12"],["/2019/02/22/DataNode启动流程/index.html","363b21dca597102fd5e2894e9abfd77a"],["/2019/02/28/数据查询平台/index.html","cb82ea02b6380f96cd29fa91095d6260"],["/2019/03/02/SparkSQL-基于-HBase-做⾃定义数据源/index.html","28fa91f9ba3fcb05816afc94852a8da2"],["/2019/06/25/JVM 类加载机制学习/index.html","a2e10fdf565b0af96fd0802fad26ee6a"],["/2019/07/01/JVM-垃圾收集器-1-垃圾回收算法/index.html","b09c78b5b5d9d48c040548ebcfbffdb3"],["/2019/07/03/JVM-指令集/index.html","c4622e4c15bd88ea6dda06e27ab40378"],["/2019/07/12/消息系统-Kafka(4)：事务/index.html","cc3cee9cc509cef32045ef83c8be558b"],["/2019/07/27/JVM-字节码-1-数据类型/index.html","40d9910c3713e3809bbc99967def4959"],["/2019/10/10/Spark架构/index.html","fcdfb1d9e2f5c321093b5b028a512ee9"],["/2019/10/15/Federation /index.html","49a53d17f4a898bbfb351f3efc5d958d"],["/2019/11/13/智慧出行服务体系建设的开发之订单和轨迹监控/index.html","cca5f865411d483815836153711f0dde"],["/2019/11/19/Spark 优化/index.html","efb08c73649a2c4a7608b3c261f835ad"],["/2019/11/22/Spark 共享变量/index.html","d28f3cdfb057d845675d2b142cdea605"],["/2019/11/22/Spark 存储模块/index.html","54eec6ee4852fe22f54e6fcb58ce3ab3"],["/2019/11/22/Spark 容错机制/index.html","2b7f19a3de867b9c7181f64320404aae"],["/2019/11/23/Spark 数据倾斜/index.html","317b0589ba399397690829ee7a145fac"],["/2019/11/28/Spark Shuffle/index.html","a6e9c16696740442d40d2fd97976e34a"],["/2019/12/02/Spark 任务调度机制/index.html","7fa8502940ef6064600507d4770bd19b"],["/2019/12/07/Flink-State-深入理解/index.html","f542204e1261cb3c894f07108256a1dc"],["/2019/12/09/Flink-重启策略/index.html","a6f3c144a52fa2dda26c42033fdb7ab1"],["/2019/12/10/Flink-保证Exactly-Once-1/index.html","3c4833506a0ef9edd5fa57f397f2d3e1"],["/2019/12/10/Flink-保证Exactly-Once-2/index.html","2733d6618d0a47ec4c36bad81a81e73a"],["/2019/12/10/Flink概述/index.html","9a352ea52392cd0080e8e08b80628b6c"],["/2019/12/11/Flink 任务提交流程/index.html","29391d497c658acea0244b21af0fa9de"],["/2019/12/13/Flink-WaterMark-深入理解/index.html","10f01cfdc59a6d0fc621491b01dd5b0d"],["/2019/12/15/Flink-数据倾斜/index.html","c2e9daf6ca0bd5a98be092bddc8bc217"],["/2019/12/15/Spark Streaming 和 Kafka 整合开发/index.html","3fe77646b8df5be4f68e2559e19b0d8b"],["/2019/12/15/Watermark-与-Window-结合来处理延迟数据/index.html","daab022b2f8e850c0e9536f6e2adfab4"],["/2019/12/16/Flink 状态一致性/index.html","37c3ed31a62395f5242932a166adcfab"],["/2019/12/17/Flink-Window-机制深入理解/index.html","df82b3cd08d0a9b582fb6961f74db5c5"],["/2019/12/18/Flink-多种时间语义对比/index.html","be220ff49df6ed82a7c9d4843f5d0342"],["/2019/12/18/Flink-常用的-Source-和-Sink-Connectors/index.html","8870f53e944d8c1732566c543a2b2706"],["/2019/12/19/Flink-状态后端存储/index.html","30b4357c2f450700a4adca9ee3a1036b"],["/2019/12/26/Flink-CEP-API-学习/index.html","23259f0cbad7b76141ace2fdecc85ce5"],["/2019/12/26/Flink-CEP深入理解/index.html","9077099c9446a4f69471bff5adc9b210"],["/2019/12/28/Flink-Checkpoint-和-Savepoint-区别/index.html","77854f69d81220e2ede3a6e9d8d5cb47"],["/2019/12/28/Flink-Parallelism-和-Slot-深度理解/index.html","21484fc5b28dba5cf9a536f3e3c0deec"],["/2019/12/28/Flink-Side-Output-分流/index.html","e09ce1910d5c977ed6c86aadbeab2321"],["/2019/12/28/使用-Flink-ParameterTool-读取配置/index.html","213a4c6abdf16c41d15080e015d8c097"],["/2019/12/30/Flink-Job-并行度设置/index.html","0b02c52debd01f754f4c96bfc2e6f830"],["/2020/01/28/使用-Flink-ProcessFunction-处理宕机告警/index.html","1c5358fbc2298f0d6f4c328813b13578"],["/2020/04/04/Flink-数据倾斜/Kafka 消息有序/index.html","74b2b7a2ebc15bc05bde51071ed5c112"],["/2020/04/22/Flink-数据倾斜/Kafka 消息不丢失/index.html","910de69707d43ce5270cc32eeaba3d5c"],["/2020/05/25/Cloudera平台搭建/index.html","c200643242c7dd7657ed0f5fe8540b19"],["/about/index.html","7c198d76e28946e02aef42c574ff89cd"],["/archives/2019/02/index.html","82b9664f4ccd19acba6823ae9c394842"],["/archives/2019/03/index.html","07a364558fc739153cec21fa9664ec65"],["/archives/2019/06/index.html","892aa344c5596c6c853bcf2d55353cec"],["/archives/2019/07/index.html","34f5adb0ca09841e3814eb7a0dcd5235"],["/archives/2019/10/index.html","797525eec897b1caecf8c52a84805586"],["/archives/2019/11/index.html","6aa8a00e6f5e41e8ddc9c99cd23efd22"],["/archives/2019/12/index.html","92a9dc7bd23e909c28455f668eeb919a"],["/archives/2019/12/page/2/index.html","f5986799f60425a6a0f71952ede6cc75"],["/archives/2019/12/page/3/index.html","aaa6917b3ba8f7a3057acc322fab5f1a"],["/archives/2019/index.html","0258bacf169b9083579716dc0cab9356"],["/archives/2019/page/2/index.html","2ed14f2ff70dd1c84852a45e9f881eab"],["/archives/2019/page/3/index.html","4815ab5073d6f053590b80d5b2db3d16"],["/archives/2019/page/4/index.html","b1fe8f5c5752c4480260a87ccd86f365"],["/archives/2019/page/5/index.html","eded5f8535f874089b49289b44e42e9a"],["/archives/2020/01/index.html","6e34b4529178ab90ff28f685c74695a7"],["/archives/2020/04/index.html","5bc1abcea8bd0635c1b8dad58833155b"],["/archives/2020/05/index.html","863c3717f038b5443da1b8a64a4f1b7d"],["/archives/2020/index.html","db8404478fb33525478b489c8236d4f2"],["/archives/index.html","780f8c092b6e12a75b9d6c45410a7367"],["/archives/page/2/index.html","5b4bfc6aa19042ba6c7101c15e1b990e"],["/archives/page/3/index.html","a385c53cfb774da60a1de4c1e50119f1"],["/archives/page/4/index.html","cdd8f2b17705a4141bf54f6d40da1e43"],["/archives/page/5/index.html","0ab22e4c1cfb59d065b6ead5bfaa737a"],["/assets/algolia/algoliasearch.js","d5d2500bfe8443b42baaefe4996ee532"],["/assets/algolia/algoliasearch.min.js","9c5e51e57e2b1d888950bf4cb5708c49"],["/assets/algolia/algoliasearchLite.js","ce9b0e62645c036a143f639b92e7789f"],["/assets/algolia/algoliasearchLite.min.js","c2d71f042c879659dbc97f8853b62f21"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/douban-loading.gif","b86c6b435fc25c1366acaafc3fb5c252"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/bangumis/index.html","fd702abdc9a65b405c8ebbc6ce990d12"],["/books/index.html","6bc21af9c2fe984f5fcc3c68f4d1db8f"],["/categories/Cloudera/index.html","a8eb0048b687b1586276939d5d81fa32"],["/categories/Flink/index.html","728a742b621e95658e2d9858a2c27604"],["/categories/Flink/page/2/index.html","65526dfa6c68d225e3169cb1f42224ac"],["/categories/Flink/page/3/index.html","2a54084d29de144368bb8ba943cab00c"],["/categories/HBase/index.html","8824395abf8dfcf1d08d568be89da200"],["/categories/Hadoop-源码阅读/index.html","130eb97ad71fe84211de1a7bd6f67bb0"],["/categories/Hadoop/index.html","a3ee7f4ef74319a94600e5e96ecb48be"],["/categories/Kafka/index.html","aa2f6f829195bea02c7b7475bdb604a8"],["/categories/Spark/index.html","5892365291504ed29c73a17aa2fdef21"],["/categories/index.html","d4a53bbf6867f2be1b81ee978fe9efa2"],["/categories/大数据/index.html","074fe341a323948298ddc9f5edf9d22d"],["/categories/深入理解-JVM/index.html","7d1b514d1a168bb40eccd179ccfbc28c"],["/categories/滴滴智慧出行/index.html","83da25a931a32e97f8749c9bd73a6559"],["/css/iconali.css","fa1cccd4c0da43188e2be63d9caa7d72"],["/css/iconfont.css","eec88158584f09918b99a22b3a7157a4"],["/css/index.css","5133f7ba97eb4833b45d0ea9266a542e"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/gallery/index.html","9e6429f2e7ae03bf522185b86f72a856"],["/gallery/marvel/index.html","bf476bfa75ad35dd90203a24f1d4a63c"],["/gallery/wallpaper/index.html","8e977633f3ca94d9c02226c6c62316c0"],["/games/index.html","9362d7a4ff46c4d03b34847bfbdf0384"],["/hello/index.html","f1435cd827282d253f61dafd7a0aa242"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["/img/atguigu.png","b45caf5563140de0fb9714e4c3b468f7"],["/img/bilibili.png","4c563d5152162d427653335e00079a34"],["/img/brown.png","daa10a827eab673dd80c97c783fba48e"],["/img/chen.jpg","f7e5e4474ce8e32ad70391db846092ef"],["/img/drawio.png","89e735e0ca3ecf10c37b0442e5e6cc8a"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/hello.gif","7126e2e75b713bc0cda0bf327766607a"],["/img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["/img/imysql.png","4b7194790d7a4e2aedcdeeef73b8336d"],["/img/index.jpg","8c4c316aa611c93d6bf66ae8354ce041"],["/img/index2.jpg","c9271b5ef767f869fd90a3f3aff80ab5"],["/img/index3.jpg","8d9bc3a61c5c70e294785a956044e135"],["/img/iteblog.png","97ac27894e186504dea40f676a3c458a"],["/img/kaikeba.png","a195defc9b0f5bf459e4b9a4f51ae550"],["/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["/img/qi.png","9dd7c958a1b8457d96da286dcffdfadb"],["/img/r.png","b2de91b58d2db708f4540e9a7d4b559a"],["/img/radar.png","63a46542ee1ff838d1782943db611ff0"],["/img/sci.png","7df745d1e443f4e9172c9fd28b7ee25e"],["/img/tuan.png","6e690186e9383b822a0fbd9ad88d878d"],["/img/xinyuanjieyi.gif","54abff83241a0f8398232237eb4c20da"],["/img/zhisheng.png","5c0f70401c33a16a801a39a979e4e5eb"],["/index.html","35f5b61e82853db8406d1409abc8b6f0"],["/js/main.js","455fface5a0a3ff90766ca254affe502"],["/js/search/algolia.js","c9af02da2fc1f7d634843f61536369d1"],["/js/search/local-search.js","52d5277e9dddb5d80484d07595df8dbd"],["/js/tw_cn.js","bd869d5fd54e2fe1f1eeee7c46fa46bc"],["/js/utils.js","5720a78dca20fab16f21914ae3ac0757"],["/link/index.html","6c3d31550e44b14014038318ab197321"],["/live2dw/assets/moc/haruto.2048/texture_00.png","56ff69b411abfc80cb68d0b1267959c5"],["/live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["/live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["/movies/index.html","0f2630472d006d8536c1c65380a298bf"],["/page/2/index.html","5f4b26c7dd7e79c4756ff4bb8230b012"],["/page/3/index.html","1613ca74b3f6286060124965fbdebcd2"],["/page/4/index.html","e668c97201112c0bd1e7b3328197b534"],["/page/5/index.html","4dc9104d1c45c96716c1d4a75ea07746"],["/playlist/index.html","32d9e9e251a0ec1f7016d8d2af4193e8"],["/repository/index.html","0d63376a23dd54a107fbf093ad504f02"],["/tags/Flink/index.html","2ba597b8aa704749b607a9d90cf13c4e"],["/tags/Flink/page/2/index.html","823f72bc460fdbcbeee3438a5aa9eb48"],["/tags/Flink/page/3/index.html","1dfe965d63c6cf701caa681a72c9b5d8"],["/tags/HBase/index.html","47fa91e71250f1a7dc5148fee642b2c6"],["/tags/Hadoop/index.html","49991c43100051f56bec6e44cc8dc57e"],["/tags/JVM/index.html","dd111afd5a40b81fb0c7b0400540ad39"],["/tags/Java/index.html","03729bccbf6cdb2b49a7c41d621f0353"],["/tags/Kafka/index.html","fe70e8cac1cf0031c46b7e4b551fed68"],["/tags/Spark/index.html","5f8e3e1fbdc06d77344e6140121ebf92"],["/tags/index.html","a6183dd5daabb8cd59c3c57de3650f65"],["/tags/大数据/index.html","019861439c2fd202b786f3cb105f48f7"],["/tags/大数据/page/2/index.html","6f54caf239f6b86ce8312b6f5b4134c6"],["/tags/大数据/page/3/index.html","a5966b85d868d38f3953d0af36436044"],["/tags/大数据/page/4/index.html","bb04a32c25a2f80855a6bc458625cdac"],["/tags/滴滴智慧出行/index.html","43bd0621fcaa7987c6ac174bb250f894"],["/teach/index.html","85a2c4ee26474461fa8d6121d3148e0d"],["/teach/jvm/index.html","862da0bc57b4463b035c2f4106605827"]];
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




