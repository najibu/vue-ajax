new Vue({
  el: '#app',

  data: {
    skills: []
  },

  mounted() {
    // Make an ajax request to our server - /skills
    axios.get('/skills').then(respone => this.skills = respone.data);
    
  }
});