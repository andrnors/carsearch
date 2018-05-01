<template>
  <form>
    <div class="mdl-grid">
      <div class="mdl-cell mdl-cell--8-col">
        <div class="card-image__picture">
          <img src="https://static.regnr.info/bilder/0/3/thumb_034eb7a2153f3a87b7c1136fe0dae835.jpg"/>
        </div>
      </div>
      <div class="mdl-cell mdl-cell--4-col mdl-cell--8-col-tablet">
        <div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label is-upgraded is-dirty">
          <input id="username" type="text" v-model="regnr" class="mdl-textfield__input"/>
          <label for="username" class="mdl-textfield__label">Skriv inn registreringsnummer</label>
        </div>
        <div class="actions">
          <a @click.prevent="postCar" class="mdl-button mdl-js-button mdl-button--raised mdl-button--colored">
            Legg til bil
          </a>
        </div>
      </div>
    </div>
  </form>
</template>
<script>
export default {
  data () {
    return {
      'carUrl': null,
       regnr: "",
       newCarObjcet: {}
    }
  },
  methods: {
    postCar(){
        this.$http.get("https://cars-a.herokuapp.com/car/" + this.regnr)
        .then(response => {
          this.newCarObjcet = response.body;
          this.newCarObjcet["registreringsnummer"] = this.regnr;
          this.newCarObjcet["picture"] = "https://static.regnr.info/bilder/0/3/thumb_034eb7a2153f3a87b7c1136fe0dae835.jpg";
          this.$root.$firebaseRefs.cars.push(this.newCarObjcet).then(this.$router.push("/"));
        })
    }
  }
}
</script>
<style scoped>
  .waiting {
    padding: 10px;
    color: #555;
  }
</style>