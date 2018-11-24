<template>
  <div class>
    <h1>Welcome to the forum</h1>
    <ThreadList :threads='threads'/>
  </div>
</template>


<script>
import data from "@/data/data.json";
import ThreadList from "./ThreadList";

export default {
  name: "HelloWorld",
  data() {
    return {
      threads: Object.values(data.threads),
      posts: data.posts,
      users: data.users
    };
  },
  components: {
    ThreadList
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style> 