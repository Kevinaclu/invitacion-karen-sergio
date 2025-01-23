<script>
  import ItineraryCarousel from "./ItineraryCarousel.svelte";
</script>

<div
  class="relative w-full flex items-center flex-col text-white"
  style="background-image: url('img/itinerary.jpeg');"
>
  <div class="bg-black bg-opacity-40 w-full h-full absolute top-0 left-0"></div>
  <div class="flex">
    <h1
      class="font-greatVibes text-center text-white text-6xl motion-duration-1500 mt-20 motion-preset-slide-right"
    >
      Itinerario
    </h1>
  </div>
  <ItineraryCarousel />
</div>

<style>
</style>
