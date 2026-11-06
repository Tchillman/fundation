import React from 'react';
import { Metadata } from 'next';
import { Footer } from "@/components/footer"
import { Header } from "@/components/header"

export const metadata: Metadata = {
  title: 'Fazer uma Doação | Associação Osãi',
  description: 'Apoie as nossas causas e projetos de saúde mental e apoio comunitário em Angola.',
};

export default function DoacoesPage() {
  return (
    <>
      <Header />

    <main className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto space-y-8">
        
        {/* Cabeçalho */}
        <div className="text-center space-y-4">
          <h1 className="text-3xl sm:text-4xl font-bold text-osai-wine">
            Apoie a Causa da Associação Osãi
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            A sua contribuição permite-nos continuar a apoiar famílias, promover os cuidados de saúde mental e dinamizar os nossos projetos sociais nas comunidades.
          </p>
        </div>

        {/* Informações Bancárias / IBAN */}
        <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-sm border border-gray-100 space-y-6">
          <h2 className="text-xl font-semibold text-osai-wine border-b pb-3">
            Transferência Bancária (IBAN)
          </h2>
          
          <div className="space-y-4">
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center p-4  rounded-lg">
              <span className="text-sm font-medium text-osai-wine">Titular da Conta:</span>
              <span className="text-base font-bold text-gray-600">Associação Osãi</span>
            </div>

            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center p-4  rounded-lg">
              <span className="text-sm font-medium text-osai-wine">Banco:</span>
              <span className="text-base font-bold text-gray-600">Banco Angolano de Investimentos (BAI)</span>
            </div>

            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center p-4  rounded-lg">
              <span className="text-sm font-medium text-osai-wine">IBAN:</span>
              <span className="text-base sm:text-lg font-mono font-bold text-gray-600 break-all">
                AO06 0040 0000 0000 0000 0000 0
              </span>
            </div>
          </div>

          <div className="bg-amber-50 border-l-4 border-amber-400 p-4 rounded-r-lg text-sm text-amber-900">
            <strong>Nota Importante:</strong> Para efeitos de emissão do comprovativo ou recibo de doação, por favor envie o comprovativo de transferência para <a href="mailto:info@osai.ao" className="underline font-semibold">info@osai.ao</a> com o seu nome e NIF (opcional).
          </div>
        </div>

        {/* Outras Formas de Doação */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm space-y-3">
            <h3 className="text-lg font-bold text-amber-900">Doação de Bens / Material</h3>
            <p className="text-sm text-gray-600">
              Aceitamos doações de bens materiais, tais como equipamentos médicos simples, vestuário, e bens alimentares para o apoio ao domicílio (Projeto SAD).
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm space-y-3">
            <h3 className="text-lg font-bold text-amber-900">Parcerias Institucionais</h3>
            <p className="text-sm text-gray-600">
              Se representa uma empresa ou instituição e deseja estabelecer um protocolo de colaboração, entre em contacto com a nossa direção.
            </p>
          </div>
        </div>

      </div>
    </main>
    <Footer />
    </>
  );
}