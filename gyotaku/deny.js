function main(){
    console.info('aaa');
    console.info($(location).attr('hostname'));

    // ローカルなら動かさない
    if ($(location).attr('hostname') == ''){
        console.info('is local');
        return null;
    }

    // ホストが異なるなら実行
    if ($(location).attr('hostname').match('github')){
        console.info('my site');
        return null;
    }else{
        console.info('copy site');
    }
}

function foo2(){ alert ('2'); }

$(main);
