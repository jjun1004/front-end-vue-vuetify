<!-- component UI definition-->
<template>
  <v-card>
    <v-card-title>Grid System</v-card-title>
    <v-card-text>

        <v-row>
            <v-col class="red" col="12" sm="2" md="6" lg="10">A</v-col>
            <v-col class="green" col="12" sm="10" md="6" lg="2">B</v-col>
        </v-row>


        <v-row class="indigo lighten-3">
          <v-col col="12" sm="2" md="6" lg="10">A</v-col>
          <v-col col="12" sm="10" md="6" lg="2">B</v-col>
        </v-row>

    </v-card-text>
  </v-card>
</template>

<script>
export default {
    // component's name found in vue devtools on chrome.
    name: "",
    // components that i want to add
    components: {
    },
    // component data definition
    data: function() {
        return {
        };
    },
    // component method definition
    methods: {
    }
}
</script>

<!-- component style definition-->
<style scoped>

</style>