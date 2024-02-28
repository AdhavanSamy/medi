<template>
    <v-container>
      <navcom/>
        <!-- <adminnav/> -->
      <v-row justify="center">
        <v-col cols="12">
          <v-text-field v-model="search" label="Search" outlined solo></v-text-field>
        </v-col>
        <v-col cols="12">
          <v-data-table
            :headers="headers"
            :items="history"
            :search="search"
            item-key="id"
          >
            <!-- <template v-slot:item.type="{ item }">
              {{ item.type === 'login' ? 'Login' : 'Logout' }}
            </template> -->
          </v-data-table>
        </v-col>
      </v-row>
    </v-container>
  </template>
  
  <script>
  import navcom from "../components/navbarcommon.vue"
// import adminnav from "../components/adminNav.vue"
  export default {
    data() {
      return {
        search: '',
        history: this.$store.state.history,
        //   { id: 1, userId: 'user1', type: 'login', date: '2024-02-01T08:00:00' },
        //   { id: 2, userId: 'user2', type: 'login', date: '2024-02-02T09:00:00' },
        //   { id: 3, userId: 'user1', type: 'logout', date: '2024-02-02T12:00:00' },
        //   { id: 4, userId: 'user3', type: 'login', date: '2024-02-03T10:00:00' },
        //   // Add more sample data as needed
        // ]
      };
    },
    components: {
        // adminnav
        navcom,
    },
    computed: {
      headers() {
        return [
          { text: 'User ID', value: 'userId' },
          { text: 'Type', value: 'type' },
          { text: 'Date', value: 'date' }
        ];
      },
      filteredHistory() {
        return this.history.filter(item => {
          return (
            item.userId.toLowerCase().includes(this.search.toLowerCase()) ||
            item.type.toLowerCase().includes(this.search.toLowerCase()) ||
            item.date.toLowerCase().includes(this.search.toLowerCase())
          );
        });
      }
    }
  };
  </script>  