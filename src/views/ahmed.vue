<script>
export default {
  methods: {
    PRODUCTNEW() {
      // 1. استخراج بيانات النموذج
      const name = this.PRODUCTname;
      const price = this.PRODUCTprice;
      const priceBefore = this.PRODUCTpriceB;
      const quantity = this.PRODUCTquantity;
      const category_id = 6;
      const description = this.PRODUCTdesc;
      const live = this.PRODUCTlive;
      const image = this.PRODUCTimage;
      const additional_images = this.PRODUCTimageS;

      // 2. بناء جسم الطلب
      const data = {
        name,
        price,
        priceBefore,
        quantity,
        category_id,
        description,
        live,
        image,
        additional_images,
      };
      this.token = localStorage.getItem("token");
      const token = this.token;
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
    PRODUCTNEW() {
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
    },
  },
};
</script>
