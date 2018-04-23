<p align="center">
  <br>
  <img width="200" src="./logo.svg" alt="logo of vue-awesome repository">
  <br>
  <br>
</p>


# newsSearch


<p align="left">
  <a href="https://github.com/vuejs/vue">
    <img src="https://img.shields.io/badge/vue-2.5.10-brightgreen.svg" alt="vue">
  </a>
  <a href="https://github.com/ElemeFE/element">
    <img src="https://img.shields.io/badge/element--ui-2.0.8-brightgreen.svg" alt="element-ui">
  </a>
  <a href="https://travis-ci.org/PanJiaChen/vue-element-admin" rel="nofollow">
    <img src="https://travis-ci.org/PanJiaChen/vue-element-admin.svg?branch=master" alt="Build Status">
  </a>
  <a href="https://github.com/PanJiaChen/vue-element-admin/blob/master/LICENSE">
    <img src="https://img.shields.io/github/license/mashape/apistatus.svg" alt="license">
  </a>
</p>


社会新闻检索系统，信息检索导论大作业,实现以下功能：
新闻及评论搜索：定向采集不少于4个中文社会新闻网站或频道，实现这些网站新闻信息及评论信息的自动爬取、抽取、索引和检索。
(1)新闻网页数目不少于10万页。每个新闻网页及其评论能在1天内更新。
(2)支持关键词检索及通配符检索。检索时间平均不超过2秒。
(3)能按相关度、时间、热度(需要自己定义)等属性对检索结果进行排序。能对评论的贬褒进行分析。
(4)具备查询自动补齐、相关搜索推荐、snippet生成、结果预览(鼠标移到相关结果，能预览)等功能。
(5)每条检索结果下面可以对相似新闻进行查找。
(6)首页中列举当前最热的社会新闻。


## 技术栈
vue2 + vuex + vue-router + webpack + axios + element-UI


## 开发
```bash
    # 克隆项目
    git clone https://github.com/zhenzhencai/newsSearch.git

    # 安装依赖
    npm install
    //or # 建议不要用cnpm  安装有各种诡异的bug 可以通过如下操作解决npm速度慢的问题
    npm install --registry=https://registry.npm.taobao.org

    # 本地开发 开启服务
    npm run dev
```


## 效果图

![](https://github.com/zhenzhencai/newsSearch/blob/master/xgIMG/001.png)

![](https://github.com/zhenzhencai/newsSearch/blob/master/xgIMG/002.png)

![](https://github.com/zhenzhencai/newsSearch/blob/master/xgIMG/003.png)

![](https://github.com/zhenzhencai/newsSearch/blob/master/xgIMG/004.png)
