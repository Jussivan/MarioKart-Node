# 🏎️ Mario Kart.JS

Bem-vindo ao **Mario Kart.JS**, um projeto de simulação de corridas inspirado na clássica série **Mario Kart** da Nintendo! Este desafio foi proposto por **Felipão** e implementado em JavaScript puro para rodar diretamente no terminal.

---

## 🎮 Objetivo

Simular uma corrida entre dois personagens do universo Mario Kart com base em suas habilidades e sorte (rolagem de dados). O jogo é composto por 5 rodadas, cada uma com um tipo de trecho (reta, curva ou confronto), que determina como os personagens disputarão o ponto.

---

## 👤 Personagens Disponíveis

| Personagem     | Velocidade | Manobrabilidade | Poder |
|----------------|------------|------------------|-------|
| Mario          | 4          | 3                | 3     |
| Peach          | 3          | 4                | 2     |
| Yoshi          | 2          | 4                | 3     |
| Bowser         | 5          | 2                | 5     |
| Luigi          | 3          | 4                | 4     |
| Donkey Kong    | 2          | 2                | 5     |

---

## 🛣️ Regras & Mecânicas

### 🎲 Estrutura da Corrida
- A corrida tem 5 rodadas.
- A cada rodada, é sorteado um **bloco de pista**:
  - **RETA** → disputa baseada na **velocidade**
  - **CURVA** → disputa baseada na **manobrabilidade**
  - **CONFRONTO** → confronto baseado no **poder**

### ✅ Lógica por tipo de bloco

- **RETA**:
  - Cada personagem rola um dado (1 a 6).
  - Soma o resultado com seu atributo de **velocidade**.
  - Quem tiver o maior valor **ganha 1 ponto**.

- **CURVA**:
  - Rola um dado e soma com a **manobrabilidade**.
  - Quem tiver o maior valor **ganha 1 ponto**.

- **CONFRONTO**:
  - Rola um dado e soma com o **poder**.
  - Quem tiver o menor valor **perde 1 ponto**.
  - Nenhum jogador pode ficar com pontuação negativa (mínimo = 0).

---

## 🏁 Condição de Vitória

- Ao final das 5 rodadas, vence o personagem que tiver **mais pontos acumulados**.

---
