// let d=document.createElement("div");
// d.classList.add("two");

// let h=document.createElement("h1");
// h.append("New");

// d.append(h);

// document.querySelector(".one").append(d);

// project js 

let musics=[

    {
        id:1,
        name:"Hall of Fame",
        artist:"Script",
        audioSrc:"audio/the_script_hall_of_fame_lyrics_mp3_20187.mp3",
        imageSrc:"images/hallOfFame.jfif"
    },
    {
        id:2,
        name:"Intezaar",
        artist:"Arijit Singh",
        audioSrc:"audio/intezaar_official_video_mithoon_ft._arijit_singh_amp_asees_kaur_sanaya_amp_gurmeet_new_s_mp3_20440.mp3",
        imageSrc:"images/intezaar.jfif"
    },
    {
        id:3,
        name:"Oh Meri Jaan",
        artist:"K.K.",
        audioSrc:"audio/o_meri_jaan_lyrics_k.k._life_in_a_metro_pritam_irrfan_khan_kangana_ranaut_shilpa_shetty_mp3_20428.mp3",
        imageSrc:"images/Oh Meri Jaan.jfif"
    },
    {
        id:4,
        name:"Waving Flag",
        artist:"KNaan",
        audioSrc:"audio/WavingFlag.mp3",
        imageSrc:"images/wavingFlag.jfif"
    },
    {
        id:5,
        name:"Rockabye",
        artist:"Clean Bandit + Sean Paul + Anne Marrie ",
        audioSrc:"audio/clean_bandit_rockabye_ft._sean_paul_anne-marie_official_video_mp3_20410.mp3",
        imageSrc:"images/rockabye.jfif"
    }

]


for(let i=0;i<musics.length;i++)
{

    let tile=document.createElement("div");
    tile.classList.add("tile");

    let thumbnail=document.createElement("div");
    thumbnail.classList.add("thumbnail");

    let img=document.createElement("img");
    img.src=musics[i].imageSrc;

    thumbnail.append(img);
    tile.append(thumbnail);

    let description=document.createElement("div");
    description.classList.add("description");


    let h2=document.createElement("h2");
    h2.append(musics[i].name);
    description.append(h2);

    let h3=document.createElement("h3");
    h3.append(musics[i].artist);
    description.append(h3);

    tile.append(description);

    tile.addEventListener("click",function(){
        playMusic(musics[i]);
    });

    document.querySelector(".music-list").append(tile);

}




function playMusic(music)
{

    document.querySelector(".player").style.marginLeft="0";
    document.querySelector(".main-thumbnail-img").src=music.imageSrc;
    document.querySelector(".song-name").innerText=music.name;
    document.querySelector(".song-artist").innerText=music.artist;
    document.querySelector(".audio").src=music.audioSrc;
    document.querySelector(".audio").play();

}

function closePlayer()
{
    document.querySelector(".player").style.marginLeft="100%";
    // document.querySelector(".audio").pause();
}