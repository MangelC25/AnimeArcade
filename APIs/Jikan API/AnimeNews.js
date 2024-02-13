const Url = "https://api.jikan.moe/v4";
const TitleAnime = document.querySelector("#TitleAnime");
const PAnime = document.querySelector("#NewAnime");
const autorP = document.querySelector("#autorP");
const Perfilautor = document.querySelector("#PerfilautorA");
const Foro = document.querySelector("#ForoA");
const CommentsA = document.querySelector("#CommentsA");

const Animenew = document.querySelector("#AnimeNews1");
const GeneroA = document.querySelector("#GeneroA");
const DatePublication = document.querySelector("#DatePublication");

export function GetAnimeNes(AnimeId) {
  const news = `${Url}/anime/${AnimeId}/news`;
  const Anime = `${Url}/anime/${AnimeId}`;

  function traducir(text, elemento) {
    
    const url = "https://text-translator2.p.rapidapi.com/translate";
  
    const encodeparams = new URLSearchParams();
    encodeparams.append("source_language", "en");
    encodeparams.append("target_language", "es");
    encodeparams.append("text", text);
  
    const options = {
      method: "POST",
      headers: {
        "content-type": "application/x-www-form-urlencoded",
        "X-RapidAPI-Key": "3e2033c8acmsh5157158f4105806p1f5505jsn9fece71cfff6",
        "X-RapidAPI-Host": "text-translator2.p.rapidapi.com",
      },
      body: encodeparams,
    };
  
    fetch(url, options)
      .then((response) => response.json())
      .then((response) => {
        elemento.textContent = response.data.translatedText;
        console.log(response);
      })
      .catch((error) => console.error(error));
  }

  fetch(news)
    .then((respuesta) => {
      if (!respuesta.ok) {
        throw new Error("Error al obtener las noticias del anime");
      }
      return respuesta.json();
    })
    .then((data) => {
      console.log("Noticias del anime:", data);
      const latestNews = data.data[0];
      const imgurl = latestNews.images.jpg.image_url;
      Animenew.src = imgurl;
      TitleAnime.textContent = latestNews.title;
      PAnime.textContent = latestNews.excerpt;
      autorP.textContent = latestNews.author_username;
      Perfilautor.href = latestNews.author_url;
      Foro.href = latestNews.forum_url;
      CommentsA.textContent = latestNews.comments;



      const fechaOriginal = latestNews.date;
      const fecha = new Date(fechaOriginal);
      const fechaFormateada = `${fecha.getFullYear()}-${(
        "0" +
        (fecha.getMonth() + 1)
      ).slice(-2)}-${("0" + fecha.getDate()).slice(-2)}`;
      DatePublication.textContent = fechaFormateada;

      traducir(TitleAnime.textContent, TitleAnime);
      traducir(PAnime.textContent, PAnime);

      
    })
    .catch((error) => {
      console.error("Error al obtener las noticias:", error);
    });

  fetch(Anime)
    .then((respuesta) => {
      if (!respuesta.ok) {
        throw new Error("Error al obtener las noticias del anime");
      }
      return respuesta.json();
    })
    .then((data) => {
      console.log("Anime:", data);
      const anime = data.data;
      GeneroA.textContent = anime.genres[0].name;
    })
    .catch((error) => {
      console.error("Error al obtener las noticias:", error);
    });
}
