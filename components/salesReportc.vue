<template>
    <v-container>
        <!-- <managernav/> -->
        <navcom/>
        <v-row>
            <v-col cols="12" md="4">
                <v-menu v-model="menuFrom" :close-on-content-click="false" transition="scale-transition" offset-y>
                    <template v-slot:activator="{ on }">
                        <v-text-field v-model="fromDate" label="From Date" readonly v-on="on"></v-text-field>
                    </template>
                    <v-date-picker v-model="fromDate" :max="currentDate" @input="menuFrom = false"></v-date-picker>
                </v-menu>
            </v-col>
            <v-col cols="12" md="4">
                <v-menu v-model="menuTo" :close-on-content-click="false" transition="scale-transition" offset-y>
                    <template v-slot:activator="{ on }">
                        <v-text-field v-model="toDate" label="To Date" readonly v-on="on"></v-text-field>
                    </template>
                    <v-date-picker v-model="toDate" :max="currentDate" @input="menuTo = false"></v-date-picker>
                </v-menu>
            </v-col>
            <v-col>
                <v-btn class="mt-3" color="cyan" @click="booltrig()">Search</v-btn>
            </v-col>
        </v-row>
        <v-row>
            <v-col cols="12">
                <v-data-table v-show="bool" :headers="headers" :items="filteredSales" :search="search" class="elevation-1">
                    <!-- <template v-slot:items="props"> -->
                        <!-- <td>{{ props.item.date }}</td> -->
                        <!-- <td>{{ props.item.amount }}</td> -->
                    <!-- </template> -->
                </v-data-table>
            </v-col>
        </v-row>
    </v-container>
</template>
  
<script>
// import managernav from "../components/managerNav.vue";
import navcom from "../components/navbarcommon.vue"
export default {
    data() {
        return {
            bool:"",
            menuFrom: false,
            menuTo: false,
            fromDate: new Date().toISOString().substr(0, 10),
            toDate: new Date().toISOString().substr(0, 10),
            headers: [
                { text: 'Bill No', value: 'billNo' },
                { text: 'Bill Date', value: 'date' },
                { text: 'Medicine Name', value: 'medicineName' },
                { text: 'Quantity', value: 'quantity' },
                { text: 'Amount', value: 'amount' },
                // Add more headers for details if needed
            ],
            sales: [
                {
                    billNo: 'B001',
                    date: '2024-02-26',
                    medicineName: 'Medicine A',
                    quantity: 5,
                    amount: 100
                },
                {
                    billNo: 'B002',
                    date: '2024-02-27',
                    medicineName: 'Medicine B',
                    quantity: 3,
                    amount: 150
                },
                {
                    billNo: 'B003',
                    date: '2024-02-28',
                    medicineName: 'Medicine C',
                    quantity: 2,
                    amount: 80
                },
                {
                    billNo: 'B004',
                    date: '2024-02-28',
                    medicineName: 'Medicine D',
                    quantity: 4,
                    amount: 200
                },
                {
                    billNo: 'B005',
                    date: '2024-02-28',
                    medicineName: 'Medicine E',
                    quantity: 6,
                    amount: 300
                },
                {
                    billNo: 'B006',
                    date: '2024-01-01',
                    medicineName: 'Medicine F',
                    quantity: 1,
                    amount: 50
                },
                {
                    billNo: 'B007',
                    date: '2024-01-02',
                    medicineName: 'Medicine G',
                    quantity: 3,
                    amount: 120
                },
                {
                    billNo: 'B008',
                    date: '2024-01-03',
                    medicineName: 'Medicine H',
                    quantity: 2,
                    amount: 90
                },
                {
                    billNo: 'B009',
                    date: '2024-01-04',
                    medicineName: 'Medicine I',
                    quantity: 7,
                    amount: 280
                },
                {
                    billNo: 'B010',
                    date: '2024-01-05',
                    medicineName: 'Medicine J',
                    quantity: 4,
                    amount: 160
                }
                // Add more sales data as needed
            ],
            search: '',
        };
    },
    methods: {
        booltrig() {
            this.bool = !this.bool;
        },
    },
    components:{
        // managernav,
        navcom,

    },

    computed: {
        currentDate() {
        const today = new Date();
        return today.toISOString().split('T')[0];
      },

        filteredSales() {
            return this.sales.filter(sale => {
                const saleDate = new Date(sale.date);
                const fromDate = new Date(this.fromDate);
                const toDate = new Date(this.toDate);
                return saleDate >= fromDate && saleDate <= toDate;
            });
        },
    },
};
</script>