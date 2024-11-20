<template>
    <form @submit.prevent="submitForm" class="contact-form">
      <div class="form-group">
        <label for="name">ชื่อ</label>
        <input
          type="text"
          id="name"
          v-model="formData.name"
          placeholder="กรอกชื่อของคุณ"
          required
        />
      </div>
  
      <div class="form-group">
        <label for="email">อีเมล</label>
        <input
          type="email"
          id="email"
          v-model="formData.email"
          placeholder="กรอกอีเมลของคุณ"
          required
        />
      </div>
  
      <div class="form-group">
        <label for="message">ข้อความ</label>
        <textarea
          id="message"
          v-model="formData.message"
          placeholder="กรอกข้อความของคุณ"
          rows="5"
          required
        ></textarea>
      </div>
  
      <button type="submit" class="submit-button">ส่งข้อความ</button>
    </form>
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
      };
    },
    methods: {
      submitForm() {
        console.log("Form Data:", this.formData);
        alert("ข้อความของคุณถูกส่งเรียบร้อยแล้ว!");
        this.resetForm();
      },
      resetForm() {
        this.formData = {
          name: "",
          email: "",
          message: "",
        };
      },
    },
  };
  </script>
  
  <style scoped>
  .contact-form {
    max-width: 600px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    gap: 15px;
  }
  
  .form-group {
    display: flex;
    flex-direction: column;
  }
  
  label {
    margin-bottom: 5px;
    font-weight: bold;
  }
  
  input,
  textarea {
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
    font-size: 16px;
  }
  
  .submit-button {
    padding: 10px 20px;
    background-color: #007bff;
    color: white;
    border: none;
    border-radius: 5px;
    font-size: 16px;
    cursor: pointer;
  }
  
  .submit-button:hover {
    background-color: #0056b3;
  }
  </style>
  