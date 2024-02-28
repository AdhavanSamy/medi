<template>
    <v-app>

        <!-- <billernav/> -->
        <navcom/>

    <v-container>
        <v-row>
            <v-col cols="12">
                <v-text-field v-model="search" label="Search" outlined></v-text-field>
            </v-col>
        </v-row>

        <v-row>
            <v-col cols="12">
                <v-data-table :headers="headers" :items="medicines" :search="search" :rows-per-page-items="[10, 20, 30]"
                    item-key="name" class="elevation-1">
                    <template v-slot:items="props">
                        <td>{{ props.item.name }}</td>
                        <td>{{ props.item.brand }}</td>
                        <td>{{ props.item.quantity }}</td>
                        <td>{{ props.item.unitPrice }}</td>
                    </template>
                </v-data-table>
            </v-col>
        </v-row>
    </v-container>
</v-app>
</template>
  
<script>
// import billernav from "../components/billerNav.vue";
import navcom from "../components/navbarcommon.vue"
export default {
    data() {
        return {
            search: '',
            headers: [
                { text: 'Medicine Name', align: 'start', value: 'name' },
                { text: 'Brand', value: 'brand' },
                { text: 'Quantity', value: 'quantity' },
                { text: 'Unit Price', value: 'unitPrice' }
            ],
            medicines: [
                { name: 'Medicine 1', brand: 'Brand A', quantity: 100, unitPrice: 5.99 },
                { name: 'Medicine 2', brand: 'Brand B', quantity: 150, unitPrice: 7.99 },
                { name: 'Medicine 3', brand: 'Brand C', quantity: 200, unitPrice: 9.99 },
                // Add more medicines as needed
            ]
        };

    },
    methods: {
    },
    components: {
        // billernav,
        navcom,
    },
};
</script>