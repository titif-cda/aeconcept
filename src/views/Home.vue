<template>
  <v-layout column justify-center align-center class="mt-4 pt-2">
    <v-carousel :max-width="width" :height="height">
      <v-carousel-item
        v-for="(item, i) in items"
        :key="i"
        :src="item.src"
        reverse-transition="fade-transition"
        transition="fade-transition"
      ></v-carousel-item>
    </v-carousel>
    <!--<VueCompareImage
      class="hidden-md-and-down fluid ma-0 pa-0"
      hover
      :style="{
        maxWidth: '950px',
        height: '200px',
        align: 'center',
      }"
      :sliderLineWidth="sliderLine"
      :handleSize="hSize"
      :leftImage="leftImage"
      :rightImage="rightImage"
      :sliderPositionPercentage="sliderPosition"
    />
    <VueCompareImage
      class="hidden-lg-and-up imgcomp"
      hover
      :style="{ maxWidth: '400px' }"
      :sliderLineWidth="sliderLine"
      :handleSize="hSize"
      :leftImage="leftImage2"
      :rightImage="rightImage2"
      :sliderPositionPercentage="sliderPosition"
    />-->

    <vue-typer
      class="heading textone"
      :repeat="0"
      text="Abdellatif EL JID"
    ></vue-typer>
    <vue-typer
      :text="text1"
      :repeat="Infinity"
      :shuffle="false"
      initial-action="erasing"
      :pre-type-delay="70"
      :type-delay="70"
      :pre-erase-delay="1980"
      :erase-delay="150"
      erase-style="select-back"
      :erase-on-complete="false"
      caret-animation="smooth"
    ></vue-typer>
    <br />
    <v-flex xs12 sm6 md4 lg4 xl4>
      <v-card flat color="transparent" max-width="500">
        <v-card-title primary-title>
          <div>
            <h3 class="headline mb-0">
              <span>A propos</span>
              <span class="green--text"> de moi</span>
            </h3>
          </div>

          <div>
            <p>
              <br />
              Bonjour! Je suis Abdellatif EL JID. Après 15 années en tant que
              gestionnaire de stocks, je me suis réorienté vers le métier de
              <span class="font-weight-bold"
                >concepteur développeur d'applications </span
              ><br /><br />

              Passionné par l'informatique et les nouvelles technologies depuis
              toujours, vous trouverez sur ce site mon parcours ainsi que les
              differents projets auxquels j'ai participé. <br />
            </p>
          </div>
          <div>
            <p class="text-center font-weight-bold">Bonne visite!!!</p>
          </div>
        </v-card-title>
      </v-card>
      <v-container fluid pa-0>
        <v-row align="center" justify="center" style="height: 100vh" dense>
          <v-col
            cols="12"
            lg="6"
            md="6"
            class="
              pink
              fill-height
              d-flex
              flex-column
              justify-center
              align-center
            "
          >
            <v-card flat tile>
              <v-card-text
                ><v-btn
                  v-for="icon in icons"
                  :key="icon.icon"
                  fab
                  dark
                  outline
                  color="green"
                  :href="icon.href"
                  target="_blank"
                >
                  <v-icon dark>{{ icon.icon }}</v-icon>
                </v-btn></v-card-text
              >
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-flex>
  </v-layout>
</template>

<script>
import { VueTyper } from "vue-typer";
import VueCompareImage from "vue-compare-image";

export default {
  metaInfo: {
    title: "Accueil",
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
  components: {
    "vue-typer": VueTyper,
    VueCompareImage,
  },
  data() {
    return {
      width: 750,
      height: 350,
      items: [
        {
          src: "../assets/images/cartoon3.png",
        },
        {
          src: "../assets/images/cartoon2.png",
        },
      ],
      icons: [
        { href: "https://github.com/titif-cda", icon: "fab fa-github" },
        {
          href: "https://www.linkedin.com/in/a-eljid",
          icon: "fab fa-linkedin-in",
        },
      ],
      text1: [
        "Concepteur d'applications",
        "Dévelopeur d'applications",
        "Développeur de site web",
      ],
      leftImage:
        "http://ressources.aeconcept.fr/wp-content/uploads/2022/01/cartoon3-1024x341.png",
      rightImage:
        "http://ressources.aeconcept.fr/wp-content/uploads/2022/01/cartoon2-1024x341.png",
      leftImage2:
        "http://ressources.aeconcept.fr/wp-content/uploads/2022/01/cartoon3-1024x341.png",
      rightImage2:
        "http://ressources.aeconcept.fr/wp-content/uploads/2022/01/cartoon2-1024x341.png",
      sliderLine: 0,
      hSize: 0,
      sliderPosition: 0.5,
    };
  },
};
</script>
<style>
@keyframes rocking {
  0%,
  100% {
    transform: rotateZ(-10deg);
  }

  50% {
    transform: rotateZ(10deg);
  }
}

.vue-typer {
  font-family: Arial, "Helvetica Neue", Helvetica, sans-serif;
}
.vue-typer .custom.char.typed {
  color: green;
}
.vue-typer .custom.char.selected {
  color: #e91e63;
}

.vue-typer .custom.caret {
  animation: rocking 1s ease-in-out 0s infinite;
}
.vue-typer .custom.caret.typing {
  background-color: rgb(128, 0, 128);
}
.vue-typer .custom.caret.selecting {
  display: inline-block;
  background-color: #e91e63;
}
.textone {
  font-size: 40px;
  color: red;
}
</style>

