import React from "react";
import './Kevin.css'

const style = {
    styleMyProfile: 'myProfile'
}

interface kevinProps {
    /**
     * Tamanho da minha imagem
     */
    size: number;
    /**
     * Adiciona borda arredondada
     */
    circle?: string,
    /**
     * Caminho do QRCode
     */
    qrCode: string,
    /**
     * Tamanho do QRCode
     */
    sizeQrCode: number,
}

export function Kevin({ size, circle, qrCode, sizeQrCode }: kevinProps) {
    return (
        <>
            <h2 id="MyName">Kevin Sousa</h2>
            <div className={style.styleMyProfile}>
                <div>
                    <img
                        src="https://github.com/kevinDsousa.png"
                        alt="Imagem"
                        width={size}
                        height={size}
                        style={circle ? { border: '5px solid #262626', borderRadius: '50%' } : {}}
                    />
                    <ul>
                        <li>Aluno Digital College</li>
                        <li>Analista de Redes FTTH</li>
                        <li>Transição de carreira</li>
                    </ul>
                </div>
                <div>
                    <img src={qrCode} alt="QrCode" width={sizeQrCode}
                        height={sizeQrCode} />
                    <p>Escaneie o QRCode para ganhar um amigo</p>
                </div>
            </div>
        </>
    );
};