# 🚀 GUIA DE DEPLOY - MultiPark Ops Central

## ⚡ Deploy Rápido (5 minutos)

### 🎯 **OPÇÃO 1: VERCEL (Recomendado)**

1. **Acede ao Vercel**: https://vercel.com
2. **Clica em "New Project"**
3. **Importa este repositório**: `JorgeTabuada/multipark-ops-central-test`
4. **Configura Environment Variables**:
   ```
   VITE_SUPABASE_URL=https://ioftqsvjqwjeprsckeym.supabase.co
   VITE_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImlvZnRxc3ZqcXdqZXByc2NrZXltIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDcxNTYwNzQsImV4cCI6MjA2MjczMjA3NH0.TXDfhioMFVNxLhjKgpXAxnKCPOl5n8QWpOkX2eafbYw
   ```
5. **Clica "Deploy"** ✅
6. **Aguarda 2-3 minutos** ⏱️
7. **URL gerada automaticamente** 🌐

---

### 🎯 **OPÇÃO 2: NETLIFY (Alternativa)**

1. **Acede ao Netlify**: https://netlify.com
2. **Clica "New site from Git"**
3. **Escolhe GitHub** → `multipark-ops-central-test`
4. **Build Settings**:
   - Build command: `npm run build`
   - Publish directory: `dist`
5. **Environment Variables** (Site settings → Environment variables):
   ```
   VITE_SUPABASE_URL=https://ioftqsvjqwjeprsckeym.supabase.co
   VITE_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImlvZnRxc2...
   ```
6. **Deploy site** ✅

---

## 🎯 **OPÇÃO 3: Manual (GitHub Pages)**

Se preferires deploy manual:

```bash
# 1. Clone o repositório
git clone https://github.com/JorgeTabuada/multipark-ops-central-test.git
cd multipark-ops-central-test

# 2. Instala dependências
npm install

# 3. Configura variáveis (cria .env)
echo "VITE_SUPABASE_URL=https://ioftqsvjqwjeprsckeym.supabase.co" > .env
echo "VITE_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imlvb..." >> .env

# 4. Build
npm run build

# 5. Preview local
npm run preview
```

---

## ✅ **CHECKLIST DE TESTE**

Após o deploy, testa:

### **1. Interface Básica**
- [ ] Página inicial carrega
- [ ] Design está moderno
- [ ] Responsivo no mobile
- [ ] Botão "Entrar na Plataforma" funciona

### **2. Sistema de Login**
- [ ] Página de login aparece
- [ ] Formulário está bem formatado
- [ ] Mensagens de erro funcionam
- [ ] Redirecionamento funciona

### **3. Dashboard**
- [ ] 27 módulos aparecem organizados
- [ ] Cards têm hover effects
- [ ] Badges de status aparecem
- [ ] Navegação funciona

### **4. Páginas Específicas**
- [ ] /caixa → Sistema de Caixa
- [ ] /reservas → Sistema de Reservas
- [ ] /recolhas → Sistema de Recolhas
- [ ] 404 → Página não encontrada

---

## 🔧 **TROUBLESHOOTING**

### **Build Fails?**
```bash
# Verifica Node.js version
node --version  # Deve ser 18+

# Limpa cache
rm -rf node_modules package-lock.json
npm install
```

### **Environment Variables não funcionam?**
- Vercel: Project Settings → Environment Variables
- Netlify: Site Settings → Environment Variables
- Tem de começar com `VITE_`

### **Routing não funciona?**
- Vercel: `vercel.json` está incluído ✅
- Netlify: `netlify.toml` está incluído ✅

---

## 🎯 **URLs DE EXEMPLO**

Depois do deploy, a aplicação estará disponível em:
- **Vercel**: `https://multipark-ops-central-test.vercel.app`
- **Netlify**: `https://multipark-ops-central-test.netlify.app`

---

## 📞 **SUPORTE**

Se houver problemas:
1. Verifica os logs de build
2. Confirma as environment variables
3. Testa localmente primeiro

**Repositório**: https://github.com/JorgeTabuada/multipark-ops-central-test
**Stack**: React 18 + Vite + TypeScript + Supabase + shadcn/ui

---

## 🏆 **RESULTADO ESPERADO**

✅ **Landing page moderna** com logo MultiPark  
✅ **Sistema de login** funcional  
✅ **Dashboard organizado** com 27 módulos  
✅ **Interface responsiva** mobile/desktop  
✅ **Navegação fluida** entre páginas  

**Tempo estimado**: 5 minutos ⚡
**Dificuldade**: Fácil 🟢
