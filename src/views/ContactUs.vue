<template>
    <div class="contact-form">
      <h1>ติดต่อเรา</h1>
      <form @submit.prevent="handleSubmit">
        <div class="form-group">
          <label for="name">ชื่อของคุณ</label>
          <input
            type="text"
            id="name"
            v-model="formData.name"
            :class="{ 'input-error': errors.name }"
            placeholder="กรอกชื่อของคุณ"
          />
          <small v-if="errors.name" class="error-message">กรุณากรอกชื่อ</small>
        </div>
  
        <div class="form-group">
          <label for="email">อีเมล</label>
          <input
            type="email"
            id="email"
            v-model="formData.email"
            :class="{ 'input-error': errors.email }"
            placeholder="กรอกอีเมลของคุณ"
          />
          <small v-if="errors.email" class="error-message">กรุณากรอกอีเมลที่ถูกต้อง</small>
        </div>
  
        <div class="form-group">
          <label for="message">ข้อความ</label>
          <textarea
            id="message"
            v-model="formData.message"
            :class="{ 'input-error': errors.message }"
            placeholder="กรอกข้อความของคุณ"
          ></textarea>
          <small v-if="errors.message" class="error-message">กรุณากรอกข้อความ</small>
        </div>
  
        <button type="submit" class="submit-btn">ส่งข้อความ</button>
      </form>
    </div>
  </template>
  
  <script>
  export default {
    name: "ContactForm",
    data() {
      return {
        formData: {
          name: "",
          email: "",
          message: "",
        },
        errors: {
          name: false,
          email: false,
          message: false,
        },
      };
    },
    methods: {
      validateForm() {
        this.errors.name = !this.formData.name;
        this.errors.email = !this.formData.email || !/\S+@\S+\.\S+/.test(this.formData.email);
        this.errors.message = !this.formData.message;
  
        return !this.errors.name && !this.errors.email && !this.errors.message;
      },
      handleSubmit() {
        if (this.validateForm()) {
          // ส่งข้อมูลไปยัง API หรือแสดงข้อความยืนยัน
          console.log("Form submitted:", this.formData);
          alert("ข้อความของคุณถูกส่งเรียบร้อยแล้ว!");
          this.resetForm();
        }
      },
      resetForm() {
        this.formData = { name: "", email: "", message: "" };
      },
    },
  };
  </script>
  
  <style scoped>
  .contact-form {
    max-width: 600px;
    margin: 0 auto;
    padding: 20px;
    border: 1px solid #ddd;
    border-radius: 8px;
    background-color: #f9f9f9;
  }
  
  h1 {
    text-align: center;
    margin-bottom: 20px;
  }
  
  .form-group {
    margin-bottom: 20px;
  }
  
  label {
    display: block;
    margin-bottom: 5px;
    font-weight: bold;
  }
  
  input,
  textarea {
    width: 100%;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 4px;
    font-size: 14px;
  }
  
  .input-error {
    border-color: red;
  }
  
  .error-message {
    color: red;
    font-size: 12px;
  }
  
  .submit-btn {
    width: 100%;
    padding: 10px;
    background-color: #007bff;
    color: white;
    border: none;
    border-radius: 4px;
    font-size: 16px;
    cursor: pointer;
  }
  
  .submit-btn:hover {
    background-color: #0056b3;
  }
  </style>
  