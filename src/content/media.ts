export type SceneVariant = "growth" | "chip" | "phone" | "pay" | "radar" | "team";

export const scenePhotos: Record<SceneVariant, { src: string; alt: string }> = {
  growth: {
    src: "https://images.unsplash.com/photo-1556740738-b6a63e27c4df?auto=format&fit=crop&w=1400&q=80",
    alt: "Atención en un punto de venta",
  },
  chip: {
    src: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=1400&q=80",
    alt: "Teléfono móvil y conectividad",
  },
  phone: {
    src: "https://images.unsplash.com/photo-1510557880182-3d4d3cba35a5?auto=format&fit=crop&w=1400&q=80",
    alt: "Equipos móviles en exhibición",
  },
  pay: {
    src: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=1400&q=80",
    alt: "Pago en terminal en un negocio",
  },
  radar: {
    src: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=1400&q=80",
    alt: "Comunidad y trabajo en equipo",
  },
  team: {
    src: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1400&q=80",
    alt: "Equipo de trabajo de DAR",
  },
};
