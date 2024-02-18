const Url = "https://api.jikan.moe/v4";
const TitleManga = document.querySelector("#TitleManga");
const PManga = document.querySelector("#NewManga");
const autorPM = document.querySelector("#autorPM");
const Perfilautor = document.querySelector("#PerfilautorM");
const Foro = document.querySelector("#ForoM");
const CommentsM = document.querySelector("#CommentsM");
const TypeM = document.querySelector("#TypeM");
const Manganew = document.querySelector("#MangaNews1");
const GeneroM = document.querySelector("#GeneroM");


const DatePublication = document.querySelector("#DatePublicationM");

export function GetMangaNes(MangaId) {
  const news = `${Url}/manga/${MangaId}/news`;
  const Manga = `${Url}/manga/${MangaId}`;

  fetch(news)
    .then((respuesta) => {
      if (!respuesta.ok) {
        throw new Error("Error al obtener las noticias del anime");
      }
      return respuesta.json();
    })
    .then((data) => {
      console.log("Noticias del Manga:", data);
      const latestNews = data.data[0];
      const imgurl = latestNews.images.jpg.image_url;
      Manganew.src = imgurl;
      TitleManga.textContent = latestNews.title;
      PManga.textContent = latestNews.excerpt;
      autorPM.textContent = latestNews.author_username;
      Perfilautor.href = latestNews.author_url;
      Foro.href = latestNews.forum_url;
      CommentsM.textContent = latestNews.comments;

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

  fetch(Manga)
    .then((respuesta) => {
      if (!respuesta.ok) {
        throw new Error("Error al obtener las noticias del anime");
      }
      return respuesta.json();
    })
    .then((data) => {
      console.log("Manga:", data);
      const manga = data.data;
      GeneroM.textContent = manga.genres[0].name;
      TypeM.textContent = manga.type;
      TypeM.style.background = "green";
      TypeM.style.padding = "0 10px";
      TypeM.style.color = "white";
      console.log(manga.genres[0].name);
    })
    .catch((error) => {
      console.error("Error al obtener las noticias:", error);
    });
}