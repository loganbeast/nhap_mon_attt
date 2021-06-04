<template>
  <div class='wrapper'>
        <h3 class="mb-4 text-center">Ma hoa he mat Elgamal</h3>
        <div class="content">
            <div class="input">
                <label class="mb-1">Nhap ban ro x</label>
                <b-form-input v-model="x" type="number" placeholder="Nhap ban ro x" class="mb-4"></b-form-input>
                <label class="mb-1">Nhap alpha</label>
                <b-form-input v-model="alpha" type="number" placeholder="Nhap alpha" class="mb-4"></b-form-input>
                <label class="mb-1">Nhap beta</label>
                <b-form-input v-model="beta" type="number" placeholder="Nhap beta" class="mb-4"></b-form-input>
                <label class="mb-1">Nhap p</label>
                <b-form-input v-model="p" type="number" placeholder="Nhap khoa ky p" class="mb-4"></b-form-input>
                <label class="mb-1">Nhap k</label>
                <b-form-input v-model="k" type="number" placeholder="Nhap k" class="mb-4"></b-form-input>
                <b-button variant="outline-secondary" class="mt-1" @click="reset">Reset</b-button>
            </div>
            <div class="answer">
                <div><strong>Bản rõ x = </strong> {{this.x || 'undefined'}}</div>
                <div><strong>p = </strong> {{this.p || 'undefined'}}</div>
                <div><strong>beta = </strong>{{this.beta || 'undefined'}}</div>
                <div><strong>alpha = </strong>{{this.alpha || 'undefined'}}</div>
                <div><strong>k = </strong> {{this.k || 'undefined'}}</div>
                <hr>
                <div>
                    <div>
                        <strong>γ = alpha^k mod p = </strong> {{this.alpha || 'undefined'}} ^ {{this.k || 'undefined'}} modulo {{this.p || 'undefined'}} = {{this.gamma || 'undefined'}}
                    </div>
                    <div>
                        <strong>delta = x * beta ^ k mod p = </strong> {{this.x || 'undefined'}} * {{this.beta || 'undefined'}}  ^ {{this.k || 'undefined'}} modulo {{this.p || 'undefined'}} = {{this.delta || 'undefined'}}
                    </div>
                    <div class="text-danger">
                        <strong>Nhận được bản mã (gamma, delta) = </strong> ({{this.gamma || 'undefined'}}, {{this.delta || 'undefined'}})
                    </div>
                </div>
            </div>
        </div>
  </div>
  
</template>

<script> 
import bigInt from 'big-integer';
export default {
    name: 'ElgamalEncrypt',
    components: {
    },
    data () {
        return {
            x : '',
            k : '',
            p : '',
            alpha : '',   
            beta : '',   
        }
    },
    methods: {
        reset: function () {
            this.x = ''
            this.k = ''
            this.p = ''
            this.alpha = ''
            this.beta = ''
        }
    },
    computed: {
        gamma () {
            if (this.alpha && this.k && this.p) {
                return bigInt(this.alpha).modPow(this.k, this.p).toString()
            } else return undefined
        },
        delta () {
            if (this.beta && this.k && this.p && this.x) {
                return bigInt(this.beta).modPow(this.k, this.p).multiply(bigInt(this.x).modPow(1, this.p)).modPow(1, this.p).toString()
            } else return undefined
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