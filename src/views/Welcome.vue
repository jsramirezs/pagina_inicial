<template>
  <div>
    <Header />
    <v-container grid-list-xs>
      <WelcomeCard />
    </v-container>
  </div>
</template>

<script>
import Header from "../components/Header";
import WelcomeCard from "../components/WelcomeCard";
export default {
  components: {
    Header,
    WelcomeCard
  }
};
</script>

<style>
</style>