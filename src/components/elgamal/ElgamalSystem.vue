<template>
  <div class='wrapper'>
        <h3 class="mb-4 text-center">Xay dung he mat Elgamal</h3>
        <div class="content">
            <div class="input">
                <label class="mb-1">Nhap x</label>
                <b-form-input v-model="x" type="number" placeholder="Nhap ban ro x" class="mb-4"></b-form-input>
                <label class="mb-1">Nhap alpha</label>
                <b-form-input v-model="alpha" type="number" placeholder="Nhap alpha" class="mb-4"></b-form-input>
                <label class="mb-1">Nhap a</label>
                <b-form-input v-model="a" type="number" placeholder="Nhap a < p" class="mb-4"></b-form-input>
                <label class="mb-1">Nhap p</label>
                <b-form-input v-model="p" type="number" placeholder="Nhap khoa ky p" class="mb-4"></b-form-input>
                <label class="mb-1">Nhap k</label>
                <b-form-input v-model="k" type="number" placeholder="Nhap k < p" class="mb-4"></b-form-input>

                <b-button variant="outline-secondary" class="m-1" @click="reset">Reset</b-button>
                <b-button variant="outline-secondary" class="m-1" @click="generatorBigPrime">Generator 256 bits Prime</b-button>
            </div>
            <div class="answer">
                <div>
                    <strong>Bản rõ x = </strong> {{this.x || 'undefined'}}
                    </div>
                <div>
                    <strong>p = </strong> {{this.p || 'undefined'}}
                </div>
                <div>
                    <strong>a = </strong> {{this.a || 'undefined'}}
                </div>
                <div>
                    <strong>k = </strong> {{this.k || 'undefined'}}
                </div>
                <div>
                    <strong>alpha = </strong> {{this.alpha || 'undefined'}}
                </div>
                <hr>
                <div>
                    <strong>Khóa công khai beta = alpha ^ a mod p = </strong> {{this.alpha}} ^ {{this.a}} modulo {{this.p}} = {{this.beta}}
                </div>
                <div>
                    <strong>Mã khóa công khai = (p,α,β) =  </strong> ({{this.p}}, {{this.alpha}}, {{this.beta}})
                </div>
                <div>
                    <strong>Mã khóa bí mật = (a) =  </strong> ({{this.a}})
                </div>
                <hr>
                <div class="mb-4">
                    <h4>Thuc hien lap ma: </h4>
                    
                    <div>
                        <p>Ta co:</p>
                        <strong>gamma = a^k mod p =</strong> {{this.a}} ^ {{this.k}} modulo {{this.p}} = {{this.gamma}}
                    </div>
                    <div>
                        <strong>delta = x * beta ^ K mod p = </strong> {{this.x}} * {{this.beta}}^{{this.k}} modulo {{this.p}} = {{this.delta}}
                    </div>
                    <div>
                        <strong>Nhận được bản mã (gamma, delta)</strong> ({{this.gamma}}, {{this.delta}})
                    </div>
                </div>
                <div class="mb-4">
                    <h4>Thuc hien giai ma: </h4>
                    <div>
                        <p>Ta co:</p>
                        <strong>gamma ^ -a mod p = gamma^(p-1-a) mod p = gamma ^ (p-a-1) mod p = </strong> {{this.gamma}} ^ ({{this.p}} - {{this.a}} - 1) modulo {{this.p}} = {{this.gamma2}}
                    </div>
                    <div>
                        <strong>x = gamma ^ (-a) * delta =</strong> {{this.x2}}
                    </div>
                    <div class="text-danger">
                        <strong>x = </strong> {{this.x2}}
                    </div>
                </div>
            </div>
        </div>    
  </div>
  
</template>

<script> 
import bigInt from 'big-integer';
export default {
    name: 'ElgamalSystem',
    components: {
    },
    data () {
        return {
            x : '',
            k : '',
            p : '102287465784978105425633940069548128252987807311203924541511474023144098285461',
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
        },
        generatorBigPrime: function () {
            this.p = '70225788410175285358623809494574145975835939020553170985377538294497282259969'
        }
    },
    computed: {
        beta () {
            if (this.alpha && this.a && this.p) {
                return bigInt(this.alpha).modPow(this.a, this.p).toString()
            } else return undefined
        },
        gamma () {
            if (this.alpha && this.k && this.p) {
                return bigInt(this.alpha).modPow(this.k, this.p).toString()
            } else return undefined
        },
        delta () {
            if (this.beta && this.k && this.x && this.p) {
                return bigInt(this.beta).modPow(this.k, this.p).multiply(this.x).mod(this.p).toString()
            } else return undefined
        },
        gamma2 () {
            if (this.gamma && this.p && this.a) {
                return bigInt(this.gamma).modPow(this.p - this.a - 1, this.p).toString()
            } else return undefined
        },
        x2 () {
            if (this.gamma2 && this.delta && this.p) {
                return bigInt(this.gamma2 * this.delta).mod(this.p).toString()
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
}
.input {
    width: 30%;
    margin-right: 30px;
}
.answer {
    width: 70%;
}
</style>