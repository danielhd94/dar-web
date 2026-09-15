"use client";

import { useState } from "react";
import Link from "next/link";
import PageBanner from "@/components/PageBanner";

const modules = [
  { title: "Comunicados y novedades", desc: "Información relevante para tu operación." },
  { title: "Mis beneficios", desc: "Promociones y ventajas de tu perfil." },
  { title: "Capacitación y materiales", desc: "Guías y contenidos de apoyo." },
  { title: "Soporte y ejecutivo asignado", desc: "Canales para resolver dudas." },
];

const portalOptions = [
  { id: "radar", label: "Centro raDAR", desc: "Comunidad y bonos" },
  { id: "chips", label: "Conectividad", desc: "Chips y portabilidades" },
  { id: "credi", label: "Dar Credi", desc: "Cotizador y solicitudes" },
  { id: "pagafast", label: "PagaFast", desc: "Servicios y recargas" },
];

export default function CentroRadarPage() {
  const [selectedPortal, setSelectedPortal] = useState("radar");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [logged, setLogged] = useState(false);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (email && password) setLogged(true);
  };

  return (
    <div className="min-h-screen bg-[#F4F5F7] text-[#1B2A4A]">
      <PageBanner
        title="Centro raDAR"
        subtitle="Consulta comunicados, beneficios, materiales, capacitación y canales de soporte en un solo lugar."
        bullets={["Comunicados", "Beneficios", "Materiales y soporte"]}
        scene="radar"
      />

      <section className="py-14">
        <div className="section-container grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 content-start">
            {modules.map((m) => (
              <div key={m.title} className="bg-white border border-slate-100 rounded-md p-5 min-h-[7rem]">
                <h2 className="font-display font-bold text-sm mb-1">{m.title}</h2>
                <p className="text-sm text-slate-500">{m.desc}</p>
              </div>
            ))}
          </div>

          <div className="bg-white border border-slate-100 rounded-md p-6">
            {logged ? (
              <div>
                <h2 className="font-display font-bold text-xl mb-2">Sesión iniciada</h2>
                <p className="text-sm text-slate-500 mb-6">Demostración para socios autorizados.</p>
                <button type="button" onClick={() => setLogged(false)} className="btn-secondary !text-xs">
                  Cerrar sesión
                </button>
              </div>
            ) : (
              <>
                <h2 className="font-display font-bold text-lg mb-1">Acceso</h2>
                <p className="text-sm text-slate-400 mb-5">Elige el sistema e ingresa.</p>
                <div className="grid grid-cols-2 gap-2 mb-5">
                  {portalOptions.map((opt) => (
                    <button
                      key={opt.id}
                      type="button"
                      onClick={() => setSelectedPortal(opt.id)}
                      className={`p-3 border text-left text-sm min-w-0 min-h-11 ${
                        selectedPortal === opt.id
                          ? "border-[#1EA7E0] text-[#1EA7E0]"
                          : "border-slate-100 text-[#1B2A4A]"
                      }`}
                    >
                      <span className="font-semibold block">{opt.label}</span>
                      <span className="text-xs text-slate-400">{opt.desc}</span>
                    </button>
                  ))}
                </div>
                <form onSubmit={handleLogin} className="space-y-3">
                  <div>
                    <label htmlFor="radar-email" className="field-label">
                      Usuario o correo
                    </label>
                    <input
                      id="radar-email"
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="field-input"
                    />
                  </div>
                  <div>
                    <label htmlFor="radar-password" className="field-label">
                      Contraseña
                    </label>
                    <input
                      id="radar-password"
                      type="password"
                      required
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="field-input"
                    />
                  </div>
                  <button type="submit" className="btn-primary w-full !text-xs !rounded">
                    Iniciar sesión
                  </button>
                </form>
                <p className="text-xs text-slate-400 mt-4">
                  ¿Todavía no tienes acceso? Solicítalo con tu ejecutivo o{" "}
                  <Link href="/contacto" className="text-[#1EA7E0]">
                    comunícate con soporte
                  </Link>
                  .
                </p>
              </>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
