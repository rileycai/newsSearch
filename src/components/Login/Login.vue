<template>
<div id="wrapper" :style="winSize">
    <div class="s-skin-container"></div>
    <div id="head">
			<div id="head_wrapper" class="s-isindex-wrap head_wrapper s-title-img ">
				<div id="s_fm" class="s_form">
					<div class="s_form_wrapper soutu-env-nomac soutu-env-newindex" id="s_form_wrapper">
						<div id="lg" class="s-p-top">
              <img id="s_lg_img" src="../../../static/images/logo.png" width="270" height="129"  title="" cursor="default">
            </div>
            <form id="form">
                <span class="quickdelete-wrap">
                    <el-autocomplete popper-class="my-autocomplete" v-model="search" :fetch-suggestions="querySearch"
                        placeholder="请输入查询内容"  @select="handleSelect" style="width:640px;">
                     <i class="el-icon-edit el-input__icon" slot="suffix" @click="handleIconClick"></i>
                       <template slot-scope="props"><div class="name">{{ props.item.value }}</div></template>
                       <el-button slot="append" icon="el-icon-search" @click="onSeaNews()" id="su">千度一下</el-button>
                    </el-autocomplete>
                </span>
            </form>
				</div>
			</div>
		</div>

    <div id="s_wrap">
			<div id="s_main" class="clearfix">
        <el-row>
          <el-col :span="24" style="border-bottom: 1px solid #e9e9e9;">
             <div id="newsTitle">
                  <p class="el-icon-star-off">
                      {{title}}
                  </p>
             </div>
          </el-col>
        </el-row>

        <el-row>
          <el-col :span="16" style="border-right: 1px solid #e9e9e9;">
             <div id="seaCondition"  v-show="showNewsBlock">
               <span class="subCondition">
                 <span>
                   排序：
                 </span>
                 <el-radio v-model="order" label="1">升序</el-radio>
                 <el-radio v-model="order" label="2">降序</el-radio>
               </span>
               <span class="subCondition">
                 <span>
                   条件：
                 </span>
                 <el-radio v-model="condition" label="1">相关度</el-radio>
                 <el-radio v-model="condition" label="2">时间</el-radio>
                 <el-radio v-model="condition" label="3">热度</el-radio>
               </span>
             </div>
             <div id="newsContent">
                  <div v-for="item in searchNews" class="newsItem">
                      <a class="itemTitle" :href="item.url" target="_blank" v-html="item.title"></a>
                      <p class="itemSource">
                        {{item.source==NULL?"中国新闻网":item.source}}&ensp;&ensp; {{item.time}}
                      </p>
                      <p v-html="item.snippet" class="itemContent">
                      </p>
                      <div class="itemOther">
                        <el-popover placement="right" width="680" trigger="click">
                             <div v-for="relat in relateNews" class="newsItem" style="margin:10px;padding-bottom:10px;">
                               <a class="itemTitle" :href="relat.url" target="_blank" v-html="relat.title"></a>
                               <p class="itemSource">
                                 {{relat.source}}&ensp;&ensp; {{relat.time}}
                               </p>
                               <p v-html="relat.snippet" class="itemContent">
                               </p>

                             </div>
                             <el-button slot="reference" type="text" size="mini" style="color: #7a77c8;font-size:13px;margin-right:10px;" @click="showRealteNews(item.id)">查看更多相关新闻>></el-button>
                         </el-popover>


                        <el-popover placement="right" width="800" trigger="click">
                             <div class="details">
                                  <h3 v-html="item.title"></h3>
                                  <p  class="time">
                                    {{item.source}}&ensp;&ensp; {{item.time}}
                                  </p>
                                  <p v-html="item.content">

                                  </p>
                             </div>
                             <el-button  slot="reference" type="text"  size="mini" style="color: #666;font-size:13px;margin-right:10px;">新闻快照</el-button>
                         </el-popover>

                         <el-popover placement="right" width="500" trigger="click">
                               <div v-for="(com,index) in comments" class="commentStyle">
                                 <el-row>
                                   <el-col :span="12">
                                        <h2>{{com.user_id}}</h2>
                                   </el-col>
                                   <el-col :span="12">

                                     <p class="commentTime">
                                       {{com.cmt_time}}
                                     </p>
                                   </el-col>
                                 </el-row>
                                 <el-row style="margin: 15px 0 10px 0;">
                                   <el-col :span="22" :offset="1">
                                     <p class="commentContent">
                                       {{com.hot_content}}
                                     </p>
                                   </el-col>
                                 </el-row>
                                 <el-row>
                                   <el-col :span="24">
                                     <span style="float:right;">
                                       <el-rate v-model="apprise[index]" :colors="['#99A9BF', '#F7BA2A', '#FF9900']"  :texts="['贬义评论', '近似贬义', '中性评论', '近似褒义', '褒义评论']" show-text></el-rate>
                                     </span>
                                   </el-col>
                                 </el-row>
                               </div>

                              <!-- <el-button  slot="reference" type="text"  size="mini" style="color: #666;font-size:13px;margin-right:10px;" v-popover:popover5>新闻快照</el-button> -->
                              <el-button slot="reference" type="text" size="mini" style="font-size:13px;" @click="showComments(item.url)">查看评论</el-button>
                          </el-popover>


                      </div>
                  </div>
             </div>
             <div id="relativeSea" v-show="showNewsBlock">
               <h2>相关搜索</h2>
               <table>
                 <tbody>
                   <tr>
                     <th>
                       <a @click="onRelatSearch(list[0])">{{list[0]}}</a>
                     </th>
                     <th>
                       <a @click="onRelatSearch(list[1])">{{list[1]}}</a>
                     </th>
                     <th>
                       <a @click="onRelatSearch(list[2])">{{list[2]}}</a>
                     </th>
                   </tr>
                   <tr>
                     <th>
                       <a @click="onRelatSearch(list[3])">{{list[3]}}</a>
                     </th>
                     <th>
                       <a @click="onRelatSearch(list[4])">{{list[4]}}</a>
                     </th>
                     <th>
                       <a @click="onRelatSearch(list[5])">{{list[5]}}</a>
                     </th>
                   </tr>
                   <tr>
                     <th>
                       <a @click="onRelatSearch(list[6])">{{list[6]}}</a>
                     </th>
                     <th>
                       <a @click="onRelatSearch(list[7])">{{list[7]}}</a>
                     </th>
                     <th>
                       <a @click="onRelatSearch(list[8])">{{list[8]}}</a>
                     </th>
                   </tr>
                 </tbody>

               </table>


             </div>
             <div id="pagination" v-show="showNewsBlock">
               <el-pagination
                   background
                   v-if='paginations.total>0'
                   :page-size="paginations.page_size"
                   :layout="paginations.layout"
                   :total="paginations.total"
                   :current-page='paginations.current_page'
                   @current-change='onChangeCurrentPage'
                   >
               </el-pagination>

             </div>

          </el-col>
          <el-col :span="8">
             <div id="hotNews">
                 <div class="subtitle">
                   <span>实时热点</span>
                   <span class="el-icon-loading" style="float:right;"></span>
                 </div>
                  <ul>
                    <li class="news-meta-item" v-for="item in hotNews">
                      <span class="news-title">
                        <span class="title-link">
                          <a class="title-content" :href="item.url" target="_blank">{{item.title}}</a>
                          <span class="new-identity"></span>
                        </span>
                      </span>
                    </li>
                  </ul>
             </div>
          </el-col>
        </el-row>

      </div>
    </div>


    <div id="footer">
        <span>信息检索导论课程大作业 ©2017 信息工程研究所</span>
    </div>



	</div>

</div>
</template>

<script>
import LoginJs from './Login.js';
module.exports = LoginJs;
</script>

<style scoped lang='less'>
body,h1,h2,h3,h4,h5,h6,hr,p,blockquote,dl,dt,dd,ul,ol,li,pre,
form,fieldset,legend,button,input,textarea,th,td {
  margin: 0;
  padding: 0
}
form{
  display: block;
}
html {
  color: #000;
  overflow-y: scroll;
  overflow: -moz-scrollbars
}

body,button,input,select,textarea {
  font: 12px arial
}

h1,h2,h3,h4,h5,h6 {
  font-size: 100%
}

em {
  font-style: normal
}

small {
  font-size: 12px
}

ul,
ol {
  list-style: none
}

a {
  text-decoration: none
}

a:hover {
  text-decoration: underline
}

legend {
  color: #000
}

fieldset,
img {
  border: 0
}

button,
input,
select,
textarea {
  font-size: 100%
}

table {
  border-collapse: collapse;
  border-spacing: 0
}

img {
  -ms-interpolation-mode: bicubic
}

textarea {
  resize: vertical
}

.left {
  float: left
}

.right {
  float: right
}

.overflow {
  overflow: hidden
}

.hide {
  display: none
}

.block {
  display: block
}

.inline {
  display: inline
}

.error {
  color: #F00;
  font-size: 12px
}

label,
button {
  cursor: pointer
}

.clearfix:after {
  content: '\20';
  display: block;
  height: 0;
  clear: both
}

.clearfix {
  zoom: 1
}

.clear {
  clear: both;
  height: 0;
  line-height: 0;
  font-size: 0;
  visibility: hidden;
  overflow: hidden
}

.wordwrap {
  word-break: break-all;
  word-wrap: break-word
}

.s-yahei {
  font-family: arial, 'Microsoft Yahei', '微软雅黑'
}

pre.wordwrap {
  white-space: pre-wrap
}

body {
  text-align: center;
  font-family: arial, 'Microsoft Yahei', '微软雅黑'
}

body,
form {
  position: relative;
  z-index: 0
}

td {
  text-align: left
}

img {
  border: 0
}


#wrapper{
  height: 100%;
}
.s-skin-container {
    background-color: rgb(64, 64, 64);
    background-image: url("../../../static/images/backgroud.jpg");
    position: fixed;
    _position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    min-width: 1000px;
    z-index: -10;
    background-position: center 0;
    background-repeat: no-repeat;
    background-size: cover;
    -webkit-background-size: cover;
    -o-background-size: cover;
    zoom: 1
}
#head {
    position: relative;
    height: 100%;
    width: 100%;
    min-height: 768px;
    cursor: default;
    background: none;
}

#head_wrapper {
  position: relative;
  height: 38.2%;
  min-height: 293px;
  width: 1000px;
  margin: 0 auto;
  _height: 293px
}

#head_wrapper.s-down {
  position: fixed;
  _position: static;
  top: 0;
  left: 50%;
  height: 50px;
  min-height: 50px;
  z-index: 20;
  width: 802px;
  padding-top: 9px;
  margin-left: -447px;
  _margin: 0 auto
}

#head .s-ps-islite {
  _padding-bottom: 370px
}

#head_wrapper.s-ps-islite {
  padding-bottom: 370px
}

#head_wrapper.s-ps-islite #s_lm_wrap {
  bottom: 298px;
  background: none !important;
  filter: none !important
}

#head_wrapper.s-ps-islite .s_form {
  position: relative;
  z-index: 1
}

#head_wrapper.s-ps-islite .fm {
  position: absolute;
  bottom: 0
}

#head_wrapper.s-ps-islite .s-p-top {
  position: absolute;
  bottom: 40px;
  width: 100%;
  height: 181px
}

#head_wrapper.s-ps-islite #s_lg_img {
  position: static;
  margin: 33px auto 0 auto
}

#head_wrapper.s-down .s_form_wrapper {
  width: 805px
}

#head_wrapper.s-down .s_form {
  min-width: 550px;
  margin: 0;
  width: 100%;
  height: 100%
}

#head_wrapper.s-down .s-p-top {
  display: none
}

.s_lm_hide {
  display: none !important
}

#head_wrapper.s-down .fm,
#head_wrapper.s-down #result_logo {
  display: inline-block;
  *display: inline;
  zoom: 1;
  vertical-align: middle
}

#head_wrapper.s-down #result_logo {
  -webkit-animation: fadein 1s
}

#head_wrapper.s-down #s_lm_wrap {
  display: none
}

@-webkit-keyframes fadein {
  from {
    opacity: 0
  }
  to {
    opacity: 1
  }
}

#head_wrapper.s-down #result_logo img {
  width: 101px
}

#head_wrapper.s-down .fm {
  margin: 8px 0 0 25px
}

.s-lite-version #m {
  padding-top: 125px
}

#head_wrapper .s-p-top {
  height: 61.8%;
  min-height: 181px;
  position: relative;
  z-index: 0;
  text-align: center
}

#s_lg_img {
  position: absolute;
  bottom: 10px;
  left: 50%;
  margin-left: -135px
}

#head_wrapper .s-word-top {
  margin-top: -1px;
  margin-bottom: 11px
}

.s_form {
  width: 641px;
  height: 100%;
  min-height: 293px;
  margin: 0 auto 0 auto;
  text-align: left;
  z-index: 100
}

.s-down .s_form {
  padding-left: 0;
  margin-top: 0;
  min-height: 0
}

.s_form .tools {
  position: absolute;
  right: -55px
}

.s_form_wrapper {
  height: 100%
}

.quickdelete-wrap {
    position: relative;
    width:537px;
}
#sea-btn{
  z-index: 1;
  position: absolute;
  right: 500px;
  top: 10px;
  height: 20px;
  width: 20px;
  color:#acacac;
  background: transparent;
}
#kw {
    margin:0;
    width: 537px!important;
    float:left;
    /*padding-right: 50px !important;*/
    background-image: none;
    height: 40px !important;
    line-height: 20px;
    box-shadow: rgba(0, 0, 0, 0.2) 0px 1px 3px;
    padding: 10px 50px 10px 50px;
    border-width: 0px;
    border-style: initial;
    border-color: initial;
    border-image: initial;
    vertical-align: top;
    outline: none;
    font: 16px arial;
}
#su{
    padding:0 20px;
    background: -webkit-linear-gradient(rgb(240, 240, 240), rgb(220, 220, 220), rgb(240, 240, 240)); /* Safari 5.1 - 6.0 */
    background: -o-linear-gradient(rgb(240, 240, 240), rgb(220, 220, 220), rgb(240, 240, 240)); /* Opera 11.1 - 12.0 */
    background: -moz-linear-gradient(rgb(240, 240, 240), rgb(220, 220, 220), rgb(240, 240, 240)); /* Firefox 3.6 - 15 */
    background: linear-gradient(rgb(240, 240, 240), rgb(220, 220, 220), rgb(240, 240, 240)); /* 标准的语法（必须放在最后） */
}
#su:active{
  background: -webkit-linear-gradient(rgb(220, 220, 220), rgb(240, 240, 240), rgb(220, 220, 220)); /* Safari 5.1 - 6.0 */
  background: -o-linear-gradient(rgb(220, 220, 220), rgb(240, 240, 240), rgb(220, 220, 220)); /* Opera 11.1 - 12.0 */
  background: -moz-linear-gradient(rgb(220, 220, 220), rgb(240, 240, 240), rgb(220, 220, 220)); /* Firefox 3.6 - 15 */
  background: linear-gradient(rgb(220, 220, 220), rgb(240, 240, 240), rgb(220, 220, 220)); /* 标准的语法（必须放在最后） */
}

#s_wrap {
  width: 100%;
  margin: 0 auto;
  position: relative;
  z-index: 0;
  min-width: 1200px
}

#s_main {
    display: block;
    position: relative;
    margin: 0 auto;
    width: 60%;
    /* width: 76%; */
    /* //新闻框宽度 */
    background: rgba(255, 255, 255, .7) !important;
    border-color: rgba(226, 226, 226, .9) !important;
    border-radius: 5px;
    padding: 0px;
    margin-bottom: 50px;
}
.clearfix {
    zoom: 1;
}

#newsTitle{
     color: #333;
     height: 40px;
     line-height: 40px;
     margin: 0 20px;
}
#newsTitle p{
  font-size: 16px;
  font-weight: 600;

}

#hotNews{
   margin: 20px 25px;
   display: inline-block;
   zoom: 1;
   vertical-align: middle;
   max-width: 280px;
   /* padding: 0 10px; */
}
.subtitle{
  font-size: 16px;
  font-weight: 600;
  margin: 0 0 10px 0;
}



#seaCondition{
  margin: 20px 0px 70px 0px;
  position: relative;
}
.subCondition{
  margin-right:50px;
  float: right !important;
}
.subCondition span{
  font-size: 14px;
  color:#333;
  margin-right: 20px;
}

#newsContent{
  width: 94%;
  margin: 40px auto;
  position: relative;
  /* margin-bottom: 20px; */
}
 .newsItem{
  width:100%;
  margin: 20px 0;
  border-bottom: 1px solid #e9e9e9;
}

 .newsItem .itemTitle{
      color: #409EFF;
      font-weight: bold;
      font-size: 16px;
      line-height: 1.54;
      text-decoration: none;
}
 .newsItem .itemTitle:visited{
      color: #810081;
}
 .newsItem .itemTitle:hover{
      color: #00c;
}

 .newsItem .itemSource{
      color: #666;
      font-size: 13px;
      margin: 5px 0;
}
 .newsItem .itemContent{
      color: #333;
      font-size: 14px;
      line-height: 1.64;
      max-width: 620px;
      height: 42px;
      overflow: hidden;
      text-overflow: ellipsis;
      /* margin: 0 0 10px 0; */
      /* white-space: nowrap; */
}
 .newsItem .itemOther{
     margin: 5px 0 10px 0;
}


 .details{
   text-align: center;
   padding: 20px;
}

.details h3{
   font-size: 18px;
   color:#333;
   font-weight: blod;
   margin-bottom: 10px;

}
.details .time{
  color: #666;
  font-size: 13px;
  margin-bottom: 10px;
}
.details p{
   line-height: 1.8;
   font-size: 14px;
}


#relativeSea{
  width: 94%;
  margin: 40px auto;
  position: relative;
  margin-bottom: 20px;
}
#relativeSea h2{
  margin-bottom: 10px;
}

#relativeSea table{
  width: 600px;
}
#relativeSea th{
    width: 200px;
    line-height: 22px;
    font-size: 14px;
    font-weight: 400;
    white-space: nowrap;
    text-align: left;
    vertical-align: top;
}

#relativeSea th a{
   color:#00c;
   font-weight: blod;
   text-decoration: underline;
}
#relativeSea th a:hover{

  color: #409EFF;

}

#pagination{
  width: 94%;
  margin: 40px auto;
  position: relative;
  margin-bottom: 20px;
  /* text-align: center; */

}



#s-mancacrd-main {
    position: relative;
    z-index: 2;
}



.s-ctner-menus {
    color: #333;
    border-bottom: 1px solid #e9e9e9;
    z-index: 11;
    height: 39px;
    line-height: 40px;
    border: none;
    width: 895px;
    position: relative;
    margin: 0 auto;
    text-align: left;
    font-size: 14px;
    background: rgba(255, 255, 255, .7) !important;
    border-color: rgba(226, 226, 226, .9) !important;

}

#s_menu_mine{
  color: #333;
  height: 39px;
  display: inline-block;
  zoom: 1;
  vertical-align: top;
  float: left;
  text-align: center;
  width: 120px;
  cursor: pointer;
  background: rgba(220, 220, 220, .5) !important;
  border-right: solid 1px #e0e0e0;
}

#s-container{
    border: 1px solid transparent;
    background: rgba(255, 255, 255, .7) !important;
    position: relative;
    width: 895px;
    padding: 0 25px 0 25px;
    min-height: 438px;
    border-top: solid 1px #e0e0e0;
}
.s-news-rank-wrapper {
    position: absolute;
    right: 5px;
    width: 300px;
    margin-top: 20px;
    text-align: left;
}
.s-news-rank-wrapper .s-rank-title {
    height: 30px;
    width: 270px;
}
.s-news-rank-wrapper .s-rank-title .title-text {
    float: left;
    height: 22px;
    width: 94px;
    padding-top: 3px;
    font-size: 14px;
    font-weight: bold;
}
.s-news-rank-wrapper .s-rank-title .title-text a {
    text-decoration: none;
    color: #333;
}
.s-news-rank-wrapper .s-rank-title .hot-refresh {
    display: block;
    float: right;
    height: 22px;
    padding-top: 3px;
    width: 60px;
    cursor: pointer;
}
.s-news-rank-wrapper .s-rank-title .hot-refresh-text {
    font-size: 13px;
    width: 40px;
    text-align: center;
    white-space: nowrap;
    display: inline-block;
    zoom: 1;
    vertical-align: top;
}


.news-meta-item {
    position: relative;
    width: 100%;
    display: inline-block;
    zoom: 1;
    list-style: square;
    margin: 0 5px;
}
.news-meta-item .news-title {
    width: 100%;
    display: inline-block;
    zoom: 1;
    vertical-align: middle;
    height: 34px;
    line-height: 34px;
}
.news-meta-item .news-title .title-link {
    float: left;
    display: block;
    font-size: 14px;
}
.news-meta-item .news-title .title-link .title-content{
    display: inline-block;
    zoom: 1;
    vertical-align: middle;
    max-width: 280px;
    /* min-width:200px; */
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    color: #333;
}
.news-meta-item .news-title .title-link .title-content:hover{
    color: #07f;
}

.s-news-list-wrapper{
  float: left;
  text-align: left;
  width: 538px;
  padding-top: 0;
}
.s-news-list-wrapper .s-news-item{
    /*display: table;*/
    zoom: 1;
    overflow: hidden;
    min-height: 210px;
    border-bottom: solid 1px #e0e0e0;
    position: relative;
}
.s-news-list-wrapper .s-news-item h2{
    width: 100%;
    padding-top: 20px;
    padding-bottom: 12px;
    font-size:18px;

}
.s-news-list-wrapper .s-news-item h2 a{
    font-size: 18px;
    font-family: arial, 'Microsoft Yahei', '微软雅黑';
    color:#333;
    font-weight: bold;
    line-height: 20px;
}
.s-news-list-wrapper .s-news-item h2 a:hover{
    color: #07f;
}
.s-news-list-wrapper .s-news-item .s-pic-content{
    width: 540px;
    height: 120px;
}
.s-news-list-wrapper .s-news-item .s-pic-content img{
    height: 120px;
    width: 180px;
    float: left;
}
.s-news-list-wrapper .s-news-item .s-pic-content span{
    float:left;
    width: 340px;
    height: 108px;
    padding: 5px 0 20px 20px;
    overflow: hidden;
    color:rgba(0,0,0,0.6);
}
.source{
    color:rgba(0,0,0,0.4);
    padding: 10px 0 10px 0;
    font-size: 13px;
}
#footer{
  width: 100%;
  height: 40px;

  text-align: center;
  z-index: 100;
  bottom: 0px;
  left: 0;
  overflow: hidden;
  color: #ffff;
  zoom: 1;
  margin: 20px 0 0 0;
}
#footer span{
  color:#ffffff;
  font-size: 14px;
}

.my-autocomplete {
  li {
    line-height: normal;
    padding: 7px;

    .name {
      text-overflow: ellipsis;
      overflow: hidden;
    }
    .addr {
      font-size: 12px;
      color: #b4b4b4;
    }

    .highlighted .addr {
      color: #ddd;
    }
  }
}

.commentTime{
   color: #666;
   font-size: 13px;
   text-align: right;
}
.commentContent{
  color: #333;
  font-size: 14px;
  line-height: 1.64;
  overflow: hidden;
  text-overflow: ellipsis;
}

.commentStyle{
   margin: 10px;
   border-bottom: 1px solid #e9e9e9;
   padding-bottom: 10px;
   // padding: 10px;
}
</style>
