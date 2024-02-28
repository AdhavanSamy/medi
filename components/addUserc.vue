<template>
    <v-container>
        <navcom/>
        <!-- <adminnav/> -->
        <v-row justify="center">
            <v-col cols="12" sm="8" md="6">
                <!-- <v-card> -->
                    <!-- <v-card-title>Add User</v-card-title> -->
                    <!-- <v-card-text> -->
                        <v-expansion-panels>
                            <v-expansion-panel>
                                <v-expansion-panel-header color="cyan">Add User</v-expansion-panel-header>
                                <v-expansion-panel-content>
                                    <v-form @submit.prevent="addUser">
                                        <v-row>
                                            <v-col>
                                                <v-text-field v-model="userId" label="User ID" required></v-text-field>
                                            </v-col>
                                            <v-col>
                                                <v-text-field v-model="password" label="Password" type="password"
                                                    required></v-text-field>
                                            </v-col>
                                            <v-col>
                                                <v-select v-model="role" :items="roles" label="Role" required></v-select>
                                            </v-col>
                                            <v-col>
                                                <v-btn class="mt-3" color="cyan" type="submit">Add</v-btn>
                                            </v-col>
                                        </v-row>

                                    </v-form>
                                </v-expansion-panel-content>
                            </v-expansion-panel>
                        </v-expansion-panels>
                    <!-- </v-card-text> -->
                <!-- </v-card> -->
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
            userId: '',
            password: '',
            role: null,
            roles: ['Admin', 'Inventry','Biller','Manager'] // Add more roles as needed
        };
    },
    components: {
        // adminnav
        navcom,
    },
    methods: {
        addUser() {
            // Here you can handle adding the user
            console.log('User ID:', this.userId);
            console.log('Password:', this.password);
            console.log('Role:', this.role);

            // Clear the form fields after adding user
            this.userId = '';
            this.password = '';
            this.role = null;
        }
    }
};
</script>
  