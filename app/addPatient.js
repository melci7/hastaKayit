"use client";
import { InputText } from "primereact/inputtext";
import Select from "react-select";
import React, { useState } from "react"

export default function AddPatient() {

    const options = [
        { value: "dog", label: "Köpek" },
        { value: "cat", label: "Kedi" },
    ];

    const options2 = [
        { value: "husky", label: "Husky" },
        { value: "barbet", label: "Barbet" },
    ];

    const options3 = [
        { value: "siyam", label: "Siyam" },
        { value: "tekir", label: "Tekir" },
    ];

    const options4 = [
        { value: "disi", label: "Dişi" },
        { value: "erkek", label: "Erkek" },
    ];

    const options5 = [
        { value: "kisirlastirilmis", label: "Kısırlaştırılmış" },
        { value: "kisirdegil", label: "Kısır Değil" },
    ];

    const date = new Date()
    const fullDate = `${date.getDate()}.${date.getMonth() + 1}.${date.getFullYear()} - ${date.getHours()}:${date.getMinutes()}`
    const [selectedOption, setSelectedOption] = useState("");

    function handleOptionChange(selected) {
        setSelectedOption(selected)
    };
    return (
        <div>
            <div className="div--newPatient">
                <div>
                    <h3 className="newPatient-header">Yeni Hasta Kayıt</h3>
                </div>
                <div className="row">
                    <div className="column">
                        <label>Kayıt Tarihi</label>
                        <InputText placeholder={fullDate} disabled />
                    </div>
                    <div className="column">
                        <label>Hasta Adı</label>
                        <InputText placeholder="Hasta Adı Giriniz" />
                    </div>
                </div>
                <div className="row">
                    <div className="column">
                        <label>Tür</label>
                        <Select options={options} onChange={handleOptionChange} placeholder="Seçiniz" />
                    </div>
                    <div className="column">
                        <label>Irk</label>
                        <Select options={selectedOption.value === "dog" ? options2 : options3} isDisabled={!selectedOption} placeholder="Tür Seçiniz" />
                    </div>
                </div>
                <div className="row">
                    <div className="column">
                        <label>Cinsiyet</label>
                        <Select options={options4} placeholder="Seçiniz" />
                    </div>
                    <div className="column">
                        <label>KG</label>
                        <InputText placeholder="KG Giriniz" />
                    </div>
                    <div className="column">
                        <label>Doğum Tarihi</label>
                        <InputText placeholder="23.01.2024" />
                    </div>
                </div>
                <div className="row">
                    <div className="column">
                        <label>Kısırlaştırma Durumu</label>
                        <Select options={options5} placeholder="Seçiniz" />
                    </div>
                    <div className="column">
                        <label>Çip No</label>
                        <InputText />
                    </div>
                </div>
                <button className="green-button">Hastayı Kaydet</button>
            </div>
        </div>
    );
}