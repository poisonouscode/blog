const ap = new APlayer({
    container: document.getElementById('aplayer'),
    fixed: true,
    autoplay: true,
    audio: [
      {
        name: "四月是你的谎言",
        artist: '横山克',
        url: 'http://music.163.com/song/media/outer/url?id=30245064.mp3',
        cover: 'http://p1.music.126.net/fQ6gFFeucCZ9lRWgLcLPcQ==/109951162909751148.jpg'
      },
      {
        name: 'China-X',
        artist: '徐梦圆',
        url: 'http://music.163.com/song/media/outer/url?id=41500546.mp3',
      	cover: 'http://p1.music.126.net/hH4UmteuzsqZHacrr3YS_g==/18358545649308968.jpg'
      },
      {
        name: 'Take me hand',
        artist: 'DAISHI DANCE / Cecile Corbel',
        url: 'http://music.163.com/song/media/outer/url?id=26092806.mp3',
        cover: 'http://p1.music.126.net/AoVFMKkLVMOmTMo_A6x02g==/109951163403515653.jpg'
      },
      {
        name: '相聚万年树',
        artist: '林和夜',
        url: 'http://music.163.com/song/media/outer/url?id=488267541.mp3',
        cover: 'http://p2.music.126.net/1QSIjG47zPCZf2pwI2J2YQ==/19025949207041612.jpg'
      }
    ]
});