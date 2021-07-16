<template>
  <div>
    <list-item></list-item>
    <!-- <ul class="ask-list">
      <li v-for="item in fetchedAsk" v-bind:key="item" class="post">
        <div class="points">
          {{ item.points }}
        </div>
        <div>
          <p class="ask-title">
            <router-link v-bind:to="`item/${item.id}`">{{ item.title }}</router-link>
          </p>
        <small class="link-text">
          {{item.time_ago}},{{item.user}}
        </small>
        </div>
      </li>
    </ul>
       -->
  </div>
</template>

<script>
import ListItem from '../components/ListItem.vue';

export default{
  components:{
    ListItem,
  }
}
// import {mapGetters} from 'vuex';
// export default {
//   computed:{
//     ...mapGetters([
//       'fetchedAsk'
//     ]),
//     // ...mapState({
//     //   ask: state => state.asks
//     // })
//   },
//   created(){
//     this.$store.dispatch('FETCH_ASKS');
//   }
// }
</script>

<style scoped>

</style>