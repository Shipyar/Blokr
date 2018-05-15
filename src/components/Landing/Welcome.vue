<template>
  <div>
    <app-header/>
    <v-content>
      <section>
        <v-parallax height="600" class="temp-color">
          <v-layout
            column
            align-center
            justify-center
            class="white--text"
          >
            <h1 class="white--text mb-2 display-1 text-xs-center">Welcome to <span class="highlight">Blokr.</span></h1>
            <div class="subheading mb-3 text-xs-center">Making your time more modular</div>
            <v-btn
              dark
              large
              flat
              to="/sign-up"
            >
              Get Started
            </v-btn>
          </v-layout>
        </v-parallax>
      </section>
      <section>
        <v-layout
          column
          wrap
          class="my-5"
          align-center
        >
          <v-flex xs12 sm4 class="my-3">
            <div class="text-xs-center">
              <h2 class="headline">The best way to start planning</h2>
              <span class="subheading">
                Create an account to find out how!
              </span>
            </div>
          </v-flex>
          <v-flex xs12>
            <v-container grid-list-xl>
              <v-layout row wrap align-center>
                <v-flex xs12 md4>
                  <v-card class="elevation-0 transparent">
                    <v-card-text class="text-xs-center">
                      <v-icon x-large class="icon-red">dashboard</v-icon>
                    </v-card-text>
                    <v-card-title primary-title class="layout justify-center">
                      <div class="headline text-xs-center">Modular Design</div>
                    </v-card-title>
                    <v-card-text>
                      Cras facilisis mi vitae nunc lobortis pharetra. Nulla volutpat tincidunt ornare. 
                      Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. 
                      Nullam in aliquet odio. Aliquam eu est vitae tellus bibendum tincidunt. Suspendisse potenti. 
                    </v-card-text>
                  </v-card>
                </v-flex>
                <v-flex xs12 md4>
                  <v-card class="elevation-0 transparent">
                    <v-card-text class="text-xs-center">
                      <v-icon x-large>flash_on</v-icon>
                    </v-card-text>
                    <v-card-title primary-title class="layout justify-center">
                      <div class="headline">Fast development</div>
                    </v-card-title>
                    <v-card-text>
                      Cras facilisis mi vitae nunc lobortis pharetra. Nulla volutpat tincidunt ornare. 
                      Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. 
                      Nullam in aliquet odio. Aliquam eu est vitae tellus bibendum tincidunt. Suspendisse potenti. 
                    </v-card-text>
                  </v-card>
                </v-flex>
                <v-flex xs12 md4>
                  <v-card class="elevation-0 transparent">
                    <v-card-text class="text-xs-center">
                      <v-icon x-large>announcement</v-icon>
                    </v-card-text>
                    <v-card-title primary-title class="layout justify-center">
                      <div class="headline text-xs-center">Blokr out your ideas</div>
                    </v-card-title>
                    <v-card-text>
                      Cras facilisis mi vitae nunc lobortis pharetra. Nulla volutpat tincidunt ornare. 
                      Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. 
                      Nullam in aliquet odio. Aliquam eu est vitae tellus bibendum tincidunt. Suspendisse potenti. 
                    </v-card-text>
                  </v-card>
                </v-flex>
              </v-layout>
            </v-container>
          </v-flex>
        </v-layout>
      </section>

       <section>
        <v-parallax height="380" class="temp-color">
          <v-layout column align-center justify-center>
            <div class="headline white--text mb-3 text-xs-center">Planning has never been easier</div>
            <em>Kick-start your management today</em>
            <v-btn class="highlight"
              dark
              large
              flat
            >
              Get Started
            </v-btn>
          </v-layout>
        </v-parallax>
      </section>

      <section>
        <v-container grid-list-xl>
          <v-layout row wrap justify-center class="my-5">
            <v-flex xs12 sm4>
              <v-card class="elevation-0 transparent">
                <v-card-title primary-title class="layout justify-center">
                  <div class="headline">Find out more</div>
                </v-card-title>
                <v-card-text>
                  Cras facilisis mi vitae nunc lobortis pharetra. Nulla volutpat tincidunt ornare. 
                  Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. 
                  Nullam in aliquet odio. Aliquam eu est vitae tellus bibendum tincidunt. Suspendisse potenti. 
                </v-card-text>
              </v-card>
            </v-flex>
            <v-flex xs12 sm4 offset-sm1>
              <v-card class="elevation-0 transparent">
                <v-card-title primary-title class="layout justify-center">
                  <div class="headline">Contact us</div>
                </v-card-title>
                <v-card-text>
                  Please feel free to get intouch !!
                </v-card-text>
                <v-list class="transparent">
                  <v-list-tile>
                    <v-list-tile-action>
                      <v-icon>phone</v-icon>
                    </v-list-tile-action>
                    <v-list-tile-content>
                      <v-list-tile-title>0114lelele</v-list-tile-title>
                    </v-list-tile-content>
                  </v-list-tile>
                  <v-list-tile>
                    <v-list-tile-action>
                      <v-icon>place</v-icon>
                    </v-list-tile-action>
                    <v-list-tile-content>
                      <v-list-tile-title>Sheffield</v-list-tile-title>
                    </v-list-tile-content>
                  </v-list-tile>
                  <v-list-tile>
                    <v-list-tile-action>
                      <v-icon>email</v-icon>
                    </v-list-tile-action>
                    <v-list-tile-content>
                      <v-list-tile-title>oliver@blokr.com</v-list-tile-title>
                    </v-list-tile-content>
                  </v-list-tile>
                </v-list>
              </v-card>
            </v-flex>
          </v-layout>
        </v-container>
      </section>

      <v-footer>
        <v-layout row wrap align-center>
          <v-flex xs12>
          </v-flex>
        </v-layout>
      </v-footer>
    </v-content>
  </div>
</template>

<script>
import Header from '@/components/Shared/Header.vue';

export default {
  components: {
    'app-header': Header
  },
  data() {
    return {
      title: "Blokr"
    };
  }
};
</script>

<style>
.temp-color{
  background-color: #2AD19A;
}
.highlight{
  color: #EF1A1C;
}
</style>
