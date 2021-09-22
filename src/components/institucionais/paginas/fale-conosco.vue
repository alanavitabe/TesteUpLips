<template lang="html">
  <section id="atendimento">
    <div class="atendimento-top">
      <h1 class="atendimento-top-t1">Atendimento</h1>
      <p class="atendimento-top-t2">Falar com a gente é rápido e prático! 😉<br>
      Basta clicar no ícone do Chat Online que está no canto inferior direito da sua tela. ✅</p>
      <p class="atendimento-top-t2">Reforçando que nosso horário de atendimento é de segunda a sexta-feira, das 8h às 18h, exceto feriados. ⏰<br>
      Esperamos sua mensagem! Até mais! 👋🏻</p>
    </div>
    
  </section>
</template>

<script>
import Comunicacao from "@/comunicacao";

export default {
  components: {
    // msg: () => import("@/components/gerais/form-msg.vue"),
  },
  props: {
    config: Object,
  },
  data() {
    return {
      breadcrumb: [
        {
          label: "Home",
          atual: false,
          rota: {
            name: "home",
            params: [],
            query: [],
          },
          url: "https://www.varejaodasmaquinas.com",
        },
        {
          label: "Fale conosco",
          atual: true,
          rota: {
            name: "fale-conosco",
            route: "/pagina/fale-conosco",
            params: [],
            query: [],
          },
          url: "https://www.varejaodasmaquinas.com/pagina/fale-conosco",
        },
      ],
      nome: "",
      email: "",
      contato: "",
      mensagemContato: "",
      showMsg: false,
      msg: "",
      msgNegativa: false,
    };
  },
  watch: {
    email() {
      this.removeAlert();
    },
    nome() {
      this.removeAlert();
    },
    contato() {
      this.removeAlert();
    },
    mensagemContato() {
      this.removeAlert();
    },
  },
  methods: {
    removeAlert() {
      if (this.$refs.alert) {
        this.showMsg = false;
        this.$refs.alert.classList.remove("alert");
        this.$refs.alert = undefined;
      }
    },
    alertInput(el, msg) {
      el.classList.add("alert");
      this.$refs.alert = el;
      this.msgNegativa = true;
      this.showMsg = true;
      this.msg = msg;
    },
    sendForm() {
      if (this.nome.length == 0) {
        this.alertInput(this.$refs.nome, "Preencha o(s) campo(s)!");
        return;
      }
      if (this.email.length == 0) {
        this.alertInput(this.$refs.email, "Preencha o(s) campo(s)!");
        return;
      }
      if (this.contato.length == 0) {
        this.alertInput(this.$refs.contato, "Preencha o(s) campo(s)!");
        return;
      }
      if (this.mensagemContato.length == 0) {
        this.alertInput(this.$refs.mensagemContato, "Preencha o(s) campo(s)!");
        return;
      } else {
        if (this.email.search(/@.*\.[A-Za-z]/g) == -1) {
          this.alertInput(this.$refs.email, "Insira um E-mail válido!");
          return;
        }
      }

      this.$requestSend(
        "post",
        "/v2/front/form/contact",
        {
          hashEmail: "contato/formulario",
          nome: this.nome,
          email: this.email,
          contato: this.contato,
          mensagem: this.mensagemContato,
        },
        (success, response) => {
          this.showMsg = true;
          if (success && response.data.sucesso) {
            this.nome = "";
            this.email = "";
            this.contato = "";
            this.mensagemContato = "";
            this.msgNegativa = false;
            this.msg = "Enviado com sucesso!";
            setTimeout(() => {
              this.msg = "";
              this.showMsg = false;
              this.msgNegativa = false;
            }, 3000);
            return;
          }
          this.msg = "Houve um erro ao enviar.";
          this.msgNegativa = true;
          setTimeout(() => {
            this.showMsg = false;
          }, 5000);
        }
      );
    },
  },
  created() {
    document.querySelector("title").innerText = "Central de Atendimento";
    Comunicacao.$emit("getBreadcrumb", this.breadcrumb);
  },
};
</script>

<style lang="css" scoped>
section {
  margin: 40px 0 10px;
}
#atendimento {
  margin-bottom: 70px;
}
.atendimento-top-t1 {
  font-size: 35px;
  line-height: normal;
  margin-bottom: 29px;
  color: #444;
  font-weight: 500;
}
.atendimento-top-t2 {
  font-size: 14px;
  color: #444;
}
.contatoContainer {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.contatoContainer-direita {
  width: 100%;
  margin-top: 35px;
}
.contatoContainer-direita label {
  font-size: 12px;
  display: block;
  margin-bottom: 10px;
  line-height: normal;
}
.contatoContainer-direita input {
  margin-bottom: 20px;
  height: 46px;
  border: 1px solid rgba(0, 0, 0, 0.3);
  border-radius: 10px;
  transition: 400ms ease;
  width:100%;
}
.contatoContainer-direita input:focus,
.contatoContainer-direita input:hover,
.contatoContainer-direita textarea:focus,
.contatoContainer-direita textarea:hover {
  border-color: #666;
}
.contatoContainer-direita textarea {
  border: 1px solid rgba(0, 0, 0, 0.3);
  border-radius: 10px;
  width: 100%;
  height: 178px;
  margin-bottom: 20px;
  resize: none;
}
.contatoContainer-direita button[type="submit"] {
  padding: 13px;
  background-color: #000;
  color: #ffffff;
  fill: #ffffff;
  letter-spacing: 2px;
  font-weight: bold;
  border-radius: 10px;
  width: 100%;
}
.contatoContainer-direita input.alert,
.contatoContainer-direita textarea.alert {
  border: 1px solid red;
}

@media (max-width: 767px) {
  .contatoContainer {
    flex-direction: column;
  }
  .atendimento-top-t1 {
    font-size: 30px;
    margin-bottom: 25px;
  }
}
</style>
