var http = require('https');

var fs = require('fs');
var qs = require('querystring');





var data = {
  'draw': 1,
  'columns[0][data]': 0,
  'columns[0][name]': null,
  'columns[0][searchable]': true,
  'columns[0][orderable]': true,
  'columns[0][search][value]': null,
  'columns[0][search][regex]': false,
  'columns[1][data]': 1,
  'columns[1][name]': null,
  'columns[1][searchable]': true,
  'columns[1][orderable]': true,
  'columns[1][search][value]': null,
  'columns[1][search][regex]': false,
  'columns[2][data]': 2,
  'columns[2][name]': null,
  'columns[2][searchable]': false,
  'columns[2][orderable]': true,
  'columns[2][search][value]': null,
  'columns[2][search][regex]': false,
  'columns[3][data]': 3,
  'columns[3][name]': null,
  'columns[3][searchable]': true,
  'columns[3][orderable]': true,
  'columns[3][search][value]': null,
  'columns[3][search][regex]': false,
  'columns[4][data]': 4,
  'columns[4][name]': null,
  'columns[4][searchable]': true,
  'columns[4][orderable]': true,
  'columns[4][search][value]': null,
  'columns[4][search][regex]': false,
  'columns[5][data]': 5,
  'columns[5][name]': null,
  'columns[5][searchable]': true,
  'columns[5][orderable]': true,
  'columns[5][search][value]': null,
  'columns[5][search][regex]': false,
  'columns[6][data]': 6,
  'columns[6][name]': null,
  'columns[6][searchable]': true,
  'columns[6][orderable]': true,
  'columns[6][search][value]': null,
  'columns[6][search][regex]': false,
  'columns[7][data]': 7,
  'columns[7][name]': null,
  'columns[7][searchable]': true,
  'columns[7][orderable]': true,
  'columns[7][search][value]': null,
  'columns[7][search][regex]': false,
  'columns[8][data]': 8,
  'columns[8][name]': null,
  'columns[8][searchable]': true,
  'columns[8][orderable]': true,
  'columns[8][search][value]': null,
  'columns[8][search][regex]': false,
  'columns[9][data]': 9,
  'columns[9][name]': null,
  'columns[9][searchable]': true,
  'columns[9][orderable]': true,
  'columns[9][search][value]': null,
  'columns[9][search][regex]': false,
  'columns[10][data]': 10,
  'columns[10][name]': null,
  'columns[10][searchable]': true,
  'columns[10][orderable]': true,
  'columns[10][search][value]': null,
  'columns[10][search][regex]': false,
  'columns[11][data]': 11,
  'columns[11][name]': null,
  'columns[11][searchable]': true,
  'columns[11][orderable]': false,
  'columns[11][search][value]': null,
  'columns[11][search][regex]': false,
  'order[0][column]': 1,
  'order[0][dir]': 'desc',
  'start': 0,
  'length': 10,
  'search[value]': null,
  'search[regex]': false,
  '_': 1596070429573
}

var result = []
var fff = 1
var body=''
function getmsg(data) {
  var content = qs.stringify(data);
  var options = {
    hostname: 'gw2.wishingstarmoye.com',
    path: "/admin/gw2_skill_dt_ajax?" + content,
    method: 'GET',
    headers: {
      'Accept-Encoding': 'utf-8',  //这里设置返回的编码方式 设置其他的会是乱码
      'Cookie': 'Hm_lvt_f1ea546e0562d559199deef091557294=1595504505,1596037985,1596070258,1596190451; stateclear={"gw2_traitsdbs":true,"gw2_skills":true}; Hm_lpvt_f1ea546e0562d559199deef091557294=1596194334; XSRF-TOKEN=eyJpdiI6ImJ3R3NmMEtvTGVJcjJCYlpNbzIyUEE9PSIsInZhbHVlIjoiZDB3R2F2bmQ1RXA5TGVOeWViN0p0M0JNbEFSdkdQcUhzR0JoR2ptMHBPYWxCNjY5Y1Vtall4NjBZUUVRdVZLK1ZiMGtxTVZvU05lZHZ0bE41VVwvbWd3PT0iLCJtYWMiOiIwYjA2MTlhMzNmMWIzMzYyZTEwZjZkNjFjNmY4NDVmOWM4ZTBlMTlhY2M4OWY0MjhlMmRkNDNjZDMzY2M0ZTE1In0%3D; laravel_session=eyJpdiI6IkRQSmFJNFFydXdDRWZ2WWg0TCtuSkE9PSIsInZhbHVlIjoic05tWTI4VDRnd09NUnVwdE9kRkNyVnFxQ3BabjlmeVpubEQ3NG4wY0kzcGFPMkpQNmQ3UW9Ed0czcXBaNit2ZW5EYWZKd3hyNDd5QzdROEdtQW9vUFE9PSIsIm1hYyI6ImNiZDI0ODRhODcyYzFkOTQxNjkzMjMxOGQ1NDhiYTdkZjc5ODFkNTQ3MWY1YjdmMDVkNmVjYjRjZmIzNjRlNTAifQ%3D%3D',

    }
  };
  var req = http.request(options, function (res) {
    // console.log('STATUS: ' + res.statusCode);
    // console.log('HEADERS: ' + JSON.stringify(res.headers));
    // res.setEncoding('utf8');
    res.on('data', function (chunk) {

      body += chunk;

    }).on('end', function () {
      // console.log('res:'+body);
      var res = JSON.parse(body)
      // var res = eval("("+body+")")
      res.data.forEach(element => {
        var temp = {}
        temp.ZHname = element[3]
        temp.ENname = element[4]
        result.push(temp)

        console.log(element[3]);
        console.log(element[4]);
      });
      fff++
      console.log(fff);
      if (fff > 327) {
        writeJson(result)//执行一下;
        console.log(result);
        return
      }
      data.start += 10
      data.draw = parseInt(data.draw) + 1
      data._ = (new Date()).valueOf()
      body=''
      getmsg(data)

      // function sleep(ms) {
      //   return new Promise(resolve => 
      //       setTimeout(resolve, ms)
      //   )
      // }
      // sleep(1000).then(()=>{

      // })

    });
  });
  req.on('error', function (e) {
    console.log('problem with request: ' + e.message);
  });
  // req.write(data);
  req.end()

}

getmsg(data)




function writeJson(params){
    //现将json文件读出来
 
        var str = JSON.stringify(params);//因为nodejs的写入文件只认识字符串或者二进制数，所以把json对象转换成字符串重新写入json文件中
        fs.writeFile('./data.json',str,function(err){
            if(err){
                console.error(err);
            }
            console.log('----------新增成功-------------');
        })
   
}



// console.log((new Date()).valueOf());
