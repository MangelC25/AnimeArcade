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
  GetMangaNes(131030, slide[0]);
  GetAnimeNes(56980, slide[0]);
  GetMangaNes(125725, slide[1]);
  GetAnimeNes(58173, slide[1]);
  GetMangaNes(143609, slide[2]);
  GetAnimeNes(53770, slide[2]);
  carousel();
  
  console.log("slides", slide);
});
