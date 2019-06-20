/*
 * Created by Roland Szecsenyi <roland.sze@gmail.com>
 * This file is part of the INSCALE technical challenge.
 */

// Chinese translation
export default {
    languageCodes: {
        en: 'En',
        zh: 'Zh',
        ms: 'Ms'
    },
    index: '主页',
    campaigns: '活动',
    backToIndex: '回到主页',
    hiThere: '您好！',
    footer: {
        createdBy: '由Roland Szecsenyi为INSCALE.创建',
        gitHub: 'GitHub',
        linkedIn: 'LinkedIn'
    },
    introduction: '感谢您查看我为INSCALE.的技术挑战所完成的作品。您可以从网页顶部导览至活动页面，并通过浏览器控制台添加活动资讯。祝您查阅愉快！Roland',
    campaign: {
        counter: '展示 {{counter}} 共 {{total}} 活动',
        name: '活动名字',
        startDate: '开始日期',
        endDate: '结束日期',
        status: '状态',
        active: '活跃',
        inactive: '已结束',
        budget: '预算',
        budgetDisplayFormat: '0.00a $',
        searchByName: '输入活动名字搜索',
        noDataAddedYet: '尚未添加任何数据。 请打开浏览器控制台并以<b>window.AddCampaigns</b>功能指令添加数据。所输入的数据需符合预期的格式。<br/> {{expectedFormat}}',
        expectedFormat: '预期的格式为活动的array。每个活动必须是object并拥有以下属性<br/> ' +
            '"id": Number,<br/>' +
            '"name": String,<br/>' +
            '"startDate": String，并符合预期的日期格式 {{expectedInputDateFormat}},<br/>' +
            '"endDate": String，并符合预期的日期格式  {{expectedInputDateFormat}},<br/>' +
            '"budget": 大于0的数字',
        invalidFormat: '哦噢，您所输入的数据并不符合预期的格式。<br/> {{expectedFormat}}'
    }
};
