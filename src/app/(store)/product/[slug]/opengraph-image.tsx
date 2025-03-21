import { api } from "@/data/api";
import { Product } from "@/data/types/product";
import { env } from "@/env";
import { ImageResponse } from "next/og";

export const alt = "About Acme";
export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

async function getProduct(slug: string): Promise<Product | null> {
  try {
    const response = await api(`/products/${slug}`, {
      next: { revalidate: 60 * 60 },
    });

    if (!response.ok) {
      console.error(`Erro ao buscar o produto: ${response.status}`);
      return null;
    }

    return await response.json();
  } catch (error) {
    console.error("Erro ao buscar o produto:", error);
    return null;
  }
}

export default async function OgImage({
  params,
}: {
  params: { slug: string };
}) {
  const product = await getProduct(params.slug);

  if (!product) {
    return new Response("Produto não encontrado", { status: 404 });
  }

  if (!product.image) {
    console.error("Imagem do produto não encontrada:", product);
    return new Response("Imagem não disponível", { status: 404 });
  }

  const productImageURL = new URL(product.image, env.APP_URL).toString();

  return new ImageResponse(
    (
      <div
        style={{
          background: "#18181b",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <img src={productImageURL} alt="" style={{ width: "100%" }} />
      </div>
    ),
    size
  );
}
