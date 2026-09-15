"use client";

import { useState } from "react";
import Link from "next/link";

export default function CoverageForm() {
  const [sent, setSent] = useState(false);

  if (sent) {
    return (
      <p className="text-sm text-slate-500">
        Recibimos tu ubicación. Un ejecutivo confirmará qué soluciones están disponibles en tu zona.
      </p>
    );
  }

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        setSent(true);
      }}
      className="space-y-3.5"
    >
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
        <div>
          <label className="field-label" htmlFor="cov-cp">
            Código postal
          </label>
          <input id="cov-cp" className="field-input" inputMode="numeric" maxLength={5} placeholder="5 dígitos" required />
        </div>
        <div>
          <label className="field-label" htmlFor="cov-estado">
            Estado
          </label>
          <input id="cov-estado" className="field-input" placeholder="Estado" required />
        </div>
        <div>
          <label className="field-label" htmlFor="cov-municipio">
            Municipio
          </label>
          <input id="cov-municipio" className="field-input" placeholder="Municipio" required />
        </div>
      </div>
      <div className="pt-2 flex flex-col sm:flex-row sm:items-center gap-4">
        <button type="submit" className="btn-primary !py-2.5 !px-8 !text-xs !rounded w-full sm:w-auto">
          Consultar cobertura
        </button>
        <span className="text-[0.7rem] text-slate-400">
          Al enviar aceptas el{" "}
          <Link href="/aviso-de-privacidad" className="text-[#1EA7E0] hover:underline">
            aviso de privacidad
          </Link>
          .
        </span>
      </div>
    </form>
  );
}
