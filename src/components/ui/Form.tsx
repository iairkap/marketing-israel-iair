import React, { useState } from "react";
import { useForm, ValidationError } from "@formspree/react";
import * as Yup from "yup";
import styles from "../styles/form.module.css";
import TextareaAutosize from "react-textarea-autosize";
import he from "../../../public/locales/he/translation.json";
import en from "../../../public/locales/en/translation.json";
interface FormValues {
  name: string;
  idea: string;
  projectTypes: string[];
  servicesNeeded: string[];
  email: string;
}

interface FormProps {
  language?: string;
}



const projectTypes = ["Web App", "UX/UI", "Marketing", "Mobile App", "Other"];
const servicesNeeded = [
  "Development",
  "VR/AR",
  "AI Artificial Intelligence",
  "Product Strategy",
  "Content",
  "Marketing Strategy",
  "SEO",
  "Email-Marketing",
  "Brand",
  "Web Design",
  "Graphic Design",
];

const projectTypesHebrew = ["אפליקציה ווב", "UX/UI", "שיווק", "אפליקציה ניידת", "אחר"];
const servicesNeededHebrew = [
  "פיתוח",
  "VR/AR",
  "בינה מלאכותית (AI)",
  "אסטרטגית מוצר",
  "תוכן",
  "אסטרטגיה שיווקית",
  "SEO",
  "דואר אלקטרוני-שיווק",
  "מותג",
  "עיצוב אתרים",
  "עיצוב גרפי",
];

const validationSchema = Yup.object({
  projectTypes: Yup.array().required("Required"),
  servicesNeeded: Yup.array().required("Required"),
  email: Yup.string().email("Invalid email").required("Required"),
  name: Yup.string().required("Required"),
  idea: Yup.string().required("Required"),
});

function Form({ language = "defaultLanguage" }: FormProps) {
  const [selectedProjectTypes, setSelectedProjectTypes] = useState<string[]>([]);
  const [selectedServicesNeeded, setSelectedServicesNeeded] = useState<string[]>([]);
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [text, setText] = useState<string>("");
  const [state, handleSubmit] = useForm("mayrnzvj");
  const [submitStatus, setSubmitStatus] = useState<string>("");

  console.log(language)

  const t = language === "he" ? he : en;

  const validate = (values: FormValues) => {
    let errors: { [key: string]: string } = {};
    try {
      validationSchema.validateSync(values, { abortEarly: false });
    } catch (error) {
      (error as any).inner.forEach((validationError: any) => {
        errors[validationError.path] = validationError.message;
      });
    }
    return errors;
  };

  const handleProjectTypeClick = (type: string) => {
    if (selectedProjectTypes.includes(type)) {
      setSelectedProjectTypes(
        selectedProjectTypes.filter((item) => item !== type)
      );
    } else {
      setSelectedProjectTypes([...selectedProjectTypes, type]);
    }
  };

  const handleServiceNeededClick = (service: string) => {
    if (selectedServicesNeeded.includes(service)) {
      setSelectedServicesNeeded(
        selectedServicesNeeded.filter((item) => item !== service)
      );
    } else {
      setSelectedServicesNeeded([...selectedServicesNeeded, service]);
    }
  };

  const onSubmit = (e: React.FormEvent) => {
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
      <form onSubmit={onSubmit} className={styles.generalContainer}>
        <h4 className={styles.subtitles}>{t.contact.YourProjectTypes}</h4>
        <div className={styles.buttonContainer}>

          {(language === "he" ? projectTypesHebrew : projectTypes).map((type) => (
            <button
              className={`${styles.buttons} ${selectedProjectTypes.includes(type) ? styles.selected : ""
                }`}
              type="button"
              onClick={() => handleProjectTypeClick(type)}
            >
              {type}
            </button>
          ))}
        </div>
        <h4 className={styles.subtitles}>{t.contact.servicesYouNeed}</h4>
        <div className={styles.buttonContainer}>
          {(language === "he" ? servicesNeededHebrew : servicesNeeded).map((service) => (
            <button
              className={`${styles.buttons} ${selectedServicesNeeded.includes(service) ? styles.selected : ""
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
            placeholder={t.contact.YourName}
            type="text"
            name="name"
            onChange={(e) => setName(e.target.value)}
            value={name}
          />
          <input
            className={styles.input}
            placeholder={t.contact.YourEmail}
            type="email"
            name="email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
          <TextareaAutosize
            className={styles.text}
            placeholder={t.contact.tellUsAbout}
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
        </div>
        <button
          type="submit"
          className={styles.submit}
        >
          {t.contact.submit}
        </button>
      </form>
    </div>
  );
}

export default Form;

/*  className={styles.submit} */
