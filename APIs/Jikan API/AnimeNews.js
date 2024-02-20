const Url = "https://api.jikan.moe/v4";

// Función para actualizar los elementos HTML con los datos del anime
async function actualizarElementosHTML(slideElement, latestNews, anime) {
    const TitleAnime = slideElement.querySelector("#TitleAnime");
    const PAnime = slideElement.querySelector("#NewAnime");
    const autorP = slideElement.querySelector("#autorP");
    const Perfilautor = slideElement.querySelector("#PerfilautorA");
    const Foro = slideElement.querySelector("#ForoA");
    const CommentsA = slideElement.querySelector("#CommentsA");
    const TypeA = slideElement.querySelector("#TypeA");
    const Animenew = slideElement.querySelector("#AnimeNews1");
    const GeneroA = slideElement.querySelector("#GeneroA");
    const DatePublication = slideElement.querySelector("#DatePublication");

    Animenew.src = latestNews.images.jpg.image_url;
    TitleAnime.textContent = latestNews.title;
    PAnime.textContent = latestNews.excerpt;
    autorP.textContent = latestNews.author_username;
    Perfilautor.href = latestNews.author_url;
    Foro.href = latestNews.forum_url;
    CommentsA.textContent = latestNews.comments;

    const fechaOriginal = latestNews.date;
    const fecha = new Date(fechaOriginal);
    const fechaFormateada = `${fecha.getFullYear()}-${("0" + (fecha.getMonth() + 1)).slice(-2)}-${("0" + fecha.getDate()).slice(-2)}`;
    DatePublication.textContent = fechaFormateada;

    if (anime.type === "Movie") {
        if (anime.themes && anime.themes.length > 0) {
            let themesText = "";
            anime.themes.forEach((theme) => {
                themesText += theme.name + ", ";
            });
            GeneroA.textContent = themesText.slice(0, -2);
            TypeA.textContent = anime.type;
            TypeA.style.background = "red";
            TypeA.style.color = "white";
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
            TypeA.style.color = "white";
        }
    }
}

// Función para obtener las noticias de un anime
async function obtenerNoticiasAnime(animeId, slideElement) {
    const news = `${Url}/anime/${animeId}/news`;
    const Anime = `${Url}/anime/${animeId}`;

    fetch(news)
        .then((respuesta) => {
            if (!respuesta.ok) {
                throw new Error("Error al obtener las noticias del anime");
            }
            return respuesta.json();
        })
        .then((data) => {
            const latestNews = data.data[0];

            fetch(Anime)
                .then((respuesta) => {
                    if (!respuesta.ok) {
                        throw new Error("Error al obtener las noticias del anime");
                    }
                    return respuesta.json();
                })
                .then(async (data) => {
                    const anime = data.data;
                    await actualizarElementosHTML(slideElement, latestNews, anime);
                })
                .catch((error) => {
                    console.error("Error al obtener las noticias:", error);
                });
        })
        .catch((error) => {
            console.error("Error al obtener las noticias:", error);
        });
}

// Función principal para obtener las noticias de todos los slides
export async function GetAnimeNes(AnimeId, slideElement) {
  obtenerNoticiasAnime(AnimeId, slideElement);
}
