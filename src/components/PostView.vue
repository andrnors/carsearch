<template>
<div class="mdl-grid">
  <div class="mdl-cell mdl-cell--3-col mdl-cell mdl-cell--1-col-tablet mdl-cell--hide-phone"></div>
    <div id = "content" class="mdl-cell mdl-cell--6-col mdl-cell--4-col-phone">
      <div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
        <input id="username" type="text" v-model="regnr" class="mdl-textfield__input"/>
        <label for="username" class="mdl-textfield__label">Skriv inn registreringsnummer</label>
        <span class="mdl-textfield__error">Nå gjorde du noe umulig</span>
      </div>
      <p class="error-message" :v-bind="message">{{this.message}}</p>
      <p>
        <a @click.prevent="postCar" class="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent">
          Legg til bil
        </a>
    </p>
    </div>

    <router-link class="take-picture-button mdl-button mdl-js-button mdl-button--fab mdl-button--colored" to="/camera">
      <i class="material-icons">camera_alt</i>
    </router-link>
  </div>
</template>

<script>
export default {
  data() {
    return {
      carUrl: null,
      allCars: this.$root.cars,
      message: "",
      regnr: "",
      newCarObjcet: {}
    };
  },
  methods: {

    /** 
      Returns if a car is in the database or not
      @returns boolean
    */
    isCarPresent() {
      const arrayLength = this.allCars.length;
      let splitSearch =
        this.regnr.substr(0, 2).toUpperCase() + " " + this.regnr.substr(2);
      for (let c in this.allCars) {
        let regnr = this.allCars[c].registreringsnummer; // For some reaseon C is not the objekt, but the key
        if ( this.regnr.toUpperCase() == regnr || splitSearch.toUpperCase() == regnr) {
          return true;
        }
      }
      this.message = "";
      return false;
    },

    postCar() {
      // check if car allready in database
      if (this.isCarPresent()) {
        this.message =
          "Bilen med registreringsnummer " +
          this.regnr +
          " finnes allerede i databsen";
      } else {
        // Check if there is more information about the car
        this.$http
          .get("https://cars-a.herokuapp.com/car/" + this.regnr)
          .then(response => {
            this.newCarObjcet = response.body; // create object of the car
            this.newCarObjcet["registreringsnummer"] = this.regnr; // if the object was empty, make sure at least the regnr is included
            this.newCarObjcet["picture"] =
              "https://static.regnr.info/bilder/0/3/thumb_034eb7a2153f3a87b7c1136fe0dae835.jpg";
            this.$root.$firebaseRefs.cars
              .push(this.newCarObjcet)
              .then(this.$router.push("/")); // push car to firebase and route to home
          });
      }
    }
  }
};
</script>
<style scoped>

.waiting {
  padding: 10px;
  color: #555;
}

.error-message {
  color: #de3226;
}

#content{
  margin-top: 23%;
}

 .take-picture-button {
    position: fixed;
    right: 24px;
    bottom: 90px;
    z-index: 5;
  }

</style>