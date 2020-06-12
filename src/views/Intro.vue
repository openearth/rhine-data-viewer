<template>
  <!-- <v-dialog
   v-model="tabLocation"
    hide-overlay
    internal-activator
    persistent
    no-click-animation> -->

        <v-card flat tile  >
          <v-card-title>
            <span class="headline">Rhine web-viewer</span>
          </v-card-title>
          <v-card-text>This web-viewer provides essential geographical information for the Rhine region.
           </v-card-text>

            <v-sheet class="mt-5">
                <v-img
                class="spacing-playground"
                src="~@/assets/img/Rhein-Karte2.png"
                >
                </v-img>
            </v-sheet>


        </v-card>
      <!-- </v-dialog> -->

</template>

<script>


export default {
//   data: () => ({
//     tabLocation:false
//   }),

//   created() {
//     const seen = window.location.hash;

//     if(seen == '#/intro') {
//       this.tabLocation = true;
//     }
//   },
};
</script>
<style>
</style>
