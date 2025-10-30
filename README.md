# Orçamentos de Marcenaria — App (Expo + Supabase)

## Requisitos
- Node 18+
- Conta Expo + EAS CLI
- Supabase (URL e Anon Key)

## Setup
```bash
npm i
cp .env.example .env
# edite .env com SUPABASE_URL e SUPABASE_ANON_KEY
```
O app lê as variáveis via `app.config.js` (expo-constants).

### Banco (Supabase)
Execute em SQL Editor:
- `db/schema.sql`
- `db/rls.sql`

## Run
```bash
npm start
```
Abra no Expo Go (Android/iOS).

## Build Android/iOS (EAS)
- Instale: `npm i -g eas-cli`
- Login: `eas login`
- Configure projeto: `eas init` (substitua o `projectId` em `app.config.js` ou `app.json`)
- Android AAB: `eas build --platform android`
- iOS IPA: `eas build --platform ios`

## Funcionalidades
- Listar, criar, editar **Projetos**
- **BOM** com linhas, perda %, preço unitário do catálogo mock
- Cálculo de **materiais, mão de obra, frete, impostos, markup e desconto**
- **WhatsApp** (wa.me)
- **Exportar PDF** (expo-print + expo-sharing)

## Observações
- O catálogo ainda é mock (local). Para catálogos de fornecedores, crie tabelas `materials`, `material_prices` e uma tela de importação CSV.
- Ative Auth do Supabase para travar por usuário e associe `projects.user_id` ao `auth.uid()` no insert.

