import React, { useState } from "react";
import { useForm, ValidationError } from "@formspree/react";
import * as Yup from "yup";
import styles from "../styles/form.module.css";
import TextareaAutosize from "react-textarea-autosize";
import rocket from "../../../public/rocket.svg";

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
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [text, setText] = useState("");
  const [state, handleSubmit] = useForm("mayrnzvj");
  const [submitStatus, setSubmitStatus] = useState("success");

  const validate = (values) => {
    let errors = {};
    try {
      validationSchema.validateSync(values, { abortEarly: false });
    } catch (error) {
      error.inner.forEach((validationError) => {
        errors[validationError.path] = validationError.message;
      });
    }
    return errors;
  };

  const handleProjectTypeClick = (type) => {
    if (selectedProjectTypes.includes(type)) {
      setSelectedProjectTypes(
        selectedProjectTypes.filter((item) => item !== type)
      );
    } else {
      setSelectedProjectTypes([...selectedProjectTypes, type]);
    }
  };

  const handleServiceNeededClick = (service) => {
    if (selectedServicesNeeded.includes(service)) {
      setSelectedServicesNeeded(
        selectedServicesNeeded.filter((item) => item !== service)
      );
    } else {
      setSelectedServicesNeeded([...selectedServicesNeeded, service]);
    }
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const errors = validate({
      projectTypes: selectedProjectTypes,
      servicesNeeded: selectedServicesNeeded,
      email: email,
      name: name,
      idea: text,
    });
    if (Object.keys(errors).length === 0) {
      fetch("https://formspree.io/f/mayrnzvj", {
        method: "POST",
        body: JSON.stringify({
          name: name,
          email: email,
          projectTypes: selectedProjectTypes,
          servicesNeeded: selectedServicesNeeded,
          idea: text,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((response) => {
          if (response.status === 200) {
            setSubmitStatus("success");
          } else {
            throw new Error("Error al enviar el correo electrónico");
          }
        })
        .catch((error) => {
          setSubmitStatus("error");
        });
    }
  };

  if (submitStatus === "success") {
    return (
      <div className={styles.subtitles}>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            width: "100%",
            gap: "1rem",
          }}
        >
          <h1 className={styles.thankYouTitle}>Thank You for Trusting Us!</h1>
        </div>

        <p className={styles.thankYouMessage}>
          We appreciate your project submission and can't wait to bring your
          ideas to life. Our team will get in touch with you shortly.
        </p>
      </div>
    );
  } else if (submitStatus === "error") {
    return (
      <h1>
        Error al enviar el correo electrónico, contáctate a iairkap@gmail.com
      </h1>
    );
  }
  return (
    <div>
      <form onSubmit={onSubmit}>
        <h4 className={styles.subtitles}>Your Project Types:</h4>
        <div className={styles.buttonContainer}>
          {projectTypes.map((type) => (
            <button
              className={`${styles.buttons} ${
                selectedProjectTypes.includes(type) ? styles.selected : ""
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
                selectedServicesNeeded.includes(service) ? styles.selected : ""
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
            onChange={(e) => setName(e.target.value)}
            value={name}
          />
          <input
            className={styles.input}
            placeholder="Your Email"
            type="email"
            name="email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
          <TextareaAutosize
            className={styles.text}
            placeholder="Tell us about your idea"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
        </div>
        <button
          type="submit"
          disabled={state.submitting}
          className={styles.submit}
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default Form;

/*  className={styles.submit} */
