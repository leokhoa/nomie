<script>
  import { createEventDispatcher } from "svelte";

  export let min = "0";
  export let max = "10";
  export let value = "5";

  let tempValue = value;

  const dispatch = createEventDispatcher();
</script>

<style lang="scss">
  input[type="range"] {
    background-color: var(--color-solid);
  }
  .tracker-input {
    display: flex;
    flex: 1;
    flex-grow: 1;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 10px;
    max-height: 100%;
    min-height: 200px;

    .value {
      text-align: center;
      font-weight: bold;
      font-size: 2rem;
      margin: 0 0 20px 0;
      line-height: 2rem;
      color: var(--color-inverse);
    }

    input[type="range"] {
      padding: 0 5px;
      margin: 0 auto;
      -webkit-appearance: none;
      width: 100%;
      margin: -5.5px 0;
    }
    input[type="range"]:focus {
      outline: none;
    }
    input[type="range"]::-webkit-slider-runnable-track {
      width: 100%;
      height: 50px;
      cursor: pointer;
      box-shadow: 1px 1px 1px rgba(0, 0, 0, 0), 0px 0px 1px rgba(13, 13, 13, 0);
      background: var(--color-faded);
      border-radius: 25px;
      padding: 0 6px;
      border: 1px solid var(--color-faded-2);
    }
    input[type="range"]::-webkit-slider-thumb {
      box-shadow: 0px 4px 6px -2px var(--color-faded-2);
      border: 2px solid var(--color-primary-bright);
      height: 39px;
      width: 40px;
      border-radius: 25px;
      background: var(--color-solid);
      cursor: pointer;
      -webkit-appearance: none;
      margin-top: 4px;
    }
    input[type="range"]:focus::-webkit-slider-runnable-track {
      background: var(--color-faded);
    }
    input[type="range"]::-moz-range-track {
      width: 100%;
      height: 50px;
      cursor: pointer;
      box-shadow: 1px 1px 1px rgba(0, 0, 0, 0), 0px 0px 1px rgba(13, 13, 13, 0);
      background: var(--color-faded);
      border-radius: 25px;
      border: 0px solid var(--color-solid-2);
    }
    input[type="range"]::-moz-range-thumb {
      box-shadow: 5.4px 5.4px 6.5px rgba(0, 0, 0, 0.18),
        0px 0px 5.4px rgba(13, 13, 13, 0.18);
      border: 1px solid var(--color-inverse);
      height: 39px;
      width: 40px;
      border-radius: 25px;
      background: var(--color-solid-2);
      cursor: pointer;
    }
    input[type="range"]::-ms-track {
      width: 100%;
      height: 50px;
      cursor: pointer;
      background: transparent;
      border-color: transparent;
      color: transparent;
    }
    input[type="range"]::-ms-fill-lower {
      background: rgba(36, 37, 39, 0.08);
      border: 0px solid var(--color-solid-2);
      border-radius: 50px;
      box-shadow: 1px 1px 1px rgba(0, 0, 0, 0), 0px 0px 1px rgba(13, 13, 13, 0);
    }
    input[type="range"]::-ms-fill-upper {
      background: rgba(48, 50, 52, 0.08);
      border: 0px solid var(--color-solid-2);
      border-radius: 50px;
      box-shadow: 1px 1px 1px rgba(0, 0, 0, 0), 0px 0px 1px rgba(13, 13, 13, 0);
    }
    input[type="range"]::-ms-thumb {
      box-shadow: 5.4px 5.4px 6.5px rgba(0, 0, 0, 0.18),
        0px 0px 5.4px rgba(13, 13, 13, 0.18);
      border: 1px solid rgba(0, 0, 0, 0.05);
      width: 40px;
      border-radius: 25px;
      background: var(--color-solid);
      cursor: pointer;
      height: 39px;
    }
    input[type="range"]:focus::-ms-fill-lower {
      background: rgba(48, 50, 52, 0.08);
    }
    input[type="range"]:focus::-ms-fill-upper {
      background: rgba(60, 63, 65, 0.08);
    }
  }
</style>

<div class="tracker-input slider">
  <div class="value">{tempValue}</div>
  <input
    type="range"
    bind:value={tempValue}
    {min}
    {max}
    on:change={() => {
      dispatch('change', parseInt(tempValue));
    }} />
</div>
