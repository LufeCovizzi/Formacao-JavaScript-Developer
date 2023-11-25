const precoEtanol = 5.79;
const kmPorLitro = 10;
const distanciaEmKm = 100;
const precoGasolina = 6.66;
const tipoCombustivel = "Etanol";

if (tipoCombustivel === "Etanol") {
  const litrosConsumidos = distanciaEmKm / kmPorLitro;
  const valorGastoEtanol = litrosConsumidos * precoEtanol;
  console.log(valorGastoEtanol.toFixed(2));
} else {
  const litrosConsumidos = distanciaEmKm / kmPorLitro;
  const valorGastoGasolina = litrosConsumidos * precoGasolina;
  console.log(valorGastoGasolina.toFixed(2));
}
