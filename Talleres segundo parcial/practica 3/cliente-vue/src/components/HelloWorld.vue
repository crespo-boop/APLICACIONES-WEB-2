<template>

  <hr>
  <div class="container mt-5 bg-danger  ">
    <h1 class="text-center">Examen medicos</h1>
    <form @submit.prevent="resultadoput()" class="form " v-if="vieweditarr">
      <div class="w-50 m-auto  ">
        <div class="text-center ">
          <label for="ResultadoExamen" class="form-label">ResultadoExamen</label>
          <input type="text" name="ResultadoExamen" v-model="resultadoedicion.ResultadoExamen" class="form-control">
        </div>
        <div class="text-center ">
          <label for="ValorPagado" class="form-label">ValorPagado</label>
          <input type="text" name="ValorPagado" v-model="resultadoedicion.ValorPagado" class="form-control ">
        </div>
        <div class="text-center ">
          <label for="Observaciones" class="form-label">Observaciones</label>
          <input type="text" name="Observaciones" v-model="resultadoedicion.Observaciones" class="form-control ">
        </div>
        <div class=" d-flex justify-content-center mt-4 mb-4">
          <button class="btn btn-success w-50 " type="submit">Editar</button>
          <button class="btn btn-danger w-50 " @click="vieweditarr = false">Cancelar</button>
        </div>
      </div>

    </form>


    <hr>
    <form @submit.prevent="resultadoPost()" class="form " v-if="!vieweditarr">
      <div class="w-50 m-auto  ">
        <div class="text-center ">
          <label for="ResultadoExamen" class="form-label">ResultadoExamen</label>
          <input type="text" name="ResultadoExamen" v-model="resultado.ResultadoExamen" class="form-control">
        </div>
        <div class="text-center ">
          <label for="ValorPagado" class="form-label">ValorPagado</label>
          <input type="text" name="ValorPagado" v-model="resultado.ValorPagado" class="form-control ">
        </div>
        <div class="text-center ">
          <label for="Observaciones" class="form-label">Observaciones</label>
          <input type="text" name="Observaciones" v-model="resultado.Observaciones" class="form-control ">
        </div>
        <div class=" d-flex justify-content-center mt-4 mb-4">
          <button class="btn btn-primary w-50 ">Enviar</button>
        </div>
      </div>
    </form>
  </div>


  <hr>

  <div class="container text-center">
    <table class="table">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Resultado Examen</th>
          <th scope="col">Valor Pagado</th>
          <th scope="col">Observaciones</th>
          <th scope="col">Acciones</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, index) in resultados" :key="index">
          <th scope="row">{{ item._id }}</th>
          <td>{{ item.ResultadoExamen }}</td>
          <td>{{ item.ValorPagado }}</td>
          <td>{{ item.Observaciones }}</td>
          <td><button class="btn btn-danger" @click="resultadoDelete(item._id)">Eliminar</button> <button
              class="btn btn-success" @click="vieweditar(item._id)">Editar</button></td>
        </tr>
      </tbody>
    </table>

  </div>
</template>

<script>
import axios from 'axios'
export default {

  data() {
    return {
      resultados: [],
      resultado: {
        ResultadoExamen: '',
        ValorPagado: '',
        Observaciones: ''
      },
      resultadoedicion: {},
      vieweditarr: false

    }
  },
  created() {
    this.resultadoGet();
  },
  methods: {
    resultadoGet() {
      axios.get('http://localhost:1000/resultado')
        .then(respuesta => {
          this.resultados = respuesta.data
        })
        .catch(evento => { console.log(evento) })
    },
    resultadoPost() {
      axios.post('http://localhost:1000/resultado', this.resultado)
        .then(respuesta => {
          this.resultados.push(respuesta.data)

        })
        .catch(evento => { console.log(evento.response) })
    },
    resultadoDelete(_id) {
      axios.delete(`http://localhost:1000/resultado/${_id}`)
        .then(res => {
          const index = this.resultados.findIndex(item => item._id === res.data._id);
          this.resultados.splice(index, 1)
        })
        .catch(e => { console.log(e.response) })
    },

    vieweditar(_id) {
      this.vieweditarr = true
      axios.get(`http://localhost:1000/resultado/${_id}`)
        .then(respuesta => {
          this.resultadoedicion = respuesta.data

        })
        .catch(evento => {
          console.log(evento.response)
        })

    },
    resultadoput(item) {
      axios.put(`http://localhost:1000/resultado/${item._id}`, item)
        .then(respuesta => {
          const index = this.datos.findIndex(n => n._id === respuesta.data._id)
          this.resultados[index].ResultadoExamen = respuesta.data.ResultadoExamen
          this.resultados[index].ValorPagado = respuesta.data.ValorPagado
          this.resultados[index].Observaciones = respuesta.data.Observaciones

        })
        .catch(evento => {
          console.log(evento.response)
        })
    }


  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
