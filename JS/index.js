import setupMenu from "./Header/Navbar.js";
import NavResposive from "./Header/NavbarToggler.js";
import ImagesHome from "./Home/Home.js";
import { GetAnimeNes } from "../APIs/Jikan API/AnimeNews.js";
import { GetMangaNes } from "../APIs/Jikan API/MangaNews.js";
import { carousel } from "./News/CarouselNews.js";
import { Episodes } from "./Episodes/OwlCarouselEpisodes.js";
import { GetAnimeEpisodes } from "../APIs/Jikan API/EpisodesAnime.js";

const slide = document.querySelectorAll(".slide");
const CardEpisode = document.querySelectorAll(".item");

document.addEventListener("DOMContentLoaded", async function () {
  setupMenu();
  NavResposive();
  ImagesHome();
  GetMangaNes(130317, slide[0]);
  GetAnimeNes(55071, slide[0]);
  GetMangaNes(148054, slide[1]);
  GetAnimeNes(49778, slide[1]);
  GetMangaNes(131030, slide[2]);
  GetAnimeNes(57100, slide[2]);
  carousel();

  await GetAnimeEpisodes(49613, CardEpisode[0]);
  await GetAnimeEpisodes(54837, CardEpisode[1]);
  await GetAnimeEpisodes(53889, CardEpisode[2]);
  await GetAnimeEpisodes(52991, CardEpisode[3]);
  await GetAnimeEpisodes(52299, CardEpisode[4]);
  await GetAnimeEpisodes(56352, CardEpisode[5]);
  await GetAnimeEpisodes(55866, CardEpisode[6]);

  await Episodes(); // Llamada a Episodes al final
});