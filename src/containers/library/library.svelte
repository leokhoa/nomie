<script>
  import Modal from "../../components/modal/modal.svelte";

  import TrackerButton from "../../containers/board/tracker-button.svelte";
  import NText from "../../components/text/text.svelte";
  // Stores
  import { TrackerStore } from "../../store/trackers";
  import { Lang } from "../../store/lang";
  import { TrackerLibrary } from "../../store/tracker-library";
  import { Interact } from "../../store/interact";

  let installed = {}; // hol der for anything installed during the opening
</script>

<style lang="scss" type="text/scss">
  .grid {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    padding: 16px 0;
    flex-grow: 1;
    .tracker-option {
      margin: 4px;
    }
  }

  .intro-message {
    text-align: center;
    margin: 0 16px;
  }
  .tracker-option {
    position: relative;
    margin: 4px;
    .badge {
      position: absolute;
      right: 8px;
      top: 10px;
      z-index: 400;
      width: 22px;
      padding: 0;
      text-align: center;
    }
  }
</style>

<Modal
  type={$TrackerLibrary.first ? 'cover' : 'fullscreen'}
  show={$TrackerLibrary.show}
  className="library-modal"
  title={Lang.t('tracker.things-to-track')}>

  {#if $TrackerLibrary.first}
    <div class="px-2 pt-3 intro-message">
      <NText size="sm" tag="div">
        Select at least 1 trackers to get started.
        <br />
        You can add more later, and create your own.
      </NText>
    </div>
  {/if}

  <div class="grid">
    {#each $TrackerLibrary.trackers as tracker, index (tracker.tag)}
      <div class="tracker-option">
        {#if TrackerStore.tagExists(tracker.tag) || installed.hasOwnProperty(tracker.tag)}
          <div class="badge badge-green">
            <i class="zmdi zmdi-check" />
          </div>
        {/if}
        <TrackerButton
          {tracker}
          on:click={() => {
            if (!(TrackerStore.tagExists(tracker.tag) || installed.hasOwnProperty(tracker.tag))) {
              TrackerStore.saveTracker(tracker);
              installed[tracker.tag] = true;
              Interact.toast(`${tracker.label} added`);
            } else {
              Interact.toast(`${tracker.label} already installed`);
            }
          }} />
      </div>
    {/each}
  </div>
  <button
    slot="footer"
    disabled={Object.keys(installed).length === 0 && $TrackerLibrary.first}
    class="btn btn-primary filler btn-lg"
    on:click={TrackerLibrary.toggle}>
    {Lang.t('general.done')}
  </button>
</Modal>
