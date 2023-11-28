<template>
  <v-app-bar flat>
    <v-app-bar-title>
      <v-container fluid>
        <v-row class="d-flex align-center">
          <v-col cols="12" sm="2">
            <img src="@/assets/logo.svg" alt="logo" width="120" />
          </v-col>
          <v-spacer />
          <v-col cols="12" sm="4">
            <nav>
              <v-btn prepend-icon="mdi-home" text="true" to="/">Início</v-btn>
              <v-btn prepend-icon="mdi-information" text="true" to="/about">
                Sobre
              </v-btn>
              <v-btn prepend-icon="mdi-basket" text="true" to="/store">
                Loja
              </v-btn>
              <v-btn prepend-icon="mdi-account-circle" text="true" to="/login">
                Login
              </v-btn>
            </nav>
          </v-col>
        </v-row>
      </v-container>
    </v-app-bar-title>
  </v-app-bar>
</template>
