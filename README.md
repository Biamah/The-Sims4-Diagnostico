# 🩺 Sim Diagnosis

Um assistente de diagnóstico para a carreira médica do  
The Sims 4: Ao Trabalho.

O objetivo da aplicação é ajudar jogadores a identificarem possíveis doenças dos Sims através da seleção de sintomas, mostrando diagnósticos em tempo real com porcentagens dinâmicas.

---

# ✨ Funcionalidades

- ✅ Seleção de sintomas
- ✅ Cálculo de diagnóstico em tempo real
- ✅ Barras de porcentagem animadas
- ✅ Interface mobile-first
- ✅ Ranking dinâmico de doenças
- ✅ Animações suaves com Framer Motion
- ✅ Interface responsiva
- ✅ Banco de doenças facilmente expansível

---

# 📱 Como funciona

O usuário seleciona os sintomas do Sim:

- Febre
- Tontura
- Espirros
- Náusea

A aplicação calcula automaticamente as doenças mais prováveis:

| Doença        | Probabilidade |
| ------------- | ------------- |
| Llama Flu     | 92%           |
| Burning Belly | 71%           |
| Starry Eyes   | 30%           |

---

# 🧠 Lógica do Diagnóstico

A aplicação compara os sintomas selecionados pelo usuário com os sintomas cadastrados para cada doença.

A porcentagem é calculada utilizando a fórmula:

```ts
(matches / totalSymptoms) * 100;
```

Depois disso, as doenças são ordenadas da maior para a menor compatibilidade.

---

# ⚙️ Tecnologias Utilizadas

- React
- TypeScript
- Vite
- TailwindCSS
- Framer Motion

---

# 📂 Estrutura do Projeto

```txt
src/
├── components/
│   ├── DiseaseCard.tsx
│   └── SymptomSelector.tsx
│
├── data/
│   └── diseases.ts
│
├── utils/
│   └── diagnose.ts
│
├── App.tsx
└── main.tsx
```

---

# 🚀 Como rodar o projeto

## 1. Clone o repositório

```bash
git clone https://github.com/seu-usuario/sim-diagnosis.git
```

---

## 2. Entre na pasta do projeto

```bash
cd sim-diagnosis
```

---

## 3. Instale as dependências

```bash
npm install
```

---

## 4. Inicie o servidor

```bash
npm run dev
```

---

# 🎨 Objetivos da Interface

O projeto foi pensado para ter:

- Experiência mobile-first
- Interações rápidas
- Transições suaves
- Botões grandes para toque
- Visual limpo inspirado em hospitais

---

# 📊 Melhorias Futuras

- 🔍 Sugestão de exames
- 💊 Tratamentos corretos
- 🎵 Sons inspirados no The Sims
- 🌙 Dark mode
- 💾 Histórico de diagnósticos
- 📱 Suporte PWA
- 🧠 Algoritmo de diagnóstico mais inteligente
- ☁️ Integração com backend

---

# 📚 Exemplo da Estrutura de Dados

```ts
{
  id: 1,
  name: 'Llama Flu',
  symptoms: [
    'Febre',
    'Tosse',
    'Espirros'
  ],
  treatment: 'Medicamento A'
}
```

---

# ❤️ Inspiração

Inspirado na carreira médica da expansão:

The Sims 4: Ao Trabalho

Muitos jogadores possuem dificuldade em identificar corretamente as doenças durante o gameplay, então este projeto foi criado para tornar essa experiência mais simples, rápida e divertida.

---

# 📄 Licença

Este projeto foi desenvolvido para fins educacionais e de portfólio.
