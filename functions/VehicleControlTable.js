const avatarColors = ['#1e90ff','#00c48c','#ff6b6b','#faad14','#9b59b6','#e67e22','#1abc9c','#e91e63'];
 
const vehicles = [
  { placa:'ABC-1D23', owner:'Lucas Mendes', contact:'(24) 98765-4321', model:'Civic', brand:'Honda', year:2021, type:'Carro', status:'Estacionado', date:'Hoje, 08:32' },
  { placa:'XYZ-5E78', owner:'Fernanda Lima', contact:'(24) 99234-5678', model:'Corolla', brand:'Toyota', year:2022, type:'Carro', status:'Disponível', date:'Ontem, 17:10' },
  { placa:'MNO-3F91', owner:'Carlos Souza', contact:'(24) 97654-3210', model:'Kwid', brand:'Renault', year:2020, type:'Carro', status:'Estacionado', date:'Hoje, 09:15' },
  { placa:'PQR-7G44', owner:'Ana Beatriz', contact:'(24) 98888-1122', model:'Creta', brand:'Hyundai', year:2023, type:'SUV', status:'Disponível', date:'10/06, 14:00' },
  { placa:'DEF-2H56', owner:'Roberto Alves', contact:'(24) 99001-3344', model:'CG 160', brand:'Honda', year:2019, type:'Moto', status:'Estacionado', date:'Hoje, 07:50' },
  { placa:'GHI-8I30', owner:'Juliana Costa', contact:'(24) 98444-7788', model:'Argo', brand:'Fiat', year:2022, type:'Carro', status:'Disponível', date:'09/06, 11:20' },
  { placa:'JKL-4J12', owner:'Marcos Paulo', contact:'(24) 97000-5566', model:'S10', brand:'Chevrolet', year:2020, type:'Caminhonete', status:'Disponível', date:'08/06, 16:45' },
  { placa:'STU-9K65', owner:'Patricia Ramos', contact:'(24) 98123-9900', model:'Virtus', brand:'Volkswagen', year:2021, type:'Carro', status:'Estacionado', date:'Hoje, 10:05' },
];
 
function initials(name) {
  return name.split(' ').slice(0,2).map(n=>n[0]).join('').toUpperCase();
}
 
function renderTable(data) {
  const tbody = document.getElementById('table-body');
  document.getElementById('count-label').textContent = `${data.length} veículos`;
  tbody.innerHTML = data.map((v, i) => `
    <tr>
      <td><span class="placa">${v.placa}</span></td>
      <td>
        <div class="owner-cell">
          <div class="avatar" style="background:${avatarColors[i % avatarColors.length]}">${initials(v.owner)}</div>
          <div>
            <div class="owner-name">${v.owner}</div>
            <div class="owner-contact">${v.contact}</div>
          </div>
        </div>
      </td>
      <td>
        <div class="model-text">${v.brand} ${v.model}</div>
        <div class="year-text">${v.year}</div>
      </td>
      <td><span class="badge badge-blue">${v.type}</span></td>
      <td>
        <span class="badge ${v.status === 'Estacionado' ? 'badge-green' : 'badge-red'}">
          <span class="badge-dot"></span>${v.status}
        </span>
      </td>
      <td style="color:var(--text-light);font-size:12px">${v.date}</td>
      <td>
        <div class="actions">
          <button class="action-btn" title="Ver detalhes">👁</button>
          <button class="action-btn" title="Editar">✏️</button>
          <button class="action-btn del" title="Excluir">🗑</button>
        </div>
      </td>
    </tr>
  `).join('');
}
 
function filterTable(q) {
  const filtered = vehicles.filter(v =>
    v.placa.toLowerCase().includes(q.toLowerCase()) ||
    v.owner.toLowerCase().includes(q.toLowerCase()) ||
    v.model.toLowerCase().includes(q.toLowerCase())
  );
  renderTable(filtered);
}
 
function filterStatus(s) {
  const filtered = s ? vehicles.filter(v => v.status === s) : vehicles;
  renderTable(filtered);
}
 
function openModal() {
  document.getElementById('modal').classList.add('open');
}
 
function closeModal() {
  document.getElementById('modal').classList.remove('open');
}
 
document.getElementById('modal').addEventListener('click', function(e) {
  if (e.target === this) closeModal();
});
 
renderTable(vehicles);
