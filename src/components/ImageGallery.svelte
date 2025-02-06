<script>
  import { onMount } from "svelte";
  import PhotoSwipeLightbox from "photoswipe/lightbox";
  import "photoswipe/style.css";
  const images = [
    {
      largeURL: "/gallery/1.jpeg",
      thumbnailURL: "/gallery/1.jpeg",
      width: 1920,
      height: 2560,
    },
    {
      largeURL: "/gallery/2.jpeg",
      thumbnailURL: "/gallery/2.jpeg",
      width: 1111,
      height: 955,
    },
    {
      largeURL: "/gallery/3.jpeg",
      thumbnailURL: "/gallery/3.jpeg",
      width: 960,
      height: 1020,
    },
    {
      largeURL: "/gallery/4.jpeg",
      thumbnailURL: "/gallery/4.jpeg",
      width: 1920,
      height: 2560,
    },
    {
      largeURL: "/gallery/5.jpeg",
      thumbnailURL: "/gallery/5.jpeg",
      width: 960,
      height: 1280,
    },
    {
      largeURL: "/gallery/6.jpeg",
      thumbnailURL: "/gallery/6.jpeg",
      width: 960,
      height: 1280,
    },
    {
      largeURL: "/gallery/7.jpeg",
      thumbnailURL: "/gallery/7.jpeg",
      width: 1494,
      height: 2560,
    },
    {
      largeURL: "/gallery/8.jpeg",
      thumbnailURL: "/gallery/8.jpeg",
      width: 1280,
      height: 853,
    },
    {
      largeURL: "/gallery/9.jpeg",
      thumbnailURL: "/gallery/9.jpeg",
      width: 1153,
      height: 853,
    },
    {
      largeURL: "/gallery/10.jpeg",
      thumbnailURL: "/gallery/10.jpeg",
      width: 1920,
      height: 2560,
    },
    {
      largeURL: "/gallery/11.jpeg",
      thumbnailURL: "/gallery/11.jpeg",
      width: 1600,
      height: 1066,
    },
    {
      largeURL: "/gallery/12.jpeg",
      thumbnailURL: "/gallery/12.jpeg",
      width: 2560,
      height: 1706,
    },
    {
      largeURL: "/gallery/13.jpeg",
      thumbnailURL: "/gallery/13.jpeg",
      width: 2560,
      height: 1920,
    },
    {
      largeURL: "/gallery/14.jpeg",
      thumbnailURL: "/gallery/14.jpeg",
      width: 1920,
      height: 2560,
    },
    {
      largeURL: "/gallery/15.jpeg",
      thumbnailURL: "/gallery/15.jpeg",
      width: 1920,
      height: 2560,
    },
    {
      largeURL: "/gallery/16.jpeg",
      thumbnailURL: "/gallery/16.jpeg",
      width: 960,
      height: 1280,
    },
    {
      largeURL: "/gallery/17.jpeg",
      thumbnailURL: "/gallery/17.jpeg",
      width: 1200,
      height: 1600,
    },
    {
      largeURL: "/gallery/18.jpeg",
      thumbnailURL: "/gallery/18.jpeg",
      width: 960,
      height: 1280,
    },
    {
      largeURL: "/gallery/19.jpeg",
      thumbnailURL: "/gallery/19.jpeg",
      width: 1600,
      height: 1200,
    },
    {
      largeURL: "/gallery/20.jpeg",
      thumbnailURL: "/gallery/20.jpeg",
      width: 576,
      height: 1005,
    },
    {
      largeURL: "/gallery/21.jpeg",
      thumbnailURL: "/gallery/21.jpeg",
      width: 899,
      height: 1599,
    },
    {
      largeURL: "/gallery/22.jpeg",
      thumbnailURL: "/gallery/22.jpeg",
      width: 720,
      height: 1144,
    },
    {
      largeURL: "/gallery/23.jpeg",
      thumbnailURL: "/gallery/23.jpeg",
      width: 960,
      height: 1280,
    },
    {
      largeURL: "/gallery/24.jpeg",
      thumbnailURL: "/gallery/24.jpeg",
      width: 910,
      height: 576,
    },
    {
      largeURL: "/gallery/25.jpeg",
      thumbnailURL: "/gallery/25.jpeg",
      width: 576,
      height: 866,
    },
    {
      largeURL: "/gallery/26.jpeg",
      thumbnailURL: "/gallery/26.jpeg",
      width: 1600,
      height: 1200,
    },
    {
      largeURL: "/gallery/27.jpeg",
      thumbnailURL: "/gallery/27.jpeg",
      width: 1200,
      height: 1600,
    },
    {
      largeURL: "/gallery/28.jpeg",
      thumbnailURL: "/gallery/28.jpeg",
      width: 720,
      height: 1152,
    },
    {
      largeURL: "/gallery/29.jpeg",
      thumbnailURL: "/gallery/29.jpeg",
      width: 768,
      height: 1024,
    },
    {
      largeURL: "/gallery/30.jpeg",
      thumbnailURL: "/gallery/30.jpeg",
      width: 750,
      height: 739,
    },
    {
      largeURL: "/gallery/31.jpeg",
      thumbnailURL: "/gallery/31.jpeg",
      width: 1200,
      height: 1600,
    },
    {
      largeURL: "/gallery/32.jpeg",
      thumbnailURL: "/gallery/32.jpeg",
      width: 1200,
      height: 1600,
    },
    {
      largeURL: "/gallery/33.jpeg",
      thumbnailURL: "/gallery/33.jpeg",
      width: 1200,
      height: 1600,
    },
    {
      largeURL: "/gallery/34.jpeg",
      thumbnailURL: "/gallery/34.jpeg",
      width: 960,
      height: 1280,
    },
    {
      largeURL: "/gallery/35.jpeg",
      thumbnailURL: "/gallery/35.jpeg",
      width: 1920,
      height: 2560,
    },
  ];

  onMount(() => {
    let lightbox = new PhotoSwipeLightbox({
      gallery: "#gallery",
      children: "a",
      pswpModule: () => import("photoswipe"),
    });
    lightbox.init();
  });
</script>

<div>
  <h3 class="font-greatVibes text-5xl text-center my-8">
    Conoce nuestra historia
  </h3>
  <div class="pswp-gallery flex flex-wrap justify-center" id="gallery">
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
  </div>
</div>
