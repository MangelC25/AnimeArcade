function ImagesHome() {
    const images = document.querySelectorAll('#ImgAnime img');
    let index = 0;

    function showNextImage() {
        images[index].style.display = 'none';
        index = (index+1) % images.length;
        images[index].style.display = 'block';
    }

    images[index].style.display = 'block';
    setInterval(showNextImage, 4000);
}
   
export default ImagesHome;