import axios from 'axios'
let data={
  data:{
    "data": {
      "success": true,
      "list": [
        {
          "skuId": "2154000002",
          "title": "米家小白智能摄像机 白色",
          "image": "https://i1.mifile.cn/a1/pms_1468806372.46368911!80x80.jpg",
          "price": "399",
          "buyNumber": 3,
          "buylimit": 10
        },
        {
          "skuId": "215400012",
          "title": "小米6 全网通版 4GB内存 亮蓝色",
          "image": "https://i1.mifile.cn/a1/pms_1510033696.15216628!80x80.jpg",
          "price": "399",
          "buyNumber": 3,
          "buylimit": 10
        },
        {
          "skuId": "215800013",
          "title": "小米7",
          "image": "https://i1.mifile.cn/a1/pms_1468806372.46368911!80x80.jpg",
          "price": "399",
          "buyNumber": 3,
          "buylimit": 10
        }
      ]
    }
  }
}
export function getShopList(params){
  return axios.get('',{params}).then(()=>{
    return data;
  })
}