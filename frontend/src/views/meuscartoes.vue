<script setup>
import { ref } from 'vue';
import { useStore } from 'vuex';
import { useRouter } from 'vue-router';

const store = useStore();
const router = useRouter();

const selectCreditCard = (card) => {
  console.log('Selecting credit card:', card);

  // Commit the mutation to set the selected credit card in the store
  store.commit('creditCards/setSelectedCard', card);
  router.push('/cart'); // Navigate to the cart page
};

const toPayment = () => {
  router.push('/cartoes');
};
</script>

<template>
  <Navegacao></Navegacao>
  <div class="credit-card-list">
    <h1 class="page-title">Credit Cards</h1>
    <ul>
      <li v-for="(card, index) in creditCards" :key="index">
        <div class="credit-card-item">
          <div class="credit-card-info">
            <span class="credit-card-name">{{ card.nome }}</span>
            <span class="credit-card-number">
              **** **** **** {{ card.numero_cartao.slice(-4) }}
            </span>
          </div>
          <div class="credit-card-actions">
            <button class="delete-button" @click="deleteCreditCard(card.numero_cartao)">Delete</button>
            <button class="select-button" @click="selectCreditCard(card)">Select</button>
          </div>
        </div>
      </li>
    </ul>
    <div class="add">
      <button class="botao" @click="toPayment">Adicionar Cartão</button>
    </div>
  </div>
</template>


  
  <script>
export default {
  data() {
    return {
      creditCards: [],
    };
  },
  mounted() {
    // Fetch credit card data from the server using a GET request
    this.fetchCreditCards();
  },
  methods: {
    async fetchCreditCards() {
      try {
        const response = await fetch('http://localhost:8000/cartoes', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        });
        if (response.ok) {
          const data = await response.json();
          this.creditCards = data;
        } else {
          console.error('Failed to fetch credit cards.');
        }
      } catch (error) {
        console.error('Error while fetching credit cards:', error);
      }
    },
    async deleteCreditCard(numeroCartao) {
      try {
        const response = await fetch(`http://localhost:8000/cartoes/${numeroCartao}`, {
          method: 'DELETE',
          headers: {
            'Content-Type': 'application/json',
          },
        });
        if (response.ok) {
          // Remove the deleted card from the list
          this.creditCards = this.creditCards.filter(card => card.numero_cartao !== numeroCartao);
        } else {
          console.error('Failed to delete credit card.');
        }
      } catch (error) {
        console.error('Error while deleting credit card:', error);
      }
    },
    toPayment() {
      this.$router.push('/cartoes');
    },
  },
};
</script>
  
  <style scoped>
  .page-title {
    text-align: center;
    font-size: 24px;
    font-weight: bold;
    margin-bottom: 20px;
    display: flex;
    justify-content: center;
  }
  .add{
    display: flex;
    text-align: center;
    justify-content: center;
  }
  .botao{
    display: flex;
    text-align: center;
    justify-content: center;
    padding: 8px 20px;
    background: linear-gradient(315deg, #00ccff, #d400d4);
    border-radius: 20px;
    margin-top: 30px;
    text-decoration: none;
    color: #fff;
    width: 200px;
    font-weight: 500;
    letter-spacing: 0.05em;
    text-transform: uppercase;
    transition: 0.5s;
  }
  .botao:hover{
    background: linear-gradient(315deg, #00ccff, #d400d4);
    transform: scale(1.05);
    transition: 0.5s;
  }
  .credit-card-list {
    max-width: 600px;
    height: 1080px;
    margin: 0 auto;
    padding: 20px;
  }
  
  .credit-card-item {
    background-color: #f5f5f5;
    border: 1px solid #ddd;
    padding: 10px;
    margin-bottom: 10px;
    border-radius: 5px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    transition: background-color 0.2s;
  }
  
  .credit-card-item:hover {
    background-color: #e0e0e0;
  }
  
  .credit-card-info {
    display: flex;
    flex-direction: column;
  }
  
  .credit-card-name {
    font-size: 18px;
    font-weight: bold;
    margin-bottom: 5px;
  }
  
  .credit-card-number {
    font-size: 14px;
    color: #777;
  }
  </style>
  