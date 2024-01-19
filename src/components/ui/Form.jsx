import React, { useState, useEffect } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import styles from "../styles/form.module.css";
import TextareaAutosize from "react-textarea-autosize";

const projectTypes = ["Web App", "UX/UI", "Marketing", "Mobile App", "Other"];
const servicesNeeded = [
  "Brand",
  "Web Design",
  "Graphic Design",
  "Product Strategy",
  "Development",
];

const validationSchema = Yup.object({
  projectTypes: Yup.array().required("Required"),
  servicesNeeded: Yup.array().required("Required"),
  email: Yup.string().email("Invalid email").required("Required"),
  name: Yup.string().required("Required"),
  idea: Yup.string().required("Required"),
});

function Form() {
  const [selectedProjectTypes, setSelectedProjectTypes] = useState([]);
  const [selectedServicesNeeded, setSelectedServicesNeeded] = useState([]);
  const [text, setText] = useState("");
  const [rows, setRows] = useState(1);

  const formik = useFormik({
    initialValues: {
      projectTypes: [],
      servicesNeeded: [],
      email: "",
      name: "",
      idea: "",
    },
    validationSchema,
    onSubmit: (values) => {
      console.log(values);
    },
  });

  const handleProjectTypeClick = (type) => {
    formik.setFieldValue(
      "projectTypes",
      formik.values.projectTypes.includes(type)
        ? formik.values.projectTypes.filter((t) => t !== type)
        : [...formik.values.projectTypes, type]
    );
  };

  const handleServiceNeededClick = (service) => {
    formik.setFieldValue(
      "servicesNeeded",
      formik.values.servicesNeeded.includes(service)
        ? formik.values.servicesNeeded.filter((s) => s !== service)
        : [...formik.values.servicesNeeded, service]
    );
  };
  useEffect(() => {
    setRows(text.split("\n").length);
  }, [text]);

  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        <h4 className={styles.subtitles}>Your Project Types:</h4>
        <div className={styles.buttonContainer}>
          {projectTypes.map((type) => (
            <button
              className={`${styles.buttons} ${
                formik.values.projectTypes.includes(type) ? styles.selected : ""
              }`}
              type="button"
              onClick={() => handleProjectTypeClick(type)}
            >
              {type}
            </button>
          ))}
        </div>
        <h4 className={styles.subtitles}>Services You Need:</h4>
        <div className={styles.buttonContainer}>
          {servicesNeeded.map((service) => (
            <button
              className={`${styles.buttons} ${
                formik.values.servicesNeeded.includes(service)
                  ? styles.selected
                  : ""
              }`}
              type="button"
              onClick={() => handleServiceNeededClick(service)}
            >
              {service}
            </button>
          ))}
        </div>

        <div className={styles.inputContainer}>
          <input
            className={styles.input}
            placeholder="Your Name"
            type="text"
            name="name"
            onChange={formik.handleChange}
            value={formik.values.name}
          />
          <input
            className={styles.input}
            placeholder="Your Email"
            type="email"
            name="email"
            onChange={formik.handleChange}
            value={formik.values.email}
          />
          <TextareaAutosize
            className={styles.text}
            placeholder="Tell us about your idea"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
        </div>
        <button type="submit" className={styles.submit}>
          Submit
        </button>
      </form>
    </div>
  );
}

export default Form;
