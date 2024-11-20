<template>
    <div class="contact-page">
      <h1>ติดต่อเรา</h1>
      <p>กรุณากรอกแบบฟอร์มด้านล่างเพื่อติดต่อเรา</p>
  
      <ContactForm />
  
      <div class="contact-info">
        <h2>ข้อมูลติดต่อ</h2>
        <p><strong>ที่อยู่:</strong> 90 หมู่ 7 ตำบลเมืองน้อย อำเภอธวัชบุรี จังหวัดร้อยเอ็ด</p>
        <p><strong>เบอร์โทร:</strong> 043-123-4567</p>
        <p><strong>อีเมล:</strong> contact@example.com</p>
      </div>
    </div>
  </template>
  
  <script>
  import ContactForm from "@/components/ContactForm.vue";
  
  export default {
    name: "ContactPage",
    components: {
      ContactForm,
    },
  };
  </script>
  
  <style scoped>
  .contact-page {
    max-width: 800px;
    margin: 0 auto;
    padding: 20px;
  }
  
  h1 {
    text-align: center;
    margin-bottom: 10px;
  }
  
  .contact-info {
    margin-top: 30px;
    background-color: #f9f9f9;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }
  
  .contact-info h2 {
    margin-bottom: 10px;
  }
  
  .contact-info p {
    margin: 5px 0;
  }
  </style>
  