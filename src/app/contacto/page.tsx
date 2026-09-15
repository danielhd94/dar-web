"use client";

import { useState, type ReactNode } from "react";
import Link from "next/link";
import PageBanner from "@/components/PageBanner";
import SectionHeading from "@/components/SectionHeading";

interface FormState {
  nombre: string;
  negocio: string;
  telefono: string;
  email: string;
  cp: string;
  estado: string;
  motivo: string;
  mensaje: string;
  privacidad: boolean;
}

const motivos = [
  { id: "conectividad", label: "Conectividad (chips y portabilidades)" },
  { id: "dar-credi", label: "Dar Credi (celulares a crédito)" },
  { id: "pagafast", label: "PagaFast (cobro de servicios)" },
  { id: "radar", label: "Comunidad raDAR" },
  { id: "soporte", label: "Ya soy socio y necesito atención" },
  { id: "otro", label: "Otra consulta" },
];

const estados = [
  "Aguascalientes", "Baja California", "Baja California Sur", "Campeche", "Chiapas", "Chihuahua",
  "Ciudad de México", "Coahuila", "Colima", "Durango", "Estado de México", "Guanajuato",
  "Guerrero", "Hidalgo", "Jalisco", "Michoacán", "Morelos", "Nayarit", "Nuevo León",
  "Oaxaca", "Puebla", "Querétaro", "Quintana Roo", "San Luis Potosí", "Sinaloa",
  "Sonora", "Tabasco", "Tamaulipas", "Tlaxcala", "Veracruz", "Yucatán", "Zacatecas",
];

function Field({
  id,
  label,
  error,
  children,
}: {
  id: string;
  label: string;
  error?: string;
  children: ReactNode;
}) {
  return (
    <div>
      <label htmlFor={id} className="field-label">
        {label}
      </label>
      {children}
      {error && <p className="mt-1 text-xs text-slate-500">{error}</p>}
    </div>
  );
}

export default function ContactoPage() {
  const [formData, setFormData] = useState<FormState>({
    nombre: "",
    negocio: "",
    telefono: "",
    email: "",
    cp: "",
    estado: "",
    motivo: "conectividad",
    mensaje: "",
    privacidad: false,
  });
  const [touched, setTouched] = useState<Record<string, boolean>>({});
  const [submitted, setSubmitted] = useState(false);

  const errors = (() => {
    const next: Partial<Record<keyof FormState, string>> = {};
    if (!formData.nombre.trim()) next.nombre = "Ingresa tu nombre";
    if (!formData.negocio.trim()) next.negocio = "Ingresa el nombre del negocio";
    const tel = formData.telefono.replace(/\D/g, "");
    if (!tel) next.telefono = "Ingresa un teléfono";
    else if (tel.length < 10) next.telefono = "Usa 10 dígitos con lada";
    if (!formData.email.trim()) next.email = "Ingresa un correo";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) next.email = "Correo no válido";
    const cp = formData.cp.replace(/\D/g, "");
    if (!cp) next.cp = "Ingresa el código postal";
    else if (cp.length !== 5) next.cp = "El CP debe tener 5 dígitos";
    if (!formData.estado) next.estado = "Selecciona el estado";
    if (!formData.privacidad) next.privacidad = "Acepta el aviso de privacidad";
    return next;
  })();

  const show = (field: keyof FormState) => (touched[field] ? errors[field] : undefined);

  const setField = (field: keyof FormState, value: string | boolean) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setTouched({
      nombre: true,
      negocio: true,
      telefono: true,
      email: true,
      cp: true,
      estado: true,
      motivo: true,
      privacidad: true,
    });
    if (Object.keys(errors).length === 0) setSubmitted(true);
  };

  const inputCls = (field: keyof FormState) =>
    `field-input${show(field) ? " border-slate-400" : ""}`;

  return (
    <div className="min-h-screen bg-white text-[#1B2A4A]">
      <PageBanner
        title="Contacto"
        subtitle="Un ejecutivo de tu zona te contacta para armar la propuesta de tu local."
      />

      <section className="py-14">
        <div className="section-container max-w-4xl">
          {submitted ? (
            <div>
              <SectionHeading
                title="Solicitud enviada"
                subtitle={`Recibimos los datos de ${formData.negocio}. Te contactaremos al ${formData.telefono} en menos de 24 horas hábiles.`}
              />
              <p className="text-sm text-slate-400 mb-6">También puedes llamar al 800-327-2668, lunes a sábado, 9:00 a 19:00.</p>
              <button
                type="button"
                onClick={() => {
                  setSubmitted(false);
                  setTouched({});
                }}
                className="btn-secondary !text-xs !rounded"
              >
                Enviar otra consulta
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} noValidate>
              <SectionHeading title="Datos de tu negocio" subtitle="Los usamos solo para asignarte un ejecutivo de zona." />

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
                <Field id="contact-nombre" label="Nombre" error={show("nombre")}>
                  <input
                    id="contact-nombre"
                    type="text"
                    autoComplete="name"
                    required
                    value={formData.nombre}
                    onChange={(e) => setField("nombre", e.target.value)}
                    onBlur={() => setTouched((t) => ({ ...t, nombre: true }))}
                    placeholder="Nombre y apellidos"
                    className={inputCls("nombre")}
                  />
                </Field>
                <Field id="contact-negocio" label="Negocio" error={show("negocio")}>
                  <input
                    id="contact-negocio"
                    type="text"
                    required
                    value={formData.negocio}
                    onChange={(e) => setField("negocio", e.target.value)}
                    onBlur={() => setTouched((t) => ({ ...t, negocio: true }))}
                    placeholder="Nombre o giro"
                    className={inputCls("negocio")}
                  />
                </Field>
                <Field id="contact-telefono" label="Teléfono" error={show("telefono")}>
                  <input
                    id="contact-telefono"
                    type="tel"
                    inputMode="tel"
                    autoComplete="tel"
                    required
                    value={formData.telefono}
                    onChange={(e) => setField("telefono", e.target.value)}
                    onBlur={() => setTouched((t) => ({ ...t, telefono: true }))}
                    placeholder="10 dígitos"
                    className={inputCls("telefono")}
                  />
                </Field>
                <Field id="contact-email" label="Correo" error={show("email")}>
                  <input
                    id="contact-email"
                    type="email"
                    autoComplete="email"
                    required
                    value={formData.email}
                    onChange={(e) => setField("email", e.target.value)}
                    onBlur={() => setTouched((t) => ({ ...t, email: true }))}
                    placeholder="correo@negocio.com"
                    className={inputCls("email")}
                  />
                </Field>
                <Field id="contact-estado" label="Estado" error={show("estado")}>
                  <select
                    id="contact-estado"
                    required
                    value={formData.estado}
                    onChange={(e) => setField("estado", e.target.value)}
                    onBlur={() => setTouched((t) => ({ ...t, estado: true }))}
                    className={inputCls("estado")}
                  >
                    <option value="">Selecciona</option>
                    {estados.map((edo) => (
                      <option key={edo} value={edo}>
                        {edo}
                      </option>
                    ))}
                  </select>
                </Field>
                <Field id="contact-cp" label="Código postal" error={show("cp")}>
                  <input
                    id="contact-cp"
                    type="text"
                    inputMode="numeric"
                    maxLength={5}
                    required
                    value={formData.cp}
                    onChange={(e) => setField("cp", e.target.value)}
                    onBlur={() => setTouched((t) => ({ ...t, cp: true }))}
                    placeholder="5 dígitos"
                    className={inputCls("cp")}
                  />
                </Field>
                <Field id="contact-motivo" label="Interés">
                  <select
                    id="contact-motivo"
                    value={formData.motivo}
                    onChange={(e) => setField("motivo", e.target.value)}
                    className="field-input"
                  >
                    {motivos.map((m) => (
                      <option key={m.id} value={m.id}>
                        {m.label}
                      </option>
                    ))}
                  </select>
                </Field>
                <Field id="contact-mensaje" label="Comentario">
                  <input
                    id="contact-mensaje"
                    type="text"
                    value={formData.mensaje}
                    onChange={(e) => setField("mensaje", e.target.value)}
                    placeholder="Opcional"
                    className="field-input"
                  />
                </Field>
              </div>

              <div className="pt-6 flex flex-col sm:flex-row sm:items-center gap-4">
                <button id="contact-submit" type="submit" className="btn-primary !py-2.5 !px-8 !text-xs !rounded w-full sm:w-auto">
                  Enviar
                </button>
                <label className="flex items-start gap-2 text-[0.7rem] text-slate-400 max-w-xl">
                  <input
                    id="contact-privacidad"
                    type="checkbox"
                    required
                    checked={formData.privacidad}
                    onChange={(e) => setField("privacidad", e.target.checked)}
                    onBlur={() => setTouched((t) => ({ ...t, privacidad: true }))}
                    className="mt-0.5 accent-[#1EA7E0]"
                  />
                  <span>
                    Acepto el{" "}
                    <Link href="/aviso-de-privacidad" className="text-[#1EA7E0]">
                      aviso de privacidad
                    </Link>
                    .{show("privacidad") ? ` ${show("privacidad")}` : ""}
                  </span>
                </label>
              </div>
            </form>
          )}
        </div>
      </section>
    </div>
  );
}
