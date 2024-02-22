var fs = require('fs');
//read the file sync and write the file sync

function readWriteSync(){
    console.log('read write file sync');
    var data = fs.readFileSync('./AFM-source/input.txt', {encoding:'utf8',flag:'r'});
    console.log('read data complete');
    fs.writeFileSync('./AFM-destination/output.txt',data , {encoding:'utf8',flag:'w'});
    console.log('write data complete');
}

//readWriteSync();

//read file sync and write file async
function readSyncWriteAsync(){
    console.log('read sync write file async started.');
    var data = fs.readFileSync('./AFM-source/input.txt', {encoding:'utf8',flag:'r'});
    console.log('read data complete');
    fs.writeFile('./AFM-destination/output.txt',data, {encoding:'utf8',flag:'w'},function(err,data){
        if(err){
            console.log('Writing to the file async failed.');
        }else{
            console.log('Data has been written async.');
        }
    });

    console.log('Reading sync and writing async completed.');
}

//readSyncWriteAsync();


//read file async and write file sync
function readAsyncWriteSync() {
    console.log('read async write file sync started.');
    fs.readFile('./AFM-source/input.txt', {encoding:'utf8',flag:'r'},function(err,data){
        if(err){
            console.log('Reading from the file async failed.');
        }else{
            console.log('Data has been read async.');
            fs.writeFileSync('./AFM-destination/output.txt',data, {encoding:'utf8',flag:'w'});
            console.log('Data has been written sync.');
        }
    });
    console.log('Reading async and writing sync completed.');
}

//readAsyncWriteSync();
//read file async and write file async
function readAsyncWriteAsync(){
    console.log('read async write file async started.');
    fs.readFile('./AFM-source/input.txt', {encoding:'utf8',flag:'r'},function(err,data){
        if(err){
            console.log('Reading from the file async failed.');
        }else{
            console.log('Data has been read async finished.');
            fs.writeFile('./AFM-destination/output.txt',data, {encoding:'utf8',flag:'w'},function(err,data){
                if(err){
                    console.log('Writing to the file async failed.');
                }else{
                    console.log('Data has been written async finished.');
                }
            });
        }
    });

    console.log('Reading async and writing async completed.');
    for(let i=0 ;i<10;i++){
        console.log('Doing some work.');
    }
}

readAsyncWriteAsync();