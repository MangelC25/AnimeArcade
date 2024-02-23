const Url = "https://api.jikan.moe/v4";

async function actualizarNumeroEp(ItemElement, lastEpisode, anime) {
  const item = ItemElement.querySelector("#EpisodeImg");
  const NumerEpisode = ItemElement.querySelector("#NumberEpisode");
  const titleA = ItemElement.querySelector("#TitleA");

  item.src = anime.images.webp.image_url;
  titleA.textContent = anime.title_english;
  NumerEpisode.textContent = lastEpisode.mal_id;
}

async function ObtenerEpisodioAnime(animeId, ItemElement) {
  const Anime = `${Url}/anime/${animeId}`;
  const Episodoios = `${Url}/anime/${animeId}/episodes`;

  fetch(Episodoios)
    .then((respuesta) => {
      if (!respuesta.ok) {
        throw new Error("Error al obtener los Episodios del anime");
      }
      return respuesta.json();
    })
    .then((data) => {
      if (data.data && data.data.length > 0) {
        data.data.sort((a, b) => new Date(b.aired) - new Date(a.aired));
        const latestEpisode = data.data[0];
        console.log("Último episodio:", latestEpisode);

        fetch(Anime)
          .then((respuesta) => {
            if (!respuesta.ok) {
              throw new Error("Error al obtener el anime");
            }
            return respuesta.json();
          })
          .then(async (data) => {
            const anime = data.data;
            if (anime) {
              await actualizarNumeroEp(ItemElement, latestEpisode, anime);
              console.log("Esta es la información del Anime", anime);
            } else {
              console.log(
                "No se encontraron datos de anime o la respuesta está vacía"
              );
            }
          })
          .catch((error) => {
            console.error("Error al obtener informacion del anime:", error);
          });
      }
    })
    .catch((error) => {
      console.error("Error al obtener los episodios:", error);
    });
}

export async function GetAnimeEpisodes(AnimeId, ItemElement) {
  await ObtenerEpisodioAnime(AnimeId, ItemElement);
}
