"use client";
import { InputTextarea } from "primereact/inputtextarea";
import { InputText } from "primereact/inputtext";

export default function SideBar() {
    
    const options = [
        { value: "dog", label: "Köpek" },
        { value: "cat", label: "Kedi" },
    ];

    return (
        <div>
            <div className="div--newPatient">
                <div>
                    <h3 className="newPatient-header">Yeni Hasta Sahibi</h3>
                </div>
                <div className="row">
                    <div className="column">
                        <label>Hasta Sahibi Adı</label>
                        <InputText />
                    </div>
                    <div className="column">
                        <label>Kimlik No</label>
                        <InputText />
                    </div>
                </div>
                <div className="row">
                    <div className="column">
                        <label>Telefon No</label>
                        <InputText />
                    </div>
                    <div className="column">
                        <label>Email Adresi</label>
                        <InputText />
                    </div>
                </div>
                <div className="row">
                    <div className="column">
                        <label>İrtibat No 2</label>
                        <InputText />
                    </div>
                    <div className="column">
                        <label>Email Adresi</label>
                        <InputText />
                    </div>
                </div>
                <div className="row">
                    <div className="column">
                        <label>Address</label>
                        <InputTextarea rows={6} />
                    </div>
                </div>
                <button>Hasta Sahibini Kaydet</button>
            </div>
        </div>

    );
}
