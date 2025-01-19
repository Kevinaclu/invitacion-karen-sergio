<script>
  import Scroller from "@sveltejs/svelte-scroller";
  import ItineraryCarousel from "./ItineraryCarousel.svelte";

  let index, offset, progress;
</script>

<Scroller top={0} bottom={0.3} bind:index bind:offset bind:progress>
  <div slot="background">
    <div
      class="bg-cover min-h-[60vh] bg-center backdrop-filter backdrop-brightness-[75%] relative w-full z-40"
      style="background-image: url('img/itinerary.jpeg');"
    ></div>
  </div>

  <div
    slot="foreground"
    class="w-full min-h-[60vh] flex items-center flex-col backdrop-filter backdrop-brightness-[75%] text-white"
  >
    <div class="flex">
      <h1
        id="hero-title"
        class="font-greatVibes text-center text-white text-6xl motion-duration-1500 mt-20 motion-preset-slide-right"
      >
        Itinerario
      </h1>
    </div>
    <ItineraryCarousel />
  </div>
</Scroller>

<style>
</style>
