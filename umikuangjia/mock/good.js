let data = [{title:"web全栈"},{title:"java架构师"}];
export default {
    //"method url":Object或Arrary
    //"get /api/goods":{result:data}
    "get /api/goods":function(req,res){
        setTimeout(() => {
            res.json({result:data});
        },500);
    }
};