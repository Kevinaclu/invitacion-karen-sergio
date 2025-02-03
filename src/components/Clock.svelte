<script>
  import { onMount } from "svelte";

  // Variables reactivas para los valores del countdown
  let days = "00";
  let hours = "00";
  let minutes = "00";
  let seconds = "00";

  const weddingDate = new Date(2025, 2, 15, 15).getTime();

  const updateCountdown = () => {
    const now = new Date().getTime();
    const distance = weddingDate - now;

    const daysLeft = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hoursLeft = Math.floor(
      (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutesLeft = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const secondsLeft = Math.floor((distance % (1000 * 60)) / 1000);

    // Actualización de las variables reactivas
    days = daysLeft < 10 ? `0${daysLeft}` : daysLeft.toString();
    hours = hoursLeft < 10 ? `0${hoursLeft}` : hoursLeft.toString();
    minutes = minutesLeft < 10 ? `0${minutesLeft}` : minutesLeft.toString();
    seconds = secondsLeft < 10 ? `0${secondsLeft}` : secondsLeft.toString();
  };

  // Ejecutar la actualización al montar el componente y cada segundo
  onMount(() => {
    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);

    // Limpiar el intervalo cuando se destruya el componente
    return () => clearInterval(interval);
  });
</script>

<div id="countdown">
  <div
    class="flex flex-row px-4 justify-center gap-1 font-playfair text-white drop-shadow-lg"
  >
    <div class="flex flex-col items-center border-2 border-white min-w-16">
      <span class="text-2xl">{days}</span>
      <span class="text-base">Días</span>
    </div>
    <div class="flex flex-col items-center border-2 border-white min-w-16">
      <span class="text-2xl">{hours}</span>
      <span class="text-base">Hrs</span>
    </div>
    <div class="flex flex-col items-center border-2 border-white min-w-16">
      <span class="text-2xl">{minutes}</span>
      <span class="text-base">Min</span>
    </div>
    <div class="flex flex-col items-center border-2 border-white min-w-16">
      <span class="text-2xl">{seconds}</span>
      <span class="text-base">Secs</span>
    </div>
  </div>
</div>

<style>
  /* Aquí puedes agregar tus estilos personalizados si es necesario */
</style>
