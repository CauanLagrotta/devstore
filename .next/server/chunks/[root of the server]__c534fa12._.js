module.exports = {

"[project]/.next-internal/server/app/api/products/search/route/actions.js [app-rsc] (server actions loader, ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
}}),
"[externals]/next/dist/compiled/next-server/app-route.runtime.dev.js [external] (next/dist/compiled/next-server/app-route.runtime.dev.js, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-route.runtime.dev.js", () => require("next/dist/compiled/next-server/app-route.runtime.dev.js"));

module.exports = mod;
}}),
"[externals]/next/dist/compiled/@opentelemetry/api [external] (next/dist/compiled/@opentelemetry/api, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("next/dist/compiled/@opentelemetry/api", () => require("next/dist/compiled/@opentelemetry/api"));

module.exports = mod;
}}),
"[externals]/next/dist/compiled/next-server/app-page.runtime.dev.js [external] (next/dist/compiled/next-server/app-page.runtime.dev.js, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page.runtime.dev.js"));

module.exports = mod;
}}),
"[externals]/next/dist/server/app-render/work-unit-async-storage.external.js [external] (next/dist/server/app-render/work-unit-async-storage.external.js, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("next/dist/server/app-render/work-unit-async-storage.external.js", () => require("next/dist/server/app-render/work-unit-async-storage.external.js"));

module.exports = mod;
}}),
"[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("next/dist/server/app-render/work-async-storage.external.js", () => require("next/dist/server/app-render/work-async-storage.external.js"));

module.exports = mod;
}}),
"[project]/src/app/api/products/data.json (json)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.v(JSON.parse("{\"products\":[{\"id\":1,\"title\":\"Moletom Never Stop Learning\",\"slug\":\"moletom-never-stop-learning\",\"price\":129,\"image\":\"/moletom-never-stop-learning.png\",\"description\":\"Moletom Never Stop Learning, confeccionado em algodão e poliéster, possui capuz com cordão para ajuste, bolso canguru, mangas longas, estampa frontal e acabamento canelado. Ideal para compor looks despojados e confortáveis.\",\"featured\":true},{\"id\":2,\"title\":\"Moletom AI side\",\"slug\":\"moletom-ai-side\",\"price\":99,\"image\":\"/moletom-ai-side.png\",\"description\":\"Moletom AI side, confeccionado em algodão e poliéster, possui capuz com cordão para ajuste, bolso canguru, mangas longas, estampa frontal e acabamento canelado. Ideal para compor looks despojados e confortáveis.\",\"featured\":true},{\"id\":3,\"title\":\"Camiseta DoWhile 2022\",\"slug\":\"camiseta-dowhile-2022\",\"price\":69,\"image\":\"/camiseta-dowhile-2022.png\",\"description\":\"Camiseta DoWhile 2022, confeccionada em algodão, possui decote careca, mangas curtas, estampa frontal e acabamento canelado. Ideal para compor looks despojados e confortáveis.\",\"featured\":true},{\"id\":4,\"title\":\"Moletom Java 2023\",\"slug\":\"moletom-java-2023\",\"price\":99,\"image\":\"/moletom-java.png\",\"description\":\"Moletom Java 2023, confeccionado em algodão e poliéster, possui capuz com cordão para ajuste, bolso canguru, mangas longas, estampa frontal e acabamento canelado. Ideal para compor looks despojados e confortáveis.\",\"featured\":false},{\"id\":5,\"title\":\"Moletom IA p/ devs\",\"slug\":\"moletom-ia-p-devs\",\"price\":99,\"image\":\"/moletom-ia-p-devs.png\",\"description\":\"Moletom IA p/ devs, confeccionado em algodão e poliéster, possui capuz com cordão para ajuste, bolso canguru, mangas longas, estampa frontal e acabamento canelado. Ideal para compor looks despojados e confortáveis.\",\"featured\":false}]}"));}}),
"[project]/src/app/api/products/search/route.ts [app-route] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "GET": (()=>GET)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$api$2f$products$2f$data$2e$json__$28$json$29$__ = __turbopack_context__.i("[project]/src/app/api/products/data.json (json)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/zod/lib/index.mjs [app-route] (ecmascript)");
;
;
async function GET(request) {
    await new Promise((resolve)=>setTimeout(resolve, 1000));
    const { searchParams } = request.nextUrl;
    const query = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["z"].string().parse(searchParams.get("q"));
    const products = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$api$2f$products$2f$data$2e$json__$28$json$29$__["default"].products.filter((product)=>{
        return product.title.toLocaleLowerCase().includes(query.toLocaleLowerCase());
    });
    return Response.json(products);
}
}}),

};

//# sourceMappingURL=%5Broot%20of%20the%20server%5D__c534fa12._.js.map