
// ホストネームに含まれる文字列
host_name = 'github.io';

// コピーされたときのredirect先
redirect_deny_url = 'http://megalodon.jp/';
redirect_millisec = 5000;

// コピーされたときに表示するメッセージ
deny_message = '<h3>本ページは削除されました。(・ω<) ﾃﾍﾍﾟﾛ </h3>';


function main(){
    // ローカルなら動かさない
    if ($(location).attr('hostname') == ''){
        console.info('is local');
        return null;
    }

    // ホストが異なるなら実行
    if ($(location).attr('hostname').match(host_name)){
        // 正常
        console.info('my site');
        return null;
    }else{
        // コピーサイト
        console.info('copy site');
        disable();
    }
}

function disable(){
    console.info('start disable');
    // div.mainを書き換え
    $("div.main").html(deny_message);
    // 5秒後にredirect
    setTimeout(function(){
        $(document).ready( function() {
            $(location).attr("href", redirect_deny_url);
        });
    },redirect_millisec);
}

$(main);
