<template>
  <div>
    <ul class="item-list">
      <li v-for="item in listItems" v-bind:key="item" class="post">
        <!-- 포인트 영역 -->
        <div class="points">
          {{ item.points ||0 }}
        </div>
        <!-- 기타 정보 영역 -->
        <div>
            <!-- 타이틀 영역 -->
            <p class="title">
            <template v-if="item.domain">
                <a v-bind:href="item.url">
                    {{ item.title }}
                </a>
            </template>
            <template v-else>
                <router-link v-bind:to="`item/${item.id}`">
                    {{ item.title }}</router-link>
            </template>
            </p>
            <small class="link-text">
                {{item.time_ago}} by
                <router-link v-if="item.user" v-bind:to="`/user/${item.user}`" class="link-text">
                    {{item.user}}
                </router-link>
                <a :href="item.url" class="link-text" v-else>
                    {{item.domain}}
                </a></small>
            </small>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
    computed:{
        listItems() {
            const path = this.$route.path;
            if(path === '/news'){
                return this.$store.state.news;
            } else if(path ==='/ask'){
                return this.$store.state.asks;
            } else if(path ==='/jobs'){
                return this.$store.state.jobs;
            }
        }
    }
}
</script>

<style scoped>
.item-list{
  margin: 0;
  padding: 0;;
}
.post{
  list-style: none;
  display: flex;
  align-items: center;
  border-bottom: 1px solid #eee;
}
.points{
  width: 80px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #42b883
}
.title{
  margin: 0;
}
.link-text{
  color: #828282;
}
</style>