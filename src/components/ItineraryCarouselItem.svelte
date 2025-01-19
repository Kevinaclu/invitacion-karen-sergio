<script>
  export let title;
  export let date;
</script>

<div class="w-3/4 text-center mx-auto p-2 sm:p-5">
  <lord-icon
    src="https://cdn.lordicon.com/rlngnytn.json"
    trigger="loop"
    delay="1000"
    colors="primary:#fff,secondary:#fff"
    style="width: 150px; height: 150px;"
  ></lord-icon>
  <div class="mt-2">
    <h1 class="text-center font-raleway py-1 text-2xl sm:text-3xl">{title}</h1>
    <h1 class="text-center font-raleway py-1 text-base sm:text-lg">
      {date}
    </h1>
  </div>
</div>
