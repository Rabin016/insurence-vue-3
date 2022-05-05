import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/home/index.vue";

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes: [
		{
			path: "/",
			// name: 'home',
			component: Home,
			children: [
				{
					path: "/",
					name: "marine",
					component: () => import("../views/home/Marine.vue"),
				},
				{
					path: "/fire",
					name: "fire",
					component: () => import("../views/home/Fire.vue"),
				},
				{
					path: "/car",
					name: "car",
					component: () => import("../views/home/Car.vue"),
				},
			],
		},
		{
			path: "/about",
			name: "about",
			component: () => import("../views/AboutView.vue"),
		},
	],
});

export default router;
