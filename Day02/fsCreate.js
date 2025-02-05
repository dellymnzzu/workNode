const fs = require('fs');
//access 접근 할 수 있는지 확인
//F_OK : 파일 존재 여부 확인 / R_OK : 읽기 권한 여부 확인 / W_OK : 쓰기 권한 여부 확인

fs.access('./folder',fs.constants.F_OK | fs.constants.R_OK | fs.constants.W_OK,(err)=>{
    if(err){
        if(err.code === 'ENOENT'){
            console.log('폴더 없음');
            fs.mkdir('./folder',(err)=>{
                //폴더 생성
                if(err){
                    throw err;
                }
                console.log('폴더 만들기 성공');
                fs.open('./folder/file.js','w',(err,fd)=>{
                    if(err){
                        throw err;
                    }
                    console.log('빈 파일 만들기 성공',fd);
                    fs.rename('./folder/file.js', './folder/newfile.js', (err)=>{
                        if(err){
                            throw err;
                        }
                        console.log('이름 바꾸기 성공');
                    });
                });
            });
        }else{
            throw err;
        }
    }else{
        console.log('이미 폴더 있음');
    }
});