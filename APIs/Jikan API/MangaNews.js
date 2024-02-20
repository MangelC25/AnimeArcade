const Url = "https://api.jikan.moe/v4";

// Función para actualizar los elementos HTML con los datos del manga
function actualizarElementosHTML(slideElement, latestNews, manga) {
  const TitleManga = slideElement.querySelector("#TitleManga");
  const PManga = slideElement.querySelector("#NewManga");
  const autorPM = slideElement.querySelector("#autorPM");
  const Perfilautor = slideElement.querySelector("#PerfilautorM");
  const Foro = slideElement.querySelector("#ForoM");
  const CommentsM = slideElement.querySelector("#CommentsM");
  const TypeM = slideElement.querySelector("#TypeM");
  const Manganew = slideElement.querySelector("#MangaNews1");
  const GeneroM = slideElement.querySelector("#GeneroM");
  const DatePublication = slideElement.querySelector("#DatePublicationM");

  Manganew.src = latestNews.images.jpg.image_url;
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

  if (manga.type === "Light Novel") {
    if (manga.genres && manga.genres.length > 0) {
      let genresText = "";
      manga.genres.forEach((genre) => {
        genresText += genre.name + ", ";
      });
      GeneroM.textContent = genresText.slice(0, -2);
      TypeM.textContent = manga.type;
      TypeM.style.background = "goldenrod";
      TypeM.style.color = "white";
    }
  } else if (manga.type === "Manga") {
    if (manga.genres && manga.genres.length > 0) {
      let genresText = "";
      manga.genres.forEach((genre) => {
        genresText += genre.name + ", ";
      });
      GeneroM.textContent = genresText.slice(0, -2);
      TypeM.textContent = manga.type;
      TypeM.style.background = "green";
      TypeM.style.color = "white";
    }
  }
}

// Función para obtener las noticias de un manga
function obtenerNoticiasManga(mangaId, slideElement) {
  const news = `${Url}/manga/${mangaId}/news`;
  const Manga = `${Url}/manga/${mangaId}`;

  fetch(news)
    .then((respuesta) => {
      if (!respuesta.ok) {
        throw new Error("Error al obtener las noticias del manga");
      }
      return respuesta.json();
    })
    .then((data) => {
      const latestNews = data.data[0];

      fetch(Manga)
        .then((respuesta) => {
          if (!respuesta.ok) {
            throw new Error("Error al obtener las noticias del manga");
          }
          return respuesta.json();
        })
        .then((data) => {
          const manga = data.data;
          actualizarElementosHTML(slideElement, latestNews, manga);
        })
        .catch((error) => {
          console.error("Error al obtener las noticias:", error);
        });
    })
    .catch((error) => {
      console.error("Error al obtener las noticias:", error);
    });
}

// Función principal para obtener las noticias de un manga y actualizar el slide correspondiente
export function GetMangaNes(MangaId, slideElement) {
  obtenerNoticiasManga(MangaId, slideElement);
}
