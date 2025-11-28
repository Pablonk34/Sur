fetch('datos.json')
  .then(response => response.json())
  .then(data => {
    const contenedor = document.getElementById('contenido');

    const formatear = (valor) => {
      return Number(valor).toLocaleString("es-ES", {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
      });
    };

    // 🟢 1. Riesgo País
     contenedor.innerHTML += `<h2>Commodities</h2>`;
    contenedor.innerHTML += `<h3>Riesgo País</h3>`;
    contenedor.innerHTML += `<p><strong>Ecuador:</strong> ${data.RiesgoPaisEcuador} (Fecha: ${data.FechaRiesgoPaisEcuador})</p>`;
    contenedor.innerHTML += `<p><strong>Perú:</strong> ${data.RiesgoPaisPeru} (Fecha: ${data.FechaRiesgoPaisPeru})</p>`;

    // 🌽 2. Commodities Agrícolas
    contenedor.innerHTML += `<h3>Commodities Agrícolas</h3>`;
    contenedor.innerHTML += `<p><strong>Precio Banano:</strong> ${data.PrecioBanano} por Caja (SPOT)</p>`;
    contenedor.innerHTML += `<p><strong>Cacao:</strong> ${formatear(data.Cacao)} USD por Tonelada</p>`;
    contenedor.innerHTML += `<p><strong>Maíz:</strong> ${formatear(data.Maiz)} USD por Bushel</p>`;
    contenedor.innerHTML += `<p><strong>Trigo:</strong> ${formatear(data.Trigo)} USD por Bushel</p>`;

    // 🪙 3. Metales y Energía
    contenedor.innerHTML += `<h3>Metales y Energía</h3>`;
    contenedor.innerHTML += `<p><strong>Oro:</strong> ${formatear(data.Oro)} USD por Onza</p>`;
    contenedor.innerHTML += `<p><strong>Plata:</strong> ${formatear(data.Plata)} USD por Onza</p>`;
    contenedor.innerHTML += `<p><strong>WTI:</strong> ${formatear(data.WTI)} USD por Barril</p>`;
    contenedor.innerHTML += `<p><strong>Brent:</strong> ${formatear(data.Brent)} USD por Barril</p>`;

    // 💵 4. Dólar Región
    const monedas = {
      Argentina: "Peso argentino",
      Colombia: "Peso colombiano",
      Venezuela: "Bolívares",
      Brasil: "Real brasileño",
      Peru: "Nuevo sol peruano",
      Chile: "Peso chileno",
      Uruguay: "Peso uruguayo",
      Paraguay: "Guaraní paraguayo",
      Bolivia: "Bolivianos",
      Mexico: "Peso mexicano",
      Eurozona: "Euros"
    };

    contenedor.innerHTML += `<h3>Dólar Región</h3>`;

    for (const pais in monedas) {
      if (data[pais] !== undefined) {
        const valor = formatear(data[pais]);
        contenedor.innerHTML += `<p><strong>${pais}:</strong> ${valor} - ${monedas[pais]}</p>`;
      }
    }

    // 🕓 5. Fecha de actualización
    const fecha = document.getElementById('fechaActualizacion');
    fecha.innerHTML = `<strong>Fecha de actualización:</strong> ${data.FechaRegistro}`;
  })
  .catch(error => {
    document.getElementById('contenido').textContent = "Error al cargar el JSON.";
    console.error("❌ Error al cargar datos.json:", error);
  });

