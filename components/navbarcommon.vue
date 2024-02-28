<template>
    <v-app-bar app color="cyan">
        <v-toolbar-title></v-toolbar-title>
        <v-spacer></v-spacer>
        <v-btn text @click="stockview" v-show="biller">Stock View</v-btn>
        <v-btn text @click="billentry" v-show="biller">Bill Entry</v-btn>
        <v-btn text @click="dashboard" v-show="biller">Dashboard</v-btn>
        <v-btn text @click="stockentry" v-show="manager">Stock Entry</v-btn>
        <v-btn text @click="stockview" v-show="manager">Stock View</v-btn>
        <v-btn text @click="salesreport" v-show="manager">Sales Report</v-btn>
        <v-btn text @click="dashboard" v-show="manager">Dashboard</v-btn>
        <v-btn text @click="adduser" v-show="admin">Add User</v-btn>
        <v-btn text @click="loginhistory" v-show="admin">Login History</v-btn>
        <v-btn text @click="dashboard" v-show="admin">Dashboard</v-btn>
        <v-btn text @click="stockentry" v-show="inventry">Stock Entry</v-btn>
        <v-btn text @click="stockview" v-show="inventry">Stock View</v-btn>
        <v-btn text @click="dashboard" v-show="inventry">Dashboard</v-btn>
        <v-btn text @click="logout">Logout</v-btn>
    </v-app-bar>
</template>
<script>
export default {
    data() {
        return {
            biller: this.$store.state.statebill,
            manager: this.$store.state.statemanager,
            admin: this.$store.state.stateadmin,
            inventry: this.$store.state.stateinventry,
        }
    },
    methods: {
        stockview() {
            this.$router.push("/Stockview");

        },
        billentry() {
            this.$router.push("/BillEntry");

        },
        dashboard() {
            this.$router.push("/Dashboard");

        },
        stockentry() {
            this.$router.push("/StockEntry");

        },
        salesreport() {
            this.$router.push("/Salesreport");

        },
        logout() {
            this.$router.push("/");
            let d = new Date();
            let dates = d.getDate() + "-" + d.getMonth() + "-" + d.getFullYear() + " " + d.getHours() + ":" + d.getMinutes() + ":" + d.getSeconds();
            let inHistory = { userId: this.userId, type: "logout", date: dates };
            this.$store.commit("MUTATE_LOGOUT", inHistory);
        },
        adduser() {
            this.$router.push("AddUserr")

        },
        loginhistory() {
            this.$router.push("Loginhistory")

        },
        
    }
}
</script>
