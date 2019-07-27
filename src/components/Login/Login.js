import { list as ListApi } from "../../config/request.js";

module.exports = {
  name: "login",
  data() {
    return {
      apprise: [5, 1, 3, 4, 3, 2],
      url: "",
      id: "",
      searchInfos: [],
      showNewsBlock: false,
      title: "热点新闻",
      order: "2",
      condition: "1",
      search: "",
      showContent: false,
      outerVisible: false,
      innerVisible: false,
      hotNews: [
        {
          title: "环保部：未来三天北方空气质量将转差 华北或现重污染",
          url: "http://www.chinanews.com/gn/2018/01-04/8416463.shtml"
        },
        {
          title: "支付宝年度账单刷屏 却因这行小字连夜认错，为啥？",
          url: "http://www.chinanews.com/cj/2018/01-04/8415712.shtml"
        },
        {
          title: "习近平向全军发布训令 锻造精兵劲旅迈向世界一流军队",
          url: "https://news.qq.com/a/20180104/013070.htm"
        },
        {
          title: "计划生育转型的“浙江样板”：优生优育之外，提出了优教",
          url: "http://new.qq.com/omn/20180104A0WD8N.html"
        },
        {
          title: "习近平：大抓实战化军事训练 打造精锐作战力量",
          url: "http://www.chinanews.com/gn/2018/01-04/8416530.shtml"
        },
        {
          title: "中国湖泊在2018年年底前将全面建立湖长制",
          url: "http://www.chinanews.com/gn/2018/01-04/8416614.shtml"
        },
        {
          title: "“中国天气网发手机关机预警地图 你的手机能撑多久",
          url:
            "http://xinwen.eastday.com/a/171217132840645.html?qid=news.baidu.com"
        },
        {
          title: "黑龙江公布毛振华事件调查结果 管委会负责人给予处分",
          url: "http://www.chinanews.com/sh/2018/01-04/8416512.shtml"
        },
        {
          title: "春运之变，用技术进步满足人文关怀",
          url: "http://new.qq.com/cmsn/20180104004245"
        },
        {
          title: "2018年五险一金将迎来5个变化 每个都是好消息！",
          url: "http://www.chinanews.com/cj/2018/01-04/8415675.shtml"
        }
      ],
      comments: [
        {
          user_id: "有态度的网友",
          cmt_time: "一天前",
          hot_content: "祝国家富强，人民安康",
          apprise: 5
        },
        {
          user_id: "专业批判20年",
          cmt_time: "2017年12月26日 08:20",
          hot_content: "呵呵哒，现在什么消息都能写新闻了嘛？",
          apprise: 1
        },
        {
          user_id: "真真真淑女",
          cmt_time: "2017年12月25日 13:57",
          hot_content: "评论抢沙发！！！！",
          apprise: 3
        },
        {
          user_id: "未来的巨星",
          cmt_time: "2017年12月23日 21:23",
          hot_content: "又是美好的新一天~",
          apprise: 4
        },
        {
          user_id: "未来的巨星",
          cmt_time: "2017年12月23日 21:23",
          hot_content: "对这个社会要充满爱，才是正确的打开方式好不",
          apprise: 4
        }
      ],
      relateNews: [
        {
          snippet:
            "　　【<font color='red'>十九</font><font color='red'>大</font>代表在基层】<font color='red'>十九</font><font color='red'>大</font>代表这样宣传践行党的<font color='red'>十九</font><font color='red'>大</font>精神 　　连日来，党的<font color='red'>十九</font><font color='red'>大</font>代表在各自基层岗位上采取多种方式，向人们宣讲<font color='red'>十九</font><font color='red'>大</font>精神，分享心得、共谋发展。 　　党的<font color='red'>十九</font><font color='red'>大</font>报告谈及农村工作",
          id: 851383,
          time: "2017-11-25",
          source: "中国新闻网",
          title:
            "<font color='red'>十九</font><font color='red'>大</font>代表这样宣传践行党的<font color='red'>十九</font><font color='red'>大</font>精神-中新网",
          doc_id: 284373,
          url: "http://www.chinanews.com/gn/2017/11-25/8385292.shtml"
        },
        {
          snippet:
            "　　中新网北京10月18日电 今天上午9时，中国共产党第<font color='red'>十九</font>次全国代表大会将在北京人民大会堂开幕，随着大会开幕，中国也将正式进入“<font color='red'>十九</font><font color='red'>大</font>时间”。 　　根据<font color='red'>十九</font><font color='red'>大</font>新闻发言人庹震17日的介绍，中国共产党",
          id: 648042,
          time: "2017-10-18",
          source: "中国新闻网",
          title:
            "中共<font color='red'>十九</font><font color='red'>大</font>今日9时开幕 中国进入“<font color='red'>十九</font><font color='red'>大</font>时间”-中新网",
          doc_id: 172032,
          url: "http://www.chinanews.com/gn/2017/10-18/8354932.shtml"
        },

        {
          snippet:
            "　　中新社厦门9月2日电 题：<font color='red'>习近平</font>的“金砖脚步” 　　中新社记者 蒋涛 　　从南非德班到巴西福塔莱萨，从俄罗斯乌法到印度果阿，如今，中国国家主席<font color='red'>习近平</font>与其他金砖国家领导人的“金砖脚步”将走进“海上",
          id: 776125,
          time: "2017-09-02",
          source: "中国新闻网",
          title: "<font color='red'>习近平</font>的“金砖脚步”-中新网",
          doc_id: 185115,
          url: "http://www.chinanews.com/gn/2017/09-02/8320930.shtml"
        }
      ],

      searchNews: [
        {
          snippet:
            "　　【<font color='red'>十九</font><font color='red'>大</font>代表在基层】<font color='red'>十九</font><font color='red'>大</font>代表这样宣传践行党的<font color='red'>十九</font><font color='red'>大</font>精神 　　连日来，党的<font color='red'>十九</font><font color='red'>大</font>代表在各自基层岗位上采取多种方式，向人们宣讲<font color='red'>十九</font><font color='red'>大</font>精神，分享心得、共谋发展。 　　党的<font color='red'>十九</font><font color='red'>大</font>报告谈及农村工作",
          id: 851383,
          time: "2017-11-25",
          source: "中国新闻网",
          title:
            "<font color='red'>十九</font><font color='red'>大</font>代表这样宣传践行党的<font color='red'>十九</font><font color='red'>大</font>精神-中新网",
          doc_id: 284373,
          url: "http://www.chinanews.com/gn/2017/11-25/8385292.shtml",
          content:
            "　　【<font color='red'>十九</font><font color='red'>大</font>代表在基层】<font color='red'>十九</font><font color='red'>大</font>代表这样宣传践行党的<font color='red'>十九</font><font color='red'>大</font>精神 　　连日来，党的<font color='red'>十九</font><font color='red'>大</font>代表在各自基层岗位上采取多种方式，向人们宣讲<font color='red'>十九</font><font color='red'>大</font>精神，分享心得、共谋发展。 　　党的<font color='red'>十九</font><font color='red'>大</font>报告谈及农村工作的方方面面，尤其是实施乡村振兴战略，为基层干部下一步建设社会主义新农村提供了新的思路与方向。 　　每天穿梭的邮路就是我的宣讲台，我要给邮路上的农民讲：第二轮土地承包到期后再延长三十年，你们可以吃下定心丸；给周围同事讲：作为基层员工，只要我们努力去干，政策红利会越来越多；给家人朋友讲：尽心尽责做事，老实本分做人。 　　国家的基本政策和宏伟目标需要我们这些基层人员从点滴之处落实。作为<font color='red'>十九</font><font color='red'>大</font>代表，我要更加认真履行职责，尽心尽力干好本职工作，不断改善城市环境质量，让人民群众生活得更加舒心。 　　我们这里少数民族比较多，又是边疆地区，要用心、用情来宣讲，老百姓才能听得懂。 　　<font color='red'>十九</font><font color='red'>大</font>报告里讲“有事好商量”，咱们大家伙的事大家商量，商量好的事，大家就要埋头苦干。下一步围绕精准脱贫，岳寨村要继续发展集体经济，让贫困户真脱贫、脱真贫。而且，还要留住蓝天白云，让岳寨村的苹果花香传得更远。 　　中华民族伟大复兴，绝不是轻轻松松、敲锣打鼓就能实现的，在新时代中国特色社会主义的伟大实践中，更需要弘扬“女排精神”，弘扬“女排精神”中所蕴含的敬业精神、吃苦精神、变革精神。 　　除了集中宣讲，我将和村里其他干部一起深入农牧民家庭、田间牧场、学校寺庙，让大家都能学深、悟透党的<font color='red'>十九</font><font color='red'>大</font>精神。我还打算在村里的微信群发一些有关<font color='red'>十九</font><font color='red'>大</font>的消息，营造学习党的<font color='red'>十九</font><font color='red'>大</font>精神的良好氛围。 　　我们要牢记习总书记的嘱托，扎根基层，服务老百姓，创作更多贴近百姓的有深度、有温度的艺术作品，全身心讲好故事演好戏，用一流的心境创造一流的艺术，生活中不演戏，舞台上有生活。 　　“注重扶贫同扶志、扶智相结合”告诉我们，贫困并不可怕，只要树立脱贫致富的坚定意志，就会实现早日脱贫、早日小康！"
        },
        {
          snippet:
            "　　中新网北京10月18日电 今天上午9时，中国共产党第<font color='red'>十九</font>次全国代表大会将在北京人民大会堂开幕，随着大会开幕，中国也将正式进入“<font color='red'>十九</font><font color='red'>大</font>时间”。 　　根据<font color='red'>十九</font><font color='red'>大</font>新闻发言人庹震17日的介绍，中国共产党",
          id: 648042,
          time: "2017-10-18",
          source: "中国新闻网",
          title:
            "中共<font color='red'>十九</font><font color='red'>大</font>今日9时开幕 中国进入“<font color='red'>十九</font><font color='red'>大</font>时间”-中新网",
          doc_id: 172032,
          url: "http://www.chinanews.com/gn/2017/10-18/8354932.shtml",
          content:
            "　　中新网北京10月18日电 今天上午9时，中国共产党第<font color='red'>十九</font>次全国代表大会将在北京人民大会堂开幕，随着大会开幕，中国也将正式进入“<font color='red'>十九</font><font color='red'>大</font>时间”。 　　根据<font color='red'>十九</font><font color='red'>大</font>新闻发言人庹震17日的介绍，中国共产党第<font color='red'>十九</font>次全国代表大会，是在全面建成小康社会决胜阶段、中国特色社会主义发展关键时期召开的一次十分重要的大会。 中新社记者 盛佳鹏 摄\" src=\"http://i2.chinanews.com/simg/cmshd/2017/10/17/bdb8a5754fde46639eb48422d4b2a968.jpg\" style=\"border:px solid #000000\" title=\"10月17日，中国共产党第<font color='red'>十九</font>次全国代表大会新闻发言人庹震在北京人民大会堂举行新闻发布会。 中新社记者 盛佳鹏 摄\" /> 10月17日，中国共产党第<font color='red'>十九</font>次全国代表大会新闻发言人庹震在北京人民大会堂举行新闻发布会。 中新社记者 盛佳鹏 摄 　　据介绍，<font color='red'>十九</font><font color='red'>大</font>会期为10月18日至10月24日，大会的主要议程是：听取和审查十八届中央委员会的报告；审查十八届中央纪律检查委员会的工作报告；审议通过《中国共产党章程(修正案)》；选举<font color='red'>十九</font>届中央委员会；选举<font color='red'>十九</font>届中央纪律检查委员会。 　　此外，庹震介绍，经<font color='red'>十九</font><font color='red'>大</font>代表资格审查委员会审查，确认2280名代表资格有效。他们将代表450多万个基层党组织和8900多万名党员出席党的<font color='red'>十九</font><font color='red'>大</font>。 　　庹震介绍，当选代表符合中央规定的条件，代表来自方方面面，结构和分布比较合理，具有广泛代表性。经济、科技、国防、政法、教育、宣传、文化、卫生、体育和社会管理等各行各业，省、市、县、乡镇村组和街道社区等各个层次，机关、企事业单位、人民团体等各个方面都有代表。 　　代表中生产和工作一线党员占33.8%，比十八大时提高3.3个百分点，其中工人党员占8.7%，农民党员占3.8%，专业技术人员党员占12.4%。代表中女党员、少数民族党员数量增加，其中女党员占24.2%，少数民族党员占11.5%，43个少数民族有代表。代表年龄在55岁以下的占70.6%，大专以上学历占94.2%。各个时期入党的都有代表。改革开放和社会主义现代化建设新时期入党的占87.8%。改革开放以来入党的成为<font color='red'>十九</font><font color='red'>大</font>代表的主体。 　　庹震称，按照惯例，中央还确定一部分已经退出领导岗位的老党员作为特邀代表出席大会。 　　据介绍，中共<font color='red'>十九</font><font color='red'>大</font>闭幕后，将召开<font color='red'>十九</font>届一中全会和<font color='red'>十九</font>届中央纪律检查委员会第一次全体会议，选举产生新一届中央领导机构和中央纪律检查委员会领导机构。<font color='red'>十九</font>届一中全会结束后，新一届中央政治局常委将同中外记者见面。 　　为了方便记者采访报道，本月11日，设在北京梅地亚宾馆的<font color='red'>十九</font><font color='red'>大</font>新闻中心就正式开始对外接待服务。 　　据新闻中心16日提供的数据，3068名中外记者前来采访报道<font color='red'>十九</font><font color='red'>大</font>，其中，港澳台记者和外国记者达到1818人，比十八大时增长6.7%；外国记者来自134个国家，比十八大时增加19.6%。 　　据介绍，<font color='red'>十九</font><font color='red'>大</font>新闻中心将举办6场记者招待会和8场集体采访，请相关部门负责人和各领域党代表，介绍有关情况，并回答记者提问。(完)"
        },
        {
          snippet:
            "　　中新社厦门9月2日电 题：<font color='red'>习近平</font>的“金砖脚步” 　　中新社记者 蒋涛 　　从南非德班到巴西福塔莱萨，从俄罗斯乌法到印度果阿，如今，中国国家主席<font color='red'>习近平</font>与其他金砖国家领导人的“金砖脚步”将走进“海上",
          id: 776125,
          time: "2017-09-02",
          source: "中国新闻网",
          title: "<font color='red'>习近平</font>的“金砖脚步”-中新网",
          doc_id: 185115,
          url: "http://www.chinanews.com/gn/2017/09-02/8320930.shtml",
          content:
            "9月1日，中国国家主席<font color='red'>习近平</font>在北京人民大会堂同来华进行国事访问并出席金砖国家领导人厦门会晤和新兴市场国家与发展中国家对话会的巴西总统特梅尔举行会谈。会谈后，两国元首共同见证了产能、电子商务、质检、电力、旅游、卫生、融资、文化体育等领域共10多项双边合作文件的签署。 中新社记者 刘震 摄\" /> 9月1日，中国国家主席<font color='red'>习近平</font>在北京人民大会堂同来华进行国事访问并出席金砖国家领导人厦门会晤和新兴市场国家与发展中国家对话会的巴西总统特梅尔举行会谈。 中新社记者 刘震 摄 　　这场以“深化金砖伙伴关系，开辟更加光明未来”为主题的会晤，凝聚世界的目光。各方预计，此次厦门会晤将形成更强大的发展合力，发出更响亮的金砖声音，打造更牢固的社会根基，构建更广泛的伙伴关系，形成更有力的机制建设。 　　自2006年以来，金砖国家为构筑伙伴关系、实现共同发展的宏伟目标，为推动国际关系民主化、推进人类和平与发展的崇高事业走到一起，开启了新兴市场国家团结合作的金砖十年。 　　金砖合作，中国推动。<font color='red'>习近平</font>就任中国国家主席后首次出访的国家中就包括俄罗斯、南非，而后于2014年7月到访巴西，2014年9月到访印度，短时间内实现了对金砖国家访问的“全覆盖”。 中新社记者 王东明 摄9月2日，金砖国家领导人第九次会晤新闻中心在厦门正式启用。9月3日至5日，金砖国家领导人第九次会晤将在中国厦门召开。记者在新闻中心已开始忙碌工作。 中新社记者 王东明 摄\" /> 9月2日，金砖国家领导人第九次会晤新闻中心在厦门正式启用。   中新社记者 王东明 摄 　　近五年来，<font color='red'>习近平</font>到访金砖国家的脚步从未停歇：<font color='red'>习近平</font>先后6次到访俄罗斯，在国内外各场合与普京总统举行20多次双边会见，推动中俄关系保持高水平发展的良好势头；<font color='red'>习近平</font>首次对巴西进行国事访问期间，双方即宣布签署56项合作文件；2015年底出访南非期间，<font color='red'>习近平</font>与南非总统祖马共同见证签署26项合作协议；访问印度期间，中印签署多份合作协议。 　　近五年来，<font color='red'>习近平</font>的“金砖脚步”不断延伸，提出中国方案，凝聚金砖共识：2013年3月，南非德班，<font color='red'>习近平</font>首次出席金砖国家领导人会晤，提出建设金砖国家“一体化大市场、多层次大流通、陆海空大联通、文化大交流”；2014年7月，巴西福塔莱萨，<font color='red'>习近平</font>首次提出“开放、包容、合作、共赢”的金砖精神；2015年7月，俄罗斯乌法会晤，<font color='red'>习近平</font>提出构建金砖国家“四大伙伴关系”；2016年10月，印度果阿，<font color='red'>习近平</font>提出，继续扩大和巩固金砖国家“朋友圈”。近五年来，<font color='red'>习近平</font>还连续四次出席二十国集团领导人峰会期间举行的金砖国家领导人非正式会晤。 　　2017年，金砖合作进入第二个十年。在金砖合作承前启后、继往开来的重要节点，中国承担起金砖国家主席国的责任。 　　今年1月1日中国接任金砖国家主席国时，<font color='red'>习近平</font>致信金砖国家领导人，提出四点期待，为全年合作确定基调、指明方向：深化务实合作，促进共同发展；加强全球治理，共同应对挑战；开展人文交流，夯实民意基础；推进机制建设，构建更广泛伙伴关系。 　　谈及金砖国家合作，<font color='red'>习近平</font>曾形象比喻：“金砖国家就像五根手指，伸开来各有所长，攥起来就是一只拳头。” 　　攥指成拳、携手共进，<font color='red'>习近平</font>的“金砖脚步”，既彰显出金砖国家“开放、包容、合作、共赢”的合作伙伴精神，也不断结出中国特色大国外交的丰硕果实。国内外分析人士预计，<font color='red'>习近平</font>即将在中国厦门迈出的“金砖脚步”，将留下鲜明历史印记，书写崭新合作历程，与金砖伙伴一道，开启金砖合作新的“金色十年”。(完)"
        }
      ],
      list: [
        "mac官网",
        "mac魅可官网",
        "mac口红",
        "mac试色",
        "mac美国官网",
        "mac地址",
        "mac电脑",
        "mac最火色号",
        "mac官网美国"
      ],
      paginations: {
        current_page: 1,
        total: 123,
        page_size: 10,
        layout: "total, prev, pager, next, jumper"
      }
    };
  },
  methods: {
    querySearch(queryString, cb) {
      var searchInfos = this.searchInfos;
      var results = queryString
        ? searchInfos.filter(this.createFilter(queryString))
        : searchInfos;
      // 调用 callback 返回建议列表的数据
      cb(results);
    },
    createFilter(queryString) {
      return searchInfo => {
        return (
          searchInfo.value.toLowerCase().indexOf(queryString.toLowerCase()) ===
          0
        );
      };
    },
    loadAll() {
      return [
        { value: "习近平" },
        { value: "党的十九大" },
        { value: "习近平总书记" },
        { value: "十九大" },
        { value: "新时代" },
        { value: "新闻" },
        { value: "党的十九大" },
        { value: "十九大精神" },
        { value: "十九大心得" },
        { value: "中国共产党" },
        { value: "中共十九届二中全会" },
        { value: "共产党" },
        { value: "中共中央" },
        { value: "支付宝" },
        { value: "iPhone" },
        { value: "苹果" },
        { value: "mac" },
        { value: "信息检索" },
        { value: "信息检索导论" },
        { value: "中央政治局" },
        { value: "新时代" },
        { value: "imac" },
        { value: "双十一" },
        { value: "双十一网购" },
        { value: "双十二 销量" },
        { value: "淘宝 双十二" },
        { value: "双十一 销量" },
        { value: "双十一 天猫" },
        { value: "天猫" },
        { value: "京东" },
        { value: "淘宝" },
        { value: "喜迎十九大" },
        { value: "十九大会议" },
        { value: "双十二" },
        { value: "双十二网购" },
        { value: "淘宝销量" },
        { value: "iPhone降速门" },
        { value: "习近平同志" },
        { value: "习近平接见" },
        { value: "iPhoneX销量" },
        { value: "iPhone8" },
        { value: "小米6" },
        { value: "小米5" },
        { value: "小米笔记本" },
        { value: "小米7" },
        { value: "小米路由器" },
        { value: "小米品牌盛典" },
        { value: "十九大代表" },
        { value: "辉煌十九大" },
        { value: "十九大工作总结" },
        { value: "京东众筹" },
        { value: "支付宝微信" },
        { value: "支付宝红包" },
        { value: "iphone电池" },
        { value: "iphone7上市时间" },
        { value: "信息安全" },
        { value: "信息公开" },
        { value: "信息发展" },
        { value: "信息泄露" },
        { value: "数据库检索" },
        { value: "检察院" },
        { value: "检察院信息" },
        { value: "微软" },
        { value: "谷歌" },
        { value: "谷歌围棋人机大战" },
        { value: "谷歌浏览器" },
        { value: "微软必应搜索" },
        { value: "谷歌搜索" },
        { value: "macbook" },
        { value: "macbook air" },
        { value: "macbook pro" },
        { value: "社会主义精神" },
        { value: "社会主义核心价值观" },
        { value: "网络安全" },
        { value: "网络游戏" },
        { value: "网络危机公关" },
        { value: "网络安全法" },
        { value: "网络安全概念" },
        { value: "网络安全主题" },
        { value: "网络安全 全国两会" },
        { value: "依法治国" },
        { value: "社会新闻" },
        { value: "社会信用" },
        { value: "社会组织" },
        { value: "社会企业" },
        { value: "社工库" },
        { value: "安全" },
        { value: "安全 财产" },
        { value: "中央" },
        { value: "中共中央政治局" },
        { value: "政法" },
        { value: "政府" },
        { value: "依法执政" },
        { value: "核心价值观" },
        { value: "中国" },
        { value: "中美关系" },
        { value: "春节" },
        { value: "2018年春节" },
        { value: "2018年" },
        { value: "2017" },
        { value: "2017年" },
        { value: "新闻资讯" },
        { value: "新闻要点" },
        { value: "法治新闻" },
        { value: "防火防盗" },
        { value: "AI" },
        { value: "VR" },
        { value: "VR技术" },
        { value: "法国" },
        { value: "中国梦" },
        { value: "中美关系" },
        { value: "萨德" },
        { value: "萨德导弹" },
        { value: "计划生育" },
        { value: "中国科学院" },
        { value: "中科院" },
        { value: "中国科学院大学" }
      ];
    },
    handleSelect(item) {
      console.log(item);
    },
    handleIconClick(ev) {
      console.log(ev);
    },
    /**
     * 改变页码和当前页时需要拼装的路径方法
     * @param {string} field 参数字段名
     * @param {string} value 参数字段值
     */
    setPath(field, value) {
      var path = this.$route.path,
        query = Object.assign({}, this.$route.query);

      if (typeof field === "object") {
        query = field;
      } else {
        query[field] = value;
      }

      this.$router.push({
        path,
        query
      });
    },
    /**
     * 改变当前页事件
     * @param  {number} page 当前页码
     */
    onChangeCurrentPage(page) {
      this.getList({
        page,
        fn: () => {
          this.setPath("page", page);
        }
      });
    },

    /**
     * 获取文章列表
     * @param  {number} options.page      当前页码，切换页码时用
     * @param  {number} options.length 每页显示数量，改变每页数量时用
     * @param  {function} options.fn                            } 获取列表后的回调函数
     * @param  {object} options.data      传递的参数
     */
    getList({ search, page, fn } = {}) {
      var query = this.$route.query;

      this.paginations.current_page = page || parseInt(query.page) || 1;

      var data = {
        page: this.paginations.current_page,
        length: 10,
        condition: this.condition,
        query: this.search,
        order: this.order
      };
      var data2 = {
        query: this.search,
        type: 1
      };

      console.log(data);
      ListApi.getNewsList.call(this, data, List_data => {
        this.searchNews = List_data.news;
        this.paginations.total = List_data.total;
        fn && fn();
      });

      ListApi.relateQuery.call(this, data2, List_data => {
        this.list = List_data.list;
        fn && fn();
      });
    },

    /**
     * 获取评论
     */
    getComments({ fn } = {}) {
      var data = {
        url: this.url,
        page: 1,
        length: 5
      };
      console.log(data);
      ListApi.getComments.call(this, data, List_data => {
        if (List_data.comment != NULL) {
          this.comments = List_data.comment;
        }
        fn && fn();
      });
    },
    showComments(ref) {
      // console.log(ref);
      this.url = ref;
      this.getComments({
        fn: () => {
          // this.showNewsBlock=true;
        }
      });
    },

    getRealteNews({ fn } = {}) {
      var data = {
        doc_id: this.id,
        length: 5,
        condition: 1,
        order: 2,
        page: 1
      };
      // console.log(data);
      ListApi.relateNews.call(this, data, List_data => {
        if (List_data.news != NULL) {
          this.relateNews = List_data.news;
        }
        fn && fn();
      });
    },
    showRealteNews(ref) {
      console.log(ref);
      this.id = ref;
      this.getRealteNews({
        fn: () => {
          // this.showNewsBlock=true;
        }
      });
    },

    setSize() {
      this.winSize.width = $(window).width() + "px";
      this.winSize.height = $(window).height() + "px";

      this.formOffset.left = parseInt(this.winSize.width) / 2 - 175 + "px";
      this.formOffset.top = parseInt(this.winSize.height) / 2 - 178 + "px";
    },
    onRelatSearch(ref) {
      this.search = ref;
      this.getList({
        fn: () => {
          this.showNewsBlock = true;
        }
      });
    },
    onSeaNews() {
      console.log(this.search);
      this.getList({
        fn: () => {
          this.showNewsBlock = true;
          this.title = this.search + " 的搜索结果：";
        }
      });
    }
  },
  created() {
    this.setSize();
    $(window).resize(() => {
      this.setSize();
    });
  },
  mounted() {
    this.searchInfos = this.loadAll();
  }
};
