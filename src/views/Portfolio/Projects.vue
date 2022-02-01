<template>
  <v-container grid-list-xl>
    <h2 class="pl-4">
      <span>Web</span>
      <span class="green--text">Portfolio</span>
    </h2>
    <v-layout row justify-center align-center wrap class="mt-4 pt-2">
      <v-dialog
        v-model="project.dialog"
        lazy
        max-width="1000"
        v-for="project in projects"
        :key="project.title"
      >
        <template v-slot:activator="{ on }">
          <v-flex xs12 sm6 md4 lg4 xl4 v-on="on">
            <v-card hover flat color="transparent">
              <v-img
                :src="project.poster"
                :alt="project.title"
                height="230"
                lazy-src="https://cdn.dribbble.com/users/503653/screenshots/3143656/fluid-loader.gif"
              ></v-img>
              <v-card-title primary-title class="justify-center">{{
                project.title
              }}</v-card-title>
            </v-card>
          </v-flex>
        </template>
        <v-card v-if="project.dialog">
          <v-img :src="project.poster"></v-img>
          <v-card-text>
            <h3 class="headline mb-0">
              <span>Technologies</span>
            </h3>
            <v-chip color="green" text-color="white">{{
              project.tech.tech1
            }}</v-chip>
            <v-chip color="green" text-color="white">{{
              project.tech.tech2
            }}</v-chip>
            <v-chip color="green" text-color="white">{{
              project.tech.tech3
            }}</v-chip>
            <v-chip color="green" text-color="white">{{
              project.tech.tech4
            }}</v-chip>
          </v-card-text>
          <v-card-actions>
            <v-btn
              large
              flat
              dark
              color="green"
              :href="project.demo"
              target="_blank"
            >
              <v-icon left>fas fa-globe</v-icon>Site Web
            </v-btn>
            <v-btn
              large
              flat
              dark
              color="green"
              :href="project.vid"
              target="_blank"
            >
              <v-icon left>fas fa-desktop</v-icon>Video
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  metaInfo: {
    title: "projets Portfolio",
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
      dialog: false,
      projects: [
        {
          dialog: false,
          title: "Ce site web",
          git: "https://github.com/titif-cda/mon-portail_vue.git",
          demo: "http://vue.aeconcept.fr/",
          vid: "",
          tech: {
            tech1: "Vue.js",
            tech2: "Vuetify",
            tech3: "vue router",
          },
          poster: "../assets/images/portail.PNG",
        },
        {
          dialog: false,
          title: "FoodBook",

          demo: "",
          vid: "",
          tech: {
            tech1: "C#",
            tech2: "API Rest",
            tech3: "SQL Server",
          },
          poster: "../assets/images/foodbook.png",
        },
        {
          dialog: false,
          title: "Moto Club Millau Passion / site web",

          demo: "http://mcmp.aeconcept.fr/",
          tech: {
            tech1: "VUE",
            tech2: "ExtJs",
            tech3: "HTML",
            tech4: "JavaScript",
          },
          poster: "../assets/images/mcmp.PNG",
        },
        {
          dialog: false,
          title: "Moto Club Millau Passion / BDD",

          demo: "",
          tech: {
            tech1: "WordPress",
            tech2: "MySql",
            tech3: "HTML",
            tech4: "Css",
          },
          poster: "../assets/images/logomcmp.png",
        },
        {
          dialog: false,
          title: "Mon 1er portail web",

          demo: "http://cda28.2isa.org/",
          tech: {
            tech1: "HTML",
            tech2: "CSS",
            tech3: "BOOTSTRAP",
          },
          poster: "../assets/images/1erportail.PNG",
        },
        {
          dialog: false,
          title: "Projet IA",

          demo: "https://www-midilibre-fr.cdn.ampproject.org/c/s/www.midilibre.fr/amp/2019/12/05/millau-un-projet-collectif-sur-lintelligence-artificielle,8583175.php",
          tech: {},
          poster:
            "https://images-midilibre-fr.cdn.ampproject.org/i/s/images.midilibre.fr/api/v1/images/view/5de884178fe56f1b933ccf5b/large/image.jpg?v=3",
        },
        {
          dialog: false,
          title: "Mon 1er CV web",

          demo: "http://cda28.2isa.org/cv/index.html",
          tech: {
            tech1: "HTML",
            tech2: "CSS",
            tech3: "BOOTSTRAP",
            tech3: "Javascript",
          },
          poster: "../assets/images/firstCV.PNG",
        },
      ],
    };
  },
};
</script>

<style  scoped>
</style>