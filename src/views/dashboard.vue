<template>
  <div class="dashboard">
    <div class="sidebar">
      <h2>Dashboard</h2>
      <ul>
        <li :class="[user ? 'active' : '']" @click="UserOpen">
          <a> <i class="fa-regular fa-user"></i> user </a>
          <i class="fa-solid fa-chevron-right" />
        </li>
        <li :class="[Products ? 'active' : '']" @click="ProductsOPen">
          <a> <i class="fa-regular fa-user"></i> Products </a>
          <i class="fa-solid fa-chevron-right" />
        </li>
      </ul>
    </div>
    <div class="mainBar">
      <div class="userbar" :class="[user ? 'active' : '']">
        <ul>
          <li>
            <div class="div">
              <p>Session</p>
              <h2>
                21,547 <span style="color: green; font-size: 17px">(+21%)</span>
              </h2>
              <p>Total Users</p>
            </div>
            <i
              style="background-color: #0058ff61"
              class="fa-solid fa-user-group"
            ></i>
          </li>
          <li>
            <div class="div">
              <p>Paid Users</p>
              <h2>
                4,547 <span style="color: green; font-size: 17px">(+18%)</span>
              </h2>
              <p>Last Week Analytics</p>
            </div>
            <i
              style="background-color: #ff000061"
              class="fa-solid fa-user-plus"
            ></i>
          </li>
          <li>
            <div class="div">
              <p>Active Users</p>
              <h2>
                19,870 <span style="color: red; font-size: 17px">(-14%)</span>
              </h2>
              <p>Last Week Analytics</p>
            </div>
            <i
              style="background-color: #01ff0170"
              class="fa-solid fa-user-check"
            ></i>
          </li>
          <li>
            <div class="div">
              <p>Pending Users</p>
              <h2>
                21,547 <span style="color: green; font-size: 17px">(+42%)</span>
              </h2>
              <p>Last Week Analytics</p>
            </div>
            <i
              style="background-color: #ffa5007a"
              class="fa-solid fa-user-gear"
            ></i>
          </li>
        </ul>
        <div class="list">
          <div class="filter">
            <h2>Filters</h2>
            <div class="v-card-text v-row">
              <div class="v-col-sm-6 v-col-12">
                <v-combobox
                  color="blue"
                  rounded="lg"
                  label="Select Role"
                  :items="['Admin', 'Editor', 'Subscriber']"
                  variant="outlined"
                >
                </v-combobox>
              </div>
              <div class="v-col-sm-6 v-col-12">
                <v-combobox
                  color="blue"
                  rounded="lg"
                  label="Select Status"
                  :items="['Pending', 'Active', 'inActive']"
                  variant="outlined"
                >
                </v-combobox>
              </div>
            </div>
          </div>
          <div class="mainList">
            <div class="search">
              <div class="inputS">
                <input type="text" placeholder="Search user" />
                <i class="fa-solid fa-magnifying-glass"></i>
              </div>
              <button>Search</button>
            </div>
            <a @click="AddNewUser"> Add new user</a>
          </div>
          <table>
            <tr style="background-color: rgba(119, 119, 119, 0.22)">
              <th class="checkbox"><input type="checkbox" /></th>
              <th class="User">user</th>
              <th email class="User">email</th>
              <th>role</th>
              <th>status</th>
              <th>actions</th>
            </tr>
            <tr v-for="user in Main" :key="user.id">
              <td class="checkbox"><input type="checkbox" /></td>
              <td class="User" @click="openView(user.id)">
                <div class="username">
                  <div class="content">
                    <h2>{{ user.name }}</h2>
                    <h4>{{ user.phone }}</h4>
                  </div>
                </div>
              </td>
              <td class="User" @click="openView(user.id)">{{ user.email }}</td>
              <td>
                {{ user.role }}
              </td>
              <td>
                <p style="color: lime; font-weight: 500">active</p>
              </td>
              <td class="tdicon">
                <a @click="DELETEUSER(user.id)">
                  <i class="fa-solid fa-trash"></i>
                </a>
                <i
                  style="color: orange"
                  class="fa-regular fa-pen-to-square"
                ></i>
              </td>
            </tr>
          </table>
        </div>
      </div>
      <div
        class="AddU"
        @click.self="CloseAdd"
        :class="[AddUser ? 'active' : '']"
      >
        <div class="Adduser" :class="[AddUser ? 'active' : '']">
          <div class="first">
            <h2>Add User</h2>
            <a @click="CloseAdd">
              <i class="fa-solid fa-xmark"></i>
            </a>
          </div>
          <form @submit.prevent="submitNew">
            <v-text-field
              v-model="CreateValueFirstname"
              width="100%"
              color="blue"
              label="Name"
              variant="outlined"
              placeholder="Mahmoud"
              :rules="[rules.required]"
            ></v-text-field>
            <v-text-field
              v-model="CreateValueEmail"
              width="100%"
              color="blue"
              label="Email"
              variant="outlined"
              :rules="[rules.required]"
              placeholder="..@gmail.com"
            ></v-text-field>

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

            <v-text-field
              v-model="CreateValuePhone"
              :rules="[rules.required]"
              width="100%"
              color="blue"
              label="Phone"
              variant="outlined"
              placeholder="01123456789"
            ></v-text-field>

            <v-combobox
              v-model="CreateValueRole"
              color="blue"
              rounded="lg"
              label="Select Role"
              :items="['client', 'delivery']"
              variant="outlined"
            >
            </v-combobox>

            <div class="button">
              <input
                class="end"
                type="submit"
                value="تسجيل"
                color="blue"
                variant="outline"
              />

              <button
                @click="CloseAdd"
                style="color: red; border: 1px solid red"
              >
                cancel
              </button>
            </div>
          </form>
        </div>
      </div>
      <div class="Products" :class="[Products ? 'active' : '']">
        <ul>
          <li>
            <div class="div">
              <p>In-Store Sales</p>
              <h2>5,345L.E</h2>
              <p>
                5K order
                <span style="color: green; font-size: 17px">(+5.7%)</span>
              </p>
            </div>
            <i class="fa-solid fa-house"></i>
          </li>
          <li>
            <div class="div">
              <p>Website Sales</p>
              <h2>71,580L.E</h2>
              <p>
                21k orders
                <span style="color: green; font-size: 17px">(+12.25%)</span>
              </p>
            </div>
            <i class="fa-solid fa-display"></i>
          </li>
          <li>
            <div class="div">
              <p>Discount</p>
              <h2>14,235L.E</h2>
              <p>6k orders</p>
            </div>
            <i class="fa-solid fa-gift"></i>
          </li>
          <li>
            <div class="div">
              <p>Affiliate</p>
              <h2>8,345L.E</h2>
              <p>
                150 orders
                <span style="color: red; font-size: 17px">(-3.5%)</span>
              </p>
            </div>
            <i class="fa-solid fa-hand-holding-dollar"></i>
          </li>
        </ul>
        <div class="list">
          <div class="filter">
            <h2>Filters</h2>
            <div class="Selects">
              <div class="v-card-text v-row">
                <div class="v-col-sm-4 v-col-12">
                  <v-combobox
                    color="blue"
                    rounded="lg"
                    label="Select Status"
                    :items="['Scheduled', 'Publish', 'Inactive']"
                    variant="outlined"
                  >
                  </v-combobox>
                </div>
                <div class="v-col-sm-4 v-col-12">
                  <v-combobox
                    color="blue"
                    rounded="lg"
                    label=" Category"
                    :items="['Games', 'Shoes', 'Office']"
                    variant="outlined"
                  >
                  </v-combobox>
                </div>
                <div class="v-col-sm-4 v-col-12">
                  <v-combobox
                    color="blue"
                    rounded="lg"
                    label=" Stock"
                    :items="['in Stock', 'out Stock']"
                    variant="outlined"
                  >
                  </v-combobox>
                </div>
              </div>
            </div>
          </div>
          <div class="mainList">
            <div class="search">
              <div class="inputS">
                <input type="text" placeholder="Search Product" />
                <i class="fa-solid fa-magnifying-glass"></i>
              </div>
              <button>Search</button>
            </div>
            <a @click="AddProduct"> Add new Product</a>
          </div>
          <v-data-table
            :items="PRODUCTFROMG"
            :headers="headers"
            item-key="name"
            items-per-page="5"
            :sort-by="[{ key: 'live', order: 'asc' }]"
          >
            <template v-slot:item.name="{ item }">
              <div class="username">
                <img src="../assets/product.png" />
                <div class="content">
                  <h2>{{ item.name }}</h2>
                </div>
              </div>
            </template>
            <template v-slot:item.actions="{ item }">
              <v-icon class="me-2" size="small"> mdi-pencil </v-icon>
              <v-icon size="small" @click="DELETEPRODUCT(item.id)">
                mdi-delete
              </v-icon>
            </template>
          </v-data-table>
        </div>
      </div>
      <div class="AddProduct" :class="[AddNProduct ? 'active' : '']">
        <form @submit.prevent="PRODUCTNEW">
          <div class="title">
            <div class="content">
              <h2>Add a new product</h2>
              <p>Orders placed across your store</p>
            </div>
            <div class="buttons">
              <button>Dicard</button>
              <button
                style="color: var(--mainColor); border-color: var(--mainColor)"
              >
                Save Draft
              </button>
              <button
                style="
                  color: white;
                  background-color: var(--mainColor);
                  border-color: var(--mainColor);
                "
                type="submit"
              >
                Pulish Product
              </button>
            </div>
          </div>
          <div class="Addtion">
            <div class="l">
              <div class="card">
                <h3>Product Information</h3>
                <v-text-field
                  v-model="PRODUCTname"
                  :rules="[rules.required]"
                  color="blue"
                  label="Product Name"
                  variant="outlined"
                  placeholder="Iphone 14 "
                ></v-text-field>
                <div
                  style="
                    display: flex;
                    justify-content: space-between;
                    gap: 25px;
                    align-items: center;
                  "
                >
                  <v-text-field
                    color="blue"
                    label="Quantity"
                    :rules="[rules.required]"
                    v-model="PRODUCTquantity"
                    variant="outlined"
                    placeholder="100 "
                  ></v-text-field>
                  <v-text-field
                    color="blue"
                    label="Barcode"
                    variant="outlined"
                    placeholder="123-456 "
                  ></v-text-field>
                </div>
                <div style="display: flex; flex-direction: column">
                  <label for="Description">Description (Optional) </label>
                  <textarea
                    v-model="PRODUCTdesc"
                    style="width: 100%; height: 100px; text-align: start"
                    class="Description"
                    type="text"
                    name="Description"
                  >
                  </textarea>
                </div>
              </div>
              <div class="card">
                <h3>Product image</h3>

                <v-file-input
                  chips
                  color="blue"
                  :rules="[rules.required]"
                  label="image"
                  variant="outlined"
                  v-model="PRODUCTimage"
                ></v-file-input>
                <v-file-input
                  chips
                  color="blue"
                  :rules="[rules.required]"
                  label="Browse Image"
                  variant="outlined"
                  v-model="PRODUCTimageS"
                ></v-file-input>
                <v-file-input
                  chips
                  multiple
                  color="blue"
                  :rules="[rules.required]"
                  label="Browse Image"
                  variant="outlined"
                ></v-file-input>
              </div>
              <div class="card">
                <h3>Variants</h3>
                <div
                  class="v-row ma-0 align-center"
                  v-for="x in Option"
                  :key="x"
                >
                  <v-combobox
                    rounded="lg"
                    label="Select Variants"
                    :items="['Size', 'Color', 'Weight']"
                    variant="outlined"
                    class="v-col-4"
                    color="blue"
                  >
                  </v-combobox>
                  <v-text-field
                    rounded="lg"
                    class="v-col-6"
                    color="blue"
                    label="Variants Value"
                    variant="outlined"
                    placeholder="Iphone 14"
                  ></v-text-field>
                </div>
                <div class="v-row ga-5 flex-nowrap ma-0">
                  <v-btn
                    class="v-col-md-4 v-col-12 d-flex flex-nowrap justify-center align-center"
                    color="blue"
                    @click="RemoveOption"
                  >
                    <v-icon>mdi-minus</v-icon>
                    Remove Option
                  </v-btn>
                  <v-btn
                    class="v-col-md-4 v-col-12 d-flex flex-nowrap justify-center align-center"
                    color="blue"
                    @click="AddOption"
                  >
                    <v-icon>mdi-plus</v-icon>
                    add another option
                  </v-btn>
                </div>
              </div>
            </div>
            <div class="r">
              <div class="card">
                <h3>Pricing</h3>
                <v-text-field
                  color="blue"
                  :rules="[rules.required]"
                  v-model="PRODUCTprice"
                  label="Base Price"
                  variant="outlined"
                  placeholder="140"
                ></v-text-field>
                <v-text-field
                  color="blue"
                  :rules="[rules.required]"
                  v-model="PRODUCTpriceB"
                  label="Price Before"
                  variant="outlined"
                  placeholder="450"
                ></v-text-field>
                <v-text-field
                  color="blue"
                  label="Discounted Price"
                  variant="outlined"
                  placeholder="450L.E"
                ></v-text-field>
                <div
                  style="border-bottom: 1px solid #777; padding-bottom: 12px"
                >
                  <input type="checkbox" name="change" />
                  <label for="change"> Charge Tax on this product </label>
                </div>
                <div>
                  <label class="switch">
                    <input type="checkbox" />
                    <span class="slider round"></span>
                  </label>
                </div>
              </div>
              <div class="card">
                <h3>Organize</h3>
                <div style="display: flex; flex-direction: column">
                  <v-combobox
                    color="blue"
                    rounded="lg"
                    label="Vendor"
                    :items="['Men', 'Women', 'Kids']"
                    variant="outlined"
                  >
                  </v-combobox>
                </div>
                <div style="display: flex; flex-direction: column">
                  <v-combobox
                    color="blue"
                    rounded="lg"
                    label="Category"
                    :rules="[rules.required]"
                    v-model="PRODUCTcaID"
                    :items="PRODUCTS.name"
                    variant="outlined"
                  >
                  </v-combobox>
                </div>

                <v-text-field
                  color="blue"
                  label="Tags"
                  variant="outlined"
                  placeholder="Summer"
                ></v-text-field>
              </div>
            </div>
          </div>
        </form>
      </div>
      <div class="view" :class="[ViewUser ? 'active' : '']" v-if="ViewUser">
        <v-row>
          <v-card elevation="10" class="w-100">
            <v-col cols="12">
              <h1>Name: {{ USERNOW.name }}</h1>
            </v-col>
            <v-divider class="border-opacity-100 mx-auto" inset></v-divider>
            <v-col cols="12">
              <h4>Email: {{ USERNOW.email }}</h4>
              <h4>Phone: {{ USERNOW.phone }}</h4>
              <h4>Role: {{ USERNOW.role }}</h4>
              <h4>ID: {{ USERNOW.id }}</h4>
            </v-col>
          </v-card>
          <v-card class="w-100 px-5 py-5 my-5" elevation="10">
            <h1>Edit Profile</h1>
            <v-col cols="12">
              <v-text-field
                v-model="USERNOW.name"
                width="100%"
                color="blue"
                label="Name"
                variant="outlined"
              ></v-text-field>
            </v-col>
            <v-col cols="12">
              <v-text-field
                v-model="USERNOW.phone"
                width="100%"
                color="blue"
                label="Phone"
                variant="outlined"
              ></v-text-field>
            </v-col>
            <v-col cols="12">
              <v-combobox
                label="Phone"
                width="100%"
                color="blue"
                v-model="USERNOW.role"
                :items="['client', 'superAdmin', 'delivery']"
                variant="outlined"
              ></v-combobox>
            </v-col>
            <v-col cols="12">
              <v-btn color="blue" @click="EDITPROFILE(USERNOW)"> Edit </v-btn>
            </v-col>
          </v-card>
        </v-row>
      </div>
    </div>
  </div>
</template>
<script>
import "@mdi/font/css/materialdesignicons.css";
import axios from "axios";
import ref from "vue";

export default {
  data() {
    return {
      headers: [
        { title: "PRODUCT", value: "name" },
        { title: "CATEGORY", value: "nameCategory" },
        { title: " live", value: "live" },

        { title: " Price B", value: "priceBefore" },
        { title: " Price", value: "price" },
        { title: " Quantity", value: "quantity" },
        { title: " actions", value: "actions" },
      ],
      Main: [],
      PRODUCTname: "",
      PRODUCTprice: "",
      PRODUCTpriceB: "",
      PRODUCTquantity: "",
      PRODUCTcaID: "",
      PRODUCTdesc: "",
      PRODUCTlive: 1,
      PRODUCTimage: null, // تأكد من أن هذا هو ملف صورة
      PRODUCTimageS: [],
      user: true,
      AddUser: false,
      Products: false,
      CreateValuePassC: "",
      CreateValueRole: "client",
      CreateValuePass: "",
      CreateValueFirstname: "",
      CreateValueLastname: "",
      CreateValueEmail: "",
      CreateValuePhone: "",
      show2: false,
      show3: false,
      AddNProduct: false,
      Option: 1,
      ViewUser: false,
      USERNOW: "",
      PRODUCTS: [],
      PRODUCTFROMG: [],
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
    };
  },
  mounted() {
    this.open();
  },
  computed: {
    submitNew() {
      // 1. استخراج بيانات النموذج
      const email = this.CreateValueEmail;
      const password = this.CreateValuePass;
      const name = this.CreateValueFirstname;
      const phone = this.CreateValuePhone;
      const password_confirmation = this.CreateValuePassC;
      const role = this.CreateValueRole;
      // 2. بناء جسم الطلب
      const data = {
        email,
        password,
        password_confirmation,
        name,
        phone,
        role,
      };
      this.token = localStorage.getItem("token");
      const token = this.token;
      // 3. إرسال طلب POST إلى الخادم
      fetch("https://drwessamhabib.com/public/api/user", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`, // تحديد نوع البيانات المرسلة
        },
        body: JSON.stringify(data), // تحويل البيانات إلى JSON
      })
        .then((response) => response.json())
        .then((data) => {
          if (data.message === "User created successfully") {
            this.Main.push(data.data);
            window.location.reload();
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

    /*  PRODUCTNEW() {
      const name = this.PRODUCTname;
      const price = this.PRODUCTprice;
      const priceBefore = this.PRODUCTpriceB;
      const quantity = this.PRODUCTquantity;
      const category_id = 6;
      const description = this.PRODUCTdesc;
      const live = this.PRODUCTlive;

      // Validate image selection
      if (!this.$refs.file.files.length) {
        console.error(
          "يجب اختيار صورة واحدة على الأقل (At least one image must be selected)"
        );
        return;
      }

      const image = this.$refs.file.files[0];
      const additionalImages = Array.from(this.$refs.file.files).slice(1); // Extract additional images

      const validImageTypes = ["image/jpeg", "image/jpg", "image/png"];
      const validImages = [];
      for (const file of imageFiles) {
        if (validImageTypes.includes(file.type)) {
          validImages.push(file);
        } else {
          alert(
            "نوع الملف غير صالح. يرجى اختيار صور من نوع JPEG أو JPG أو PNG فقط."
          );
          return; // الخروج من الدالة إذا كان هناك ملف غير صالح
        }
      }

      // التحقق من عدد الصور الإضافية
      if (additionalImages.length > 20) {
        alert("لا يمكنك إضافة أكثر من 20 صورة إضافية.");
        return;
      }

      // Create FormData
      const formData = new FormData();
      formData.append("name", name);
      formData.append("price", price);
      formData.append("priceBefore", priceBefore);
      formData.append("quantity", quantity);
      formData.append("category_id", category_id);
      formData.append("description", description);
      formData.append("live", live);

      // Validate and append image
      if (validImages.length > 0) {
        formData.append("image", validImages[0]); // Assuming you only want to upload one main image
      } else {
        console.error("Please select a valid image file.");
        return; // Prevent submission if no valid image is selected
      }

      // Validate and append additional images (if any)
      if (additionalImages.length > 0) {
        if (additionalImages.length > 20) {
          console.error("You cannot upload more than 20 additional images.");
          return; // Prevent submission if there are too many additional images
        } // إضافة الصور الإضافية (إذا وجدت)
        for (const additionalImage of additionalImages) {
          formData.append("additional_images[]", additionalImage);
        }
      }

      // API call (assuming you have the necessary token handling)
      const token = localStorage.getItem("token");
      fetch("https://drwessamhabib.com/public/api/product", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
        },
        body: formData,
      })
        .then((response) => response.json())
        .then((data) => {
          if (data.message === "product created successfully") {
            window.location.reload();
          } else {
            console.error("Login failed:", data.message);
          }
        })
        .catch((error) => {
          console.error(error);
        });
    }, */
    PRODUCTNEW() {
      const name = this.PRODUCTname;
      const price = this.PRODUCTprice;
      const priceBefore = this.PRODUCTpriceB;
      const quantity = this.PRODUCTquantity;
      const category_id = 6;
      const description = this.PRODUCTdesc;
      const live = this.PRODUCTlive;
      const image = this.PRODUCTimage;
      const additional_images = this.PRODUCTimageS;
      console.log(typeof image);
      const formData = new FormData();
      const data = {
        name,
        live,
        description,
        category_id,
        price,
        priceBefore,
        quantity,
        formData,
      };
      if (typeof image === "object" && image instanceof File) {
        formData.append("image", image);
      } else {
        // Handle converting to Blob if needed
      }

      // Loop through additional images (assuming they're File objects)
      if (Array.isArray(additional_images)) {
        additional_images.forEach((additionalImage) => {
          if (
            typeof additionalImage === "object" &&
            additionalImage instanceof File
          ) {
            formData.append("additional_images[]", additionalImage);
          }
        });
      } else if (
        typeof additional_images === "object" &&
        additional_images instanceof File
      ) {
        formData.append("additional_images[]", additional_images);
      } else {
        // Handle converting additional images to Blob if needed (multiple images)
      }

      // 2. بناء جسم الطلب
      console.log(JSON.stringify(data));
      console.log(formData);
      const token = localStorage.getItem("token");
      // 3. إرسال طلب POST إلى الخادم
      fetch("https://drwessamhabib.com/public/api/product", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`, // تحديد نوع البيانات المرسلة
        },
        body: JSON.stringify(data), // تحويل البيانات إلى JSON
      })
        .then((response) => response.json())
        .then((data) => {
          if (data.message === "product created successfully") {
            console.log(data);
            router.push({ name: "vueTest", params: { id: 30 } });
            window.location.reload();
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
    PRODUCTING() {
      this.token = localStorage.getItem("token");
      const token = this.token;
      // 2. بناء جسم الطلب
      for (let i = 1; i <= this.PRODUCTS.length; i++) {
        console.log(i);
        fetch(`https://drwessamhabib.com/public/api/category/${i}`, {
          method: "GEt",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`, // تحديد نوع البيانات المرسلة
          },
          // تحويل البيانات إلى JSON
        })
          .then((response) => response.json())
          .then((data) => {
            for (let i = 0; i < data.data.products.data.length; i++) {
              data.data.products.data[i].nameCategory = data.data.name;
              this.PRODUCTFROMG.push(data.data.products.data[i]);
              console.log(data.data.name);
            }
          })
          .catch((error) => {
            console.error(error); // التعامل مع الأخطاء
          });
      }
    },
  },
  methods: {
    open() {
      this.token = localStorage.getItem("token");
      const token = this.token;
      // 2. بناء جسم الطلب

      fetch("https://drwessamhabib.com/public/api/user", {
        method: "GEt",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`, // تحديد نوع البيانات المرسلة
        },
        // تحويل البيانات إلى JSON
      })
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          this.Main = data.data.data;
        })
        .catch((error) => {
          console.error(error); // التعامل مع الأخطاء
        });
    },
    DELETEUSER(USERID) {
      const Token = this.token; // استبدل هذا بالقيمة الفعلية لـ Token المسؤول
      fetch(`https://drwessamhabib.com/public/api/user/${USERID}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${Token}`, // إضافه رأس التحقق
        },
      })
        .then((response) => {
          if (response.ok) {
            return response.json();
          } else {
            throw new Error("Unauthorized"); // رفض الطلب في حالة عدم صحة الـ Token
          }
        })
        .then((data) => {
          console.log("تم حذف المستخدم بنجاح!");
          this.Main = this.Main.filter((user) => user.id !== USERID);
          this.$forceUpdate();
        })
        .catch((error) => {
          console.error(error);
          this.$notify.error("حدث خطأ: " + error.message);
        });
      this.open();
    },
    DELETEPRODUCT(PID) {
      const ID_REMOVE = Number(PID);
      const Token = this.token; // استبدل هذا بالقيمة الفعلية لـ Token المسؤول
      fetch(`https://drwessamhabib.com/public/api/product/${ID_REMOVE}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${Token}`, // إضافه رأس التحقق
        },
      })
        .then((response) => {
          if (response.ok) {
            return response.json();
          } else {
            throw new Error("Unauthorized"); // رفض الطلب في حالة عدم صحة الـ Token
          }
        })
        .then((data) => {
          console.log(data.message);
          this.user = false;
          this.Products = true;
          this.AddNProduct = false;
          this.ViewUser = false;
          this.PRODUCTING();
          window.location.reload();
        })
        .catch((error) => {
          console.log(error);
        });
    },
    openView(userID) {
      this.ViewUser = true;
      this.user = false;
      this.Products = false;
      this.AddNProduct = false;
      for (let i = 0; i < this.Main.length; i++) {
        if (userID == this.Main[i].id) {
          console.log(this.Main[i]);
          this.USERNOW = this.Main[i];
        }
      }
    },
    PRODUCTFATCH() {
      this.token = localStorage.getItem("token");
      const token = this.token;
      // 2. بناء جسم الطلب

      fetch("https://drwessamhabib.com/public/api/category", {
        method: "GEt",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`, // تحديد نوع البيانات المرسلة
        },
        // تحويل البيانات إلى JSON
      })
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          this.PRODUCTS = data.data;
          this.PRODUCTING();
        })
        .catch((error) => {
          console.error(error); // التعامل مع الأخطاء
        });
    },

    EDITPROFILE(USER) {
      const id = USER.id;
      const adminToken = this.token;
      const updatedUserData = {
        name: USER.name,
        phone: USER.phone,
        role: USER.role,
      };

      fetch(`https://drwessamhabib.com/public/api/user/${id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${adminToken}`,
        },
        body: JSON.stringify(updatedUserData),
      })
        .then((response) => {
          if (response.ok) {
            return response.json();
          } else {
            throw new Error("حدث خطأ أثناء تحديث ملف التعريف");
          }
        })
        .then((data) => {
          console.log(data.message);
          console.log(this.Main[id]);
        })
        .catch((error) => {
          console.error(error);
          // عرض رسالة خطأ للمستخدم
        });
    },
    AddOption() {
      this.Option += 1;
    },
    RemoveOption() {
      if (this.Option == 1) {
        this.Option = 1;
      }
      if (this.Option != 1) {
        this.Option -= 1;
      }
    },
    UserOpen() {
      this.user = true;
      this.ViewUser = false;
      this.Products = false;
      this.AddNProduct = false;
    },
    AddProduct() {
      this.user = false;
      this.ViewUser = false;
      this.Products = false;
      this.AddNProduct = true;
    },

    ProductsOPen() {
      this.user = false;
      this.Products = true;
      this.AddNProduct = false;
      this.ViewUser = false;
      this.PRODUCTFATCH();
    },
    AddNewUser() {
      this.AddUser = true;
      this.ViewUser = false;
      console.log(this.AddUser);
    },
    CloseAdd(ele) {
      ele.preventDefault();
      this.AddUser = false;
      console.log(this.AddUser);
      console.log(ele);
    },
  },
};
</script>
<style>
@import url("https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap");
:root {
  --lightMood: black;
  --lightMoodBack: white;
  --lightMood: white;
  --lightMoodBack: white;
}
.dashboard {
  overflow-y: scroll;
  overflow-x: hidden;
  text-transform: capitalize;
  direction: ltr;
  width: 100%;
  height: 100%;
  position: fixed;
  right: 0;
  top: 0;
  z-index: 1000;
  background-color: white;
  font-family: "Roboto", sans-serif;
}
.sidebar {
  width: 15%;
  background-color: white;
  box-shadow: 0 0 20px #00000087;
  position: fixed;
  left: 0;
  top: 0;
  height: 100%;
}
.sidebar h2 {
  padding: 10px 15px;
  border-bottom: 1px solid #0000004d;
}
.sidebar ul {
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 10px 0;
  gap: 2px;
}
.sidebar ul li {
  padding: 10px 10px;
  align-items: center;
  display: flex;
  justify-content: space-between;
  transition: 0.5s;
}
.sidebar ul li:hover,
.sidebar ul li.active {
  box-shadow: 0 0 20px var(--mainColor);
}
.sidebar ul li.active a {
  color: white;
}
.sidebar ul li.active {
  background-color: var(--mainColor);
  color: white;
}
.sidebar ul li a {
  color: black;
  font-size: 20px;
}

.mainBar {
  position: absolute;
  left: 16%;
  width: 83%;

  top: 3%;
  padding: 20px 25px;
  border-radius: 5px;
}
.mainBar .userbar,
.mainBar .Products {
  display: none;
}
.mainBar .userbar.active,
.mainBar .Products.active {
  display: block;
}
.mainBar .userbar ul,
.mainBar .Products ul {
  display: flex;
  justify-content: space-between;
}
.mainBar .userbar ul li,
.mainBar .Products ul li {
  box-shadow: 0 0 20px #00000087;
  width: 22%;
  border-radius: 5px;
  padding: 10px 15px;
  display: flex;
  align-items: start;
  justify-content: space-between;
}
.mainBar .userbar ul li i,
.mainBar .Products ul li i {
  padding: 11px;
  color: white;
  background-color: silver;
  border-radius: 5px;
}

.mainBar .userbar ul li .div h2,
.mainBar .Products ul li .div h2 {
  font-size: 35px;
  font-weight: 400;
}
.mainBar .userbar .list,
.mainBar .Products .list {
  width: 100%;
  margin: 40px 0;
  border-radius: 5px;
  box-shadow: 0 0 20px #00000087;
}
.mainBar .userbar .list .filter,
.mainBar .Products .list .filter {
  padding-bottom: 30px;
  border-bottom: 1px solid black;
  padding: 10px 15px 0px;
}

.mainBar .userbar .list .filter .Selects,
.mainBar .Products .list .filter .Selects {
  display: flex;
  justify-content: space-around;
  align-items: center;
}
.mainBar .userbar .list .filter .Selects #div,
.mainBar .Products .list .filter .Selects #div {
  display: flex;
  flex-direction: column;
  width: 35%;
}

.mainBar .userbar .list .filter .Selects div select,
.mainBar .Products .list .filter .Selects div select {
  padding: 6px 13px;
  border-radius: 5px;
  background-color: white;
  border: 1px solid black;
}

.mainBar .userbar .list .mainList,
.mainBar .Products .list .mainList {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 25px 15px 10px;
}

.mainBar .userbar .list .mainList .search,
.mainBar .Products .list .mainList .search {
  width: 35%;
  display: flex;
  align-items: center;
  gap: 10px;
}
.mainBar .userbar .list .mainList .search .inputS,
.mainBar .Products .list .mainList .search .inputS {
  width: 100%;
  border: 1px solid black;
  display: flex;
  justify-content: space-between;
  padding: 5px 10px;
  align-items: center;
  border-radius: 5px;
}
.mainBar .userbar .list .mainList .search .inputS input:focus,
.mainBar .Products .list .mainList .search .inputS input:focus {
  outline: none;
}
.mainBar .userbar .list .mainList .search .inputS input,
.mainBar .Products .list .mainList .search .inputS input {
  border: none;
  width: 90%;
  color: black;
}

.mainBar .userbar .list .mainList .search button,
.mainBar .Products .list .mainList .search button {
  padding: 5px 15px;
  background-color: var(--mainColor);
  color: white;
  transition: 0.5s;
  border: none;
  border-radius: 5px;
}
.mainBar
  .userbar
  .list
  .mainList
  .search
  button:hover
  .mainBar
  .Products
  .list
  .mainList
  .search
  button:hover {
  color: var(--mainColor);
  background-color: white;
  border: 1px solid var(--mainColor);
}
.mainBar .userbar .list .mainList a,
.mainBar .Products .list .mainList a {
  padding: 5px 60px;
  background-color: var(--mainColor);
  color: white;
  border-radius: 5px;
}
.mainBar .userbar .list .mainList a:hover,
.mainBar .Products .list .mainList a:hover {
  border: 1px solid var(--mainColor);
  color: var(--mainColor);
  background-color: white;
}
.mainBar .userbar .list table {
  width: 100%;
  margin: 21px 0px;
  padding: 0 0 25px;
}

.mainBar .userbar .list table tr .checkbox {
  width: 3%;
  text-align: center;
}
.mainBar .userbar .list table tr .User {
  width: 23%;
}
.mainBar .userbar .list table tr .User .username,
.mainBar .Products .list table tr .username {
  display: flex;
  align-items: center;
  justify-content: start;
  gap: 10px;
  padding: 0 15px;
}
.mainBar .userbar .list table tr .User .username img,
.mainBar .Products .list table tr .username img {
  max-width: 14%;
  border-radius: 50%;
}

.mainBar .userbar .list table tr .User .username .content h2,
.mainBar .Products.list table tr .username .content h2 {
  font-size: 18px;
  font-weight: 500;
}
.mainBar .userbar .list table tr .User .username .content h4 {
  font-size: 12px;
  font-weight: 300;
}
.mainBar .userbar .list table tr th {
  border: none;
  padding: 15px 5px;
  text-align: center;
  border-bottom: 1px solid black;
}
.mainBar .userbar .list table tr th {
  text-transform: uppercase;
}
.mainBar .userbar .list table tr td {
  padding: 3px;
}
.mainBar .userbar .list table tr td.tdicon {
  width: 13%;
}
.mainBar .userbar .list table tr td.tdicon i {
  margin: 0 17px;
}
.mainBar .userbar .list table tr td.Role a {
  color: black;
  width: 35%;
  display: inline-block;
  text-align: start;
}
.mainBar .Products .list .filter .Selects {
  gap: 40px;
}
/* Start Switch */
.switch {
  position: relative;
  display: inline-block;
  width: 40px;
  height: 20px;
}

/* Hide default HTML checkbox */
.switch input {
  opacity: 0;
  width: 0;
  height: 0;
}

/* The slider */
.slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ccc;
  -webkit-transition: 0.4s;
  transition: 0.4s;
}

.slider:before {
  position: absolute;
  content: "";
  height: 18px;
  width: 18px;
  left: 2px;
  bottom: 1px;
  background-color: white;
  -webkit-transition: 0.4s;
  transition: 0.4s;
}

input:checked + .slider {
  background-color: #2196f3;
}

input:focus + .slider {
  box-shadow: 0 0 1px #2196f3;
}

input:checked + .slider:before {
  left: -5px;
  -webkit-transform: translateX(26px);
  -ms-transform: translateX(26px);
  transform: translateX(26px);
}

/* Rounded sliders */
.slider.round {
  border-radius: 34px;
}

.slider.round:before {
  border-radius: 50%;
}
/* End Switch */

.AddU {
  position: fixed;
  top: 0;
  right: 0;
  background-color: transparent;
  width: 100%;
  height: 100%;
  z-index: 10000;
  transform: translateX(100%);
  transition: 1s;
}
.AddU.active {
  transform: translateX(0);
}
.AddU .Adduser .first {
  display: flex;
  justify-content: space-between;
  padding: 15px;
  border-bottom: 1px solid black;
  align-items: center;
}
.AddU .Adduser .first i {
  font-size: 30px;
  color: red;
}
.AddU .Adduser {
  width: 25%;
  position: absolute;
  top: 0;
  right: 0;
  background-color: white;
  height: 100%;
  box-shadow: 0 0 20px black;
}
.AddU .Adduser form {
  display: flex;
  flex-direction: column;
  padding: 20px;
}

.AddU .Adduser form div.button {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  margin: 30px 0;
}
.AddU .Adduser form div.button button {
  padding: 4px 30px;
  font-size: 20px;
  color: white;
  border: none;
  border-radius: 8px;
  font-weight: 400;
  background-color: transparent;
}

.AddProduct {
  display: none;
}
.AddProduct.active {
  display: block;
}
.AddProduct .title {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 20px 0;
}
.AddProduct .title .content {
}
.AddProduct .title .content h2 {
}
.AddProduct .title .buttons {
  display: flex;
  align-items: center;
  gap: 10px;
}
.AddProduct .title .buttons button {
  padding: 5px 30px;
  font-weight: 600;
  background-color: transparent;
  border: 1px solid #777;
  border-radius: 5px;
  font-size: 20px;
}

.Addtion {
  display: flex;
  justify-content: center;
  gap: 30px;
  align-items: start;
}
.Addtion .l {
  width: 65%;
}
.Addtion .r {
  width: 35%;
}
.Addtion .card div select {
  padding: 10px;
  background-color: transparent;
  border: 1px solid #777;
  border-radius: 5px;
}
.Addtion .card {
  width: 100%;
  margin-bottom: 30px;
  background-color: white;
  padding: 20px 30px;
  box-shadow: 0 0 20px #00000087;
  border-radius: 14px;
  display: flex;
  flex-direction: column;
  gap: 20px;
}
.Addtion textarea:focus {
  outline: none;
}
.Addtion textarea {
  border: 1px solid #777;
  padding: 10px 12px;
  font-size: 18px;
  border-radius: 7px;
}
.Addtion .card h3 {
}

.v-switch.v-input {
  display: flex !important;
  justify-content: center !important;
}
</style>
