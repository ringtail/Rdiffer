// get a content from web
var http = require('http');
module.exports={
	getContent:function(url,callback){
		http.get(url,function(res){
			var data="";
			res.on('data',function(chunk){
				data+=chunk;
			});
			res.on('end',function(){
				callback(data,"success");
			})
		}).on('error',function(err){
			callback(null,err.message);
		})
	}
}