<template>
  <section>
    <select name="" id="">
      <option value="en">English</option>
      <option value="ar" selected="">عربى</option>
    </select>
    <!-- Loge  -->

    <div
      class="container-loge"
      :class="[CreateAccount ? 'container-logoChange' : '']"
    >
      <!-- Loge img -->
      <div>
        <router-link to="/">
          <img
            v-show="forgot"
            src="../assets/forgot.png"
            style="max-width: 50px"
            alt=""
          />
        </router-link>
        <router-link to="/">
          <img
            v-show="!forgot"
            src="../assets/i.webp"
            style="max-width: 50px"
            alt=""
          />
        </router-link>
        <h3 v-show="SignIn">تسجيل الدخول</h3>
        <h3 v-show="CreateAccount">تسجيل حساب</h3>
        <p v-show="CreateAccount" style="font-size: 11px; color: #595656">
          قم بإنشاء حساب جديد
        </p>
      </div>
      <!-- Loge title -->
      <div>
        <h3 v-show="forgot">نسيت كلمة المرور</h3>

        <p v-show="forgot" style="font-size: 11px; color: #595656">
          أدخل بريدك الإلكتروني
        </p>
      </div>
      <!-- Loge Form -->
      <div
        style="width: 30%"
        ref="form"
        :class="[CreateAccount ? 'divCreate' : '']"
      >
        <form v-show="SignIn" @submit.prevent="submit">
          {{ SignInValuePass }}{{ SignInValueEmail }}
          <v-text-field
            v-model="SignInValueEmail"
            :rules="[rules.required]"
            width="100%"
            color="blue"
            label="Email"
            variant="outlined"
            placeholder="...@gmail.com "
            validate-on="input"
          ></v-text-field>
          <v-text-field
            variant="outlined"
            v-model="SignInValuePass"
            :append-inner-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
            :rules="[rules.required, rules.min]"
            :type="show1 ? 'text' : 'password'"
            hint="At least 8 characters"
            label="Password"
            name="input-10-1"
            counter
            @click:append-inner="show1 = !show1"
          ></v-text-field>
          <input
            class="end"
            type="submit"
            v-show="SignIn"
            value="الدخول تسجيل"
          />
        </form>
        <form
          v-show="CreateAccount"
          class="formCreate"
          @submit.prevent="submitNew"
        >
          <v-row>
            <v-col cols="6">
              <v-text-field
                v-model="CreateValueFirstname"
                :rules="[rules.required]"
                width="100%"
                color="blue"
                label="First Name"
                variant="outlined"
                placeholder="Ahmed"
              ></v-text-field>
            </v-col>
            <v-col cols="6">
              <v-text-field
                v-model="CreateValueLastname"
                width="100%"
                color="blue"
                label="Last Name"
                variant="outlined"
                placeholder="Mahmoud"
                :rules="[rules.required]"
              ></v-text-field>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="6">
              <v-text-field
                v-model="CreateValueEmail"
                width="100%"
                color="blue"
                label="Email"
                variant="outlined"
                :rules="[rules.required]"
                placeholder="..@gmail.com"
              ></v-text-field>
            </v-col>

            <v-col cols="6">
              <v-text-field
                v-model="CreateValuePhone"
                :rules="[rules.required]"
                width="100%"
                color="blue"
                label="Phone"
                variant="outlined"
                placeholder="01123456789"
              ></v-text-field>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="6">
              <v-text-field
                variant="outlined"
                v-model="CreateValuePass"
                :append-inner-icon="show2 ? 'mdi-eye' : 'mdi-eye-off'"
                :rules="[rules.required, rules.min]"
                :type="show2 ? 'text' : 'password'"
                hint="At least 8 characters"
                label="Password"
                name="Password"
                counter
                @click:append-inner="show2 = !show2"
              ></v-text-field>
            </v-col>
            <v-col cols="6">
              <v-text-field
                variant="outlined"
                v-model="CreateValuePassC"
                :append-inner-icon="show3 ? 'mdi-eye' : 'mdi-eye-off'"
                :rules="[
                  ConfirmPass.required,
                  ConfirmPass.min,
                  ConfirmPass.emailMatch,
                ]"
                :type="show3 ? 'text' : 'password'"
                hint="At least 8 characters"
                label="Confirm Password"
                name="Password"
                counter
                @click:append-inner="show3 = !show3"
                update:modelValue="checkPass"
              ></v-text-field>
            </v-col>
          </v-row>
          <input
            class="end"
            type="submit"
            v-show="CreateAccount"
            value="تسجيل"
          />
        </form>
        <form v-show="forgot" action="">
          <v-text-field
            v-model="ForgetPassword"
            :rules="[rules.required]"
            width="100%"
            color="blue"
            label="Email"
            variant="outlined"
            placeholder="...@gmail.com "
          ></v-text-field>
          <input class="end" type="submit" v-show="forgot" value="ارسال" />
        </form>
      </div>
      <!-- Loge Button -->
      <div class="theend">
        <div v-show="SignIn">
          <input type="checkbox" name="remeberMe" value="true" id="remeberMe" />
          <label for="remeberMe" class="checkboxLabel" style="padding: 0 3px"
            >تذكرنى</label
          >
        </div>

        <a v-show="SignIn" @click="Forgot" style="padding: 0 0 5px"
          >نسيت كلمة المرور؟</a
        >
        <p v-show="CreateAccount" style="display: inline; font-size: 11px">
          من خلال إنشاء حساب ، فإنك توافق على
          <a style="display: inline; font-size: 11px">الأحكام والشروط</a>
        </p>
      </div>
      <div style="padding: 10px 0">
        <h4 v-show="SignIn">
          ليس لديك حساب؟ <a @click="AccountL">تسجيل حساب جديد</a>
        </h4>

        <h4 v-show="forgot">
          العودة الي
          <a @click="BackSign"> تسجيل الدخول </a>
        </h4>
        <h4 v-show="CreateAccount">
          لديك حساب بالفعل؟<a @click="SignL">تسجيل الدخول</a>
        </h4>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  data() {
    return {
      show1: false,
      show2: false,
      show3: false,
      CreateValuePassC: "",
      CreateValuePass: "",
      CreateValueFirstname: "",
      CreateValueLastname: "",
      CreateValueEmail: "",
      CreateValuePhone: "",
      hindValue: "",
      rules: {
        required: (value) => !!value || "Required.",
        min: (v) => v.length >= 8 || "Min 8 characters",
        emailMatch: () => `The email and password you entered don't match`,
      },
      ConfirmPass: {
        required: (value) => !!value || "Required.",
        min: (v) => v.length >= 8 || "Min 8 characters",
        emailMatch: (Pass) =>
          Pass == this.CreateValuePass ||
          "The email and password you entered don't match",
      },
      Main: [],
      SignIn: true,
      CreateAccount: false,
      forgot: false,
      SignInValuePass: "",
      SignInValueEmail: "",
      ForgetPassword: "",
    };
  },
  computed: {
    submitNew() {
      // 1. استخراج بيانات النموذج
      const email = this.CreateValueEmail;
      const password = this.CreateValuePass;
      const name = this.CreateValueFirstname;
      const phone = this.CreateValuePhone;
      const password_confirmation = this.CreateValuePassC;
      // 2. بناء جسم الطلب
      const data = {
        email,
        password,
        password_confirmation,
        name,
        phone,
      };

      // 3. إرسال طلب POST إلى الخادم
      fetch("https://drwessamhabib.com/public/api/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json", // تحديد نوع البيانات المرسلة
        },
        body: JSON.stringify(data), // تحويل البيانات إلى JSON
      })
        .then((response) => response.json())
        .then((data) => {
          this.Main = data;
          if (data.message === "Registered successfully") {
            this.SignIn = true;
            this.CreateAccount = false;
            this.forgot = false;
            this.SignInValueEmail = "";
            this.SignInValuePass = "";
            (this.CreateValuePassC = ""),
              (this.CreateValuePass = ""),
              (this.CreateValueFirstname = ""),
              (this.CreateValueLastname = ""),
              (this.CreateValueEmail = ""),
              (this.CreateValuePhone = "");
            this.ForgetPassword = "";
          } else {
            // عرض رسالة خطأ للمستخدم
            console.error("Login failed:", data.message);
          }
          // 4. عرض النتيجة
          console.log(data); // أو قم بعرض النتيجة في واجهة المستخدم
        })
        .catch((error) => {
          console.error(error); // التعامل مع الأخطاء
        });
    },
    submit() {
      // 1. استخراج بيانات النموذج
      const email = this.SignInValueEmail;
      const password = this.SignInValuePass;

      // 2. بناء جسم الطلب
      const data = {
        email,
        password,
      };
      // 3. إرسال طلب POST إلى الخادم
      fetch("https://drwessamhabib.com/public/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json", // تحديد نوع البيانات المرسلة
        },
        body: JSON.stringify(data), // تحويل البيانات إلى JSON
      })
        .then((response) => response.json())
        .then((data) => {
          // 4. عرض النتيجة
          console.log(data);
          this.Main = data;
          console.log(this.Main.data.role);
          if (data.message === "Login successfully") {
            localStorage.setItem("token", data.data.token);
            if (data.data.role == "superAdmin") {
              this.$router.push("/dashboard");
            } else {
              this.$router.push("/");
            }
          } else {
            // عرض رسالة خطأ للمستخدم
            console.error("Login failed:", data.message);
          }
        })
        .catch((error) => {
          console.error(error); // التعامل مع الأخطاء
        });
      this.SignInValueEmail = "";
      this.SignInValuePass = "";
    },
    /*  submit() {
      if (
        this.SignInValueEmail == "" ||
        !this.SignInValueEmail.includes("@gmail.com") ||
        this.SignInValuePass == ""
      ) {
        this.$refs.form.preventDefault();
      }
      this.SignInValueEmail = "";
      this.SignInValuePass = "";
      console.log(this.Main);
    }, */
    checkPass() {
      if (this.CreateValuePass !== this.CreateValuePassC) {
        this.hindValue = "Confirm Password is false";
      }
      this.hindValue = "";
    },
    SignL() {
      this.SignIn = true;
      this.CreateAccount = false;
      this.forgot = false;
      this.SignInValueEmail = "";
      this.SignInValuePass = "";
      (this.CreateValuePassC = ""),
        (this.CreateValuePass = ""),
        (this.CreateValueFirstname = ""),
        (this.CreateValueLastname = ""),
        (this.CreateValueEmail = ""),
        (this.CreateValuePhone = "");
      this.ForgetPassword = "";
    },
    AccountL() {
      this.SignIn = false;
      this.CreateAccount = true;
      this.forgot = false;
      (this.CreateValuePassC = ""),
        (this.CreateValuePass = ""),
        (this.CreateValueFirstname = ""),
        (this.CreateValueLastname = ""),
        (this.CreateValueEmail = ""),
        (this.CreateValuePhone = "");
      this.SignInValueEmail = "";
      this.SignInValuePass = "";
      this.ForgetPassword = "";
    },

    Forgot() {
      this.forgot = true;
      this.SignIn = false;
      this.CreateAccount = false;
      (this.CreateValuePassC = ""),
        (this.CreateValuePass = ""),
        (this.CreateValueFirstname = ""),
        (this.CreateValueLastname = ""),
        (this.CreateValueEmail = ""),
        (this.CreateValuePhone = "");
      this.SignInValueEmail = "";
      this.SignInValuePass = "";
      this.ForgetPassword = "";
    },
    BackSign() {
      this.forgot = false;
      this.SignIn = true;
      this.CreateAccount = false;
      this.ForgetPassword = "";
      (this.CreateValuePassC = ""),
        (this.CreateValuePass = ""),
        (this.CreateValueFirstname = ""),
        (this.CreateValueLastname = ""),
        (this.CreateValueEmail = ""),
        (this.CreateValuePhone = "");
      this.SignInValueEmail = "";
      this.SignInValuePass = "";
    },
  },
};
</script>
<style scoped>
section {
  width: 100%;
  height: 100%;
  position: fixed;
  background-color: white;
  top: 0;
  left: 0;
  z-index: 1000;
  font-weight: 600;
  overflow: auto;
}

section .container-logoChange {
  top: 70% !important;
}

section div.container-loge {
  width: 80%;
  background-color: white;
  box-shadow: 1px 2px 20px #00000073;
  border: none;
  position: absolute;
  top: 53%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  text-align: center;
  padding: 30px 0;
}

section div.container-loge .divCreate {
  width: 100% !important;
  padding: 0 25px;
}

section div.container-loge form {
  padding: 55px 0;
}

.formCreate {
  width: 100% !important;
}

section select {
  position: absolute;
  right: 10%;
  top: 4%;
  border: 1px solid black;
  padding: 5px 10px;
  border-radius: 4px;
  background-color: transparent;
}

div h4 {
  font-size: 11px;
}

div.theend {
  display: flex;
  flex-direction: column;
  align-items: start;
  width: 250px;
}

a {
  color: var(--mainColor);
  cursor: pointer;
}

.end {
  width: 100%;
  padding: 10px;
  background-color: transparent;
  border: 1px solid black;
  font-weight: 600;
  background-color: var(--mainColor);
  color: white;
  border: none;
  border-radius: 4px;
}
</style>
