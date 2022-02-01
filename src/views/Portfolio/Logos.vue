<template>
  <v-container grid-list-xl>
    <v-img
      align="center"
      lazy-src="http://mylibrary.aeconcept.fr/wp-content/uploads/2022/01/ux-g4708c9531_1920-1024x680.jpg"
      max-height="150"
      max-width="auto"
      src="http://mylibrary.aeconcept.fr/wp-content/uploads/2022/01/ux-g4708c9531_1920-1024x680.jpg"
    ></v-img>
    <br />
    <h2 class="pl-4">
      <span>Création </span>
      <span class="green--text">Logos</span>
    </h2>
    <v-layout row justify-center align-center wrap class="mt-4 pt-2">
      <v-dialog
        v-model="image.dialog"
        lazy
        max-width="800"
        v-for="image in images"
        :key="image.title"
      >
        <template v-slot:activator="{ on }">
          <v-flex xs12 sm6 md4 lg4 xl4 v-on="on">
            <v-card hover flat color="transparent">
              <v-img
                :src="image.poster"
                height="230"
                :alt="image.title"
                lazy-src="https://cdn.dribbble.com/users/503653/screenshots/3143656/fluid-loader.gif"
              ></v-img>
              <v-card-title primary-title class="justify-center">{{
                image.title
              }}</v-card-title>
            </v-card>
          </v-flex>
        </template>
        <v-card v-if="image.dialog">
          <v-img :src="image.poster"></v-img>
        </v-card>
      </v-dialog>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  metaInfo: {
    title: "Logos",
    titleTemplate: "",
    meta: [
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        name: "description",
        content:
          "Abdellatif EL JID Web Portfolio Vue Vue.js HTML CSS Vuetify Axios GraphQL JavaScript Web Developer Front-End Frontend Designer App Responsive",
      },
      { charset: "utf-8" },
      { property: "og:title", content: "Abdellatif EL JID" },
      { property: "og:site_name", content: "Abdellatif EL JID" },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://aeconcept.fr/" },
      {
        property: "og:image",
        content: "https://i.imgur.com/Dcz2PGx.jpg",
      },
      {
        property: "og:description",
        content:
          "Eldin Zaimovic's Graphic Adobe PhotoShop Logo Design Instagram Poster",
      },
    ],
  },
  data() {
    return {
      dialog: false,
      images: [
        {
          dialog: false,
          title: "Logo AE Concept",
          poster: "../assets/images/aeconcept.png",
        },
        {
          dialog: false,
          title: "Logo AssouTrans",
          poster: "../assets/images/assou.png",
        },
        {
          dialog: false,
          title: "Logo AE Service",
          poster: "../assets/images/log3.png",
        },
        {
          dialog: false,
          title: "Logo Asif",
          poster: "../assets/images/asif.PNG",
        },
        {
          dialog: false,
          title: "Logo Hurricane Boxing Academy",
          poster: "../assets/images/HBAlogo4.png",
        },
        {
          dialog: false,
          title: "Logo DecoLaser",
          poster: "../assets/images/logodecolaser.jpg",
        },
      ],
    };
  },
};
</script>

<style  scoped>
</style>