<script>
export default {
  name: 'TweetCard',
  props: ['tweet']
}
</script>

<template lang="pug">  
article.card
  h2.card-title {{ tweet.text }} 
  p {{ tweet.author }}
</template>

<style scoped>
.card {
  display: inline-block;
  text-align: left;
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 3px;
  margin: 20px;
  min-width: 200px;
}

.card-title {

}
</style>