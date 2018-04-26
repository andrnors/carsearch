<template>
    <div class="mdl-grid portfolio-max-width" >
      <div class="mdl-card__media">
          <img class="article-image" :src="this.cars[$route.params.id].picture" border="0" alt="">
      </div>
      <div class="mdl-grid portfolio-copy">
          <h4 class="mdl-cell mdl-cell--12-col mdl-typography--headline">
            {{ this.cars[$route.params.id].merke_og_modell }} {{ this.cars[$route.params.id].type }}
          </h4>
      </div>
      <table class="mdl-data-table mdl-js-data-table mdl-data-table--selectable mdl-shadow--2dp">
        <thead>
          <tr>
            <th class="mdl-data-table__cell--non-numeric">Type</th>
            <th>Data</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td class="mdl-data-table__cell--non-numeric">Registreringsnummer</td>
            <td>{{ this.cars[$route.params.id].registreringsnummer }}</td>
          </tr>

          <template v-if="this.cars[$route.params.id].understellsnummer">
          <tr>
            <td class="mdl-data-table__cell--non-numeric">Understellsnummer</td>
            <td>{{ this.cars[$route.params.id].understellsnummer }}</td>
          </tr>
          <tr>
            <td class="mdl-data-table__cell--non-numeric">Registrert i distrikt</td>
            <td>{{ this.cars[$route.params.id].registrert_i_distrikt }}</td>
          </tr>
          <tr>
            <td class="mdl-data-table__cell--non-numeric">Registreringsår</td>
            <td>{{ this.cars[$route.params.id].registreringsar }}</td>
          </tr>
          <tr>
            <td class="mdl-data-table__cell--non-numeric">Topphastighet</td>
            <td>{{ this.cars[$route.params.id].topphastighet }}</td>
          </tr>
          <tr>
            <td class="mdl-data-table__cell--non-numeric">Drivstoff</td>
            <td>{{ this.cars[$route.params.id].drivstoff }}</td>
          </tr>
          <tr>
            <td class="mdl-data-table__cell--non-numeric">Kjøretøygruppe</td>
            <td>{{ this.cars[$route.params.id].kjoretoygruppe }}</td>
          </tr>
          <tr>
            <td class="mdl-data-table__cell--non-numeric">Farge</td>
            <td>{{ this.cars[$route.params.id].farge }}</td>
          </tr>
          <tr>
            <td class="mdl-data-table__cell--non-numeric">Aksler med drift</td>
            <td>{{ this.cars[$route.params.id].antall_aksler_med_drift }}</td>
          </tr>
          <tr>
            <td class="mdl-data-table__cell--non-numeric">Antall seter</td>
            <td>{{ this.cars[$route.params.id].antall_seter }}</td>
          </tr>
          <tr>
            <td class="mdl-data-table__cell--non-numeric">Slagvolum</td>
            <td>{{ this.cars[$route.params.id].slagvolum }}</td>
          </tr>
          </template>

        </tbody>
      </table>

      <router-link id="home" class="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent" to="/" @click.native="hideMenu">Nytt søk</router-link>      
    </div>
    
</template>

<script>
export default {
  data() {
    return {
      cars: this.$root.cars,
    };
  }
};
</script>
<style scoped>

.mdl-card__media{
  margin: auto;
  width: 100%;
}
.article-image{
  margin: auto;;
  width: 100%;
}

.mdl-grid.portfolio-max-width{
  padding: 0;
}

table{
  width: 100%;
  margin: auto;
}

#home{
  margin: 30px auto;
}
</style>