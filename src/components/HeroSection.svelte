<script>
  import Scroller from "@sveltejs/svelte-scroller";

  let index, offset, progress;
</script>

<Scroller top={0} bottom={0.3} bind:index bind:offset bind:progress>
  <div slot="background">
    <div
      class="bg-cover bg-[left_calc(40%)_top_calc(40%)] h-screen backdrop-filter backdrop-brightness-[75%] relative w-full z-40"
      style="background-image: url('img/hero.jpeg');"
    ></div>
  </div>

  <div
    slot="foreground"
    class="w-full h-screen flex items-center flex-col backdrop-filter backdrop-brightness-[75%]"
  >
    <div class="flex">
      <h1
        id="hero-title"
        class="font-greatVibes text-center text-white text-6xl motion-duration-2000 motion-delay-1000 mt-20"
      >
        Sergio & Karen
      </h1>
    </div>
    <div class="flex flex-grow items-end font-greatVibes text-white text-4xl">
      <h2 class="drop-shadow-5xl mb-12">05•03•2025</h2>
    </div>
  </div>
</Scroller>

<style>
</style>
