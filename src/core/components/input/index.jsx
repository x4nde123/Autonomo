import { useEffect, useState } from 'react'
import './index.scss'
import InputMask from 'react-input-mask'

const Textfield = ({ name, label, placeholder, type, value, onChange, items = [], mask }) => {
    const [onFocused, setOnFocused] = useState(false)

    useEffect(() => {
        if (value?.length > 0) {
            setOnFocused(true)
        }
    }, [value, onFocused])

    // eslint-disable-next-line default-case
    switch (type) {
        case 'select':
            return (
                <div className={`input-container ${onFocused ? 'focused' : ''}`}>
                    <label htmlFor={name} className={onFocused ? 'label-focused' : 'label-enabled'}>
                        {label}
                    </label>
                    <select
                        className="content"
                        name={name}
                        id={name}
                        value={value}
                        onChange={onChange}
                        onFocus={() => setOnFocused(true)}
                        onBlur={() => setOnFocused(false)}
                    >
                        <option value="" disabled>Selecione...</option>
                        {items?.map(item => (
                            <option key={item.id} value={item.id}>{item.name}</option>
                        ))}
                    </select>
                </div>
            );

        case 'file':
            return (
                <div className="input-container">
                    <span className="file-button">{label || 'Select File'}</span>
                    <div onClick={() => document.getElementById(name).click()} className="content content-file">
                        <input
                            id={name}
                            type="file"
                            onChange={onChange}
                            className="file-input"
                        />
                        {typeof value == 'object' ? (
                            <img src={URL.createObjectURL(value)}/>
                        ) : (
                            <img src='/icons/upload.svg'/>
                        )}
                    </div>
                </div>
            );

        default:
            return (
                <div className="input-container">
                    <label htmlFor={name} className={onFocused ? 'label-focused' : 'label-enabled'}>{label}</label>
                    {mask ? (
                        <InputMask
                            mask={mask}
                            className="content"
                            name={name}
                            id={name}
                            onFocus={() => setOnFocused(true)}
                            onBlur={() => setOnFocused(false)}
                            onChange={onChange}
                            value={value}
                            placeholder={placeholder}
                        />
                    ) : (
                        <input
                            className="content"
                            name={name}
                            id={name}
                            type="text"
                            onFocus={() => setOnFocused(true)}
                            onBlur={() => setOnFocused(false)}
                            onChange={onChange}
                            value={value}
                            placeholder={placeholder}
                        />
                    )}
                </div>
            );
    }
}

export default Textfield