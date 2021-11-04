<!-- component UI definition-->
<template>
  <v-app>
    <v-navigation-drawer app color="secondary" dark v-model="drawer">
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title class="text-h6"> Application </v-list-item-title>
          <v-list-item-subtitle> with Vue + Vuetify </v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>

      <v-divider></v-divider>

      <v-list dense nav>
        <v-list-item to="/">
          <v-list-item-icon>
            <v-icon>mdi-home</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>Home</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-list-item to="/about">
          <v-list-item-icon>
            <v-icon>mdi-help-circle</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>About</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-list-group :value="false" prepend-icon="mdi-palette-outline" active-class="yellow--text">
          <template v-slot:activator>
            <v-list-item-title>Styles</v-list-item-title>
          </template>
          <v-list-item to="/styles/textandtypography" color="white">
            <v-list-item-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title>Text and Typography</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
          <v-list-item to="/styles/spacing" color="white">
            <v-list-item-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title>Margin and Padding</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-group>

        <v-list-item to="/gridsystem">
          <v-list-item-icon>
            <v-icon>mdi-view-grid-outline</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>Grid System</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar app color="secondary" dark>
      <v-app-bar-nav-icon @click="drawer=!drawer"></v-app-bar-nav-icon>
      <v-toolbar-title>Collapsing Bar</v-toolbar-title>
    </v-app-bar>
    <v-main>
      <v-container fluid>
        <router-view></router-view>
      </v-container>
    </v-main>
    <v-footer app color="secondary" dark>
      <div class="mx-auto">J.K.P</div>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  // component's name found in vue devtools on chrome.
  name: "App",
  // components that i want to add
  components: {},
  // component data definition
  data: function () {
    return {
      drawer: false

    };
  },
  // component method definition
  methods: {},
};
</script>

<!-- component style definition-->
<style scoped></style>
