<template>
<div>
<h1>Welcome to the forum</h1>
<div v-for ='thread in threads'>
  <h2>{{thread.title}}</h2>
  <div v-for='postId in thread.posts'>
    <p>{{users[posts[postId]]}}</p>
    <p>{{posts[postId].text}}</p>
  </div>
</div>
</div>
</template>

<script>
import data from "@/data/data.json";

export default {
  name: "HelloWorld",
  data() {
    return {
      threads: data.threads,
      posts: data.posts,
      users: data.users
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>
