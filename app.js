const express = require('express')
const fs = require('fs')

const Port = process.env.Port || 3000
var result = ""
const app = express()

fs.readdir('./public', (err, files) => {
    app.get('/', (req,res) => {
        if(err){
            console.log(err)
        }else{
            for(i=0;i<files.length;i++){
                var path = './public/' + files[i]
                var temp = fs.statSync(path)
                if(temp.isFile()){
                    result += '<img src="https://img.icons8.com/ios/50/000000/jp2.png"/>' + files[i] + '<br/>'
                }  else{
                    result += '<img src="https://img.icons8.com/ios/50/000000/pictures-folder.png"/>' + files[i] + '<br/>'
                }
            }
            res.send(result)
        }
    })
})

app.listen(5000, () => {
    console.log('server up and running')
})
