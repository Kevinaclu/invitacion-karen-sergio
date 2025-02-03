<script>
  import Carousel from "svelte-carousel";
  import GodParentCarouselItem from "./GodParentCarouselItem.svelte";
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

  <GodParentCarouselItem
    title={"Velación de Novia"}
    godParents={[
      "Veronica de Bojorquez",
      "Carlos Bojorquez",
      "Maria Luz Corral Ríos",
      "José Noe Castro Duarte",
    ]}
  />
  <GodParentCarouselItem
    title={"Velación de Novio"}
    godParents={[
      "Erika Valenzuela Barreras",
      "Jorge Alfredo Alvarez López",
      "Adriana Silva Rodríguez",
      "Humberto Villegas Villegas",
    ]}
  />
  <GodParentCarouselItem
    title={"Lazo"}
    godParents={["Edna Stephanie Castro Grijalva", "Luis Alberto Peña Moreno"]}
  />
  <GodParentCarouselItem
    title={"Arras"}
    godParents={[
      "Rocio Carolina Villegas Valenzuela",
      "Ramon Alfredo Feliciano Lopez",
    ]}
  />
  <GodParentCarouselItem
    title={"Anillos"}
    godParents={["Martha Beatriz Villegas Cota", "Pastor Ruben Gil Guerrero"]}
  />
</Carousel>
