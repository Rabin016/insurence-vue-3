import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home/index.vue";

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
					component: () => import("../views/Home/Marine.vue"),
				},
				{
					path: "/fire",
					name: "fire",
					component: () => import("../views/Home/Fire.vue"),
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
