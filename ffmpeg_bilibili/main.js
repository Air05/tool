var nodeCmd=require('node-cmd');
var fs = require('fs');
var path = require('path');

var basepath = "../tv.danmaku.bili/download"

//先读取文件列表
let files = fs.readdirSync(basepath);

files.map(item => {
    console.log(item)
    var distpath = path.join(basepath,item);
    var childrenfiles = fs.readdirSync(distpath);
    console.log(childrenfiles)
    var nextfikes = path.join(distpath,childrenfiles[0]);
    console.log("文件列表",nextfikes)
    console.log(fs.readdirSync(nextfikes))
    var json = fs.readFileSync(nextfikes+"/entry.json")

    // 文件名变量
    json = JSON.parse(json.toString());
    console.log(json.title)

    var nextfikesName = fs.readdirSync(nextfikes);

    var nextfikesPath = path.join(distpath,childrenfiles[0],nextfikesName[0]);

    const cmdline = `ffmpeg -i ${nextfikesPath}/video.m4s -i ${nextfikesPath}/audio.m4s -codec copy "${json.title}.mp4"`

    function runTest(cmd){
        nodeCmd.get(
            cmd,
            function(err, data, stderr){
                console.log(data);
            }
        );
    
        nodeCmd.run(cmd);
    }
    runTest(cmdline);

})

console.log("end");