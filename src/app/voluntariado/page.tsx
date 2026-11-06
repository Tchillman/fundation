"use client";

import React, { useActionState } from "react";
import { submitVolunteerForm, VolunteerState } from "@/app/action/volunteer";
import { Footer } from "@/components/footer"
import { Header } from "@/components/header"


const initialState: VolunteerState = {};

export default function VoluntariadoPage() {
  const [state, formAction, isPending] = useActionState(
    submitVolunteerForm,
    initialState,
  );

  return (
       <>
         <Header />
    <main className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto space-y-8">
        {/* Cabeçalho */}
        <div className="text-center space-y-3">
          <h1 className="text-3xl sm:text-4xl font-bold text-osai-wine">
            Junte-se à Associação Osãi
          </h1>
          <p className="text-gray-600 max-w-xl mx-auto">
            Seja como voluntário nos nossos projetos comunitários ou tornando-se
            membro associado, o seu apoio faz a diferença.
          </p>
        </div>

        {/* Formuário */}
        <div className="bg-white p-6 sm:p-10 rounded-2xl shadow-sm border border-gray-100">
          {state.success ? (
            <div className="p-6 bg-osai-wine border border-amber-200 text-amber-900 rounded-xl text-center space-y-3">
              <h2 className="text-xl font-bold">
                Obrigado pela sua candidatura!
              </h2>
              <p>{state.message}</p>
            </div>
          ) : (
            <form
              action={formAction}
              className="space-y-6">
              {state.message && !state.success && (
                <div className="p-4 bg-red-50 text-red-700 rounded-lg text-sm">
                  {state.message}
                </div>
              )}

              {/* Nome Completo */}
              <div>
                <label
                  htmlFor="nome"
                  className="block text-sm font-medium text-gray-700 mb-1">
                  Nome Completo *
                </label>
                <input
                  type="text"
                  id="nome"
                  name="nome"
                  required
                  className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-600 focus:border-transparent outline-none transition"
                  placeholder="Ex: Maria Antónia"
                />
                {state.errors?.nome && (
                  <p className="text-xs text-red-600 mt-1">
                    {state.errors.nome[0]}
                  </p>
                )}
              </div>

              {/* Contactos */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700 mb-1">
                    Endereço de E-mail *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-600 focus:border-transparent outline-none transition"
                    placeholder="exemplo@email.com"
                  />
                  {state.errors?.email && (
                    <p className="text-xs text-red-600 mt-1">
                      {state.errors.email[0]}
                    </p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="telefone"
                    className="block text-sm font-medium text-gray-700 mb-1">
                    Telefone / WhatsApp *
                  </label>
                  <input
                    type="tel"
                    id="telefone"
                    name="telefone"
                    required
                    className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-600 focus:border-transparent outline-none transition"
                    placeholder="+244 9XX XXX XXX"
                  />
                  {state.errors?.telefone && (
                    <p className="text-xs text-red-600 mt-1">
                      {state.errors.telefone[0]}
                    </p>
                  )}
                </div>
              </div>

              {/* Área de Interesse */}
              <div>
                <label
                  htmlFor="areaInteresse"
                  className="block text-sm font-medium text-gray-700 mb-1">
                  Área em que pretende contribuir *
                </label>
                <select
                  id="areaInteresse"
                  name="areaInteresse"
                  required
                  className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-600 focus:border-transparent outline-none transition bg-white">
                  <option value="">Selecione uma opção...</option>
                  <option value="saude">Apoio em Saúde / Psicologia</option>
                  <option value="sad">Projeto SAD (Apoio ao Domicílio)</option>
                  <option value="eventos">Apoio Logístico e Eventos</option>
                  <option value="membro">Tornar-se Membro Efetivo</option>
                </select>
                {state.errors?.areaInteresse && (
                  <p className="text-xs text-red-600 mt-1">
                    {state.errors.areaInteresse[0]}
                  </p>
                )}
              </div>

              {/* Mensagem / Motivação */}
              <div>
                <label
                  htmlFor="mensagem"
                  className="block text-sm font-medium text-gray-700 mb-1">
                  Mensagem de Motivação (Opcional)
                </label>
                <textarea
                  id="mensagem"
                  name="mensagem"
                  rows={4}
                  className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-600 focus:border-transparent outline-none transition"
                  placeholder="Conte-nos brevemente a sua motivação..."
                />
                {state.errors?.mensagem && (
                  <p className="text-xs text-red-600 mt-1">
                    {state.errors.mensagem[0]}
                  </p>
                )}
              </div>

              {/* Botão Submeter */}
              <button
                type="submit"
                disabled={isPending}
                className="w-full bg-osai-wine hover:bg-amber-900 text-white font-semibold py-3 px-6 rounded-lg transition duration-200 shadow-sm disabled:opacity-50">
                {isPending ? "A enviar candidatura..." : "Enviar Candidatura"}
              </button>
            </form>
          )}
        </div>
      </div>
    </main>
     <Footer />
    </>
  );
}
