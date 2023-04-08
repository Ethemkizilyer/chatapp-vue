<script setup>
import { useList } from "@/composables/useList";
import getUser from "@/composables/getUser";
import axios from "axios";

import { Form, Field, ErrorMessage } from "vee-validate";
import { ref } from "vue";

import * as yup from "yup";

const { getUse } = useList();
const { user } = getUser();

const formRef = ref();
const name = ref(user._rawValue.displayName);
const email = ref(user._rawValue.email);

// Custom error messages
yup.setLocale({
  mixed: {
    required: "This field is required.",
  },
  string: {
    url: "'Thumbnail' must be a valid img URL.",
  },
  number: {
    positive: "'Age' must be a positive number.",
  },
});

let FormValidationSchema = yup.object({
  age: yup.number().required().positive().integer(),
  title: yup.string().required(),
  company: yup.string(),
  linkedin: yup.string(),
  github: yup.string(),
  thumbnail: yup.string().required().url(),
});

async function onSubmit(values) {
  await axios.post("/user.json", {
    ...values,
    name: name.value,
    email: email.value,
  });

  getUse();

  formRef.value.resetForm();

  console.log("Data has been added successfully...");
}

async function formClean() {
  formRef.value.resetForm();
}
</script>

<template>
  <div class="form-section">
    <h3 class="text-3xl font-semibold">
      Vue JS User Cards <span class="text-xl text-indigo-400">({{ asd }})</span>
    </h3>

    <div class="form-container">
      <Form
        @submit="onSubmit"
        class="form-submit"
        ref="formRef"
        :validation-schema="FormValidationSchema"
      >
        <div class="form-section-row">
          <div class="row-top">
            <label>Age:<span class="text-red-600">*</span></label>
            <ErrorMessage name="age" class="error-message" />
          </div>

          <Field name="age" placeholder="Age" class="form-input" />
        </div>

        <div class="form-section-row">
          <div class="row-top">
            <label>Title:<span class="text-red-600">*</span></label>
            <ErrorMessage name="title" class="error-message" />
          </div>

          <Field name="title" placeholder="Title" class="form-input" />
        </div>

        <div class="form-section-row">
          <div class="row-top">
            <label>Company:</label>
            <ErrorMessage name="company" class="error-message" />
          </div>

          <Field name="company" placeholder="Company" class="form-input" />
        </div>

        <div class="form-section-row">
          <div class="row-top">
            <label>LinkedIn Account:</label>
            <ErrorMessage name="linkedin" class="error-message" />
          </div>

          <Field
            name="linkedin"
            placeholder="LinkedIn Account"
            class="form-input"
          />
        </div>

        <div class="form-section-row">
          <div class="row-top">
            <label>GitHub Account:</label>
            <ErrorMessage name="github" class="error-message" />
          </div>

          <Field
            name="github"
            placeholder="GitHub Account"
            class="form-input"
          />
        </div>

        <div class="form-section-row">
          <div class="row-top">
            <label>Thumbnail:<span class="text-red-600">*</span></label>
            <ErrorMessage name="thumbnail" class="error-message" />
          </div>

          <Field name="thumbnail" placeholder="Thumbnail" class="form-input" />
        </div>

        <div class="form-buttons">
          <button class="btn submit-btn">Submit</button>
          <button class="btn clean-btn" @click="formClean()">Clean</button>
        </div>
      </Form>
    </div>
  </div>
</template>

<style scoped></style>
