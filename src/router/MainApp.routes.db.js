import Dashborad from "./../views/app/Dashborad.vue";
import Bookings from "./../views/app/Bookings.vue";
import Patients from "./../views/app/Patients.vue";
import Users from "./../views/app/Users.vue";
import Doctors from "./../views/app/Doctors.vue";
import Operts from "./../views/app/Operts.vue";
import Checkups from "./../views/app/Checkups.vue";
import Logs from "./../views/app/Logs.vue";
import Settings from "./../views/app/Settings.vue";

export default [
    {
        path: 'dashborad',
        component: Dashborad,
    },
    {
        path: 'bookings',
        component:Bookings ,
    },
    {
        path: 'patients',
        component: Patients,
    },
    {
        path: 'users',
        component: Users,
    },
    {
        path: 'doctors',
        component: Doctors,
    },
    {
        path: 'operts',
        component: Operts,
    },
    {
        path: 'checkups',
        component: Checkups,
    },
    {
        path: 'logs',
        component: Logs,
    },
    {
        path: 'settings',
        component: Settings,
    },
];