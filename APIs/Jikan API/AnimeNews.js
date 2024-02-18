const Url = "https://api.jikan.moe/v4";
const TitleAnime = document.querySelector("#TitleAnime");
const PAnime = document.querySelector("#NewAnime");
const autorP = document.querySelector("#autorP");
const Perfilautor = document.querySelector("#PerfilautorA");
const Foro = document.querySelector("#ForoA");
const CommentsA = document.querySelector("#CommentsA");
const TypeA = document.querySelector("#TypeA");
const Animenew = document.querySelector("#AnimeNews1");
const GeneroA = document.querySelector("#GeneroA");
const DatePublication = document.querySelector("#DatePublication");

export function GetAnimeNes(AnimeId) {
  const news = `${Url}/anime/${AnimeId}/news`;
  const Anime = `${Url}/anime/${AnimeId}`;

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

      if (anime.type === "Movie") {
        if (anime.themes && anime.themes.length > 0) {
          let themesText = "";
          anime.themes.forEach((theme) => {
            themesText += theme.name + ", ";
          });
          GeneroA.textContent = themesText.slice(0, -2);
          TypeA.style.background = "red";
          TypeA.style.padding = "0 10px";
          TypeA.style.color = "white";
          console.log(themesText);
        }
      } else if (anime.type === "TV") {
        if (anime.genres && anime.genres.length > 0) {
          let genresText = "";
          anime.genres.forEach((genre) => {
            genresText += genre.name + ", ";
          });
          GeneroA.textContent = genresText.slice(0, -2);
          TypeA.textContent = anime.type;
          TypeA.style.background = "blue";
          TypeA.style.padding = "0 10px";
          TypeA.style.color = "white"
          console.log(genresText);
        }
      }
    })
    .catch((error) => {
      console.error("Error al obtener las noticias:", error);
    });
}
