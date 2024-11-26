// Gráfico de energia com Chart.js
const ctx = document.getElementById('energyChart').getContext('2d');
const energyChart = new Chart(ctx, {
    type: 'pie', 
    data: {
        labels: ['Energia Solar', 'Energia Eólica', 'Energia Hidrelétrica'],
        datasets: [{
            data: [30, 20, 50], // Percentual inicial
            backgroundColor: ['#ffcc00', '#00cc66', '#3399ff'],
        }]
    },
    options: {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            }
        }
    }
});

// Calculadora de energia
document.getElementById('energyForm').addEventListener('submit', function(event) {
    event.preventDefault();

    let solar = parseFloat(document.getElementById('solar').value);
    let eolica = parseFloat(document.getElementById('eolica').value);
    let hidreletrica = parseFloat(document.getElementById('hidreletrica').value);

    let total = solar + eolica + hidreletrica;

    if (total !== 100) {
        document.getElementById('resultado').innerHTML = "<p style='color: red;'>A soma das porcentagens deve ser igual a 100%.</p>";
    } else {
        document.getElementById('resultado').innerHTML = `
            <h3>Resultado</h3>
            <p><strong>Energia Solar:</strong> ${solar}%</p>
            <p><strong>Energia Eólica:</strong> ${eolica}%</p>
            <p><strong>Energia Hidrelétrica:</strong> ${hidreletrica}%</p>
            <p><strong>Total:</strong> 100%</p>
        `;
        
        // Atualiza o gráfico com os novos dados
        energyChart.data.datasets[0].data = [solar, eolica, hidreletrica];
        energyChart.update();
    }
});
