<!-- component UI definition-->
<template>
  <v-card class="mx-auto" width="500px">
    <v-img src="@/assets/photos/photo3.jpg" height="250px"/>
    <v-card-title>About</v-card-title>
    <v-card-subtitle>This is an about page</v-card-subtitle>
    <v-divider/>
    <v-card-text>
      The v-card component is a versatile component that can be used for anything from a panel
    </v-card-text>
    <v-divider/>
    <v-card-text>
      The card component has numerous helper components to make markup as easy as possible. 
    </v-card-text>
    <v-card-actions>
      <div class="mx-auto">
        <v-btn class="mr-2" color="success">Ok</v-btn>
        <v-btn color="info">Cancel</v-btn>
      </div>
    </v-card-actions>
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