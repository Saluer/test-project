import React, { useState } from "react";

export const NameField = ({ validate, isValid }) => {
	const placeholderValue = "Введите Ваше имя";
	const [value, setValue] = useState("");
	const handleChange = (event) => {
		setValue(event.target.value);
		validate(event.target.value, "name");
	};

	return (
		<div className="form__text-field">
			<label className="text-field__label">Имя</label>
			<input
				className=""
				placeholder={placeholderValue}
				onChange={handleChange}
				value={value}
			/>
			{!isValid && (
				<label className="text-field__error-message error-message">
					Введите корректное значение
				</label>
			)}
		</div>
	);
};

export const EmailField = ({ validate, isValid }) => {
	const placeholderValue = "Введите Ваш email";
	const [value, setValue] = useState("");
	const handleChange = (event) => {
		setValue(event.target.value);
		validate(event.target.value, "email");
	};
	return (
		<div className="form__text-field">
			<label className="text-field__label">Email</label>
			<input
				className=""
				placeholder={placeholderValue}
				onChange={handleChange}
				value={value}
			/>
			{!isValid && (
				<label className="text-field__error-message error-message">
					Введите корректное значение
				</label>
			)}
		</div>
	);
};

export const PhoneField = ({ validate, isValid }) => {
	const placeholderValue = "Введите номер телефона";
	const [value, setValue] = useState("");
	const handleChange = (event) => {
		setValue(event.target.value);
		validate(event.target.value, "phone");
	};
	return (
		<div className="form__text-field">
			<label className="text-field__label">Номер телефона</label>
			<input
				className=""
				placeholder={placeholderValue}
				onChange={handleChange}
				value={value}
			/>
			{!isValid && (
				<label className="text-field__error-message error-message">
					Введите корректное значение
				</label>
			)}
		</div>
	);
};

export const LanguageField = ({ validate, isValid }) => {
	const placeholderValue = "Язык";
	const [value, setValue] = useState("");
    const hideOrShow=()=>{
        if(document.getElementsByClassName("text-field__choices")[0].offsetParent === null)
            document.getElementsByClassName("text-field__choices")[0].style.display = 'block';
        else
            document.getElementsByClassName("text-field__choices")[0].style.display = 'none';
    }
    const makeChoise=(event)=>{
        setValue(event.target.value);
        hideOrShow();
		validate(event.target.value, "language");
    }
	return (
		<div className="form__text-field">
			<label className="text-field__label">Язык</label>
			<input
				placeholder={placeholderValue}
				value={value}
                onClick={hideOrShow}
                onBlur={hideOrShow}
                readOnly={true}
			/>
            <div className="text-field__choices" >
                <input className="choices__choice" value="Русский" readOnly={true} onClick={makeChoise}/>
                <input className="choices__choice" value="Английский" readOnly={true} onClick={makeChoise}/>
                <input className="choices__choice" value="Китайский" readOnly={true} onClick={makeChoise}/>
                <input className="choices__choice" value="Испанский" readOnly={true} onClick={makeChoise}/>
            </div>
			{!isValid && (
				<label className="text-field__error-message error-message">
					Введите корректное значение
				</label>
			)}
		</div>
	);
};

export const CheckField = ({ validate, isValid }) => {
	const [value, setValue] = useState(false);
	const handleChange = () => {
		setValue(!value);
		validate(!value, "check");
	};
	return (
		<div className="check-field">
			<input type="checkbox" checked={value} onChange={handleChange} />
			Принимаю <a href="#">условия</a> использования
            <br/>
			{!isValid && (
				<label className="check-field__error-message error-message">
					Для продолжения примите условия использования
				</label>
			)}
		</div>
	);
};
