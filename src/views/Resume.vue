<template>
  <v-layout row justify-center align-center wrap class="mt-4 pt-2">
    <v-flex xs12 sm12 md12 lg12 xl12 class="mt-4 pt-4">
      <v-img
        class="img-circle"
        align="center"
        lazy-src="../assets/images/experiences.jpg"
        max-height="250"
        max-width="auto"
        src="../assets/images/experiences.jpg"
      ></v-img>
      <h2 class="text-xs-center display-2 font-weight-bold pl-4">
        <br />
        <span>Exp</span>
        <span class="green--text">ériences</span>
      </h2>
      <v-divider inset></v-divider>
      <v-timeline>
        <v-timeline-item color="green lighten-2" large>
          <template v-slot:opposite>
            <div class="caption font-weight-bold">Sept 2021 -</div>
            <div class="caption font-weight-bold">Déc 2021</div>
          </template>
          <v-card class="elevation-2">
            <v-card-title class="text-h2 font-weight-bold">
              LABELSOFT TECHNOLOGIES
            </v-card-title>
            <v-card-text> Stagiaire développeur. </v-card-text>
          </v-card>
        </v-timeline-item>
        <v-timeline-item color="green lighten-2" large>
          <template v-slot:opposite>
            <div class="caption font-weight-bold">Dec 2020 -</div>
            <div class="caption font-weight-bold">Mars 2021</div>
          </template>
          <v-card class="elevation-2">
            <v-card-title class="text-h2 font-weight-bold">
              INSPI 3D
            </v-card-title>
            <v-card-text> Stagiaire développeur. </v-card-text>
          </v-card>
        </v-timeline-item>
        <v-timeline-item color="green lighten-2" large>
          <template v-slot:opposite>
            <div class="caption font-weight-bold">2011 -</div>
            <div class="caption font-weight-bold">2018</div>
          </template>
          <v-card class="elevation-2">
            <v-card-title class="text-h2 font-weight-bold">
              SOGEFI Filtration
            </v-card-title>
            <v-card-text> Gestionnaire de stocks. </v-card-text>
          </v-card>
        </v-timeline-item>
        <v-timeline-item color="green lighten-2" large>
          <template v-slot:opposite>
            <div class="caption font-weight-bold">2008 -</div>
            <div class="caption font-weight-bold">2011</div>
          </template>
          <v-card class="elevation-2">
            <v-card-title class="text-h2 font-weight-bold">
              LE ROUERGUE
            </v-card-title>
            <v-card-text> Gestionnaire de stocks </v-card-text>
          </v-card>
        </v-timeline-item>
        <v-timeline-item color="green lighten-2" large>
          <template v-slot:opposite>
            <div class="caption font-weight-bold t">2005 -</div>
            <div class="caption font-weight-bold">2007</div>
          </template>
          <v-card class="elevation-2">
            <v-card-title class="text-h2 font-weight-bold">
              LES FRANCAS
            </v-card-title>
            <v-card-text> Animateur socio-culturel </v-card-text>
          </v-card>
        </v-timeline-item>
        <v-timeline-item color="green lighten-2" large>
          <template v-slot:opposite>
            <div class="caption font-weight-bold">2003 -</div>
            <div class="caption font-weight-bold">2005</div>
          </template>
          <v-card class="elevation-2">
            <v-card-title class="text-h2 font-weight-bold">
              Ets MAGARINOS
            </v-card-title>
            <v-card-text> Gestionnaire de stocks </v-card-text>
          </v-card>
        </v-timeline-item>
      </v-timeline>
    </v-flex>
    <v-divider inset width="100"></v-divider>

    <v-flex xs12 sm12 md12 lg12 xl12 class="mt-4 pt-4">
      <v-img
        align="center"
        lazy-src="../assets/images/formation.jpg"
        max-height="250"
        max-width="auto"
        src="../assets/images/formation.jpg"
      ></v-img>
      <h2 class="text-xs-center display-2 font-weight-bold pl-4">
        <br />
        <span>Form</span>
        <span class="green--text">ation</span>
      </h2>
      <v-divider inset></v-divider>
      <v-timeline :dense="$vuetify.breakpoint.smAndDown">
        <v-timeline-item fill-dot right color="green">
          <h2 class="text-xs-right">2019-2021</h2>
          <v-card>
            <v-card-title>
              <v-icon dark size="42" class="mr-4"> mdi-magnify </v-icon>

              <h3 class="green--text text-h4 white--text font-weight-bold">
                Concepteur Développeur d'Applications
              </h3>
            </v-card-title>
            <v-container>
              <v-row>
                <v-col cols="12" md="10">
                  Institut Informatique Sud Aveyron (2ISA)
                </v-col>
                <v-col class="hidden-sm-and-down text-right" md="2">
                  <v-icon size="64"> mdi-calendar-text </v-icon>
                </v-col>
              </v-row>
            </v-container>
          </v-card>
        </v-timeline-item>

        <v-timeline-item fill-dot left color="green">
          <h2 class="text-xs-left">2003-2005</h2>
          <v-card>
            <v-card-title class="justify-end">
              <h3 class="green--text text-h4 mr-4 white--text font-weight-bold">
                BTS Assitant de Gestion PME-PMI par alternance
              </h3>
              <v-icon dark size="42"> mdi-home-outline </v-icon>
            </v-card-title>
            <v-container>
              <v-row>
                <v-col cols="12" md="8"> Lycée Charles Carnus </v-col>
              </v-row>
            </v-container>
          </v-card>
        </v-timeline-item>

        <v-timeline-item color="green" fill-dot right>
          <h2 class="text-xs-center">2002</h2>
          <v-card>
            <v-card-title>
              <v-icon class="mr-4" dark size="42"> mdi-email-outline </v-icon>
              <h3 class="green--text text-h4 mr-4 white--text font-weight-bold">
                Baccalauréat Informatique de Gestion
              </h3>
            </v-card-title>
            <v-container>
              <v-row>
                <v-col cols="12" md="4"> Lycée Alexis Monteil </v-col>
              </v-row>
            </v-container>
          </v-card>
        </v-timeline-item>
      </v-timeline>
    </v-flex>
    <v-divider inset width="100"></v-divider>

    <v-flex xs12 sm12 md12 lg12 xl12 class="mx-2 pt-4">
      <v-img
        align="center"
        lazy-src="../assets/images/cartoon2.png"
        max-height="250"
        max-width="auto"
        src="../assets/images/coding.jpg"
      ></v-img>
      <h2 class="text-xs-center display-2 font-weight-bold pl-4">
        <br />
        <span>Coding</span>
        <span class="green--text">Skills</span>
      </h2>
      <v-divider inset></v-divider>
      <br />
      <strong class="green--text">C#</strong>
      <v-progress-linear
        v-model="buffer1"
        :buffer-value="bufferValue"
        color="green lighten-4"
        height="16"
      ></v-progress-linear>
      <strong class="green--text">HTML/CSS</strong>
      <v-progress-linear
        v-model="buffer2"
        :buffer-value="bufferValue"
        color="green lighten-4"
        height="16"
      ></v-progress-linear>
      <strong class="green--text">JavaScript</strong>
      <v-progress-linear
        v-model="buffer3"
        :buffer-value="bufferValue"
        color="green lighten-4"
        height="16"
      ></v-progress-linear>
      <strong class="green--text">Vue.js</strong>
      <v-progress-linear
        v-model="buffer4"
        :buffer-value="bufferValue"
        color="green lighten-4"
        height="16"
      ></v-progress-linear>
      <strong class="green--text">SQL</strong>
      <v-progress-linear
        v-model="buffer5"
        :buffer-value="bufferValue"
        color="green lighten-4"
        height="16"
      ></v-progress-linear>
    </v-flex>
    <div class="mt-4 pt-2">
      <v-btn
        href="../assets/docs/cv_abdellatif_eljid.pdf"
        target="_blank"
        color="green"
        dark
        large
      >
        Télécharger le CV
        <v-icon right dark>fas fa-file-download</v-icon>
      </v-btn>
    </div>
  </v-layout>
</template>


<script>
export default {
  metaInfo: {
    title: "CV",
    titleTemplate: "",
    meta: [
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        name: "description",
        content:
          "Concepteur Developpeur d'applications Vue Extjs HTML CSS JavaScript Design Adobe XD CV Work Web Developer Front-End",
      },
      { charset: "utf-8" },
      { property: "og:title", content: "Abdellatif EL JID portail Web" },
      { property: "og:site_name", content: "Abdellatif EL JID portail Web" },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://aeconcept.fr/" },
      {
        property: "og:image",
      },
      {
        property: "og:description",
        content:
          "Concepteur Developpeur d'applications Vue Extjs HTML CSS JavaScript Design Adobe XD CV Work Web Developer Front-End",
      },
    ],
  },
  data() {
    return {
      test: "rounded-circle",
      itemes: [
        {
          color: "red lighten-2",
          icon: "mdi-star",
        },
        {
          color: "purple darken-1",
          icon: "mdi-book-variant",
        },
        {
          color: "green lighten-1",
          icon: "mdi-airballoon",
        },
        {
          color: "indigo",
          icon: "mdi-buffer",
        },
      ],

      donnees: [
        {
          title: "Sql Server",
        },
        {
          title: "PL/SQL",
        },
        {
          title: "MySql",
        },
      ],
      langages: [
        {
          title: "C#",
        },
        {
          title: "HTML",
        },
        {
          title: " CSS",
        },
        {
          title: "JavaScript",
        },
        {
          title: "PHP",
        },
        {
          title: "Extjs",
        },
        {
          title: "Vue.js",
        },
        {
          title: "React",
        },
        {
          title: "Flutter",
        },
      ],
      methodes: [
        {
          title: "UML",
        },
        {
          title: "Méthode Agile",
        },
        {
          title: "SCRUM",
        },
        {
          title: " MERISE",
        },
      ],
      outils: [
        {
          title: " Visual Studio",
        },
        {
          title: " PhpStorm",
        },
        {
          title: "Git",
        },
        {
          title: "Apache",
        },
        {
          title: "Trello",
        },
        {
          title: " Jira",
        },
        {
          title: "WordPress",
        },
        {
          title: "AdobeXD",
        },
        {
          title: "Microsoft TEAMS",
        },
      ],
      divers: [
        {
          title: "ERP SAP MM",
        },
        {
          title: "CorelDraw",
        },
        {
          title: "Inkscape",
        },
        {
          title: "CAMBAM",
        },
      ],
      value: 0,
      buffer1: 0,
      buffer2: 0,
      buffer3: 0,
      buffer4: 0,
      buffer5: 0,
      buffer6: 0,
      bufferValue: 100,
      interval: 0,
    };
  },
  mounted() {
    this.startBuffer();
  },

  beforeDestroy() {
    clearInterval(this.interval);
  },

  methods: {
    startBuffer() {
      this.interval = setInterval(() => {
        this.buffer1 = 75;
        this.buffer2 = 85;
        this.buffer3 = 80;
        this.buffer4 = 70;
        this.buffer5 = 90;
        this.buffer6 = 70;
        this.buffer7 = 70;
        this.buffer8 = 70;
      }, 800);
    },
  },
};
</script>
<style >
</style>

