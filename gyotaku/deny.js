function main(){
    console.info('aaa');
    console.info($(location).attr('hostname'));

    // ローカルなら動かさない
    if ($(location).attr('hostname') == ''){
        console.info('is local');

        disable();
        return null;
    }

    // ホストが異なるなら実行
    if ($(location).attr('hostname').match('github')){
        console.info('my site');
        return null;
    }else{
        console.info('copy site');
        disable();
    }
}

function disable(){
    console.info('start disable');
    // div class mainを非表示に
    // div class
    // div.mainを書き換え
    $("div.main").html("<h3>本ページは削除されました。</h3>");
    // redirect
    setTimeout(function(){
        $(document).ready( function() {
            url = "http://megalodon.jp/";
            $(location).attr("href", url);
        });
    },15000);
}


function foo2(){ alert ('2'); }

$(main);
