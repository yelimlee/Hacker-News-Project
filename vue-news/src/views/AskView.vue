<template>
  <div>
      <p v-for="item in fetchedAsk" v-bind:key="item">
        <router-link v-bind:to="`item/${item.id}`">{{ item.title }}</router-link>
        <small>{{item.time_ago}},{{item.user}}</small>
      </p>
  </div>
</template>

<script>
import {mapGetters} from 'vuex';
export default {
  computed:{
    ...mapGetters([
      'fetchedAsk'
    ]),
    // ...mapState({
    //   ask: state => state.asks
    // })
  },
  created(){
    this.$store.dispatch('FETCH_ASKS');
  }
}
</script>

<style>

</style>