module.exports = {

"[project]/src/app/(store)/product/[slug]/opengraph-image.tsx [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "alt": (()=>alt),
    "contentType": (()=>contentType),
    "default": (()=>Image),
    "size": (()=>size)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$og$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/og.js [app-rsc] (ecmascript)");
;
;
const alt = "About Acme";
const size = {
    width: 1200,
    height: 630
};
const contentType = "image/png";
async function getProduct(slug) {
    const response = await api(`/products/${slug}`, {
        next: {
            // controle de cache. A cada 1 hora, a página é revalidada
            revalidate: 60 * 60
        }
    });
    const product = await response.json();
    return product;
}
async function Image({ params }) {
    return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$og$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ImageResponse"](/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            fontSize: 128,
            background: "white",
            width: "100%",
            height: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center"
        },
        children: "About Acme"
    }, void 0, false, {
        fileName: "[project]/src/app/(store)/product/[slug]/opengraph-image.tsx",
        lineNumber: 27,
        columnNumber: 7
    }, this), {
        ...size
    });
}
}}),
"[project]/src/app/(store)/product/[slug]/opengraph-image--metadata.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$store$292f$product$2f5b$slug$5d2f$opengraph$2d$image$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/(store)/product/[slug]/opengraph-image.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$lib$2f$metadata$2f$get$2d$metadata$2d$route$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/lib/metadata/get-metadata-route.js [app-rsc] (ecmascript)");
;
;
const imageModule = {
    alt: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$store$292f$product$2f5b$slug$5d2f$opengraph$2d$image$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["alt"],
    contentType: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$store$292f$product$2f5b$slug$5d2f$opengraph$2d$image$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["contentType"],
    size: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$store$292f$product$2f5b$slug$5d2f$opengraph$2d$image$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["size"]
};
async function __TURBOPACK__default__export__(props) {
    const { __metadata_id__: _, ...params } = await props.params;
    const imageUrl = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$lib$2f$metadata$2f$get$2d$metadata$2d$route$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["fillMetadataSegment"])("/(store)/product/[slug]", params, "opengraph-image");
    const { generateImageMetadata } = imageModule;
    function getImageMetadata(imageMetadata, idParam) {
        const data = {
            alt: imageMetadata.alt,
            type: imageMetadata.contentType || 'image/png',
            url: imageUrl + (idParam ? '/' + idParam : '') + "?d06b0232a9413074"
        };
        const { size } = imageMetadata;
        if (size) {
            data.width = size.width;
            data.height = size.height;
        }
        return data;
    }
    if (generateImageMetadata) {
        const imageMetadataArray = await generateImageMetadata({
            params
        });
        return imageMetadataArray.map((imageMetadata, index)=>{
            const idParam = (imageMetadata.id || index) + '';
            return getImageMetadata(imageMetadata, idParam);
        });
    } else {
        return [
            getImageMetadata(imageModule, '')
        ];
    }
}
}}),
"[project]/node_modules/next/dist/server/og/image-response.js [app-rsc] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "ImageResponse", {
    enumerable: true,
    get: function() {
        return ImageResponse;
    }
});
function importModule() {
    return __turbopack_context__.r("[externals]/next/dist/compiled/@vercel/og/index.node.js [external] (next/dist/compiled/@vercel/og/index.node.js, esm_import, async loader)")(__turbopack_context__.i);
}
class ImageResponse extends Response {
    static #_ = this.displayName = 'ImageResponse';
    constructor(...args){
        const readable = new ReadableStream({
            async start (controller) {
                const OGImageResponse = // as the auto resolving is not working
                (await importModule()).ImageResponse;
                const imageResponse = new OGImageResponse(...args);
                if (!imageResponse.body) {
                    return controller.close();
                }
                const reader = imageResponse.body.getReader();
                while(true){
                    const { done, value } = await reader.read();
                    if (done) {
                        return controller.close();
                    }
                    controller.enqueue(value);
                }
            }
        });
        const options = args[1] || {};
        const headers = new Headers({
            'content-type': 'image/png',
            'cache-control': ("TURBOPACK compile-time truthy", 1) ? 'no-cache, no-store' : ("TURBOPACK unreachable", undefined)
        });
        if (options.headers) {
            const newHeaders = new Headers(options.headers);
            newHeaders.forEach((value, key)=>headers.set(key, value));
        }
        super(readable, {
            headers,
            status: options.status,
            statusText: options.statusText
        });
    }
} //# sourceMappingURL=image-response.js.map
}}),
"[project]/node_modules/next/og.js [app-rsc] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
module.exports = __turbopack_context__.r("[project]/node_modules/next/dist/server/og/image-response.js [app-rsc] (ecmascript)");
}}),

};

//# sourceMappingURL=_ba9108cf._.js.map