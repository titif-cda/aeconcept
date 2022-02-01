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
            <p>{{ project.text }}</p>
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
    title: "stage Portfolio",
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
          title: "Labelsoft Technologies",

          demo: "https://labelsoft-technologies.fr/",
          vid: "https://youtu.be/KRR6LOenHo4",
          tech: {
            tech1: "ExtJs",
            tech2: "JavaScript",
            tech3: "SQL Server",
          },
          text: "",
          poster: "../assets/images/lst.PNG",
        },
        {
          dialog: false,
          title: "SPI SOFTWARE",

          demo: "https://www.inspi3d.com/",
          tech: {
            tech1: "VUE",
            tech2: "ExtJs",
            tech3: "HTML",
            tech4: "JavaScript",
          },
          text: "Spi-Software situé aux portes de Rodez, développe des outils de configuration web et de gestion de points de vente dédiés à l’ameublement.StoreManager.online (SMO) est une solution en ligne de gestion de points de vente de meubles. Celle-ci réunit toutes les fonctions commerciales de la gestion des ventes et des relations avec la clientèle (CRM).",
          poster: "../assets/images/inspi.PNG",
        },
        /* {
          dialog: false,
          title: "LaserSystem",

          demo: "https://lasersystem.fr/",
          tech: {
            tech1: "WordPress",
            tech2: "MySql",
            tech3: "HTML",
            tech4: "Css",
          },
          poster:
            "http://mylibrary.aeconcept.fr/wp-content/uploads/2022/01/lasersystem-1024x549.png",
        },*/
        {
          dialog: false,
          title: "Hurricane boxing Club",

          demo: "https://www.rodez-hurricaneboxing.club/",
          tech: {
            tech1: "WordPress",
            tech2: "MySql",
            tech3: "HTML",
            tech4: "Css",
          },
          poster: "../assets/images/hurricane.PNG",
        },
      ],
    };
  },
};
</script>

<style  scoped>
</style>