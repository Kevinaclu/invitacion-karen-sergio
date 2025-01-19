<script>
  export let title;
  export let godParents;
</script>

<div class="w-3/4 text-center mx-auto p-2 sm:p-5">
  <i
    class="fab fa-gratipay text-primary-500"
    aria-hidden="true"
    style="font-size: 6rem;"
  ></i>
  <div class="mt-2">
    <h1 class="text-center font-playfair py-1 text-2xl sm:text-3xl">
      {title}
    </h1>
    {#each godParents as godParentName}
      <h1 class="text-center font-raleway py-1 text-base sm:text-lg">
        {godParentName}
      </h1>
    {/each}
  </div>
</div>
