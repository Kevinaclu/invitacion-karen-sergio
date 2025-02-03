<script>
  import Carousel from "svelte-carousel";
  import ItineraryCarouselItem from "./ItineraryCarouselItem.svelte";
  let carousel;

  function next() {
    carousel.goToNext();
  }

  function prev() {
    carousel.goToPrev();
  }
</script>

<Carousel bind:this={carousel}>
  <div slot="next" class="flex justify-center items-center">
    <!-- svelte-ignore a11y_consider_explicit_label -->
    <button
      onclick={next}
      class="bg-[#d38301] h-5 w-5 mr-2 flex justify-center items-center rounded-full"
      ><i
        class="sc-carousel-arrow__arrow s-QnFt-6YR1ouf sc-carousel-arrow__arrow-next"
      ></i></button
    >
  </div>

  <div slot="prev" class="flex justify-center items-center">
    <!-- svelte-ignore a11y_consider_explicit_label -->
    <button
      onclick={prev}
      class="bg-[#d38301] h-5 w-5 ml-2 flex justify-center items-center rounded-full"
      ><i
        class="sc-carousel-arrow__arrow s-QnFt-6YR1ouf sc-carousel-arrow__arrow-prev"
      ></i></button
    >
  </div>

  <ItineraryCarouselItem
    title={"Misa"}
    date={"3:00 pm"}
    src="https://cdn.lordicon.com/rlngnytn.json"
  />
  <ItineraryCarouselItem
    title={"Ceremonia Civil"}
    date={"7:00 pm"}
    src={"https://cdn.lordicon.com/cykiczdp.json"}
  />
  <ItineraryCarouselItem
    title={"Recepción"}
    date={"8:00 pm"}
    src="https://cdn.lordicon.com/wxnxiano.json"
  />
  <ItineraryCarouselItem
    title={"Presentación de los novios"}
    date={"8:30 pm"}
    src="https://cdn.lordicon.com/aydxrkfl.json"
  />
  <ItineraryCarouselItem
    title={"Cena"}
    date={"9:00 pm"}
    src="https://cdn.lordicon.com/txqkxliv.json"
  />
  <ItineraryCarouselItem
    title={"Fiesta"}
    date={"9:30 pm"}
    src="https://cdn.lordicon.com/ohcuigqh.json"
  />
</Carousel>
