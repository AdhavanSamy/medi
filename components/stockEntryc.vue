<template>
  <v-container>
    <navcom/>
    <!-- Add Button -->
    <v-row>
      <v-col cols="12" class="text-right">
        <v-btn @click="openDialog" color="cyan">Add</v-btn>
      </v-col>
    </v-row>

    <!-- Stock Entry Form -->
    <v-row>
      <!-- Medicine Name -->
      <v-col cols="3">
        <v-text-field v-model="medicineName" label="Medicine Name"></v-text-field>
      </v-col>

      <!-- Brand -->
      <v-col cols="3">
        <v-text-field v-model="brand" label="Brand"></v-text-field>
      </v-col>

      <!-- Quantity -->
      <v-col cols="3">
        <v-text-field v-model="quantity" label="Quantity" type="number"></v-text-field>
      </v-col>

      <!-- Unit Price -->
      <v-col cols="3">
        <v-text-field v-model="unitPrice" label="Unit Price" type="number"></v-text-field>
      </v-col>
    </v-row>

    <!-- Update button -->
    <v-row>
      <v-col cols="12" class="text-center">
        <v-btn @click="updateStock" color="cyan" block>Update</v-btn>
      </v-col>
    </v-row>

    <!-- Add Stock Dialog -->
    <v-dialog v-model="dialog" max-width="500">
      <v-card>
        <v-card-title>Add Stock</v-card-title>
        <v-card-text>
          <!-- Medicine Name Input -->
          <v-text-field v-model="newMedicineName" label="Medicine Name"></v-text-field>
          <!-- Brand Name Input -->
          <v-text-field v-model="newBrand" label="Brand ame"></v-text-field>
        </v-card-text>
        <v-card-actions>
          <!-- Add Button in Dialog -->
          <v-btn color="cyan" @click="addStock">Add</v-btn>
          <v-btn color="cyan" text @click="closeDialog">Cancel</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-container>
</template>

<script>
import navcom from "../components/navbarcommon.vue";
export default {
  data() {
    return {
      medicineName: '',
      brand: '',
      quantity: null,
      unitPrice: null,
      dialog: false,
      newMedicineName: '',
      newBrand: ''
    };
  },
  methods: {
    updateStock(){
      console.log("update")

    },
    openDialog() {
      this.dialog = true;
    },
    closeDialog() {
      this.dialog = false;
    },
    addStock() {
      // Add logic to add stock
      console.log('Adding stock...');
      // You can access newMedicineName and newBrand to add the new stock entry
      // Reset newMedicineName and newBrand after adding stock
      this.newMedicineName = '';
      this.newBrand = '';
      // Close the dialog after adding stock
      this.closeDialog();
    }
  },
  components: {
    navcom,
  },
};
</script>