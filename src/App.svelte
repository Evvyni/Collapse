<script>
  let blocks = [1, 2, 3];

  function toggleText(event) {
    const { currentTarget } = event;
    const text =
      currentTarget.parentElement.nextElementSibling.querySelector("#text");
    const btnImage = currentTarget.querySelector("img");
    const flag = btnImage.src.includes("collapse-left.png");

    text.hidden = !flag;
    btnImage.src = flag ? "./img/collapse-down.png" : "./img/collapse-left.png";
  }
</script>
<main class="m-28">
{#each blocks as block}

  <div
    class="block p-4 transition duration-300 cursor-pointer border-b-2 border-gray-700"
  >
    <div id="ttt1" class="flex justify-start">
      <div id="text1" class="text-2xl text-white font-custom">
        Независимые СМИ потому и независимы, что герцог графства коронован
      </div>
      <button
        class="bg-neutral-900 text-white py-2 px-4 border-none cursor-pointer"
        on:click={toggleText}
      >
        <img
          class="w-5 h-5 opacity-80 transition-opacity duration-300"
          src="./img/collapse-left.png"
          alt="Показать/скрыть текст"
        />
      </button>
    </div>
    <article id="ttt" class="">
      <div id="text" class="text-white font-custom" hidden>
        Сложно сказать, почему многие известные личности формируют глобальную
        экономическую сеть и при этом — в равной степени предоставлены сами
        себе. Каждый из нас понимает очевидную вещь: повышение уровня
        гражданского сознания не даёт нам иного выбора, кроме определения
        позиций, занимаемых участниками
      </div>
    </article>
  </div>

{/each}
</main>