import Page from "@/app/components/Page";
import { getPageByType } from "@/app/utils/contentful";
import { PAGE_TYPES } from "@/app/constants/entries";

export function generateMetadata() {
  return {
    title: "LuskinOIC Español - LuskinOIC",
    description:
      "¡Descubre cómo Luskin OIC está comprometido en brindar atención médica de calidad y servicios ortopédicos a la comunidad hispanohablante! Conoce nuestros programas, especialidades y el equipo dedicado que trabaja para mejorar la vida de nuestros pacientes hispanos. Obtén información sobre cómo Luksin OIC puede ayudarte y brindarte el apoyo que necesitas. ¡Bienvenido a Luskin OIC Español!",
    keywords: "Ortopedia Pediátrica",
  };
}

export default async function Espanol() {
  const page = await getPageByType(PAGE_TYPES.ESPANOL);
  return <Page page={page} />;
}
