const express = require('express');
const app = express();
const port = process.env.PORT || 8080;

app.get('/', (req, res) => {
    res.send('Jamestown Autonomous Hub - ODS 2 e 9 - Monitoramento Ativo');
});

app.get('/health', (req, res) => {
    res.status(200).send('OK');
});

app.get('/api/status', (req, res) => {
    res.json({
        sample_id: "JAM-GH01-SMP-0042",
        sector: "GH-01",
        timestamp: new Date().toISOString(),
        leaf_status: "fungo_patogeno",
        temperature_c: 25.0,
        humidity_pct: 88.0,
        risk_score: 0.87,
        recommended_action: "isolar setor GH-01 e inspecionar filtro de ar"
    });
});

app.listen(port, () => {
    console.log(`Console Jamestown rodando na porta ${port}`);
});