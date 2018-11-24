<template>
  <div>
    <h1>Welcome to the forum</h1>
    <Threadlist />
  </div>
</template>


<script>
import data from "@/data/data.json";
import ThreadList from "./ThreadList";

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
