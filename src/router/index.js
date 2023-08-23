import { createWebHistory, createRouter } from "vue-router";
import EditComponent from "@/components/EditComponent.vue";
import ListComponent from "@/components/ListComponent.vue";
import HomePageComponent from "@/components/HomePage.vue";
import CreateUsersComponent from "@/components/CreateUsersComponent.vue";
import LoginComponent from "@/components/LoginComponent.vue";
import UserHomepageComponent from "@/components/UserHomepageComponent.vue";
import AboutUserComponent from "@/components/AboutUserComponent.vue";
import PresentationComponent from "@/components/PresentationComponent.vue";
import TimeTableComponent from "@/components/TimeTableComponent.vue";
import ListSchoolComponent from "@/components/ListSchoolComponent.vue";
import RegisterListSchoolComponent from "@/components/RegisterlistSchoolComponent.vue";
import AllListSchoolComponent from "@/components/AllListSchoolComponent.vue";
import EditListSchoolComponent from "@/components/EditlistSchoolComponent.vue";
import DownloadFileComponent from "@/components/DownloadFileComponent.vue";
import ListUserComponent from "@/components/ListUserComponent.vue";
import EditUserComponent from "@/components/EditUsersComponent.vue";
import CreateStudentComponent from "@/components/CreateStudentComponent.vue"
import ListStudentComponent from "@/components/ListStudentsComponent.vue"
import EditStudentComponent from "@/components/EditStudentComponent.vue"
import AboutEditUserComponent from "@/components/AboutEditUsersComponent.vue";

const routes = [
    {
        path: "/aboutuser",
        name: "aboutuser",
        component: AboutUserComponent,
    },
    {
        path: "/login",
        name: "login",
        component: LoginComponent,
    },
    {
        path: "/",
        name: "home",
        component: HomePageComponent,
    },
    {
        path: "/view",
        name: "view",
        component: ListComponent,
    },
    {
        path: "/edit/:id",
        name: "edit",
        component: EditComponent,
    },
    {
        path: "/username/:username",
        name: "edit",
        component: EditComponent,
    },
    {
        path: "/register",
        name: "register",
        component: CreateUsersComponent,
    },
    {
        path: "/user-homepage",
        name: "user-homepage",
        component: UserHomepageComponent,
    }
    ,
    {
        path: "/presentation",
        name: "presentation",
        component: PresentationComponent,
    },
    {
        path: "/timeTable",
        name: "timeTable",
        component: TimeTableComponent,
    }
    ,
    {
        path: "/listschool",
        name: "listschool",
        component: ListSchoolComponent,
    },
    {
        path: "/registerlistschool",
        name: "registerlistschool",
        component: RegisterListSchoolComponent,
    },
    {
        path: "/alllistschool",
        name: "alllistschool",
        component: AllListSchoolComponent,
    }
    ,
    {
        path: "/editlistschool/:id",
        name: "editlistschool",
        component: EditListSchoolComponent,
    },
    {
        path: "/downloadfile",
        name: "downloadfile",
        component: DownloadFileComponent,
    },
    {
        path: "/listuser",
        name: "listuser",
        component: ListUserComponent,
    },
    {
        path: "/edituser",
        name: "edituser",
        component: EditUserComponent,
    }
    ,
    {
        path: "/createstudent",
        name: "createstudent",
        component: CreateStudentComponent,
    },
    {
        path: "/liststudent",
        name: "liststudent",
        component: ListStudentComponent,
    },
    {
        path: "/editstudent",
        name: "editstudent",
        component: EditStudentComponent,
    },
    {
        path: "/aboutedituser",
        name: "aboutedituser",
        component: AboutEditUserComponent,
    }
];


const router = createRouter({
    history: createWebHistory(),
    routes
})
export default router