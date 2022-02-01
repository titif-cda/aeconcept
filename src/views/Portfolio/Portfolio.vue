<template>
  <v-container grid-list-xl>
    <v-layout row justify-center align-center wrap class="mt-4 pt-2">
      <v-flex
        v-for="portfolio in portfolios"
        :key="portfolio.src"
        xs12
        sm12
        md4
        lg4
        xl4
      >
        <v-card
          :to="'/portfolio/' + portfolio.title.toLowerCase()"
          hover
          flat
          color="transparent"
          height="230"
        >
          <v-card-title></v-card-title>
          <v-img
            :src="portfolio.src"
            aspect-ratio="2.75"
            height="130"
            contain
          ></v-img>
          <v-card-title primary-title class="justify-center">
            <v-flex text-xs-center subheading font-weight-bold>{{
              portfolio.title
            }}</v-flex>
          </v-card-title>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  metaInfo: {
    title: "Portfolio",
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
      },
      {
        property: "og:description",
        content:
          "Abdellatif EL JID Web Portfolio Vue Vue.js HTML CSS Vuetify Axios GraphQL JavaScript Web Developer Front-End Frontend Designer App Responsive",
      },
    ],
  },
  data() {
    return {
      portfolios: [
        {
          src: "../assets/images/stage.jpg",
          title: "Stages",
        },

        {
          src: "../assets/images/projets.jpg",
          title: "Projets",
        },
        /*
          src: "http://mylibrary.aeconcept.fr/wp-content/uploads/2022/01/blue-laser-ge5c864cc9_1920-1024x683.jpg",
          title: "Laser",
        },*/
        {
          src: "../assets/images/logo.jpg",
          title: "Logos",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
</style>