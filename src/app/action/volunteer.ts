'use server';

import { z } from 'zod';

// Esquema de validação e sanitização estrita
const VolunteerSchema = z.object({
  nome: z.string().min(3, 'O nome deve ter pelo menos 3 caracteres').max(100),
  email: z.string().email('Introduza um endereço de e-mail válido'),
  telefone: z.string().min(9, 'Número de telefone inválido'),
  areaInteresse: z.string().min(2, 'Selecione uma área de interesse'),
  mensagem: z.string().max(1000, 'A mensagem não pode exceder 1000 caracteres').optional(),
});

export type VolunteerState = {
  success?: boolean;
  message?: string;
  errors?: Record<string, string[]>;
};

// Função simples para higienizar texto contra HTML/XSS
function sanitizeInput(text: string): string {
  return text
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#x27;')
    .replace(/\//g, '&#x2F;');
}

export async function submitVolunteerForm(
  prevState: VolunteerState,
  formData: FormData
): Promise<VolunteerState> {
  const rawData = {
    nome: formData.get('nome') as string,
    email: formData.get('email') as string,
    telefone: formData.get('telefone') as string,
    areaInteresse: formData.get('areaInteresse') as string,
    mensagem: formData.get('mensagem') as string,
  };

  // 1. Validação Zod no Servidor
  const validatedFields = VolunteerSchema.safeParse(rawData);

  if (!validatedFields.success) {
    return {
      success: false,
      errors: validatedFields.error.flatten().fieldErrors,
      message: 'Por favor, corrija os erros no formulário.',
    };
  }

  // 2. Sanitização do texto contra XSS Refletido/Armazenado
  const cleanData = {
    nome: sanitizeInput(validatedFields.data.nome),
    email: sanitizeInput(validatedFields.data.email),
    telefone: sanitizeInput(validatedFields.data.telefone),
    areaInteresse: sanitizeInput(validatedFields.data.areaInteresse),
    mensagem: validatedFields.data.mensagem ? sanitizeInput(validatedFields.data.mensagem) : '',
  };

  // 3. Processar envio (Exemplo: Guardar na Base de Dados ou Enviar E-mail)
  try {
    // Exemplo: await mailService.sendVolunteerEmail(cleanData);
    console.log('Dados seguros de candidatura recebidos:', cleanData);

    return {
      success: true,
      message: 'Candidatura enviada com sucesso! Entraremos em contacto brevemente.',
    };
  } catch (error) {
    return {
      success: false,
      message: 'Ocorreu um erro ao processar o seu pedido. Tente novamente mais tarde.',
    };
  }
}