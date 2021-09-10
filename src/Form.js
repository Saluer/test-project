import React, { useState, useEffect } from "react";
import {
	NameField,
	EmailField,
	PhoneField,
	LanguageField,
	CheckField,
} from "./inputs";

const Form = () => {
	const [isFormValid, setIsFormValid] = useState(false);
	const [validInputs, setValidInputs] = useState({
		name: false,
		email: false,
		phone: false,
		language: false,
		check: false,
	});
	const validate = (value, type) => {
		switch (type) {
			case "name":
				if (/[A-Za-zА-Яа-яЁё]+(\s+[A-Za-zА-Яа-яЁё]+)?/.test(value))
					setValidInputs({ ...validInputs, [type]: true });
				else setValidInputs({ ...validInputs, [type]: false });
				break;
			case "email":
				if (/\S+@\S+\.\S+/.test(value))
					setValidInputs({ ...validInputs, [type]: true });
				else setValidInputs({ ...validInputs, [type]: false });
				break;
			case "phone":
				if (/^((\+7|7|8)+([0-9]){10})$/.test(value))
					setValidInputs({ ...validInputs, [type]: true });
				else setValidInputs({ ...validInputs, [type]: false });
				break;
			case "language":
				if (["Русский", "Английский", "Китайский", "Испанский"].includes(value))
					setValidInputs({ ...validInputs, [type]: true });
				else setValidInputs({ ...validInputs, [type]: false });
				break;
			case "check":
				if (value === true) setValidInputs({ ...validInputs, [type]: true });
				else setValidInputs({ ...validInputs, [type]: false });
				break;
			default:
				console.log("Возникла ошибка при валидации");
		}
	};

	useEffect(() => {
		if (Object.values(validInputs).every((x) => x === true))
			setIsFormValid(true);
		else setIsFormValid(false);
	}, [validInputs]);

	return (
		<div className="App__form">
			<h2>Регистрация</h2>
			<span>
				Уже есть аккаунт? <a href="#">Войти</a>
			</span>
			<NameField validate={validate} isValid={validInputs.name}/>
			<EmailField validate={validate} isValid={validInputs.email}/>
			<PhoneField validate={validate} isValid={validInputs.phone}/>
			<LanguageField validate={validate} isValid={validInputs.language}/>
			<CheckField validate={validate} isValid={validInputs.check}/>
			<button className="button" disabled={!isFormValid}>
				Зарегистрироваться
			</button>
		</div>
	);
};


export default Form;
