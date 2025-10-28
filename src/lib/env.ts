export const env = {
    email: process.env.NEXT_PUBLIC_EMAIL || 'contato@fliqdigital.com.br',
    phone: process.env.NEXT_PUBLIC_PHONE || '',
    instagram: process.env.NEXT_PUBLIC_INSTAGRAM || 'fliqdigital',

    privateEmail: process.env.EMAIL || 'contato@fliqdigital.com.br',
    privatePhone: process.env.PHONE || '',
    privateInstagram: process.env.INSTAGRAM || 'fliqdigital',
} as const;

export function validateEnv() {
    const requiredVars = [
        'NEXT_PUBLIC_EMAIL',
        'NEXT_PUBLIC_PHONE',
        'NEXT_PUBLIC_INSTAGRAM'
    ];

    const missing = requiredVars.filter(varName => !process.env[varName]);

    if (missing.length > 0) {
        throw new Error(`Variáveis de ambiente obrigatórias não encontradas: ${missing.join(', ')}`);
    }
}
