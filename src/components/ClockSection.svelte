<script>
  import Scroller from "@sveltejs/svelte-scroller";
  import Clock from "./Clock.svelte";

  let index, offset, progress;
</script>

<Scroller top={0} bottom={0.1} bind:index bind:offset bind:progress>
  <div slot="background">
    <div
      class="bg-cover bg-center h-screen backdrop-filter backdrop-brightness-[50%] relative w-full z-40"
      style="background-image: url('img/clock.jpeg');"
    ></div>
  </div>

  <div
    slot="foreground"
    class="w-full h-screen flex items-center flex-col backdrop-filter backdrop-brightness-[75%]"
  >
    <div class="h-full flex sm:items-start font-playfair">
      <div class="grid grid-cols-1 w-3/4 mx-auto content-start sm:py-6">
        <h1
          class="text-center font-serif2 sm:py-1 py-2 text-2xl sm:text-5xl text-white"
          style="text-shadow: black 1px 1px;"
        >
          ¡Nos casamos! <br /> Empieza la cuenta regresiva
        </h1>
        <h1
          class="text-center font-serif1 sm:py-1 py-1 text-2xl sm:text-4xl text-white"
          style="text-shadow: black 1px 1px;"
        >
          Sábado 15 de Marzo 2025
        </h1>
        <Clock />
      </div>
    </div>
  </div>
</Scroller>
