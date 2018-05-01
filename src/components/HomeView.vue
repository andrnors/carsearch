<template>
  <div>
    <div class="mdl-grid">
      <div class="mdl-cell mdl-cell--3-col mdl-cell mdl-cell--1-col-tablet mdl-cell--hide-phone"></div>
      <div class="mdl-cell mdl-cell--6-col mdl-cell--4-col-phone">

            <div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
                <input v-model="search" class="mdl-textfield__input" type="text" name="search" id="search">
                <label class="mdl-textfield__label" for="search">Søk etter registreringsnummer</label>
                <span class="mdl-textfield__error">Nå gjorde du noe umulig</span>
            </div>
            <p>
            <button v-on:click="getCar" class="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent">
            Søk
            </button>
            </p>
            <div v-if="id" class="image-card" @click="displayDetails(id)">
              <div class="image-card__picture">
                <img :src="this.car.picture"/>
              </div>
              <div class="image-card__comment mdl-card__actions">
                <span>{{ this.car.type }} {{ this.car.merke_og_modell }}</span>
              </div>
            </div>
            <div v-else-if="this.car == null">
              <div class="mdl-card__title">
                <h2 class="mdl-card__title-text">Bilen finnes ikke</h2>
              </div>
              <div class="mdl-card__supporting-text">
                Hvis du vet at dette er en politibil, så kan du legge den til 
                databasen ved å trykke på "+"-symbolet nede i hjørnet.
              </div>
            </div>

      </div>
    </div>
    <router-link class="add-picture-button mdl-button mdl-js-button mdl-button--fab mdl-button--colored" to="/post">
      <i class="material-icons">add</i>
    </router-link>
  </div>
</template>

<script>

export default {
  methods: {
    displayDetails(id) {
      this.$router.push({ name: "detail", params: { id: this.id } });
    },
    getCar(){
      const arrayLength = this.allCars.length;
      let splitSearch = this.search.substr(0, 2).toUpperCase() + " " + this.search.substr(2)
      console.log(splitSearch)
      for(let i=0; i < arrayLength; i++){
        let regnr = this.allCars[i].registreringsnummer
        if(this.search.toUpperCase() == regnr || splitSearch.toUpperCase() == regnr ){
          this.car = this.allCars[i]
          this.id = i;
          console.log(this.allCars[i])
          console.log(this.id)
          console.log(this.car)
          break;
        }
        else{
          this.car = null
          this.id = ""
        }
      }
    },
  },
  data() {
    return {
      car: {},
      allCars: this.$root.cars,
      search: "",
      id: ""
    };
  }
};
</script>
<style scoped>
.add-picture-button {
  position: fixed;
  right: 24px;
  bottom: 24px;
  z-index: 998;
}

.image-card {
  position: relative;
  margin-bottom: 8px;
}
.image-card__picture > img {
  width: 100%;
}
.image-card__comment {
  position: absolute;
  bottom: 0;
  height: 52px;
  padding: 16px;
  text-align: right;
  background: rgba(0, 0, 0, 0.5);
}
.image-card__comment > span {
  color: #fff;
  font-size: 14px;
  font-weight: bold;
}
</style>