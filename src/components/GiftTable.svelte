<script>
  import Scroller from "@sveltejs/svelte-scroller";
  import Clock from "./Clock.svelte";

  let index, offset, progress;
</script>

<Scroller top={0} bottom={0.5} bind:index bind:offset bind:progress>
  <div slot="background">
    <div
      class="bg-cover bg-center h-screen backdrop-filter backdrop-brightness-[50%] relative w-full z-40"
      style="background-image: url('img/gifttable.jpeg');"
    ></div>
  </div>

  <div
    slot="foreground"
    class="w-full flex items-center flex-col backdrop-filter backdrop-brightness-[75%]"
  >
    <div class="w-11/12 py-10 mx-auto">
      <div
        class="h-full sm:w-1/2 mx-auto bg-[rgba(255,255,255,0.7)] py-5 text-black sm:bg-[left_calc(50%)_top_calc(40%)] bg-[left_calc(40%)_top_calc(40%)] sm:min-h-[30vh] min-h-[50vh] bg-cover relative w-full z-40"
      >
        <div class="h-full flex sm:p-5 p-5">
          <div class="grid grid-cols-1 w-full mx-auto content-center">
            <h1
              class="text-center font-greatVibes sm:py-2 py-1 text-6xl sm:text-7xl"
            >
              Mesa de Regalos
            </h1>

            <div
              class="grid sm:grid-cols-1 grid-cols-1 mt-10 gap-10 sm:w-3/4 mx-auto"
            >
              <div class="w-3/4 mb-5 mx-auto">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1yrFd3Eg00OX4ibmirdehcSy0xhgTQCsmnw&s"
                  class="w-full mx-auto"
                  alt=""
                />
                <div class="mt-2">
                  <div class="flex justify-center items-center w-full py-1">
                    <a
                      href="https://mesaderegalos.liverpool.mx/LP/51594972/Sergio-Karen_Patricia"
                      class="p-2 my-auto bg-[#d38301] shadow-xl text-white rounded hover:bg-white hover:text-black"
                      ><i class="fa fa-gift pr-2"></i>Ir a mesa de regalos</a
                    >
                  </div>
                </div>
              </div>
              <div class="border border-b-2 border-black"></div>
              <div class="w-3/4 my-4 mx-auto">
                <div class="text-center">
                  <h1 class="text-center font-bodoni py-1 text-3xl sm:text-3xl">
                    Lluvia de Sobres
                  </h1>
                  <i class="fa fa-envelope text-primary-500 text-8xl"></i>
                  <h1 class="text-center font-raleway py-1 text-sm sm:text-lg">
                    "La lluvia de sobres, es la tradición de regalar dinero en
                    efectivo a los novios en un sobre el día del evento"
                  </h1>
                </div>
              </div>
              <div class="border border-b-2 border-black"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</Scroller>
