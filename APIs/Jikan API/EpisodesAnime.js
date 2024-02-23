const Url = "https://api.jikan.moe/v4";

async function actualizarNumeroEp(ItemElement, lastEpisode, anime) {
  const item = ItemElement.querySelector("#EpisodeImg");
  const NumerEpisode = ItemElement.querySelector("#NumberEpisode");
  const titleA = ItemElement.querySelector("#TitleA");

  item.src = anime.images.webp.image_url;
  titleA.textContent = anime.title;
  NumerEpisode.textContent = lastEpisode.mal_id;
}

async function ObtenerEpisodioAnime(animeId, ItemElement) {
  try {
    const Anime = `${Url}/anime/${animeId}`;
    const Episodoios = `${Url}/anime/${animeId}/episodes`;

    const episodiosRespuesta = await fetch(Episodoios);
    if (!episodiosRespuesta.ok) {
      throw new Error("Error al obtener los Episodios del anime");
    }

    const episodiosData = await episodiosRespuesta.json();
    if (episodiosData.data && episodiosData.data.length > 0) {
      episodiosData.data.sort((a, b) => new Date(b.aired) - new Date(a.aired));
      const latestEpisode = episodiosData.data[0];

      const animeRespuesta = await fetch(Anime);
      if (!animeRespuesta.ok) {
        throw new Error("Error al obtener el anime");
      }

      const animeData = await animeRespuesta.json();
      const anime = animeData.data;
      if (anime) {
        await actualizarNumeroEp(ItemElement, latestEpisode, anime);
      } else {
        console.log(
          "No se encontraron datos de anime o la respuesta está vacía"
        );
      }
    }
  } catch (error) {
    console.error("Error al obtener episodios/anime:", error);
  }
}

export async function GetAnimeEpisodes(AnimeId, ItemElement) {
  await ObtenerEpisodioAnime(AnimeId, ItemElement);
}
