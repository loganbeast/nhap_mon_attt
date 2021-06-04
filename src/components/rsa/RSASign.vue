<template>
  <div class='wrapper'>
      <h3 class="mb-4 text-center"> Ky van ban RSA</h3>
    <div class="content">
        <div class="input">
            <label class="mb-1">Nhap ban ro x</label>
            <b-form-input v-model="x" type="number" placeholder="Nhap ban ro x" class="mb-4"></b-form-input>
            <label class="mb-1">Nhap khoa ky d</label>
            <b-form-input v-model="d" type="number" placeholder="Nhap khoa ky d" class="mb-4"></b-form-input>
            <label class="mb-1">Nhap n</label>
            <b-form-input v-model="n" type="number" placeholder="Nhap n" class="mb-4"></b-form-input>

            <b-button class="mt-1" variant="outline-secondary" @click="reset">Reset</b-button>
        </div>
        <div class="answer">
            <div><strong>x = </strong> {{this.x || 'undefined'}}</div>
            <div><strong>(d,n) = </strong> ({{this.d || 'undefined'}}, {{this.n || 'undefined'}})</div>
            <hr>
            <div><strong>Chữ ký s = x ^ d mod n = </strong> {{this.x || 'undefined'}} ^ {{this.d || 'undefined'}} modulo {{this.n || 'undefined'}} = {{this.s || 'undefined'}}</div>
            <h3 v-if="s && s!== 0" class="text-danger">
                Kết luận: chữ ký số: {{this.s || 'undefined'}}
            </h3>
        </div>
    </div>
  </div>
  
</template>

<script> 
import bigInt from 'big-integer';
export default {
    name: 'RSASign',
    components: {

    },
    data () {
        return {
            x : '',
            d : '',
            n : '',
        }
    },
    methods: {
        reset: function () {
            this.x = ''
            this.d = ''
            this.n = ''
        }
    },
    computed: {
        s () {
            if (this.x && this.d && this.n) {
                return bigInt(this.x).modPow(this.d, this.n).toString()
            } else {
                return undefined
            }
        }
    }
}
</script>

<style scoped>
.wrapper {
    margin: 60px;
}
.container {
    margin-top:20px;
    width: 90%;
}
.content {
    background-color: rgb(242, 242, 242);
    padding: 50px;
    display: flex;
    justify-content: space-between;
}
.input {
    width: 30%;
    margin-right: 30px;
}
.answer {
    width: 70%;
}
</style>