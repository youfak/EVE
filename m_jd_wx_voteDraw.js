let mode = __dirname.includes('magic')
const {Env} = mode ? require('../magic') : require('./magic')
const $ = new Env('M投票抽奖');
$.activityUrl = decodeURIComponent(process.argv.splice(2)?.[0] || process.env.M_WX_VOTE_DRAW_URL);
if (mode) {
    $.activityUrl = 'https://lzkj-isv.isvjcloud.com/prod/cc/interactsaas/index?activityType=10044&templateId=20210714190900tpyl011&activityId=1697207015902187522&nodeId=101001&prd=cjwx';
}

$.run({whitelist: ['1-7']}).catch(reason => $.log(reason));
