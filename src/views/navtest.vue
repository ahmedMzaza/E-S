<template>
  <v-text-field
    v-model="PRODUCTname"
    color="blue"
    label="Product Name"
    variant="outlined"
    placeholder="Iphone 14 "
  ></v-text-field>
  <v-text-field
    color="blue"
    label="Quantity"
    v-model="PRODUCTquantity"
    variant="outlined"
    placeholder="100 "
  ></v-text-field>
  <textarea
    v-model="PRODUCTdesc"
    style="width: 100%; height: 100px; text-align: start"
    class="Description"
    type="text"
    name="Description"
  >
  </textarea>
  <v-file-input
    chips
    color="blue"
    label="image"
    variant="outlined"
    v-model="PRODUCTimage"
  ></v-file-input>
  <v-file-input
    chips
    color="blue"
    label="Browse Image"
    variant="outlined"
    v-model="PRODUCTimageS"
  ></v-file-input>
  <v-text-field
    color="blue"
    v-model="PRODUCTprice"
    label="Base Price"
    variant="outlined"
    placeholder="140"
  ></v-text-field>
  <v-text-field
    color="blue"
    v-model="PRODUCTpriceB"
    label="Price Before"
    variant="outlined"
    placeholder="450"
  ></v-text-field>
  <v-text-field
    color="blue"
    rounded="lg"
    label="Category"
    v-model="PRODUCTcaID"
    variant="outlined"
  >
  </v-text-field>
  <v-col cols="12">
    <v-btn variant="outlined" @click="EDITPROFILE"> Button </v-btn>
  </v-col>
</template>
<script>
export default {
  data() {
    return {
      data: "",
      PRODUCTname: "",
      PRODUCTprice: "",
      PRODUCTpriceB: "",
      PRODUCTquantity: "",
      PRODUCTcaID: "",
      PRODUCTdesc: "",
      PRODUCTlive: 1,
      PRODUCTimage: null, // تأكد من أن هذا هو ملف صورة
      PRODUCTimageS: null,
      ID: "",
    };
  },
  mounted() {},
  methods: {
    EDITPROFILE() {
      const ID = this.$route.params.id;
      console.log(ID.slice(1));

      const adminToken = this.token;
      const updatedUserData = new FormData();
      updatedUserData.append("image", this.PRODUCTimage);
      updatedUserData.append("additional_images[]", this.PRODUCTimageS);
      console.log(updatedUserData);
      console.log(updatedUserData.get("image"));

      fetch(`https://drwessamhabib.com/public/api/product/${ID.slice(1)}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${adminToken}`,
        },
        body: updatedUserData,
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
  },
};
</script>
