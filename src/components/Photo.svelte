<script>
  import Scroller from "@sveltejs/svelte-scroller";

  let index, offset, progress;
</script>

<Scroller top={0} bottom={0.1} bind:index bind:offset bind:progress>
  <div slot="background">
    <div
      class="bg-cover bg-center h-[80vh] backdrop-filter backdrop-brightness-[75%] relative w-full z-40"
      style="background-image: url('img/photo.jpeg');"
    ></div>
  </div>

  <div
    slot="foreground"
    class="w-full h-[80vh] flex items-center flex-col backdrop-filter backdrop-brightness-[75%]"
  ></div>
</Scroller>

<style>
</style>
