<template>
  <v-container>
    <v-row class="text-center pt-5">
      <v-col class="mb-4">
        <h1 class="display-2 font-weight-bold mb-3">
          APP de Rotas
        </h1>
        <h1 class="display-1 font-weight-bold mb-3">
          Utilizando as seguintes ferramentas:
        </h1>
        <h1 class="font-weight-medium" id="Vue">
          <v-icon>mdi-arrow-right-bold</v-icon>
          Vue
        </h1>
        <h1 class="font-weight-medium" id="VueRouter">
          <v-icon>mdi-arrow-right-bold</v-icon>
          Vue Router
        </h1>
        <h1 class="font-weight-medium" id="Vuetify">
          <v-icon>mdi-arrow-right-bold</v-icon>
          Vuetify
        </h1>
      </v-col>
    </v-row>
    <v-row class="d-flex justify-center align-center">
        <router-link to="/produtos">
          <v-btn class="pa-10 ma-5 success">
            Produtos
          </v-btn>
        </router-link>
        <router-link to="/sobre">
          <v-btn class="pa-10 ma-5 primary">
            Sobre
          </v-btn>
        </router-link>
        <router-link to="/contato">
          <v-btn class="pa-10 ma-5 warning">
            Entre em Contato
          </v-btn>
        </router-link>
    </v-row>
  </v-container>
</template>

<script>
  export default {
    name: 'HelloWorld',

    data: () => ({
     
    }),
  }
</script>
<style scoped>
* {
  text-decoration: none;
  list-style: none;
}
#Vue {
  color: green;
}
#VueRouter {
  color: gray;
}
#Vuetify {
  color: lightsteelblue;
}
</style>
