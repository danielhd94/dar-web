"use client";

import { useState } from "react";
import Link from "next/link";
import PageBanner from "@/components/PageBanner";

const modules = [
  { title: "Promociones del mes", desc: "Comisiones extraordinarias de tu zona." },
  { title: "Bonos raDAR", desc: "Puntos y fechas de dispersión." },
  { title: "Materiales y guías", desc: "POP digital y fichas de producto." },
  { title: "Tu asesor", desc: "Mensajes o visita a tu local." },
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
    <div className="min-h-screen bg-white text-[#1B2A4A]">
      <PageBanner
        title="Centro raDAR"
        subtitle="Comisiones, promociones y contacto con tu asesor."
      />

      <section className="py-14">
        <div className="section-container grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="divide-y divide-slate-100">
            {modules.map((m) => (
              <div key={m.title} className="py-4">
                <h2 className="font-display font-bold text-sm">{m.title}</h2>
                <p className="text-sm text-slate-500">{m.desc}</p>
              </div>
            ))}
          </div>

          <div className="border border-slate-100 p-6">
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
                    Ingresar
                  </button>
                </form>
                <p className="text-xs text-slate-400 mt-4">
                  ¿Aún no tienes acceso?{" "}
                  <Link href="/contacto" className="text-[#1EA7E0]">
                    Solicita tu alta
                  </Link>
                </p>
              </>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
