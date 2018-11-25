<template>
    <div class='col-full' :class="$style.centered">
        <h1 :class="$style.headingLarge">Not found</h1>
            <p :class="$style.textLarge">Oops! Couldn't find that page. Would you like to 
                <router-link :to="{name: 'Home'}"> 
                    go home instead?
                    </router-link>
                    </p>
    </div>

</template>

<script>
export default {
  name: "PageNotFound"
};
</script>

<style module>
.headingLarge {
  font-size: 80px;
}

.textLarge {
  font-size: 30px;
  font-weight: light;
}

.centered {
  text-align: center;
}
</style>

