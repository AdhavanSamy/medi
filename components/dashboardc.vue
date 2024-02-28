<template>
    <div>
        <navcom/>
        <dashboardmanager v-show="managerdshow"/>
        <dashboardbiller v-show="billerdshow"/>
        <dashboardadmin v-show="admindshow"/>
        <dashboardinventry v-show="inventrydshow"/>
        
    </div>

</template>
<script>
import navcom from "../components/navbarcommon.vue";
import dashboardbiller from "../components/dashboardBiller.vue";
import dashboardmanager from "../components/dashboardManager.vue";
import dashboardadmin from "../components/dashboardAdminc.vue";
import dashboardinventry from "../components/dashboardInventryc.vue";
export default {
    data() {
        return {
            billerdshow: this.$store.state.statebill,
            managerdshow: this.$store.state.statemanager ,
            admindshow: this.$store.state.stateadmin,
            inventrydshow:this.$store.state.stateinventry,


        };
    },
    components:{
        navcom,
        dashboardbiller,
        dashboardmanager,
        dashboardadmin,
        dashboardinventry,
    }
}
</script>
