<script>
  import { onMount } from "svelte";
  import PhotoSwipeLightbox from "photoswipe/lightbox";
  import "photoswipe/style.css";
  const images = [
    {
      src: "/gallery/1.jpeg",
      thumbnailURL: "/gallery/1.jpeg",
      width: 1920,
      height: 2560,
    },
    {
      src: "/gallery/2.jpeg",
      thumbnailURL: "/gallery/2.jpeg",
      width: 1111,
      height: 955,
    },
    {
      src: "/gallery/3.jpeg",
      thumbnailURL: "/gallery/3.jpeg",
      width: 960,
      height: 1020,
    },
    {
      src: "/gallery/4.jpeg",
      thumbnailURL: "/gallery/4.jpeg",
      width: 1920,
      height: 2560,
    },
    {
      src: "/gallery/5.jpeg",
      thumbnailURL: "/gallery/5.jpeg",
      width: 960,
      height: 1280,
    },
    {
      src: "/gallery/6.jpeg",
      thumbnailURL: "/gallery/6.jpeg",
      width: 960,
      height: 1280,
    },
    {
      src: "/gallery/7.jpeg",
      thumbnailURL: "/gallery/7.jpeg",
      width: 1494,
      height: 2560,
    },
    {
      src: "/gallery/8.jpeg",
      thumbnailURL: "/gallery/8.jpeg",
      width: 1280,
      height: 853,
    },
    {
      src: "/gallery/9.jpeg",
      thumbnailURL: "/gallery/9.jpeg",
      width: 1153,
      height: 853,
    },
    {
      src: "/gallery/10.jpeg",
      thumbnailURL: "/gallery/10.jpeg",
      width: 1920,
      height: 2560,
    },
    {
      src: "/gallery/11.jpeg",
      thumbnailURL: "/gallery/11.jpeg",
      width: 1600,
      height: 1066,
    },
    {
      src: "/gallery/12.jpeg",
      thumbnailURL: "/gallery/12.jpeg",
      width: 2560,
      height: 1706,
    },
    {
      src: "/gallery/13.jpeg",
      thumbnailURL: "/gallery/13.jpeg",
      width: 2560,
      height: 1920,
    },
    {
      src: "/gallery/14.jpeg",
      thumbnailURL: "/gallery/14.jpeg",
      width: 1920,
      height: 2560,
    },
    {
      src: "/gallery/15.jpeg",
      thumbnailURL: "/gallery/15.jpeg",
      width: 1920,
      height: 2560,
    },
    {
      src: "/gallery/16.jpeg",
      thumbnailURL: "/gallery/16.jpeg",
      width: 960,
      height: 1280,
    },
    {
      src: "/gallery/17.jpeg",
      thumbnailURL: "/gallery/17.jpeg",
      width: 1200,
      height: 1600,
    },
    {
      src: "/gallery/18.jpeg",
      thumbnailURL: "/gallery/18.jpeg",
      width: 960,
      height: 1280,
    },
    {
      src: "/gallery/19.jpeg",
      thumbnailURL: "/gallery/19.jpeg",
      width: 1600,
      height: 1200,
    },
    {
      src: "/gallery/20.jpeg",
      thumbnailURL: "/gallery/20.jpeg",
      width: 576,
      height: 1005,
    },
    {
      src: "/gallery/21.jpeg",
      thumbnailURL: "/gallery/21.jpeg",
      width: 899,
      height: 1599,
    },
    {
      src: "/gallery/22.jpeg",
      thumbnailURL: "/gallery/22.jpeg",
      width: 720,
      height: 1144,
    },
    {
      src: "/gallery/23.jpeg",
      thumbnailURL: "/gallery/23.jpeg",
      width: 960,
      height: 1280,
    },
    {
      src: "/gallery/24.jpeg",
      thumbnailURL: "/gallery/24.jpeg",
      width: 910,
      height: 576,
    },
    {
      src: "/gallery/25.jpeg",
      thumbnailURL: "/gallery/25.jpeg",
      width: 576,
      height: 866,
    },
    {
      src: "/gallery/26.jpeg",
      thumbnailURL: "/gallery/26.jpeg",
      width: 1600,
      height: 1200,
    },
    {
      src: "/gallery/27.jpeg",
      thumbnailURL: "/gallery/27.jpeg",
      width: 1200,
      height: 1600,
    },
    {
      src: "/gallery/28.jpeg",
      thumbnailURL: "/gallery/28.jpeg",
      width: 720,
      height: 1152,
    },
    {
      src: "/gallery/29.jpeg",
      thumbnailURL: "/gallery/29.jpeg",
      width: 768,
      height: 1024,
    },
    {
      src: "/gallery/30.jpeg",
      thumbnailURL: "/gallery/30.jpeg",
      width: 750,
      height: 739,
    },
    {
      src: "/gallery/31.jpeg",
      thumbnailURL: "/gallery/31.jpeg",
      width: 1200,
      height: 1600,
    },
    {
      src: "/gallery/32.jpeg",
      thumbnailURL: "/gallery/32.jpeg",
      width: 1200,
      height: 1600,
    },
    {
      src: "/gallery/33.jpeg",
      thumbnailURL: "/gallery/33.jpeg",
      width: 1200,
      height: 1600,
    },
    {
      src: "/gallery/34.jpeg",
      thumbnailURL: "/gallery/34.jpeg",
      width: 960,
      height: 1280,
    },
    {
      src: "/gallery/35.jpeg",
      thumbnailURL: "/gallery/35.jpeg",
      width: 1920,
      height: 2560,
    },
  ];

  let lightbox;

  onMount(() => {
    lightbox = new PhotoSwipeLightbox({
      gallery: "#gallery",
      children: "a",
      dataSource: images,
      pswpModule: () => import("photoswipe"),
    });
    lightbox.init();
  });

  function handleOnClick() {
    lightbox.loadAndOpen(0);
  }
</script>

<div>
  <h3 class="font-greatVibes text-5xl text-center my-8">
    Conoce nuestra historia
  </h3>
  <div id="play-button" class=" flex justify-center" onclick={handleOnClick}>
    <lord-icon
      src="https://cdn.lordicon.com/rszslpey.json"
      trigger="loop"
      delay="2000"
      stroke="bold"
      colors="primary:#ee8f66,secondary:#eee966"
      style="width:250px;height:250px"
    >
    </lord-icon>
  </div>
  <p class="text-center pb-8" onclick={handleOnClick}>Da click para verlo!</p>
  <!-- <div class="pswp-gallery flex flex-wrap justify-center" id="gallery">
    {#each images as image}
      <a
        href={image.largeURL}
        data-pswp-width={image.width}
        data-pswp-height={image.height}
        target="_blank"
        rel="noreferrer"
      >
        <img class="w-28 h-24" src={image.largeURL} alt="" />
      </a>
    {/each}
  </div> -->
</div>
