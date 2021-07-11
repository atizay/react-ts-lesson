import React from "react";
import { useHistory } from "react-router";

export const AboutPage: React.FC = () => {
    const history = useHistory()
    return (
        <>
        <h1>Информация</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. In voluptas obcaecati architecto quod reiciendis cumque similique rem autem distinctio aliquid. Repudiandae illum aspernatur hic reprehenderit doloribus error pariatur nesciunt impedit.</p>
        <button className="btn" onClick={() => history.push('/')}>Назад</button>
        </>
    )
}