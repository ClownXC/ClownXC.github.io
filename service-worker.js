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

var precacheConfig = [["/2019/02/12/消息系统-Kafka(1)：初识Kafka/index.html","c2982c18171bb527c12d0c0843d2db7d"],["/2019/02/12/消息系统-Kafka(2)：生产者/index.html","051694c7ac99558b0aca390c4388ba05"],["/2019/02/13/消息系统-Kafka(3)：消费者/index.html","8ac8fc31fdc21541b027a0f085607e35"],["/2019/02/15/消息系统-Kafka(5)：可靠性保障/index.html","f0e9ac371fad23bda4f9a15e380085da"],["/2019/02/22/DataNode启动流程/index.html","273a520b35e62983099c45b85b825197"],["/2019/02/28/数据查询平台/index.html","2c53bb794472f981bdb7b25147a13549"],["/2019/03/02/SparkSQL-基于-HBase-做⾃定义数据源/index.html","0264c22ef3ddcabc51d2270f5a6dfaa1"],["/2019/06/25/JVM 类加载机制学习/index.html","5c4c102049df0f21ecb03b33bf1c6e8d"],["/2019/07/01/JVM-垃圾收集器-1-垃圾回收算法/index.html","62a34019eefc3c773bd68d019790f4aa"],["/2019/07/03/JVM-指令集/index.html","40097a5157e52616d16b8f830b4627b2"],["/2019/07/12/消息系统-Kafka(4)：事务/index.html","a1c9709c9e6df50e0dc174f5d7bce538"],["/2019/07/27/JVM-字节码-1-数据类型/index.html","613d2f1efaff3655272e08431949153f"],["/2019/10/10/Spark架构/index.html","f8395ab72f190526344371c3179d9ad6"],["/2019/10/15/Federation /index.html","74de3b976b9bcfeacd002407241bed4d"],["/2019/11/13/智慧出行服务体系建设的开发之订单和轨迹监控/index.html","9ba074d2438887bb2e19c479a9759a3a"],["/2019/11/19/Spark 优化/index.html","7a74000c2e2dba458d0ee6160b4ed43c"],["/2019/11/22/Spark 共享变量/index.html","9d0c21a2afe2255c564424ca7306bc3f"],["/2019/11/22/Spark 存储模块/index.html","c08536e1f366d465a0489949d0056a03"],["/2019/11/22/Spark 容错机制/index.html","9e672f8d820b13aca666eea41d0cf34d"],["/2019/11/23/Spark 数据倾斜/index.html","763c8f673c414067e6d618509e274e2e"],["/2019/11/28/Spark Shuffle/index.html","fad96227d91acafb9ddbd9461eac7503"],["/2019/12/02/Spark 任务调度机制/index.html","10c01d5ab9365bdab2f70f10704c3731"],["/2019/12/07/Flink-State-深入理解/index.html","f68e165b5af44b559ce6b82b4abaa5d3"],["/2019/12/09/Flink-重启策略/index.html","e1d50cf0ce51826c01ea2fea18d17bd4"],["/2019/12/10/Flink-保证Exactly-Once-1/index.html","68f75157594adae006c31c09b86d5e65"],["/2019/12/10/Flink-保证Exactly-Once-2/index.html","71a560a06b94cac1e10a57b8f8b8c44b"],["/2019/12/10/Flink概述/index.html","8bc2f59f095fe048724ea3820c0c9d12"],["/2019/12/11/Flink 任务提交流程/index.html","44ea3dbd05ba00679fd6112856c750b4"],["/2019/12/13/Flink-WaterMark-深入理解/index.html","94ebf1eb005f7e8354bc7817a9ecba5b"],["/2019/12/15/Flink-数据倾斜/index.html","247bb77b6b79514057c75a6c7039a483"],["/2019/12/15/Spark Streaming 和 Kafka 整合开发/index.html","429f71f0c4db56e29f3a0282a4491e0d"],["/2019/12/15/Watermark-与-Window-结合来处理延迟数据/index.html","b37794eea4e9cf313a979096217abcd7"],["/2019/12/16/Flink 状态一致性/index.html","2d36ee51141528c59d5eb6bffa48a9de"],["/2019/12/17/Flink-Window-机制深入理解/index.html","d9375f1280e7ffb57f22336eb6e25287"],["/2019/12/18/Flink-多种时间语义对比/index.html","ee3d10e2ee823a51b44a96eaf5def0d2"],["/2019/12/18/Flink-常用的-Source-和-Sink-Connectors/index.html","57706465946957e3bead94626f6bcb8d"],["/2019/12/19/Flink-状态后端存储/index.html","df26df81a66900a88232c6e8a13ebc34"],["/2019/12/26/Flink-CEP-API-学习/index.html","6f72b85d35493bc803194b12323cba1e"],["/2019/12/26/Flink-CEP深入理解/index.html","7dc3d8a07ded559f0da2ff2fe7a5cdef"],["/2019/12/28/Flink-Checkpoint-和-Savepoint-区别/index.html","d06d928448368e664cc344a7656132d5"],["/2019/12/28/Flink-Parallelism-和-Slot-深度理解/index.html","e5690b73cdb58364456a98978d053104"],["/2019/12/28/Flink-Side-Output-分流/index.html","9eabe0d303f9ba4468c4c45d36518097"],["/2019/12/28/使用-Flink-ParameterTool-读取配置/index.html","702075d8a4bc5b845ffc295b94225a5b"],["/2019/12/30/Flink-Job-并行度设置/index.html","e0c4f69c11319a535e14273494b078f8"],["/2020/01/28/使用-Flink-ProcessFunction-处理宕机告警/index.html","7ebe948041d1065543a808d6773c5cc3"],["/2020/04/04/Flink-数据倾斜/Kafka 消息有序/index.html","655fe3983f312c080ace71dd79adf4a8"],["/2020/04/22/Flink-数据倾斜/Kafka 消息不丢失/index.html","82d2e65deeef53b661380aed5ae80bab"],["/2020/05/25/Cloudera平台搭建/index.html","dcad3a27d74b9068d55916b5eaf2bc01"],["/about/index.html","fcf617282ac939bddffaac60700444eb"],["/archives/2019/02/index.html","437495d6576f6fc130f021c82decab7f"],["/archives/2019/03/index.html","a4b9583d84ca0d341d646c9d0729772c"],["/archives/2019/06/index.html","9e4262882786889824cb8cd1b7032dbd"],["/archives/2019/07/index.html","bf54b07796aeec15b407458216cc7a01"],["/archives/2019/10/index.html","43ffa568afbdabc12833dc1273cf15d6"],["/archives/2019/11/index.html","6137ab8dad0d2c0c0120b8e24c1fa4c6"],["/archives/2019/12/index.html","f29a19fe8b08345457215331665dc58d"],["/archives/2019/12/page/2/index.html","9e18258c330d5d48eccc312bce7f1a20"],["/archives/2019/12/page/3/index.html","c35a160b539dc603f519b7700515dae0"],["/archives/2019/index.html","26ca3d1a7e47e7bc8578d8c4e5c463e5"],["/archives/2019/page/2/index.html","ec0180364613e82d76c755ac2f93afdb"],["/archives/2019/page/3/index.html","074be6a712698154a85c24ecb70f486f"],["/archives/2019/page/4/index.html","5f6adbe3e17333676c56cd23e3f2b075"],["/archives/2019/page/5/index.html","cb867fdc2080dc359e89bcff44d44c0d"],["/archives/2020/01/index.html","b83b9895c602e53c58ab3ce41389c722"],["/archives/2020/04/index.html","c8d43862664b004094b121a8356dbe21"],["/archives/2020/05/index.html","33da67830adeab9da753bf4a1645f813"],["/archives/2020/index.html","77fb42098dad28265842d75916c159af"],["/archives/index.html","e8b6bd44025ac96ce0a1500e1f499864"],["/archives/page/2/index.html","5c9b2cfffbfbc874074f1fae335a718f"],["/archives/page/3/index.html","0c7e690bb9b97ead66c8ffea12815d4d"],["/archives/page/4/index.html","334e4b4ecc05dcf44cbb825f25f50417"],["/archives/page/5/index.html","c43bce75433bb95af9c8095ee4da03aa"],["/assets/algolia/algoliasearch.js","d5d2500bfe8443b42baaefe4996ee532"],["/assets/algolia/algoliasearch.min.js","9c5e51e57e2b1d888950bf4cb5708c49"],["/assets/algolia/algoliasearchLite.js","ce9b0e62645c036a143f639b92e7789f"],["/assets/algolia/algoliasearchLite.min.js","c2d71f042c879659dbc97f8853b62f21"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/douban-loading.gif","b86c6b435fc25c1366acaafc3fb5c252"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/bangumis/index.html","9849b175c336e7d89518dd15b5c91a31"],["/books/index.html","f1f527b84a418d33a3dc3d17ab3bb8f9"],["/categories/Cloudera/index.html","d3afa44b6bc3d3a26d8513a3433064ea"],["/categories/Flink/index.html","63ada8e65c5fad79223fbb4d47fc0cf9"],["/categories/Flink/page/2/index.html","864cd26374833505fbeec4428a2b1f56"],["/categories/Flink/page/3/index.html","70df9a9da6e1301e0b94ccfddf96e1cb"],["/categories/HBase/index.html","e162a94d39b82abe373032a13c979d77"],["/categories/Hadoop-源码阅读/index.html","10822b78aac67c0dce141b7c01b1fc42"],["/categories/Hadoop/index.html","99dfaca45bb5067c0b16704246b15412"],["/categories/Kafka/index.html","5bd1e2d3ad5d5ec0eb8cbf585bcf727b"],["/categories/Spark/index.html","8c38d985ac7be155a04d2ff9317c1a50"],["/categories/index.html","5b68673b1af789d62cec97f354f9bfef"],["/categories/大数据/index.html","5e7dd7b13cc1feaf80962058ce5e54c3"],["/categories/深入理解-JVM/index.html","caddeec944f11efb4fbd6c643a9f8104"],["/categories/滴滴智慧出行/index.html","dac3db3bcf6851fb6b9f6e5dd2c62068"],["/css/iconali.css","fa1cccd4c0da43188e2be63d9caa7d72"],["/css/iconfont.css","eec88158584f09918b99a22b3a7157a4"],["/css/index.css","5133f7ba97eb4833b45d0ea9266a542e"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/gallery/index.html","fd7d73f29be2ca393bccd82adc5b9940"],["/gallery/marvel/index.html","113cee06ec526e1fe59806bf2e16f03f"],["/gallery/wallpaper/index.html","19551b8ccd6e217df6b98110d286e0e2"],["/games/index.html","f3549a02391a3e0e8dbbe609b70e0cc2"],["/hello/index.html","5b6b3b25f0c105f41a9d64eb4619777d"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["/img/atguigu.png","b45caf5563140de0fb9714e4c3b468f7"],["/img/bilibili.png","4c563d5152162d427653335e00079a34"],["/img/brown.png","daa10a827eab673dd80c97c783fba48e"],["/img/chen.jpg","f7e5e4474ce8e32ad70391db846092ef"],["/img/drawio.png","89e735e0ca3ecf10c37b0442e5e6cc8a"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/hello.gif","7126e2e75b713bc0cda0bf327766607a"],["/img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["/img/imysql.png","4b7194790d7a4e2aedcdeeef73b8336d"],["/img/index.jpg","8c4c316aa611c93d6bf66ae8354ce041"],["/img/index2.jpg","c9271b5ef767f869fd90a3f3aff80ab5"],["/img/index3.jpg","8d9bc3a61c5c70e294785a956044e135"],["/img/iteblog.png","97ac27894e186504dea40f676a3c458a"],["/img/kaikeba.png","a195defc9b0f5bf459e4b9a4f51ae550"],["/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["/img/qi.png","9dd7c958a1b8457d96da286dcffdfadb"],["/img/r.png","b2de91b58d2db708f4540e9a7d4b559a"],["/img/radar.png","63a46542ee1ff838d1782943db611ff0"],["/img/sci.png","7df745d1e443f4e9172c9fd28b7ee25e"],["/img/tuan.png","6e690186e9383b822a0fbd9ad88d878d"],["/img/xinyuanjieyi.gif","54abff83241a0f8398232237eb4c20da"],["/img/zhisheng.png","5c0f70401c33a16a801a39a979e4e5eb"],["/index.html","165f6d74356c14bdee81c38b41328a9d"],["/js/main.js","455fface5a0a3ff90766ca254affe502"],["/js/search/algolia.js","c9af02da2fc1f7d634843f61536369d1"],["/js/search/local-search.js","52d5277e9dddb5d80484d07595df8dbd"],["/js/tw_cn.js","bd869d5fd54e2fe1f1eeee7c46fa46bc"],["/js/utils.js","5720a78dca20fab16f21914ae3ac0757"],["/link/index.html","ce68338f1a3066dc9d499daa33ea34a3"],["/live2dw/assets/moc/haruto.2048/texture_00.png","56ff69b411abfc80cb68d0b1267959c5"],["/live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["/live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["/movies/index.html","6edb17c98c5883caf498145178e6615b"],["/page/2/index.html","a1fa86f86e9dd66e03a68936d305a9db"],["/page/3/index.html","def814cf4f4845792ff7ab0b2458f18a"],["/page/4/index.html","7bab595c6251a8f95cf4d1e33908b2b7"],["/page/5/index.html","df6649be5637c72b3ec06ce4101dfd53"],["/playlist/index.html","4936b596e7c3c2798e144d1b675f5834"],["/repository/index.html","5036673beb597e4e1b4491f7d92395f8"],["/tags/Flink/index.html","5df173468c3a489caeb330ed7978c88d"],["/tags/Flink/page/2/index.html","c8a594cdbb0a31aad17c5c58312a9fd9"],["/tags/Flink/page/3/index.html","9cd34de1d74fc689350d0884860c475e"],["/tags/HBase/index.html","d79ea2f664f55c05119229c071aa3e4c"],["/tags/Hadoop/index.html","6eac219453b14b779026b0c5886edaf2"],["/tags/JVM/index.html","b0cbbf9fb8f8aa2609d1c4e551a3fb37"],["/tags/Java/index.html","d3d8bdc469090f834126edb33f3f44cc"],["/tags/Kafka/index.html","74a07787dc9312fb52afc48bbe913195"],["/tags/Spark/index.html","714a1333609226f02f4111664870a259"],["/tags/index.html","d55837e56fa3b5529d819c4dbbfec271"],["/tags/大数据/index.html","e0d90da0cded12b6c1b55d99983d96c3"],["/tags/大数据/page/2/index.html","b2f22784a221aa66e26c9e146079e8a6"],["/tags/大数据/page/3/index.html","5f806c7feae7ebc9e93055ffbb7c0e8e"],["/tags/大数据/page/4/index.html","67cd39dc106b26baabc2320f7f664286"],["/tags/滴滴智慧出行/index.html","0e6b3a0a899d061a4f5be3bf58ae9404"],["/teach/index.html","514b2e71cc5c37d18400012fb6d8dba4"],["/teach/jvm/index.html","e691ee3d3eef18ff621ab2e5dbf65dce"]];
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




