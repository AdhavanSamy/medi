<template>
    <v-app>
      <navcom/>
        <!-- <billernav/> -->


    <v-container>
      <v-row>
        <v-col cols="6">
          <v-autocomplete
            v-model="selectedMedicine"
            :items="medicines"
            item-text="name"
            item-value="name"
            label="Select Medicine"
            outlined
          ></v-autocomplete>
        </v-col>
        <v-col cols="3">
          <v-text-field v-model.number="quantity" label="Quantity" outlined></v-text-field>
        </v-col>
        <v-col cols="3">
          <v-btn color="cyan" @click="addItem">Add Item</v-btn>
        </v-col>
      </v-row>
  
      <v-divider class="my-4"></v-divider>
  
      <v-row>
        <v-col cols="12">
          <v-card>
            <v-card-title>
              <div>Bill Details-</div>
              <div>Bill Number: {{ billNumber }}</div>
              <div>Date: {{ currentDate }}</div>
            </v-card-title>
            <v-list>
              <v-list-item v-for="(item, index) in billItems" :key="index">
                <v-list-item-content>{{ item.name }}</v-list-item-content>
                <v-list-item-content>{{ item.quantity }}</v-list-item-content>
                <v-list-item-content>{{ item.amount }}</v-list-item-content>
              </v-list-item>
            </v-list>
            <v-card-text>
              <div>Total: {{ total }}</div>
              <div>GST (18%): {{ gst }}</div>
              <div>Net Payable: {{ netPayable }}</div>
            </v-card-text>
            <v-card-actions>
              <v-btn color="cyan" @click="saveBill">Save</v-btn>
              <v-btn color="cyan" @click="previewBill">Preview</v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>

      <!-- Preview Dialog -->
    <v-dialog v-model="previewDialog" max-width="600">
      <v-card>
        <v-card-title class="headline">Preview Bill</v-card-title>
        <v-card-text>
          <div>Medical Shop Name: {{ medicalShopName }}</div>
          <v-divider class="my-4"></v-divider>
          <div v-for="(item, index) in billItems" :key="index">
            <div>{{ item.name }} - Quantity: {{ item.quantity }} - Amount: {{ item.amount }}</div>
          </div>
          <v-divider class="my-4"></v-divider>
          <div>Total: {{ total }}</div>
          <div>GST (18%): {{ gst }}</div>
          <div>Net Payable: {{ netPayable }}</div>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="cyan" @click="previewDialog = !previewDialog">Print</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>

    </v-container>
</v-app>
  </template>
  
  <script>
  import navcom from "../components/navbarcommon.vue"
  // import billernav from "../components/billerNav.vue";
  export default {
    data() {
      return {
        selectedMedicine: null,
        quantity: 1,
        medicines: [
          { name: 'Medicine 1', price: 10 },
          { name: 'Medicine 2', price: 20 },
          { name: 'Medicine 3', price: 30 }
        ],
        billItems: [],
        total: 0,
        gst: 0,
        netPayable: 0,
        billNumber: '',
        currentDate: '',

        previewDialog: false,
      medicalShopName: 'Your Medical Shop Name' // Update with actual name

      };
    },
    mounted() {
      this.generateBillNumber();
      this.getCurrentDate();
    },
    methods: {
      addItem() {
        if (this.selectedMedicine && this.quantity > 0) {
          const price = this.medicines.find(med => med.name === this.selectedMedicine).price;
          const amount = price * this.quantity;
          this.billItems.push({ name: this.selectedMedicine, quantity: this.quantity, amount });
          this.calculateTotal();
        }
      },
      calculateTotal() {
        this.total = this.billItems.reduce((acc, item) => acc + item.amount, 0);
        this.calculateGST();
      },
      calculateGST() {
        this.gst = (this.total * 0.18).toFixed(2);
        this.netPayable = (this.total + parseFloat(this.gst)).toFixed(2);
      },
      saveBill() {
        // Add logic to save bill
        console.log('Bill Saved');
      },
      generateBillNumber() {
        // Generate a random bill number (you can use any logic for bill number generation)
        this.billNumber = Math.floor(Math.random() * 1000000);
      },
      getCurrentDate() {
        const date = new Date();
        this.currentDate = `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;
      },

      previewBill() {
      // Open the preview dialog
      this.previewDialog = true;
    },

    },
    components: {
      // billernav,
      navcom,
    }
  };
  </script>