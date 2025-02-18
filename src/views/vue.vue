<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <v-card min-height="40vh" :loading="loading">
          <v-row>
            <v-col cols="3" v-for="item in passengers.data" :key="item.id">
              <v-card min-height="50" min-width="300" v-if="!loading">
                <v-card-title>
                  {{ item.name }}
                </v-card-title>
              
                <v-card-title>
                  {{ item.trips	 }}
                </v-card-title>
              </v-card>
            </v-col>
          </v-row>
        </v-card>
      </v-col>
      <v-col cols="12">
        <v-card>
          <v-pagination
            :length="passengers.totalPages"
            v-model="page"
            color="blue"
            @update:model-value="getdata"
          ></v-pagination>
        </v-card>
      </v-col>
    </v-row>
    <v-btn @click="getdata">Fetch Data</v-btn>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      passengers: [], // Use a reactive array for data
      page: 1,
      loading:false
    };
  },
  methods: {
    getdata() {
      this.loading=true
      fetch(`https://api.instantwebtools.net/v1/passenger?page=${this.page - 1}&size=10`)
        .then((req) => req.json())
        .then((data) => {
          console.log(data);
          this.passengers = data; // Update the reactive array
          this.loading=false
        });
    },
  },
};
</script>

<style></style>
