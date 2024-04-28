import  Mock  from "mockjs";

Mock.mock('/product/search',{
    "ret":0,
    "data":
    {
        "mtime": "@datatime",//随机生成日期
        "score|1-800": 1,//随机生成1-800的数字
        "rank|1-100": 1,
        "stars|1-5": 1,
        "nickname": "@cname",
        "img": "@image('200x100','#ffcc33','#FFF','png','Fast Mock')"
    }
})