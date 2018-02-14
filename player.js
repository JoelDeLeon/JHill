(function(){
    'use strict';
        var player = {"id":"5995e39","name":"Default Player","type":"classic","size":"small","stream":{"station ":"s3e3f66944","output":null,"streaming_url":"https:\/\/streamer.radio.co\/s3e3f66944"},"theme":{"width":350,"background_colour":"#fcfcfc","text_colour":"#364349","accent_colour":"#7b919d","rounded_corners":true},"settings":{"autoplay":false,"artwork":false},"embed_url":"https:\/\/embed.radio.co\/player\/5995e39.html","social":{"twitter":true,"facebook_share":true,"embed":true,"template":"SWEAT.FM"}};
        var i = document.createElement('iframe');
    var style = "border:none;";
    var width = player.theme.width;
    if (window.screen.width < 400 || player.size === 'small') {
        width = '100%';
    }
    i.src = player.embed_url;
    i.width= width;

    if(player.theme.rounded_corners){
        style += 'border-radius:8px;';
    }
    i.setAttribute('style', style);

    var s = document.getElementsByTagName('script');
    s = s[s.length-1];

    if(s.parentNode.nodeName === 'HEAD'){
        window.onload = function(){document.body.appendChild(i);};
    }else{
        s.parentNode.insertBefore(i, s);
    }

    window.addEventListener('message', function(e) {
        var eventName = e.data[0];
        var data = e.data[1];
        if(eventName === player.id+'.setHeight'){
            i.style.height = data+'px';
        }
    }, false);

    i.addEventListener('load', function(){
        var targetUrl = player.embed_url.split('/').splice(0,3).join('/'); // strips everything after hostname
        setTimeout(function() {
            i.contentWindow.postMessage(JSON.stringify(['parent', location]), targetUrl);
        }, 1000); // Prevent the iframe not being ready for messages.
    });
}());

player.event('songChanged', console.log("hey"));