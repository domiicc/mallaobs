body {
    font-family: Arial, sans-serif;
    background-color: #ffe4e1;
    color: #333;
    padding: 20px;
}

h1 {
    text-align: center;
    color: #c71585;
}

.semestre {
    margin-bottom: 30px;
}

.semestre h2 {
    color: #d87093;
    border-bottom: 2px solid #d87093;
    padding-bottom: 5px;
}

.ramo {
    padding: 10px;
    margin: 5px 0;
    border-radius: 5px;
    position: relative;
    transition: background-color 0.3s;
    user-select: none;
}

.ramo.desbloqueado {
    background-color: #ff6f91;
    color: #fff;
    cursor: pointer;
}

.ramo.aprobado {
    background-color: #8a2be2;
    color: #fff;
    cursor: pointer;
}

.ramo.bloqueado {
    background-color: #d3d3d3;
    color: #999;
    cursor: not-allowed;
}

/* Tooltip styling */
.ramo::after {
    content: attr(data-tooltip);
    position: absolute;
    bottom: 120%;
    left: 50%;
    transform: translateX(-50%);
    background-color: #333;
    color: #fff;
    padding: 6px 10px;
    white-space: pre-line;
    border-radius: 5px;
    opacity: 0;
    pointer-events: none;
    font-size: 13px;
    line-height: 1.2;
    width: max-content;
    max-width: 300px;
    box-shadow: 0 2px 8px rgba(0,0,0,0.3);
    transition: opacity 0.3s ease;
    z-index: 1000;
}

.ramo:hover::after {
    opacity: 1;
}
