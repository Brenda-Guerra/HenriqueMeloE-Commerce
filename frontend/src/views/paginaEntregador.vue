<template>
  <div class="pagina-entregador">
    <div class="entregador-box">
      <h1 class="page-title">Detalhes do Entregador</h1>
      <div class="entregador-details" v-if="entregador.email">
        <p><strong>Email:</strong> {{ entregador.email }}</p>
        <p><strong>Nome:</strong> {{ entregador.nome }}</p>
        <p><strong>CPF:</strong> {{ entregador.cpf }}</p>
        <p><strong>Telefone:</strong> {{ entregador.telefone }}</p>
        <p><strong>Veiculo:</strong> {{ entregador.veiculo }}</p>
        <p><strong>Placa:</strong> {{ entregador.placa }}</p>
      </div>
      <div class="buttons-container">
        <button class="modify-button" @click="modifyData(entregador.email)">Modificar</button>
        <button class="delete-button" @click="deleteData(entregador.email)">Excluir</button>
      </div>
      <div class="botaoTelaPrincipal">
        <button class="botao" @click="toHome">Sair</button>
      </div>
    </div>
  </div>
</template>

<script>
import { onMounted, ref } from 'vue';
import { useRouter } from 'vue-router';

export default {
  data() {
    return {
      entregador: {
        email: '',
        nome: '',
        cpf: '',
        telefone: '',
        veiculo: '',
        placa: '',
      },
    };
  },

  async mounted() {
  const router = useRouter();
  const email = this.$route.params.email; 

  if (email) {
    try {
      const response = await fetch(`http://localhost:8000/entregadores/${email}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (response.ok) {
        const data = await response.json();
        this.entregador = data;
      } else {
        console.error('Erro ao tentar recuperar dados do entregador.');
      }
    } catch (error) {
      console.error('Erro na tentativa de recuperar dadoas do entregador:', error);
    }
  }
},

  methods: {
    toHome() {
      this.$router.push('/');
    },
    modifyData(email) {
      this.$router.push({ name: 'modificarEntregador', params: { email } });
    },
    async deleteData(email) {
      try {
        const response = await fetch(`http://localhost:8000/entregadores/${email}`, {
          method: 'DELETE',
          headers: {
            'Content-Type': 'application/json',
          },
        });
        if (response.ok) {
          alert('Entregador deletado!');
          this.$router.push('/');
        } else {
          alert(`Falha em deletar entregador. ${email}`);
        }
      } catch (error) {
        console.error('Erro na tentativa de deletar entregador:', error);
      }
    },
  },
};
</script>

<style scoped>
.pagina-entregador {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
}
.page-title {
  font-size: 24px;
  text-align: center;
  margin-bottom: 20px;
  color: #333;
}

.entregador-box {
  background-color: #fff;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  padding: 20px;
  border-radius: 10px;
  width: 300px;
}

.buttons-container {
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
}

.modify-button,
.delete-button {
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 5px;
  padding: 10px 20px;
  font-size: 18px;
  cursor: pointer;
  width: 45%;
  transition: background-color 0.3s ease;
}

.modify-button:hover,
.delete-button:hover {
  background-color: #0056b3;
}

.botaoTelaPrincipal {
  text-align: center;
  margin-top: 20px;
}

.botao {
  background-color: #6c6c6c;
  color: #fff;
  border: none;
  border-radius: 5px;
  padding: 10px 20px;
  font-size: 18px;
  cursor: pointer;
  width: 100%;
  transition: background-color 0.3s ease;
}

.botao:hover {
  background-color: #3c3c3c;
}
</style>
