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
        <p class="error-message" :v-bind="message">{{this.message}}</p>
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
      allCars: this.$root.cars,
      message: "",
      regnr: "",
      newCarObjcet: {}
    }
  },
  methods: {
    isCarPresent(){
      const arrayLength = this.allCars.length;      
      let splitSearch = this.regnr.substr(0, 2).toUpperCase() + " " + this.regnr.substr(2)
      for (let c in this.allCars){
        let regnr = this.allCars[c].registreringsnummer
        if(this.regnr.toUpperCase() == regnr || splitSearch.toUpperCase() == regnr ){
          return true;
        }
      }
      this.message = ""
      return false;
    },
    postCar(){
        // check if car allready in database
        if(this.isCarPresent()){
          this.message = "Bilen med registreringsnummer " + this.regnr + " finnes allerede i databsen"
        }else{
        // Check if there is more information about the car 
        this.$http.get("https://cars-a.herokuapp.com/car/" + this.regnr)
        .then(response => {
          this.newCarObjcet = response.body; // create object of the car
          this.newCarObjcet["registreringsnummer"] = this.regnr; // if the object was empty, make sure at least the regnr is included
          this.newCarObjcet["picture"] = "https://static.regnr.info/bilder/0/3/thumb_034eb7a2153f3a87b7c1136fe0dae835.jpg";
          this.$root.$firebaseRefs.cars.push(this.newCarObjcet).then(this.$router.push("/"));  // push car to firebase and route to home
        })
        }
    }
  }
}
</script>
<style scoped>
  .waiting {
    padding: 10px;
    color: #555;
  }

  .error-message{
    color:#de3226
  }
</style>