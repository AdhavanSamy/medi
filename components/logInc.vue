<template>
  <div>
    <v-container>
      <v-layout justify-center align-center>
        <v-flex xs12 sm8 md4>
          <v-card>
            <v-card-title class="text-center">
              Login
            </v-card-title>
            <v-card-text>
              <v-form @submit.prevent="login">
                <v-text-field v-model="userId" label="User ID" required></v-text-field>
                <v-text-field v-model="password" label="Password" type="password" required></v-text-field>
                <v-alert v-if="error" type="error" dismissible>
                  {{ error }}
                </v-alert>
                <v-btn color="teal" type="submit" @click="logHistory()">Login</v-btn>
                <!-- :disabled="!validForm" -->
              </v-form>
            </v-card-text>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      userId: '',
      password: '',
      error: '',
      billerstate: '',
      managerstate: '',
      adminstate: '',
      inventrystate: '',
      users : this.$store.state.userCredentials,
      // users: [
      //   { username: 'biller', password: '1234', id: "biller" },
      //   { username: 'manager', password: '1234', id: "manager" },
      //   { username: 'admin', password: '1234', id: "admin" },
      //   { username: 'inventry', password: '1234', id: "inventry" },
      //   { username: 'arun', password: '1234', id: "biller" },
      //   { username: '', password: '', id: "biller" }
      // ]
    };
  },
  // computed: {
  //   validForm() {
  //     return this.userId.trim() !== '' && this.password.trim() !== '';
  //   }
  // },
  methods: {
    login() {
      const user = this.users.find(u => u.username === this.userId && u.password === this.password);
      if (user) {
        // Successful login
        console.log('Login successful');
        this.error = ''; // Clear any previous error messages
        this.$router.push("/Dashboard")
      } else {
        // Invalid credentials
      alert("Invalid user ID or password. Please try again.");
      }

      for (let i = 0; i < this.users.length; i++) {
        if (this.userId == this.users[i].username && this.password == this.users[i].password) {
          this.id = this.users[i].id;
          if (this.id == "biller") {
            this.billerstate = "true"
          } else if (this.id == "manager") {
            this.managerstate = "true"
          } else if (this.id == "admin") {
            this.adminstate = "true"
          } else if (this.id == "inventry") {
            this.inventrystate = "true"
          }

        }
        this.$store.commit("mutationbill", this.billerstate)
          this.$store.commit("mutationmanager", this.managerstate)
          this.$store.commit("mutationadmin", this.adminstate)
          this.$store.commit("mutationinventry", this.inventrystate)
      }
    },

    logHistory(){
      let d = new Date();
      let dates= d.getDate()+"-"+d.getMonth()+"-"+d.getFullYear()+" "+d.getHours()+":"+d.getMinutes()+":"+d.getSeconds();
      let inHistory={userId:this.userId , type : "login", date :dates};
      this.$store.commit("MUTATE_HISTORY",inHistory);
    }
  }
}
</script>  