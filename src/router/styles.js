export default [
    {
        path: "/styles/textandtypography",
        component: () => import(/* webpackChunkName: "styles" */ '../views/styles/TextAndTypography.vue')
    },
    {
        path: "/styles/spacing",
        component: () => import(/* webpackChunkName: "styles" */ '../views/styles/Spacing.vue')
    },
]
