<template>
  <div class='wrapper'>
        <h3 class="mb-4 text-center">Ky van ban Elgamal</h3>
        <div class="content">
            <div class="input">
                <label class="mb-1">Nhap ban ro x</label>
                <b-form-input v-model="x" type="number" placeholder="Nhap ban ro x" class="mb-4"></b-form-input>
                <label class="mb-1">Nhap alpha</label>
                <b-form-input v-model="alpha" type="number" placeholder="Nhap alpha" class="mb-4"></b-form-input>
                <label class="mb-1">Nhap a</label>
                <b-form-input v-model="a" type="number" placeholder="Nhap a" class="mb-4"></b-form-input>
                <label class="mb-1">Nhap p</label>
                <b-form-input v-model="p" type="number" placeholder="Nhap khoa ky p" class="mb-4"></b-form-input>
                <label class="mb-1">Nhap k</label>
                <b-form-input v-model="k" type="number" placeholder="Nhap k" class="mb-4"></b-form-input>
                <b-button variant="outline-secondary" @click="reset" class="mt-1">Reset</b-button>
            </div>
            <div class="answer">
                <div>
                    <strong>Bản rõ x = </strong> {{this.x || 'undefined'}}
                    </div>
                <div>
                    <strong>Cặp khóa công khai để kiểm tra chữ ký: (alpha, beta, p) = </strong> ({{this.alpha || 'undefined'}}, {{this.beta || 'undefined'}}, {{this.p || 'undefined'}})
                </div>
                <div>
                    <strong>Cặp khóa bí mật để ký: (a, k) = </strong>({{this.a || 'undefined'}}, {{this.k || 'undefined'}} )
                </div>
                <div>
                    <strong>extends_gcd(k, p - 1) mod p - 1 = </strong>{{this.ed || 'undefined'}}
                </div>
                <div>
                    <strong>(x - a * s) mod p - 1 = </strong>{{this.ed2 || 'undefined'}}
                </div>
                <div>
                    <strong>(s1,s2) =(alpha ^ k mod p, (x - a * s1) * (k ^ -1) = </strong> ({{this.s1 || 'undefined'}}, {{this.s2 || 'undefined'}})
                </div>
                <hr>

                <div>
                    <div class="text-danger">
                        <strong>Chữ ký trên x: (s1,s2) =  </strong> ({{this.s1 || 'undefined'}}, {{this.s2 || 'undefined'}})
                    </div>
                </div>
            </div>
        </div>
  </div>
  
</template>

<script> 
import bigInt from 'big-integer';
import { mod } from '../../helpers/exculid_extends';
export default {
    name: 'ElgamalSign',
    components: {
    },
    data () {
        return {
            x : '',
            k : '',
            p : '',
            a: '',
            alpha : '',   
        }
    },
    methods: {
        reset: function () {
            this.x = ''
            this.k = ''
            this.p = ''
            this.a = ''
            this.alpha = ''
        }
    },
    computed: {
        beta () {
            if (this.alpha && this.a && this.p) {
                return bigInt(this.alpha).modPow(this.a, this.p).toString()
            } else return undefined
        },
        ed () {
            if (this.k && this.p) {
                return bigInt(this.k).modInv(this.p - 1).toString()
            } else return undefined
        },
        s1 () {
            if (this.alpha && this.k && this.p) {
                return bigInt(this.alpha).modPow(this.k, this.p).toString()
            } else return undefined
        },
        ed2 () {
            if (this.x && this.a && this.s1 && this.p) {
                return mod(this.x - this.a * this.s1, this.p - 1).toString()
            } else return undefined
        },
        s2 () {
            if (this.ed2 && this.k && this.p) {
                return bigInt(this.k).modInv(this.p - 1).multiply(this.ed2).mod(this.p - 1).toString()
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