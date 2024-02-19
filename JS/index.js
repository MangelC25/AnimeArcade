import setupMenu from "./Header/Navbar.js";
import NavResposive from "./Header/NavbarToggler.js";
import ImagesHome from "./Home/Home.js";
import { GetAnimeNes } from "../APIs/Jikan API/AnimeNews.js";
import { GetMangaNes } from "../APIs/Jikan API/MangaNews.js";
import { carousel } from "./News/CarouselNews.js";

const slide = document.querySelectorAll(".slide");

document.addEventListener("DOMContentLoaded", function () {
  setupMenu();
  NavResposive();
  ImagesHome();
  GetMangaNes(125725, slide[0]);
  GetAnimeNes(55855, slide[0]);
  GetMangaNes(143609, slide[1]);
  GetAnimeNes(53912, slide[1]);
  GetMangaNes(138673, slide[2]);
  GetAnimeNes(53534, slide[2]);
  carousel();
  
  console.log("slides", slide);
});
